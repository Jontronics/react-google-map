!function(e){function t(t){for(var r,u,o=t[0],c=t[1],i=t[2],f=0,d=[];f<o.length;f++)u=o[f],a[u]&&d.push(a[u][0]),a[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);d.length;)d.shift()();return l.push.apply(l,i||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(l.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={1:0},l=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var s=c;l.push([393,0]),n()}({146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={USERS_RECEIVED:"USERS_RECEIVED",USER_CREATED:"USER_CREATED",USER_LOGGED_IN:"USER_LOGGED_IN",CURRENT_USER_RECEIVED:"CURRENT_USER_RECEIVED"}},150:function(e){e.exports={name:"garage-sale",version:"0.0.0",server:!1,private:!0,scripts:{dev:"webpack --mode development -w",build:"npm run clean && NODE_ENV=production webpack -p && gulp prod",clean:"rm -rf ./public/dist",postinstall:"npm run build"},dependencies:{bluebird:"^3.5.1",debug:"^3.1.0",dotenv:"^5.0.1",moment:"^2.20.1",nodemon:"^1.17.1",react:"^16.2.0","react-bootstrap":"^0.32.1","react-dom":"^16.2.0","react-dropzone":"^4.2.8","react-google-maps":"^9.4.5","react-redux":"^5.0.7","react-time":"^4.3.0",redux:"^3.7.2","redux-thunk":"^2.2.0",superagent:"^3.8.2",turbo360:"latest",vertex360:"latest"},devDependencies:{"babel-core":"^6.26.0","babel-loader":"^7.1.3","babel-preset-env":"^1.6.1","babel-preset-react":"^6.24.1",chai:"^4.1.2","chai-http":"^3.0.0",gulp:"^3.9.1","gulp-6to5":"^3.0.0","gulp-autoprefixer":"^5.0.0","gulp-clean-css":"^3.9.2","gulp-concat":"^2.6.1","gulp-less":"^4.0.0","gulp-rename":"^1.2.2","gulp-sass":"^3.1.0","gulp-uglify":"^3.0.0","json-loader":"^0.5.7",mocha:"^5.0.1","mocha-jscs":"^5.0.1","mocha-jshint":"^2.3.1",rimraf:"^2.6.2","uglifyjs-webpack-plugin":"^1.2.2",webpack:"^4.1.1","webpack-cli":"^2.0.10"},app:"TURBO_APP_ID",deploy:["."],format:"vertex"}},168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(167));function a(e){return e&&e.__esModule?e:{default:e}}var l=a(n(150)).default.app||"";t.default={getRequest:function(e,t,n){return function(a){return(0,r.default)({site_id:l}).fetch(e,t).then(function(e){return null!=n&&a({type:n,params:t,data:e}),e}).catch(function(e){throw e})}},postRequest:function(e,t,n){return function(a){return(0,r.default)({site_id:l}).create(e,t).then(function(e){return null!=n&&a({type:n,data:e}),e}).catch(function(e){throw e})}},putRequest:function(e,t,n,a){return function(u){return(0,r.default)({site_id:l}).update(e,t,n).then(function(e){return null!=a&&u({type:a,data:e}),e}).catch(function(e){throw e})}},deleteRequest:function(e,t,n){return function(a){return(0,r.default)({site_id:l}).remove(e,t).then(function(e){return null!=n&&a({type:n,data:e}),e}).catch(function(e){throw e})}},createUser:function(e,t){return function(n){return(0,r.default)({site_id:l}).createUser(e).then(function(e){return null!=t&&n({type:t,data:e}),e}).catch(function(e){throw e})}},login:function(e,t){return function(n){return(0,r.default)({site_id:l}).login(e).then(function(e){return null!=t&&n({type:t,data:e}),e}).catch(function(e){throw e})}},currentUser:function(e){return function(t){return(0,r.default)({site_id:l}).currentUser().then(function(n){return null!=e&&t({type:e,data:n}),n}).catch(function(e){throw e})}},uploadFile:function(e){return(0,r.default)({site_id:l}).uploadFile(e)}}},169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TurboClient=void 0;var r,a=n(168),l=(r=a)&&r.__esModule?r:{default:r};t.TurboClient=l.default},170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(146),l=(r=a)&&r.__esModule?r:{default:r},u=n(169);t.default={fetchUsers:function(e){return function(t){return t(u.TurboClient.getRequest("user",e,l.default.USERS_RECEIVED))}},addUser:function(e){return function(t){return t(u.TurboClient.postRequest("user",e,l.default.USER_CREATED))}},register:function(e){return function(t){return t(u.TurboClient.createUser(e,l.default.USER_CREATED))}},loginUser:function(e){return function(t){return t(u.TurboClient.login(e,l.default.CURRENT_USER_RECEIVED))}},currentUser:function(){return function(e){return e(u.TurboClient.currentUser(l.default.CURRENT_USER_RECEIVED))}}}},171:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),l=c(a),u=n(38),o=c(n(170));function c(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={error:null,user:{username:""}},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"componentDidMount",value:function(){var e=this;this.props.fetchUsers({}).then(function(t){return e.props.currentUser()}).then(function(e){}).catch(function(e){})}},{key:"updateUser",value:function(e,t){t&&t.preventDefault();var n=Object.assign({},this.state.user);n[e]=t.target.value,this.setState({user:n})}},{key:"submitUser",value:function(e){e&&e.preventDefault(),0!=this.state.user.username.length?this.props.addUser(this.state.user).then(function(e){}).catch(function(e){alert(e.message)}):alert("Please Enter a Username")}},{key:"loginUser",value:function(e){e&&e.preventDefault(),0!=this.state.user.username.length?null!=this.state.user.password?this.props.loginUser(this.state.user).then(function(e){}).catch(function(e){alert(e.message)}):alert("Please Enter a Password"):alert("Please Enter a Username")}},{key:"render",value:function(){var e=this.props.users.all||[];l.default.createElement("div",null,l.default.createElement("a",{target:"_blank",href:"https://www.velocity360.io/turbo"},"Join Turbo!"));return l.default.createElement("div",null,l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-md-6"},l.default.createElement("h3",{className:"topmargin-sm nobottommargin"},"Add User"),l.default.createElement("input",{className:"form-control",onChange:this.updateUser.bind(this,"username"),type:"text",placeholder:"username"}),l.default.createElement("br",null),l.default.createElement("input",{className:"form-control",onChange:this.updateUser.bind(this,"password"),type:"password",placeholder:"password"}),l.default.createElement("br",null),l.default.createElement("button",{className:"btn btn-info",onClick:this.submitUser.bind(this)},"Submit")),l.default.createElement("div",{className:"col-md-6"},l.default.createElement("h4",{className:"topmargin-sm nobottommargin"},"Current Users"),l.default.createElement("ol",{style:{paddingLeft:16}},e.map(function(e,t){return l.default.createElement("li",{key:e.id},e.username)})))),l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-md-6"},l.default.createElement("h3",{className:"topmargin-sm nobottommargin"},"Login User"),l.default.createElement("input",{className:"form-control",onChange:this.updateUser.bind(this,"username"),type:"text",placeholder:"username"}),l.default.createElement("br",null),l.default.createElement("input",{className:"form-control",onChange:this.updateUser.bind(this,"password"),type:"password",placeholder:"password"}),l.default.createElement("br",null),l.default.createElement("button",{className:"btn btn-info",onClick:this.loginUser.bind(this)},"Log In")),null==this.props.users.currentUser?null:l.default.createElement("div",{className:"col-md-6"},l.default.createElement("h4",{className:"topmargin-sm"},"Currently Logged In As: ",this.props.users.currentUser.username),l.default.createElement("button",{className:"btn btn-info"},"Log Out"))))}}]),t}();t.default=(0,u.connect)(function(e){return{users:e.user}},function(e){return{fetchUsers:function(t){return e(o.default.fetchUsers(t))},addUser:function(t){return e(o.default.addUser(t))},loginUser:function(t){return e(o.default.loginUser(t))},currentUser:function(){return e(o.default.currentUser())}}})(i)},172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=(r=l)&&r.__esModule?r:{default:r},o=n(84),c=n(38);var i=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),a(t,[{key:"updateItem",value:function(e,t){t.preventDefault()}},{key:"render",value:function(){var e=this.props.item.all||[];return u.default.createElement("div",{className:"container-fluid"},u.default.createElement("div",{className:"row"},e.map(function(e,t){return u.default.createElement(o.Item,{key:e.id,item:e})})),u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-md-4"},u.default.createElement("div",{className:"card"},u.default.createElement("div",{className:"content"},u.default.createElement("div",{className:"footer"},u.default.createElement("h3",null,"Add Item"),u.default.createElement("input",{onChange:this.updateItem.bind(this,"name"),type:"text",style:s.input,className:"form-control",placeholder:"Name"}),u.default.createElement("input",{onChange:this.updateItem.bind(this,"price"),type:"text",style:s.input,className:"form-control",placeholder:"Price"}),u.default.createElement("hr",null),u.default.createElement("div",{className:"stats"},u.default.createElement("button",{className:"btn btn-success"},"Add Item"))))))))}}]),t}(),s={input:{border:"1px solid #ddd",marginBottom:12}};t.default=(0,c.connect)(function(e){return{item:e.item}})(i)},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=(r=l)&&r.__esModule?r:{default:r},o=n(84),c=n(38);var i=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={map:null},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),a(t,[{key:"render",value:function(){var e=this,t=this.props.item.all||[];return u.default.createElement("div",{className:"sidebar-wrapper",style:{height:960}},u.default.createElement(o.Map,{onMapReady:function(t){null==e.state.map&&e.setState({map:t})},markers:t,zoom:14,center:{lat:40.7224017,lng:-73.9896719},containerElement:u.default.createElement("div",{style:{height:"100%"}}),mapElement:u.default.createElement("div",{style:{height:"100%"}})}))}}]),t}();t.default=(0,c.connect)(function(e){return{item:e.item}})(i)},174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Users=t.Results=t.Search=void 0;var r=u(n(173)),a=u(n(172)),l=u(n(171));function u(e){return e&&e.__esModule?e:{default:e}}t.Search=r.default,t.Results=a.default,t.Users=l.default},370:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),o=(r=u)&&r.__esModule?r:{default:r},c=n(369);var i=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={map:null},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),l(t,[{key:"mapMoved",value:function(){null!=this.props.locationChanged&&this.props.locationChanged(this.state.map.getCenter())}},{key:"zoomChanged",value:function(){}},{key:"mapLoaded",value:function(e){null==this.state.map&&(this.props.onMapReady(e),this.setState({map:e}))}},{key:"handleMarkerClick",value:function(e){null!=this.props.markerClicked&&this.props.markerClicked(e,this.state.map)}},{key:"render",value:function(){var e=this,t=this.props.markers||[];return o.default.createElement(c.GoogleMap,{ref:this.mapLoaded.bind(this),onDragEnd:this.mapMoved.bind(this),onZoomChanged:this.zoomChanged.bind(this),defaultZoom:this.props.zoom,defaultCenter:this.props.center},t.map(function(t,n){return o.default.createElement(c.Marker,a({key:n,clickable:!0,icon:t.icon,label:t.label,title:t.key,onClick:e.handleMarkerClick.bind(e,t)},t))}))}}]),t}();t.default=(0,c.withGoogleMap)(i)},371:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(0),l=(r=a)&&r.__esModule?r:{default:r};t.default=function(e){var t=e.item;return l.default.createElement("div",{className:"col-lg-3 col-sm-6"},l.default.createElement("div",{className:"card"},l.default.createElement("div",{className:"content"},l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-xs-5"},l.default.createElement("div",{className:"icon-big icon-warning text-center"},l.default.createElement("i",{className:"ti-server"}))),l.default.createElement("div",{className:"col-xs-7"},l.default.createElement("div",{className:"numbers"},l.default.createElement("p",null,t.label),"$",t.price))),l.default.createElement("div",{className:"footer"},l.default.createElement("hr",null),l.default.createElement("div",{className:"stats"},l.default.createElement("i",{className:"ti-reload"})," Updated now")))))}},372:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(0),l=(r=a)&&r.__esModule?r:{default:r};t.default=function(e){return l.default.createElement("footer",{className:"footer"},l.default.createElement("div",{className:"container-fluid"},l.default.createElement("nav",{className:"pull-left"},l.default.createElement("ul",null,l.default.createElement("li",null,l.default.createElement("a",{href:"http://www.creative-tim.com"},"Creative Tim")),l.default.createElement("li",null,l.default.createElement("a",{href:"http://blog.creative-tim.com"},"Blog")),l.default.createElement("li",null,l.default.createElement("a",{href:"http://www.creative-tim.com/license"},"Licenses")))),l.default.createElement("div",{className:"copyright pull-right"},"© 2018, made with ",l.default.createElement("i",{className:"fa fa-heart heart"})," by ",l.default.createElement("a",{href:"http://www.creative-tim.com"},"Creative Tim"))))}},373:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(0),l=(r=a)&&r.__esModule?r:{default:r};t.default=function(e){return l.default.createElement("nav",{className:"navbar navbar-default"},l.default.createElement("div",{className:"container-fluid"},l.default.createElement("div",{className:"navbar-header"},l.default.createElement("button",{type:"button",className:"navbar-toggle"},l.default.createElement("span",{className:"sr-only"},"Toggle navigation"),l.default.createElement("span",{className:"icon-bar bar1"}),l.default.createElement("span",{className:"icon-bar bar2"}),l.default.createElement("span",{className:"icon-bar bar3"})),l.default.createElement("a",{className:"navbar-brand",href:"#"},"Dashboard")),l.default.createElement("div",{className:"collapse navbar-collapse"},l.default.createElement("ul",{className:"nav navbar-nav navbar-right"},l.default.createElement("li",null,l.default.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown"},l.default.createElement("i",{className:"ti-panel"}),l.default.createElement("p",null,"Stats"))),l.default.createElement("li",{className:"dropdown"},l.default.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown"},l.default.createElement("i",{className:"ti-bell"}),l.default.createElement("p",{className:"notification"},"5"),l.default.createElement("p",null,"Notifications"),l.default.createElement("b",{className:"caret"})),l.default.createElement("ul",{className:"dropdown-menu"},l.default.createElement("li",null,l.default.createElement("a",{href:"#"},"Notification 1")),l.default.createElement("li",null,l.default.createElement("a",{href:"#"},"Notification 2")),l.default.createElement("li",null,l.default.createElement("a",{href:"#"},"Notification 3")),l.default.createElement("li",null,l.default.createElement("a",{href:"#"},"Notification 4")),l.default.createElement("li",null,l.default.createElement("a",{href:"#"},"Another notification")))),l.default.createElement("li",null,l.default.createElement("a",{href:"#"},l.default.createElement("i",{className:"ti-settings"}),l.default.createElement("p",null,"Settings")))))))}},374:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=(r=l)&&r.__esModule?r:{default:r},o=n(84),c=n(174);var i=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),a(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"wrapper"},u.default.createElement("div",{className:"sidebar","data-background-color":"white","data-active-color":"danger"},u.default.createElement(c.Search,null)),u.default.createElement("div",{className:"main-panel"},u.default.createElement(o.Nav,null),u.default.createElement("div",{className:"content"},u.default.createElement(c.Results,null)),u.default.createElement(o.Footer,null)))}}]),t}();t.default=i},378:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={all:[{id:1,key:"1",price:10,defaultAnimation:2,label:"skate-board",position:{lat:40.7224017,lng:-73.9896719}},{id:2,key:"2",price:20,defaultAnimation:2,label:"BEER",position:{lat:40.7024017,lng:-73.9896719}},{id:2,key:"3",price:90,defaultAnimation:2,label:"Cider",position:{lat:40.7024017,lng:-73.9796719}}]};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments[1],n=Object.assign({},e);return t.type,n}},379:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(146),l=(r=a)&&r.__esModule?r:{default:r};var u={all:null,currentUser:null};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1],n=Object.assign({},e);switch(t.type){case l.default.CURRENT_USER_RECEIVED:return n.currentUser=t.data,n;case l.default.USERS_RECEIVED:return n.all=t.data,n;case l.default.USER_CREATED:var r=n.all?Object.assign([],n.all):[];return r.unshift(t.data),n.all=r,n;default:return e}}},380:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.itemReducer=t.userReducer=void 0;var r=l(n(379)),a=l(n(378));function l(e){return e&&e.__esModule?e:{default:e}}t.userReducer=r.default,t.itemReducer=a.default},383:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a,l=n(86),u=n(381),o=(r=u)&&r.__esModule?r:{default:r},c=n(380);t.default={configure:function(e){var t=(0,l.combineReducers)({user:c.userReducer,item:c.itemReducer});return a=e?(0,l.createStore)(t,e,(0,l.applyMiddleware)(o.default)):(0,l.createStore)(t,(0,l.applyMiddleware)(o.default))},currentStore:function(){return a}}},393:function(e,t,n){"use strict";var r=c(n(0)),a=c(n(85)),l=c(n(383)),u=n(38),o=c(n(374));function c(e){return e&&e.__esModule?e:{default:e}}var i=r.default.createElement(u.Provider,{store:l.default.configure(null)},r.default.createElement(o.default,null));a.default.render(i,document.getElementById("root"))},84:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Map=t.Item=t.Footer=t.Nav=void 0;var r=o(n(373)),a=o(n(372)),l=o(n(371)),u=o(n(370));function o(e){return e&&e.__esModule?e:{default:e}}t.Nav=r.default,t.Footer=a.default,t.Item=l.default,t.Map=u.default}});