# Hipster
A CSS Processor with a CLI and [Gulp Plugin](http://nmpjs.org/packages/gulp) built on PostCSS.

### Why?
PostCSS is fast, *very fast*, but it can be a pain to intergrate into your build stream. Hipster fixs this with a CLI and a Glup Plugin, leveraging the speed of PostCSS and removing the intergration headaches.

### Installation 
```shell
npm install hipster-css
```
### Default Syntax
#### Variables
```css
$header: #333; /* Declaring a variable */

h1 {
	color: $header; /* Using a variable */
}
```
#### Mixins
```css
@mixin border-radius($radius) {
	-webkit-border-radius: $radius;
	   -moz-border-radius: $radius;
	    -ms-border-radius: $radius;
	        border-radius: $radius;
}
 
.box { @include border-radius(10px); }
```
#### Nesting
```css
header {
	h1 {
		font-size: 36px;
	}
}
```
#### Imports
```css
@import "lib/normalize.css";
@import "media-queries/menu.css" (min-width: 480px);;
```

### Default Features
#### calc() Reductions
Reducing calc() references whenever it's possible with the [postcss-calc](https://www.npmjs.com/package/postcss-calc) plugin.

***Note:*** When multiple units are mixed together in the same expression, the calc() statement is left as is, to fallback to the w3c calc() feature.

### CLI Usage
#### hipster \<inputFile> \<outputFile>
* If you supply one file the css of first file will be compiled and outputted to stdout.
* If you supply two files the css of the first file will be compiled and outputted to the second file. *The second file will be created if it does not already exist or overwritten if it does exits.*

### Customize your Hipster Processor
As Hipster is built on PostCSS, it is really easy to add new plugin to allow for new syntax and functionality while retaining the easy of use of the CLI.

##### 1. Install the new plugin via NPM
```shell
npm install <package> --save
```
##### 2. Require the new plugin in index.js
```javascript
var <plugin> = require('<plugin>');
```
##### 3. Add the new plugin to Hipster's processor
```javascript
.use('<plugin>')
```