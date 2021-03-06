Shibecore
=======

[![Build Status](https://travis-ci.org/bitpay/bitcore.svg?branch=master)](https://travis-ci.org/bitpay/bitcore)
[![Coverage Status](https://img.shields.io/coveralls/bitpay/bitcore.svg)](https://coveralls.io/r/bitpay/bitcore)

A pure, powerful core for your Shibecoin project.

Shibecore is a complete, native interface to the Shibecoin network, and provides the core functionality needed to develop
apps for Shibecoin.

#Principles

Shibecoin is a powerful new peer-to-peer platform for the next generation of financial and social technology.
The decentralized nature of the Shibecoin network allows for highly resilient Shibecoin infrastructure, and the developer
community needs reliable, open-source tools to implement Shibecoin apps and services.

**Shibecore unchains developers from fallible, centralized APIs, and provides the tools to interact with the real Shibecoin network.**

#Get Started

Shibecore runs on [node](http://nodejs.org/), and can be installed via [npm](https://npmjs.org/):

```
npm install shibecore
```

It is a collection of objects useful to Shibecoin applications; class-like idioms are enabled via[Soop](https://github.com/bitpay/soop).
In most cases, a developer will require the object's class directly. For instance:

```javascript
var shibecore = require('shibecore');
var Address = shibecore.Address;
var Transaction = shibecore.Transaction;
var PeerManager = shibecore.PeerManager;
```

#Examples

Examples are provided [here](examples.md)
Build the examples by installing and running gulp:

```
npm install -g gulp
gulp
```

Javascript files available at [/examples](/examples) folder.


#Security

Please use at your own risk.

Shibecore is still under heavy development and not quite ready for "drop-in" production use. If you find a security issue,
please email shibe@shibecoin.io

#Contributing

Shibecore needs some developer love. Please send pull requests for bug fixes, code optimization, and ideas for improvement.

#Browser support

## Building the browser bundle

To build Shibecore full bundle for the browser (this is automatically executed after you run `npm install`):

```
node browser/build.js -a
```

This will generate a `browser/bundle.js` file which you can include in your HTML to use Shibecore in the browser.

##Example browser usage

From example/simple.html

```html
<!DOCTYPE html>
<html>
  <body>
    <script src="../browser/bundle.js"></script>
    <script>
      var shibecore = require('shibecore');
      var Address = shibecore.Address;
      var a = new Address('sgrHPw4aEPos8YJDNfefsUSjPYWc5fzpLE');
      console.log('sgrHPw4aEPos8YJDNfefsUSjPYWc5fzpLE is valid? '+a.isValid());
    </script>
  </body>
</html>
```

You can check a more complex usage example at examples/example.html.

## Generating a customized browser bundle

To build the main Shibecore bundle, run:

```
node browser/build.js -m
```

To build all features into the Shibecore bundle (which will lead to a large file size), run:

```
node browser/build.js -a
```

To generate a customized Shibecore bundle, you can specify which submodules you want to include in it with the -s option:

```
node browser/build.js -s Transaction,Address
```

This will generate a `browser/bundle.js` containing only the Transaction and Address class, with all their dependencies.
Use this option if you are not using the whole Shibecore library, to optimize the bundle size, script loading time, and general resource usage.

## Tests

Run tests in node:

```
mocha
```

Or generate tests in the browser:

```
grunt shell
```

And then open test/index.html in your browser.

To run the code coverage report:

```
npm run-script coverage
```

And then open coverage/lcov-report/index.html in your browser.

#License

**Bitcore Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).**

Copyright 2013-2014 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/bitpay/bitcore/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
