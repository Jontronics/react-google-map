!function(e){function t(t){for(var a,u,o=t[0],c=t[1],i=t[2],f=0,d=[];f<o.length;f++)u=o[f],r[u]&&d.push(r[u][0]),r[u]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(s&&s(t);d.length;)d.shift()();return l.push.apply(l,i||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(l.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={1:0},l=[];function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var s=c;l.push([391,0]),n()}({145:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Map=t.Item=t.Footer=t.Nav=void 0;var a=o(n(372)),r=o(n(371)),l=o(n(370)),u=o(n(369));function o(e){return e&&e.__esModule?e:{default:e}}t.Nav=a.default,t.Footer=r.default,t.Item=l.default,t.Map=u.default},146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={USERS_RECEIVED:"USERS_RECEIVED",USER_CREATED:"USER_CREATED",USER_LOGGED_IN:"USER_LOGGED_IN",CURRENT_USER_RECEIVED:"CURRENT_USER_RECEIVED"}},150:function(e){e.exports={name:"garage-sale",version:"0.0.0",server:!1,private:!0,scripts:{dev:"webpack --mode development -w",build:"npm run clean && NODE_ENV=production webpack -p && gulp prod",clean:"rm -rf ./public/dist",postinstall:"npm run build"},dependencies:{bluebird:"^3.5.1",debug:"^3.1.0",dotenv:"^5.0.1",moment:"^2.20.1",nodemon:"^1.17.1",react:"^16.2.0","react-bootstrap":"^0.32.1","react-dom":"^16.2.0","react-dropzone":"^4.2.8","react-google-maps":"^9.4.5","react-redux":"^5.0.7","react-time":"^4.3.0",redux:"^3.7.2","redux-thunk":"^2.2.0",superagent:"^3.8.2",turbo360:"latest",vertex360:"latest"},devDependencies:{"babel-core":"^6.26.0","babel-loader":"^7.1.3","babel-preset-env":"^1.6.1","babel-preset-react":"^6.24.1",chai:"^4.1.2","chai-http":"^3.0.0",gulp:"^3.9.1","gulp-6to5":"^3.0.0","gulp-autoprefixer":"^5.0.0","gulp-clean-css":"^3.9.2","gulp-concat":"^2.6.1","gulp-less":"^4.0.0","gulp-rename":"^1.2.2","gulp-sass":"^3.1.0","gulp-uglify":"^3.0.0","json-loader":"^0.5.7",mocha:"^5.0.1","mocha-jscs":"^5.0.1","mocha-jshint":"^2.3.1",rimraf:"^2.6.2","uglifyjs-webpack-plugin":"^1.2.2",webpack:"^4.1.1","webpack-cli":"^2.0.10"},app:"TURBO_APP_ID",deploy:["."],format:"vertex"}},168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(167));function r(e){return e&&e.__esModule?e:{default:e}}var l=r(n(150)).default.app||"";t.default={getRequest:function(e,t,n){return function(r){return(0,a.default)({site_id:l}).fetch(e,t).then(function(e){return null!=n&&r({type:n,params:t,data:e}),e}).catch(function(e){throw e})}},postRequest:function(e,t,n){return function(r){return(0,a.default)({site_id:l}).create(e,t).then(function(e){return null!=n&&r({type:n,data:e}),e}).catch(function(e){throw e})}},putRequest:function(e,t,n,r){return function(u){return(0,a.default)({site_id:l}).update(e,t,n).then(function(e){return null!=r&&u({type:r,data:e}),e}).catch(function(e){throw e})}},deleteRequest:function(e,t,n){return function(r){return(0,a.default)({site_id:l}).remove(e,t).then(function(e){return null!=n&&r({type:n,data:e}),e}).catch(function(e){throw e})}},createUser:function(e,t){return function(n){return(0,a.default)({site_id:l}).createUser(e).then(function(e){return null!=t&&n({type:t,data:e}),e}).catch(function(e){throw e})}},login:function(e,t){return function(n){return(0,a.default)({site_id:l}).login(e).then(function(e){return null!=t&&n({type:t,data:e}),e}).catch(function(e){throw e})}},currentUser:function(e){return function(t){return(0,a.default)({site_id:l}).currentUser().then(function(n){return null!=e&&t({type:e,data:n}),n}).catch(function(e){throw e})}},uploadFile:function(e){return(0,a.default)({site_id:l}).uploadFile(e)}}},169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TurboClient=void 0;var a,r=n(168),l=(a=r)&&a.__esModule?a:{default:a};t.TurboClient=l.default},170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(146),l=(a=r)&&a.__esModule?a:{default:a},u=n(169);t.default={fetchUsers:function(e){return function(t){return t(u.TurboClient.getRequest("user",e,l.default.USERS_RECEIVED))}},addUser:function(e){return function(t){return t(u.TurboClient.postRequest("user",e,l.default.USER_CREATED))}},register:function(e){return function(t){return t(u.TurboClient.createUser(e,l.default.USER_CREATED))}},loginUser:function(e){return function(t){return t(u.TurboClient.login(e,l.default.CURRENT_USER_RECEIVED))}},currentUser:function(){return function(e){return e(u.TurboClient.currentUser(l.default.CURRENT_USER_RECEIVED))}}}},171:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),l=c(r),u=n(87),o=c(n(170));function c(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={error:null,user:{username:""}},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidMount",value:function(){var e=this;this.props.fetchUsers({}).then(function(t){return e.props.currentUser()}).then(function(e){}).catch(function(e){})}},{key:"updateUser",value:function(e,t){t&&t.preventDefault();var n=Object.assign({},this.state.user);n[e]=t.target.value,this.setState({user:n})}},{key:"submitUser",value:function(e){e&&e.preventDefault(),0!=this.state.user.username.length?this.props.addUser(this.state.user).then(function(e){}).catch(function(e){alert(e.message)}):alert("Please Enter a Username")}},{key:"loginUser",value:function(e){e&&e.preventDefault(),0!=this.state.user.username.length?null!=this.state.user.password?this.props.loginUser(this.state.user).then(function(e){}).catch(function(e){alert(e.message)}):alert("Please Enter a Password"):alert("Please Enter a Username")}},{key:"render",value:function(){var e=this.props.users.all||[];l.default.createElement("div",null,l.default.createElement("a",{target:"_blank",href:"https://www.velocity360.io/turbo"},"Join Turbo!"));return l.default.createElement("div",null,l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-md-6"},l.default.createElement("h3",{className:"topmargin-sm nobottommargin"},"Add User"),l.default.createElement("input",{className:"form-control",onChange:this.updateUser.bind(this,"username"),type:"text",placeholder:"username"}),l.default.createElement("br",null),l.default.createElement("input",{className:"form-control",onChange:this.updateUser.bind(this,"password"),type:"password",placeholder:"password"}),l.default.createElement("br",null),l.default.createElement("button",{className:"btn btn-info",onClick:this.submitUser.bind(this)},"Submit")),l.default.createElement("div",{className:"col-md-6"},l.default.createElement("h4",{className:"topmargin-sm nobottommargin"},"Current Users"),l.default.createElement("ol",{style:{paddingLeft:16}},e.map(function(e,t){return l.default.createElement("li",{key:e.id},e.username)})))),l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-md-6"},l.default.createElement("h3",{className:"topmargin-sm nobottommargin"},"Login User"),l.default.createElement("input",{className:"form-control",onChange:this.updateUser.bind(this,"username"),type:"text",placeholder:"username"}),l.default.createElement("br",null),l.default.createElement("input",{className:"form-control",onChange:this.updateUser.bind(this,"password"),type:"password",placeholder:"password"}),l.default.createElement("br",null),l.default.createElement("button",{className:"btn btn-info",onClick:this.loginUser.bind(this)},"Log In")),null==this.props.users.currentUser?null:l.default.createElement("div",{className:"col-md-6"},l.default.createElement("h4",{className:"topmargin-sm"},"Currently Logged In As: ",this.props.users.currentUser.username),l.default.createElement("button",{className:"btn btn-info"},"Log Out"))))}}]),t}();t.default=(0,u.connect)(function(e){return{users:e.user}},function(e){return{fetchUsers:function(t){return e(o.default.fetchUsers(t))},addUser:function(t){return e(o.default.addUser(t))},loginUser:function(t){return e(o.default.loginUser(t))},currentUser:function(){return e(o.default.currentUser())}}})(i)},172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(0),u=(a=l)&&a.__esModule?a:{default:a},o=n(145);var c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={map:null},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),r(t,[{key:"render",value:function(){var e=this;return u.default.createElement("div",{className:"sidebar-wrapper",style:{height:960}},u.default.createElement(o.Map,{onMapReady:function(t){null==e.state.map&&e.setState({map:t})},markers:[{id:1,key:"1",defaultAnimation:2,label:"skate-board",position:{lat:40.7224017,lng:-73.9896719}},{id:2,key:"2",defaultAnimation:2,label:"skate-board",position:{lat:40.7024017,lng:-73.9896719}}],zoom:14,center:{lat:40.7224017,lng:-73.9896719},containerElement:u.default.createElement("div",{style:{height:"100%"}}),mapElement:u.default.createElement("div",{style:{height:"100%"}})}))}}]),t}();t.default=c},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Search=void 0;var a=r(n(172));r(n(171));function r(e){return e&&e.__esModule?e:{default:e}}t.Search=a.default},369:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(0),o=(a=u)&&a.__esModule?a:{default:a},c=n(368);var i=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={map:null},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),l(t,[{key:"mapMoved",value:function(){null!=this.props.locationChanged&&this.props.locationChanged(this.state.map.getCenter())}},{key:"zoomChanged",value:function(){}},{key:"mapLoaded",value:function(e){null==this.state.map&&(this.props.onMapReady(e),this.setState({map:e}))}},{key:"handleMarkerClick",value:function(e){null!=this.props.markerClicked&&this.props.markerClicked(e,this.state.map)}},{key:"render",value:function(){var e=this,t=this.props.markers||[];return o.default.createElement(c.GoogleMap,{ref:this.mapLoaded.bind(this),onDragEnd:this.mapMoved.bind(this),onZoomChanged:this.zoomChanged.bind(this),defaultZoom:this.props.zoom,defaultCenter:this.props.center},t.map(function(t,n){return o.default.createElement(c.Marker,r({key:n,clickable:!0,icon:t.icon,label:t.label,title:t.key,onClick:e.handleMarkerClick.bind(e,t)},t))}))}}]),t}();t.default=(0,c.withGoogleMap)(i)},370:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),l=(a=r)&&a.__esModule?a:{default:a};t.default=function(e){return l.default.createElement("div",{className:"col-lg-3 col-sm-6"},l.default.createElement("div",{className:"card"},l.default.createElement("div",{className:"content"},l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-xs-5"},l.default.createElement("div",{className:"icon-big icon-warning text-center"},l.default.createElement("i",{className:"ti-server"}))),l.default.createElement("div",{className:"col-xs-7"},l.default.createElement("div",{className:"numbers"},l.default.createElement("p",null,"Capacity"),"105GB"))),l.default.createElement("div",{className:"footer"},l.default.createElement("hr",null),l.default.createElement("div",{className:"stats"},l.default.createElement("i",{className:"ti-reload"})," Updated now")))))}},371:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),l=(a=r)&&a.__esModule?a:{default:a};t.default=function(e){return l.default.createElement("footer",{className:"footer"},l.default.createElement("div",{className:"container-fluid"},l.default.createElement("nav",{className:"pull-left"},l.default.createElement("ul",null,l.default.createElement("li",null,l.default.createElement("a",{href:"http://www.creative-tim.com"},"Creative Tim")),l.default.createElement("li",null,l.default.createElement("a",{href:"http://blog.creative-tim.com"},"Blog")),l.default.createElement("li",null,l.default.createElement("a",{href:"http://www.creative-tim.com/license"},"Licenses")))),l.default.createElement("div",{className:"copyright pull-right"},"© 2018, made with ",l.default.createElement("i",{className:"fa fa-heart heart"})," by ",l.default.createElement("a",{href:"http://www.creative-tim.com"},"Creative Tim"))))}},372:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),l=(a=r)&&a.__esModule?a:{default:a};t.default=function(e){return l.default.createElement("nav",{className:"navbar navbar-default"},l.default.createElement("div",{className:"container-fluid"},l.default.createElement("div",{className:"navbar-header"},l.default.createElement("button",{type:"button",className:"navbar-toggle"},l.default.createElement("span",{className:"sr-only"},"Toggle navigation"),l.default.createElement("span",{className:"icon-bar bar1"}),l.default.createElement("span",{className:"icon-bar bar2"}),l.default.createElement("span",{className:"icon-bar bar3"})),l.default.createElement("a",{className:"navbar-brand",href:"#"},"Dashboard")),l.default.createElement("div",{className:"collapse navbar-collapse"},l.default.createElement("ul",{className:"nav navbar-nav navbar-right"},l.default.createElement("li",null,l.default.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown"},l.default.createElement("i",{className:"ti-panel"}),l.default.createElement("p",null,"Stats"))),l.default.createElement("li",{className:"dropdown"},l.default.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown"},l.default.createElement("i",{className:"ti-bell"}),l.default.createElement("p",{className:"notification"},"5"),l.default.createElement("p",null,"Notifications"),l.default.createElement("b",{className:"caret"})),l.default.createElement("ul",{className:"dropdown-menu"},l.default.createElement("li",null,l.default.createElement("a",{href:"#"},"Notification 1")),l.default.createElement("li",null,l.default.createElement("a",{href:"#"},"Notification 2")),l.default.createElement("li",null,l.default.createElement("a",{href:"#"},"Notification 3")),l.default.createElement("li",null,l.default.createElement("a",{href:"#"},"Notification 4")),l.default.createElement("li",null,l.default.createElement("a",{href:"#"},"Another notification")))),l.default.createElement("li",null,l.default.createElement("a",{href:"#"},l.default.createElement("i",{className:"ti-settings"}),l.default.createElement("p",null,"Settings")))))))}},373:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(0),u=(a=l)&&a.__esModule?a:{default:a},o=n(145),c=n(173);var i=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={map:null},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),r(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"wrapper"},u.default.createElement("div",{className:"sidebar","data-background-color":"white","data-active-color":"danger"},u.default.createElement(c.Search,null)),u.default.createElement("div",{className:"main-panel"},u.default.createElement(o.Nav,null),u.default.createElement("div",{className:"content"},u.default.createElement("div",{className:"container-fluid"},u.default.createElement("div",{className:"row"},u.default.createElement(o.Item,null),u.default.createElement(o.Item,null),u.default.createElement(o.Item,null),u.default.createElement(o.Item,null)))),u.default.createElement(o.Footer,null)))}}]),t}();t.default=i},377:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(146),l=(a=r)&&a.__esModule?a:{default:a};var u={all:null,currentUser:null};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1],n=Object.assign({},e);switch(t.type){case l.default.CURRENT_USER_RECEIVED:return n.currentUser=t.data,n;case l.default.USERS_RECEIVED:return n.all=t.data,n;case l.default.USER_CREATED:var a=n.all?Object.assign([],n.all):[];return a.unshift(t.data),n.all=a,n;default:return e}}},378:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.userReducer=void 0;var a,r=n(377),l=(a=r)&&a.__esModule?a:{default:a};t.userReducer=l.default},381:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r,l=n(84),u=n(379),o=(a=u)&&a.__esModule?a:{default:a},c=n(378);t.default={configure:function(e){var t=(0,l.combineReducers)({user:c.userReducer});return r=e?(0,l.createStore)(t,e,(0,l.applyMiddleware)(o.default)):(0,l.createStore)(t,(0,l.applyMiddleware)(o.default))},currentStore:function(){return r}}},391:function(e,t,n){"use strict";var a=c(n(0)),r=c(n(83)),l=c(n(381)),u=n(87),o=c(n(373));function c(e){return e&&e.__esModule?e:{default:e}}var i=a.default.createElement(u.Provider,{store:l.default.configure(null)},a.default.createElement(o.default,null));r.default.render(i,document.getElementById("root"))}});