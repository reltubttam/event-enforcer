# event enforcer

Event Enforcer keeps an eye on the event loop and will execute a provided function if it is blocked for an unacceptable length of time.  This is achieved by periodically setting timers and checking the difference between when they should have run and when they actually did.

The timer interval provided is an average and will vary by +/- 10% randomly recalculated each time.  This is to ensure the checks don't fall into sync with any other periodic behavior in the systems they run in.

This has many uses, the supplied function could log an error or activate mechanisms to improve efficiency.
## Installation

```
$ npm install eventEnforcer
```

## Usage
```javascript
const eventEnforcer = require('event-enforcer');
eventEnforcer(periodMS, minDiffMS, (diffMS) => {
  /** */
});
```
**periodMS** is the desired average time between checks in milliseconds, 
**minDiffMS** is the minimum acceptable time the event loop could be blocked for in milliseconds,
the supplied function will be executed each time **minDiffMS** is exceeded and will accept as an argument the difference between the actual and expected time of execution

## License

MIT
