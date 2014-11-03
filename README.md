# bowerp

Promised based #Bower API.

**PROTIP:** EXTREME WORK IN PROGRESS! You probably don't want this &mdash; unless you only care about `bower.commands.info()`.

## How Do I Even?

```js
'use strict';

var bower = require('bowerp');

bower.commands.info('angular').then(function (res) {
  console.log(res.latest);
}, function (err) {
  console.error(err);
});
```
