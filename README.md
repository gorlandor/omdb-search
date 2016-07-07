# omdb-search

A Polymer custom element that fetches movie, series, episode data from the
<a href="https://www.omdbapi.com/">Open Movie Database (OMDb) api</a>.

# Install or Download
Install the component using <a href="https://bower.io/">bower</a>
<pre>bower install giovanni0918/omdb-search --save</pre>

Or download the <a href="https://github.com/giovanni0918/omdb-search/archive/master.zip">.zip file</a>

# Getting Started
<ol>
<li>Load the WebComponents polyfill:
  <pre>https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.22/CustomElements.js</pre>
</li>
<li>Import the omdb-search web component:
  <pre>< link rel="import" href="../omdb-search/omdb-search.html"></pre>
</li>
<li>Use the element in your app:
  <pre>< omdb-search q="Harry Potter" type="movie" year="2010" page="1"></omdb-search></pre>
</li>
</ol>

# License
Mit: <a href="https://mit-license.org/">https://mit-license.org/</a>

Copyright 2016: <a href="https://github.com/giovanni0918">Giovanni Orlado Rivera</a>
