function ConvertHandler() {
  // ([1-9][0-9]*\.*)(gal|l|mi|km)$
  // (\d+[\/\d. ]|\d) //match decimal or fraction

  // get the number part of the input
  this.getNum = function(input) {
    //var result = input.replace(/[^\d.-]/g, '');
    var result = input.match(/(\d+[\/\d. ]|\d)g, '');
    return result;
  };
  // get the unit of measurement
  this.getUnit = function(input) {
    var re = /(gal|l|mi|km|lbs|kg|GAL|L|MI|KM|LBS|KG)$/g;
    var result = input.match(re);
    return result;
  };
  // return the converted unit
  this.getReturnUnit = function(initUnit) {
    var input = ['gal','l','mi','km','lbs','kg'];
    var expect = ['l','gal','km','mi','kg','lbs'];
    var result = expect[input.indexOf(initUnit)]
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;

    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch (initUnit) {
      case 'gal':
      result = 3.78541 * initNum;
      break;
      case 'l':
      result = initNum / 3.7854;
      break;
      case 'mi':
      result = 1.60934 * initNum;
      break;
      case 'km':
      result = initNum / 1.60934;
      break;
      case 'lbs':
      result =  0.453592 *initNum;
      break;
      case 'km':
      result = initNum / 0.453592;
      break;
    }

    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;

    return result;
  };

}

module.exports = ConvertHandler;
