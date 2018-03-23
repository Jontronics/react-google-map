!function(e){function t(t){for(var a,u,o=t[0],c=t[1],i=t[2],f=0,d=[];f<o.length;f++)u=o[f],r[u]&&d.push(r[u][0]),r[u]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(s&&s(t);d.length;)d.shift()();return l.push.apply(l,i||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(l.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={1:0},l=[];function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var s=c;l.push([394,0]),n()}({151:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),l=c(r),u=n(38),o=c(n(61));function c(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={error:null,user:{username:""}},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidMount",value:function(){var e=this;this.props.fetchUsers({}).then(function(t){return e.props.currentUser()}).then(function(e){}).catch(function(e){console.log("ERROR: "+e.message)})}},{key:"updateUser",value:function(e,t){t&&t.preventDefault();var n=Object.assign({},this.state.user);n[e]=t.target.value,this.setState({user:n})}},{key:"submitUser",value:function(e){e&&e.preventDefault(),0!=this.state.user.username.length?this.props.addUser(this.state.user).then(function(e){}).catch(function(e){alert(e.message)}):alert("Please Enter a Username")}},{key:"loginUser",value:function(e){e&&e.preventDefault(),0!=this.state.user.username.length?null!=this.state.user.password?this.props.loginUser(this.state.user).then(function(e){console.log("LOGIN: "+JSON.stringify(e))}).catch(function(e){alert(e.message)}):alert("Please Enter a Password"):alert("Please Enter a Username")}},{key:"render",value:function(){var e=this.props.users.all||[];l.default.createElement("div",null,l.default.createElement("a",{target:"_blank",href:"https://www.velocity360.io/turbo"},"Join Turbo!"));return l.default.createElement("div",null,l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-md-6"},l.default.createElement("h3",{className:"topmargin-sm nobottommargin"},"Add User"),l.default.createElement("input",{className:"form-control",onChange:this.updateUser.bind(this,"username"),type:"text",placeholder:"username"}),l.default.createElement("br",null),l.default.createElement("input",{className:"form-control",onChange:this.updateUser.bind(this,"password"),type:"password",placeholder:"password"}),l.default.createElement("br",null),l.default.createElement("button",{className:"btn btn-info",onClick:this.submitUser.bind(this)},"Submit")),l.default.createElement("div",{className:"col-md-6"},l.default.createElement("h4",{className:"topmargin-sm nobottommargin"},"Current Users"),l.default.createElement("ol",{style:{paddingLeft:16}},e.map(function(e,t){return l.default.createElement("li",{key:e.id},e.username)})))),l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-md-6"},l.default.createElement("h3",{className:"topmargin-sm nobottommargin"},"Login User"),l.default.createElement("input",{className:"form-control",onChange:this.updateUser.bind(this,"username"),type:"text",placeholder:"username"}),l.default.createElement("br",null),l.default.createElement("input",{className:"form-control",onChange:this.updateUser.bind(this,"password"),type:"password",placeholder:"password"}),l.default.createElement("br",null),l.default.createElement("button",{className:"btn btn-info",onClick:this.loginUser.bind(this)},"Log In")),null==this.props.users.currentUser?null:l.default.createElement("div",{className:"col-md-6"},l.default.createElement("h4",{className:"topmargin-sm"},"Currently Logged In As: ",this.props.users.currentUser.username),l.default.createElement("button",{className:"btn btn-info"},"Log Out"))))}}]),t}();t.default=(0,u.connect)(function(e){return{users:e.user}},function(e){return{fetchUsers:function(t){return e(o.default.fetchUsers(t))},addUser:function(t){return e(o.default.addUser(t))},loginUser:function(t){return e(o.default.loginUser(t))},currentUser:function(){return e(o.default.currentUser())}}})(i)},152:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),l=i(r),u=n(86),o=n(38),c=i(n(61));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={item:{}},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"updateItem",value:function(e,t){t.preventDefault(),console.log(e+" == "+t.target.value);var n=Object.assign({},this.state.item);n[e]=t.target.value,this.setState({item:n})}},{key:"addItem",value:function(){console.log("ADD ITEM: "+JSON.stringify(this.state.item));var e=Object.assign({},this.state.item);e.id=100,e.key="100",e.defaultAnimation=2,e.position=this.props.map.currentLocation,this.props.addItem(e)}},{key:"render",value:function(){var e=this.props.item.all||[];return l.default.createElement("div",{className:"container-fluid"},l.default.createElement("div",{className:"row"},e.map(function(e,t){return l.default.createElement(u.Item,{key:e.id,item:e})})),l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-md-4"},l.default.createElement("div",{className:"card"},l.default.createElement("div",{className:"content"},l.default.createElement("div",{className:"footer"},l.default.createElement("h3",null,"Add Item"),l.default.createElement("input",{onChange:this.updateItem.bind(this,"name"),type:"text",style:f.input,className:"form-control",placeholder:"Name"}),l.default.createElement("input",{onChange:this.updateItem.bind(this,"price"),type:"text",style:f.input,className:"form-control",placeholder:"Price"}),l.default.createElement("hr",null),l.default.createElement("div",{className:"stats"},l.default.createElement("button",{onClick:this.addItem.bind(this),className:"btn btn-success"},"Add Item"))))))))}}]),t}(),f={input:{border:"1px solid #ddd",marginBottom:12}};t.default=(0,o.connect)(function(e){return{item:e.item,map:e.map}},function(e){return{addItem:function(t){return e(c.default.addItem(t))}}})(s)},153:function(e){e.exports={name:"garage-sale",version:"0.0.0",server:!1,private:!0,scripts:{dev:"webpack --mode development -w",build:"npm run clean && NODE_ENV=production webpack -p && gulp prod",clean:"rm -rf ./public/dist",postinstall:"npm run build"},dependencies:{bluebird:"^3.5.1",debug:"^3.1.0",dotenv:"^5.0.1",moment:"^2.20.1",nodemon:"^1.17.1",react:"^16.2.0","react-bootstrap":"^0.32.1","react-dom":"^16.2.0","react-dropzone":"^4.2.8","react-google-maps":"^9.4.5","react-redux":"^5.0.7","react-time":"^4.3.0",redux:"^3.7.2","redux-thunk":"^2.2.0",superagent:"^3.8.2",turbo360:"latest",vertex360:"latest"},devDependencies:{"babel-core":"^6.26.0","babel-loader":"^7.1.3","babel-preset-env":"^1.6.1","babel-preset-react":"^6.24.1",chai:"^4.1.2","chai-http":"^3.0.0",gulp:"^3.9.1","gulp-6to5":"^3.0.0","gulp-autoprefixer":"^5.0.0","gulp-clean-css":"^3.9.2","gulp-concat":"^2.6.1","gulp-less":"^4.0.0","gulp-rename":"^1.2.2","gulp-sass":"^3.1.0","gulp-uglify":"^3.0.0","json-loader":"^0.5.7",mocha:"^5.0.1","mocha-jscs":"^5.0.1","mocha-jshint":"^2.3.1",rimraf:"^2.6.2","uglifyjs-webpack-plugin":"^1.2.2",webpack:"^4.1.1","webpack-cli":"^2.0.10"},app:"TURBO_APP_ID",deploy:["."],format:"vertex"}},171:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(170));function r(e){return e&&e.__esModule?e:{default:e}}var l=r(n(153)).default.app||"";t.default={getRequest:function(e,t,n){return function(r){return(0,a.default)({site_id:l}).fetch(e,t).then(function(e){return null!=n&&r({type:n,params:t,data:e}),e}).catch(function(e){throw e})}},postRequest:function(e,t,n){return function(r){return(0,a.default)({site_id:l}).create(e,t).then(function(e){return null!=n&&r({type:n,data:e}),e}).catch(function(e){throw e})}},putRequest:function(e,t,n,r){return function(u){return(0,a.default)({site_id:l}).update(e,t,n).then(function(e){return null!=r&&u({type:r,data:e}),e}).catch(function(e){throw e})}},deleteRequest:function(e,t,n){return function(r){return(0,a.default)({site_id:l}).remove(e,t).then(function(e){return null!=n&&r({type:n,data:e}),e}).catch(function(e){throw e})}},createUser:function(e,t){return function(n){return(0,a.default)({site_id:l}).createUser(e).then(function(e){return null!=t&&n({type:t,data:e}),e}).catch(function(e){throw e})}},login:function(e,t){return function(n){return(0,a.default)({site_id:l}).login(e).then(function(e){return null!=t&&n({type:t,data:e}),e}).catch(function(e){throw e})}},currentUser:function(e){return function(t){return(0,a.default)({site_id:l}).currentUser().then(function(n){return null!=e&&t({type:e,data:n}),n}).catch(function(e){throw e})}},uploadFile:function(e){return(0,a.default)({site_id:l}).uploadFile(e)}}},172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TurboClient=void 0;var a,r=n(171),l=(a=r)&&a.__esModule?a:{default:a};t.TurboClient=l.default},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),l=i(r),u=n(86),o=n(38),c=i(n(61));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={map:null},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"centerChanged",value:function(e){console.log("centerChaged: "+JSON.stringify(e)),this.props.locationChanged(e)}},{key:"render",value:function(){var e=this,t=[];return(this.props.item.all||[]).forEach(function(e,n){var a={key:e.id,label:e.name,position:e.position,defaultAnimation:2};t.push(a)}),l.default.createElement("div",{className:"sidebar-wrapper"},l.default.createElement(u.Map,{onMapReady:function(t){null==e.state.map&&(console.log("OnMapReady: "+JSON.stringify(t.getCenter())),e.setState({map:t}))},locationChanged:this.centerChanged.bind(this),markers:t,zoom:14,center:this.props.map.currentLocation,containerElement:l.default.createElement("div",{style:{height:"100%"}}),mapElement:l.default.createElement("div",{style:{height:"100vh"}})}))}}]),t}();t.default=(0,o.connect)(function(e){return{item:e.item,map:e.map}},function(e){return{locationChanged:function(t){return e(c.default.locationChanged(t))}}})(s)},174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Users=t.Results=t.Search=void 0;var a=u(n(173)),r=u(n(152)),l=u(n(151));function u(e){return e&&e.__esModule?e:{default:e}}t.Search=a.default,t.Results=r.default,t.Users=l.default},370:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(0),o=(a=u)&&a.__esModule?a:{default:a},c=n(369);var i=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={map:null},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),l(t,[{key:"mapMoved",value:function(){null!=this.props.locationChanged&&this.props.locationChanged(this.state.map.getCenter())}},{key:"zoomChanged",value:function(){}},{key:"mapLoaded",value:function(e){null==this.state.map&&(this.props.onMapReady(e),this.setState({map:e}))}},{key:"handleMarkerClick",value:function(e){null!=this.props.markerClicked&&this.props.markerClicked(e,this.state.map)}},{key:"render",value:function(){var e=this,t=this.props.markers||[];return o.default.createElement(c.GoogleMap,{ref:this.mapLoaded.bind(this),onDragEnd:this.mapMoved.bind(this),onZoomChanged:this.zoomChanged.bind(this),defaultZoom:this.props.zoom,defaultCenter:this.props.center},t.map(function(t,n){return o.default.createElement(c.Marker,r({key:n,clickable:!0,icon:t.icon,label:t.label,title:t.key,onClick:e.handleMarkerClick.bind(e,t)},t))}))}}]),t}();t.default=(0,c.withGoogleMap)(i)},371:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),l=(a=r)&&a.__esModule?a:{default:a};t.default=function(e){var t=e.item;return l.default.createElement("div",{className:"col-lg-3 col-sm-6"},l.default.createElement("div",{className:"card"},l.default.createElement("div",{className:"content"},l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-xs-5"},l.default.createElement("div",{className:"icon-big icon-warning text-center"},l.default.createElement("i",{className:"ti-server"}))),l.default.createElement("div",{className:"col-xs-7"},l.default.createElement("div",{className:"numbers"},l.default.createElement("p",null,t.name),"$",t.price))),l.default.createElement("div",{className:"footer"},l.default.createElement("hr",null),l.default.createElement("div",{className:"stats"},l.default.createElement("i",{className:"ti-reload"})," Updated now")))))}},372:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),l=(a=r)&&a.__esModule?a:{default:a};t.default=function(e){return l.default.createElement("footer",{className:"footer"},l.default.createElement("div",{className:"container-fluid"},l.default.createElement("nav",{className:"pull-left"},l.default.createElement("ul",null,l.default.createElement("li",null,l.default.createElement("a",{href:"http://www.creative-tim.com"},"Creative Tim")),l.default.createElement("li",null,l.default.createElement("a",{href:"http://blog.creative-tim.com"},"Blog")),l.default.createElement("li",null,l.default.createElement("a",{href:"http://www.creative-tim.com/license"},"Licenses")))),l.default.createElement("div",{className:"copyright pull-right"},"© 2018, made with ",l.default.createElement("i",{className:"fa fa-heart heart"})," by ",l.default.createElement("a",{href:"http://www.creative-tim.com"},"Creative Tim"))))}},373:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),l=(a=r)&&a.__esModule?a:{default:a};t.default=function(e){return l.default.createElement("nav",{className:"navbar navbar-default"},l.default.createElement("div",{className:"container-fluid"},l.default.createElement("div",{className:"navbar-header"},l.default.createElement("button",{type:"button",className:"navbar-toggle"},l.default.createElement("span",{className:"sr-only"},"Toggle navigation"),l.default.createElement("span",{className:"icon-bar bar1"}),l.default.createElement("span",{className:"icon-bar bar2"}),l.default.createElement("span",{className:"icon-bar bar3"})),l.default.createElement("a",{className:"navbar-brand",href:"#"},"Dashboard")),l.default.createElement("div",{className:"collapse navbar-collapse"},l.default.createElement("ul",{className:"nav navbar-nav navbar-right"},l.default.createElement("li",null,l.default.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown"},l.default.createElement("i",{className:"ti-panel"}),l.default.createElement("p",null,"Stats"))),l.default.createElement("li",{className:"dropdown"},l.default.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown"},l.default.createElement("i",{className:"ti-bell"}),l.default.createElement("p",{className:"notification"},"5"),l.default.createElement("p",null,"Notifications"),l.default.createElement("b",{className:"caret"})),l.default.createElement("ul",{className:"dropdown-menu"},l.default.createElement("li",null,l.default.createElement("a",{href:"#"},"Notification 1")),l.default.createElement("li",null,l.default.createElement("a",{href:"#"},"Notification 2")),l.default.createElement("li",null,l.default.createElement("a",{href:"#"},"Notification 3")),l.default.createElement("li",null,l.default.createElement("a",{href:"#"},"Notification 4")),l.default.createElement("li",null,l.default.createElement("a",{href:"#"},"Another notification")))),l.default.createElement("li",null,l.default.createElement("a",{href:"#"},l.default.createElement("i",{className:"ti-settings"}),l.default.createElement("p",null,"Settings")))))))}},374:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(0),u=(a=l)&&a.__esModule?a:{default:a},o=n(86),c=n(174);var i=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),r(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"wrapper"},u.default.createElement("div",{className:"sidebar","data-background-color":"white","data-active-color":"danger"},u.default.createElement(c.Search,null)),u.default.createElement("div",{className:"main-panel"},u.default.createElement(o.Nav,null),u.default.createElement("div",{className:"content"},u.default.createElement(c.Results,null)),u.default.createElement(o.Footer,null)))}}]),t}();t.default=i},378:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(58),l=(a=r)&&a.__esModule?a:{default:a};var u={currentLocation:{lat:40.7224017,lng:-73.9896719}};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1],n=Object.assign({},e);switch(t.type){case l.default.LOCATION_CHANGED:return console.log("LOCATION_CHANGED: "+JSON.stringify(t.data)),n.currentLocation=t.data,n;default:return n}}},379:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(58),l=(a=r)&&a.__esModule?a:{default:a};var u={all:[{id:"1",price:10,name:"skateSpot",position:{lat:40.7224017,lng:-73.9896719}},{id:"2",price:20,name:"Stuff",position:{lat:40.7024017,lng:-73.9896719}},{id:"3",price:90,name:"Meow",position:{lat:40.7124017,lng:-73.9796719}}]};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1],n=Object.assign({},e);switch(t.type){case l.default.ITEM_ADDED:console.log("ITEM ADDED: "+JSON.stringify(t.data));var a=Object.assign([],n.all);return a.push(t.data),n.all=a,n;default:return n}}},380:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(58),l=(a=r)&&a.__esModule?a:{default:a};var u={all:null,currentUser:null};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1],n=Object.assign({},e);switch(t.type){case l.default.CURRENT_USER_RECEIVED:return n.currentUser=t.data,n;case l.default.USERS_RECEIVED:return n.all=t.data,n;case l.default.USER_CREATED:var a=n.all?Object.assign([],n.all):[];return a.unshift(t.data),n.all=a,n;default:return e}}},381:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mapReducer=t.itemReducer=t.userReducer=void 0;var a=u(n(380)),r=u(n(379)),l=u(n(378));function u(e){return e&&e.__esModule?e:{default:e}}t.userReducer=a.default,t.itemReducer=r.default,t.mapReducer=l.default},384:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r,l=n(88),u=n(382),o=(a=u)&&a.__esModule?a:{default:a},c=n(381);t.default={configure:function(e){var t=(0,l.combineReducers)({user:c.userReducer,item:c.itemReducer,map:c.mapReducer});return r=e?(0,l.createStore)(t,e,(0,l.applyMiddleware)(o.default)):(0,l.createStore)(t,(0,l.applyMiddleware)(o.default))},currentStore:function(){return r}}},394:function(e,t,n){"use strict";var a=c(n(0)),r=c(n(87)),l=c(n(384)),u=n(38),o=c(n(374));function c(e){return e&&e.__esModule?e:{default:e}}var i=a.default.createElement(u.Provider,{store:l.default.configure(null)},a.default.createElement(o.default,null));r.default.render(i,document.getElementById("root"))},58:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={LOCATION_CHANGED:"LOCATION_CHANGED",ITEM_ADDED:"ITEM_ADDED"}},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(58),l=(a=r)&&a.__esModule?a:{default:a};n(172);t.default={addItem:function(e){return{type:l.default.ITEM_ADDED,data:e}},locationChanged:function(e){return{type:l.default.LOCATION_CHANGED,data:e}}}},86:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Map=t.Item=t.Footer=t.Nav=void 0;var a=o(n(373)),r=o(n(372)),l=o(n(371)),u=o(n(370));function o(e){return e&&e.__esModule?e:{default:e}}t.Nav=a.default,t.Footer=r.default,t.Item=l.default,t.Map=u.default}});