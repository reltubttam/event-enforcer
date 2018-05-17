function eventEnforcer(period, minDiff, func){
  var fixedPeriod = period * 0.9;
  var randomPeriod = period * 0.2;
  var expectedNow = Date.now();
  compareDelay();
  
  function compareDelay () {
    var diff = Date.now() - expectedNow;

    if (diff > minDiff){
      func(diff);
    }
    
    var expectedDiff = fixedPeriod + Math.random() * randomPeriod;
    expectedNow = Date.now() + expectedDiff;
    setTimeout(compareDelay, expectedDiff);
  }
}

module.exports = eventEnforcer;
