const eventEnforcer = require('./index.js');
const assert = require('assert');

describe('eventEnforcer', () => {
  it('works', async () => {
    
    // set hasFired to true if event loop blocked for 100+ ms, then block it for 1000ms
    let hasFired = false;
    eventEnforcer(10, 100, () => {
      hasFired = true;
    });
    
    const nowStart = Date.now();
    while (Date.now() - nowStart < 1000){}
    await new Promise(resolve => setTimeout(resolve, 0));

    assert.equal(hasFired, true);
    
  });
});