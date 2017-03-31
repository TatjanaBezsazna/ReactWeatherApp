var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router'); // creates new var Route and sets it equal to require('react-router').Route
// it creates new variable X and sets it equal to whatever object.X is  

var Main = require('Main'); //Component form the main.jsx

var Weather = require('Weather');
var About = require('About');
var Example = require('Example');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App CSS

require('style!css!applicationStyles');

//<Route path="/" component={Main}> Main component gets rendered because it matches the path (/);
//<Route path="/" component={Main}> will always get rendered, but if path matches any path of children elements - respective child will be rendered
//Othervise - IndexRoute will be rendered

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="about" component={About}/>
			<Route path="example" component={Example}/>
			<IndexRoute component={Weather}/> 
		</Route>
	</Router>,
	document.getElementById('app')
);


