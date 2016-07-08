# omdb-search

A Polymer custom element that fetches movie, series, episode data from the
<a href="https://www.omdbapi.com/">Open Movie Database (OMDb) api</a>.

# Demo it
<a href="https://giovanni0918.github.io/omdb-search/">https://giovanni0918.github.io/omdb-search/</a>

# Install or Download
Install the component using <a href="https://bower.io/">bower</a>
<pre>$ bower install omdb-search --save</pre>

Or download the <a href="https://github.com/giovanni0918/omdb-search/archive/master.zip">.zip file</a>

# Getting Started
<ol>
<li>Load the WebComponents polyfill:
  <pre><code>&ltscript src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.22/CustomElements.js"&gt &lt/script&gt</code></pre>
</li>
<li>Import the omdb-search web component:
  <pre><code>&ltlink rel="import" href="../omdb-search/omdb-search.html"&gt </code></pre>
</li>
<li>Use the element in your app:
  <pre><code>&ltomdb-search q="Harry Potter" type="movie" year="2010" page="1"&gt &lt/omdb-search&gt </code></pre>
</li>
</ol>

# Available on <a href="https://customelements.io/giovanni0918/omdb-search/">customelements.io</a>

# License
Mit: <a href="https://mit-license.org/">https://mit-license.org/</a>

Copyright 2016: <a href="https://github.com/giovanni0918">Giovanni Orlado Rivera</a>
