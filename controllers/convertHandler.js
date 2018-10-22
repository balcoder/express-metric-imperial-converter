function ConvertHandler() {
  // ([1-9][0-9]*\.*)(gal|l|mi|km)$
  // (\d+[\/\d. ]|\d) //match decimal or fraction

  this.getNum = function(input) {
    // replace all non digits and . with nothing and return
    //var result = input.replace(/[^\d.-]/g, '');
    var result = input.match(/(\d+[\/\d. ]|\d)g, '');
    return result;
  };

  this.getUnit = function(input) {
    var re = /(gal|l|mi|km|lbs|kg|GAL|L|MI|KM|LBS|KG)$/g;
    var result = input.match(re);
    return result;
  };

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

    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;

    return result;
  };

}

module.exports = ConvertHandler;
