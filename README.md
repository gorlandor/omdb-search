# omdb-search

A Polymer custom element that fetches movie, series, episode data from the
<a href="https://www.omdbapi.com/">Open Movie Database (OMDb) api</a>.

# Change Log

Version: 0.0.4
<ul>
	<li>Added iron-demo-helpers and webcomponentsjs to dev-dependencies.</li>
	<li>bower ignored: /bower_components directory from bundle</li>
	<li>Added manifest.json</li>
	<li>Updated project license to MIT</li>
	<li>Bumped up polymer's dependency version.</li>
</ul>

# Demo it
<a href="https://giovanni0918.github.io/omdb-search/">https://giovanni0918.github.io/omdb-search/</a>

# Getting Started

Make a project directory for your demo and change directories into it:
<pre>$ mkdir omdb-search-demo && cd omdb-search-demo</pre>

Create an index.html
<pre>$ touch index.html</pre>

# Install or Download
Install the component using <a href="https://bower.io/">bower</a>
<pre>$ bower install omdb-search --save</pre>

Or download the <a href="https://github.com/giovanni0918/omdb-search/archive/master.zip">.zip file</a>

# Usage

In that index.html add the following code:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>OMDb Search demo</title>
    <!-- Load the WebComponents polyfill: -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.22/CustomElements.js"></script>

    <!-- Import the omdb-search web component into your index.html: -->
    <link rel="import" href="../omdb-search.html">

    <!-- Optionally, import the included omdb-search-theme stylesheet: -->
    <link rel="import" href="../omdb-search-theme.html">
</head>
<body>
    <!-- Use the element in your app:  -->
    <omdb-search q="Harry Potter" type="movie" year="2010" page="1"></omdb-search>
</body>
</html>
```

# Available on <a href="https://customelements.io/giovanni0918/omdb-search/">customelements.io</a>

# License
Mit: <a href="https://mit-license.org/">https://mit-license.org/</a>

Copyright 2016: <a href="https://github.com/giovanni0918">Giovanni Orlado Rivera</a>

Website: <a href="http://giovanni-orlando.com">http://giovanni-orlando.com</a>
