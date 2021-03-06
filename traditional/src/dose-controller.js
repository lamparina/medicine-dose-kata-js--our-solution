function DoseController(healthMonitor, medicinePump, alertService) {
  // ! wartość ciśnienia / funkcja do podania leku / powiadomienie lekarza
  return {
    checkHealthAndApplyMedicine: checkHealthAndApplyMedicine,
    // checkIsGivenDosedMedicine: checkIsGivenDosedMedicine,
  };

  function checkHealthAndApplyMedicine() {
    try {
      const pressure = healthMonitor.getSystolicBloodPressure();
      if (pressure < 60) {
        medicinePump.dose({
          name: "RaisePressure",
          count: 2,
        });
      } else if (pressure > 150) {
        medicinePump.dose({
          name: "LowerPressure",
          count: 1,
        });
      } else {
        medicinePump.dose({
          name: "RaisePressure",
          count: 1,
        });
      }
    } catch (e) {
      // checkIsGivenDosedMedicine();
      checkHealthAndApplyMedicine();
    }
  }
}
module.exports = DoseController;
