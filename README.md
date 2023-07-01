<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Skewness

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Binomial][binomial-distribution] distribution [skewness][skewness].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [skewness][skewness] for a [binomial][binomial-distribution] random variable is

<!-- <equation class="equation" label="eq:binomial_skewness" align="center" raw="\operatorname{skew}\left( X \right) = \frac {1-2p}{\sqrt{np(1-p)}}" alt="Skewness for a binomial distribution."> -->

```math
\operatorname{skew}\left( X \right) = \frac {1-2p}{\sqrt{np(1-p)}}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{skew}\left( X \right) = \frac {1-2p}{\sqrt{np(1-p)}}" data-equation="eq:binomial_skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/binomial/skewness/docs/img/equation_binomial_skewness.svg" alt="Skewness for a binomial distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `n` is the number of trials and `p` is the success probability.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
skewness = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-binomial-skewness@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var skewness = require( 'path/to/vendor/umd/stats-base-dists-binomial-skewness/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-binomial-skewness@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.skewness;
})();
</script>
```

#### skewness( n, p )

Returns the [skewness][skewness] of a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```javascript
var v = skewness( 20, 0.1 );
// returns ~0.596

v = skewness( 50, 0.5 );
// returns 0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = skewness( NaN, 0.5 );
// returns NaN

v = skewness( 20, NaN );
// returns NaN
```

If provided a number of trials `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var v = skewness( 1.5, 0.5 );
// returns NaN

v = skewness( -2.0, 0.5 );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var v = skewness( 20, -1.0 );
// returns NaN

v = skewness( 20, 1.5 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-binomial-skewness@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var v;
var i;
var n;
var p;

for ( i = 0; i < 10; i++ ) {
    n = round( randu() * 100.0 );
    p = randu();
    v = skewness( n, p );
    console.log( 'n: %d, p: %d, skew(X;n,p): %d', n, p.toFixed( 4 ), v.toFixed( 4 ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-binomial-skewness.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-binomial-skewness

[test-image]: https://github.com/stdlib-js/stats-base-dists-binomial-skewness/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-binomial-skewness/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-binomial-skewness/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-binomial-skewness?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-binomial-skewness.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-binomial-skewness/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-binomial-skewness/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-binomial-skewness/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-binomial-skewness/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-binomial-skewness/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-binomial-skewness/main/LICENSE

[binomial-distribution]: https://en.wikipedia.org/wiki/Binomial_distribution

[skewness]: https://en.wikipedia.org/wiki/Skewness

</section>

<!-- /.links -->
