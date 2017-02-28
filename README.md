# omdb-search

A Polymer custom element that fetches movie, series, episode data from the
[Open Movie Database (OMDb) api](https://www.omdbapi.com/).

[![GitHub version](https://badge.fury.io/gh/giovanni0918%2Fomdb-search.svg)](https://badge.fury.io/gh/giovanni0918%2Fomdb-search) [![Bower version](https://badge.fury.io/bo/omdb-search.svg)](https://badge.fury.io/bo/omdb-search) [![license](https://img.shields.io/github/license/giovanni0918/omdb-search.svg)](https://img.shields.io/github/license/giovanni0918/omdb-search.svg) 

# Change Log

Version: 0.3.0
- Update bower dependencies
- Update box-sizing to border-box
- Update element styles to use flex-box
- Move url and computeUrl to the Private API
- Add baseUrl property
- Add reflectToAttribute prop to q, year, type, page, and apiVersion
- Add on-error event listener; should an error occurs when loading an image, it will set the default img instead
- Set the li tag id property to the imdbID value
- Set the anchor tag href property to the hash imdbID value
- Remove bootstrap dependency from demo
- Update demo styles
- Add github version badge
- Add github license badge
- Add bower version badge

# Demo it
<https://giovanni-orlando.com/omdb-search/>

# Getting Started

Make a project directory for your demo and change directories into it:
<pre>$ mkdir omdb-search-demo && cd omdb-search-demo</pre>

Create an index.html
<pre>$ touch index.html</pre>

# Install or Download
Install the component using [bower](https://bower.io/).
<pre>$ bower install omdb-search --save</pre>

Or download the [.zip file](https://github.com/giovanni0918/omdb-search/archive/master.zip)

# Usage

In that index.html add the following code:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>OMDb Search demo</title>
    <!-- Load the WebComponents polyfill: -->
    <script async src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.24/webcomponents-lite.js"></script>

    <!-- Import the omdb-search web component: -->
    <link rel="import" href="bower_components/omdb-search/omdb-search.html">

    <!-- Optionally, import the included omdb-search-theme stylesheet: -->
    <link rel="import" href="bower_components/omdb-search/omdb-search-theme.html">
</head>
<body>
    <!-- Use the element in your app:  -->
    <h1>Tarzan movies:</h1>
    <omdb-search q="Tarzan" type="movie" page="1"></omdb-search>
</body>
</html>
```

# Available on [customelements.io](https://customelements.io/giovanni0918/omdb-search/)

# License
Mit: <https://mit-license.org/>

Copyright 2017: [Giovanni Orlado Rivera](https://github.com/giovanni0918)

Website: <https://giovanni-orlando.com/>
