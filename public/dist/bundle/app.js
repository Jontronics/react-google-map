!function(e){function t(t){for(var a,u,o=t[0],c=t[1],i=t[2],f=0,d=[];f<o.length;f++)u=o[f],r[u]&&d.push(r[u][0]),r[u]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(s&&s(t);d.length;)d.shift()();return l.push.apply(l,i||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(l.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={1:0},l=[];function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var s=c;l.push([398,0]),n()}({154:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(0),u=(a=l)&&a.__esModule?a:{default:a},o=n(34);var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),r(t,[{key:"render",value:function(){var e=this.props.account.currentUser;return u.default.createElement("nav",{className:"navbar navbar-default"},u.default.createElement("div",{className:"container-fluid"},u.default.createElement("div",{className:"navbar-header"},u.default.createElement("button",{type:"button",className:"navbar-toggle"},u.default.createElement("span",{className:"sr-only"},"Toggle navigation"),u.default.createElement("span",{className:"icon-bar bar1"}),u.default.createElement("span",{className:"icon-bar bar2"}),u.default.createElement("span",{className:"icon-bar bar3"})),u.default.createElement("a",{className:"navbar-brand",href:"#"},"This is a Skate App dude")),u.default.createElement("div",{className:"collapse navbar-collapse"},u.default.createElement("ul",{className:"nav navbar-nav navbar-right"},u.default.createElement("li",null,u.default.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown"},u.default.createElement("i",{className:"ti-panel"}),u.default.createElement("p",null,"Stats"))),u.default.createElement("li",{className:"dropdown"},u.default.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown"},u.default.createElement("i",{className:"ti-bell"}),u.default.createElement("p",{className:"notification"},"5"),u.default.createElement("p",null,"Notifications"),u.default.createElement("b",{className:"caret"})),u.default.createElement("ul",{className:"dropdown-menu"},u.default.createElement("li",null,u.default.createElement("a",{href:"#"},"Notification 1")),u.default.createElement("li",null,u.default.createElement("a",{href:"#"},"Notification 2")),u.default.createElement("li",null,u.default.createElement("a",{href:"#"},"Notification 3")),u.default.createElement("li",null,u.default.createElement("a",{href:"#"},"Notification 4")),u.default.createElement("li",null,u.default.createElement("a",{href:"#"},"Another notification")))),u.default.createElement("li",null,u.default.createElement("a",{href:"#"},null==e?null:u.default.createElement("p",null,"Welcome ",e.username)))))))}}]),t}();t.default=(0,o.connect)(function(e){return{account:e.account}})(c)},155:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),l=c(r),u=n(34),o=c(n(61));function c(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={error:null,user:{username:""}},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidMount",value:function(){var e=this;this.props.fetchUsers({}).then(function(t){return e.props.currentUser()}).then(function(e){}).catch(function(e){console.log("ERROR: "+e.message)})}},{key:"updateUser",value:function(e,t){t&&t.preventDefault();var n=Object.assign({},this.state.user);n[e]=t.target.value,this.setState({user:n})}},{key:"submitUser",value:function(e){e&&e.preventDefault(),0!=this.state.user.username.length?this.props.addUser(this.state.user).then(function(e){}).catch(function(e){alert(e.message)}):alert("Please Enter a Username")}},{key:"loginUser",value:function(e){e&&e.preventDefault(),0!=this.state.user.username.length?null!=this.state.user.password?this.props.loginUser(this.state.user).then(function(e){console.log("LOGIN: "+JSON.stringify(e))}).catch(function(e){alert(e.message)}):alert("Please Enter a Password"):alert("Please Enter a Username")}},{key:"render",value:function(){var e=this.props.users.all||[];l.default.createElement("div",null,l.default.createElement("a",{target:"_blank",href:"https://www.velocity360.io/turbo"},"Join Turbo!"));return l.default.createElement("div",null,l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-md-6"},l.default.createElement("h3",{className:"topmargin-sm nobottommargin"},"Add User"),l.default.createElement("input",{className:"form-control",onChange:this.updateUser.bind(this,"username"),type:"text",placeholder:"username"}),l.default.createElement("br",null),l.default.createElement("input",{className:"form-control",onChange:this.updateUser.bind(this,"password"),type:"password",placeholder:"password"}),l.default.createElement("br",null),l.default.createElement("button",{className:"btn btn-info",onClick:this.submitUser.bind(this)},"Submit")),l.default.createElement("div",{className:"col-md-6"},l.default.createElement("h4",{className:"topmargin-sm nobottommargin"},"Current Users"),l.default.createElement("ol",{style:{paddingLeft:16}},e.map(function(e,t){return l.default.createElement("li",{key:e.id},e.username)})))),l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-md-6"},l.default.createElement("h3",{className:"topmargin-sm nobottommargin"},"Login User"),l.default.createElement("input",{className:"form-control",onChange:this.updateUser.bind(this,"username"),type:"text",placeholder:"username"}),l.default.createElement("br",null),l.default.createElement("input",{className:"form-control",onChange:this.updateUser.bind(this,"password"),type:"password",placeholder:"password"}),l.default.createElement("br",null),l.default.createElement("button",{className:"btn btn-info",onClick:this.loginUser.bind(this)},"Log In")),null==this.props.users.currentUser?null:l.default.createElement("div",{className:"col-md-6"},l.default.createElement("h4",{className:"topmargin-sm"},"Currently Logged In As: ",this.props.users.currentUser.username),l.default.createElement("button",{className:"btn btn-info"},"Log Out"))))}}]),t}();t.default=(0,u.connect)(function(e){return{users:e.user}},function(e){return{fetchUsers:function(t){return e(o.default.fetchUsers(t))},addUser:function(t){return e(o.default.addUser(t))},loginUser:function(t){return e(o.default.loginUser(t))},currentUser:function(){return e(o.default.currentUser())}}})(i)},156:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),l=f(r),u=n(86),o=f(n(153)),c=n(34),i=f(n(61)),s=f(n(94));function f(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={item:{}},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidMount",value:function(){this.props.fetchItems()}},{key:"updateItem",value:function(e,t){t.preventDefault(),console.log(e+" == "+t.target.value);var n=Object.assign({},this.state.item);n[e]=t.target.value,this.setState({item:n})}},{key:"addItem",value:function(){if(null!=this.props.account.currentUser){var e=this.props.account.currentUser,t=Object.assign({},this.state.item);t.position=this.props.map.currentLocation,t.seller={id:e.id,username:e.username,image:e.image||""},this.props.addItem(t).then(function(e){console.log("ITEM ADDER: "+JSON.stringify(e))}).catch(function(e){console.log("ERROR: "+err.message)})}else alert("Please log in or register to post spots bruh")}},{key:"uploadImage",value:function(e){var t=this,n=e[0];console.log("uploadImage: "+n.name),(0,s.default)({site_id:"5aa5c93aafdd120014d1e3af"}).uploadFile(n).then(function(e){var n=Object.assign({},t.state.item);n.image=e.result.url,t.setState({item:n})}).catch(function(e){console.log("Upload ERROR: "+e.message)})}},{key:"render",value:function(){var e=this.props.item.all||[];return l.default.createElement("div",{className:"container-fluid"},l.default.createElement("div",{className:"row"},e.map(function(e,t){return l.default.createElement(u.Item,{key:e.id,item:e})})),l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-md-4"},l.default.createElement("div",{className:"card"},l.default.createElement("div",{className:"content"},l.default.createElement("div",{className:"footer"},l.default.createElement("h3",null,"Add New Skate Spot"),l.default.createElement("input",{onChange:this.updateItem.bind(this,"name"),type:"text",style:p.input,className:"form-control",placeholder:"Name"}),l.default.createElement("input",{onChange:this.updateItem.bind(this,"price"),type:"text",style:p.input,className:"form-control",placeholder:"# for now not sure why i did this"}),null==this.state.item.image?null:l.default.createElement("img",{src:this.state.item.image+"=s120-c"}),l.default.createElement("hr",null),l.default.createElement("div",{className:"stats"},l.default.createElement(o.default,{onDrop:this.uploadImage.bind(this),className:"btn btn-info btn-fill",style:{marginRight:16}},"Add Pick"),l.default.createElement("button",{onClick:this.addItem.bind(this),className:"btn btn-success"},"Add Spot"))))))))}}]),t}(),p={input:{border:"1px solid #ddd",marginBottom:12}};t.default=(0,c.connect)(function(e){return{item:e.item,map:e.map,account:e.account}},function(e){return{addItem:function(t){return e(i.default.addItem(t))},fetchItems:function(t){return e(i.default.fetchItems(t))}}})(d)},157:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(12)),r=l(n(10));function l(e){return e&&e.__esModule?e:{default:e}}t.default={post:function(e,t,n){return function(l){return function(e,t){return new r.default(function(n,r){a.default.post(e).send(t).set("Accept","application/json").end(function(e,t){if(e)r(e);else{var a=t.body||t.text;n(a)}})})}(e,t).then(function(e){return null!=n&&l({type:n,data:e}),e}).catch(function(e){throw e})}},get:function(e,t,n){return function(l){return function(e,t){return new r.default(function(n,r){a.default.get(e).query(t).set("Accept","application/json").end(function(e,t){if(e)r(e);else{var a=t.body||t.text;n(a)}})})}(e,t).then(function(e){return null!=n&&l({type:n,data:e}),e}).catch(function(e){throw e})}}}},158:function(e){e.exports={name:"garage-sale",version:"0.0.0",server:!1,private:!0,scripts:{dev:"webpack --mode development -w",build:"npm run clean && NODE_ENV=production webpack -p && gulp prod",clean:"rm -rf ./public/dist",postinstall:"npm run build"},dependencies:{bluebird:"^3.5.1",debug:"^3.1.0",dotenv:"^5.0.1",moment:"^2.20.1",nodemon:"^1.17.1",react:"^16.2.0","react-bootstrap":"^0.32.1","react-dom":"^16.2.0","react-dropzone":"^4.2.8","react-google-maps":"^9.4.5","react-redux":"^5.0.7","react-time":"^4.3.0",redux:"^3.7.2","redux-thunk":"^2.2.0",superagent:"^3.8.2",turbo360:"latest",vertex360:"latest"},devDependencies:{"babel-core":"^6.26.0","babel-loader":"^7.1.3","babel-preset-env":"^1.6.1","babel-preset-react":"^6.24.1",chai:"^4.1.2","chai-http":"^3.0.0",gulp:"^3.9.1","gulp-6to5":"^3.0.0","gulp-autoprefixer":"^5.0.0","gulp-clean-css":"^3.9.2","gulp-concat":"^2.6.1","gulp-less":"^4.0.0","gulp-rename":"^1.2.2","gulp-sass":"^3.1.0","gulp-uglify":"^3.0.0","json-loader":"^0.5.7",mocha:"^5.0.1","mocha-jscs":"^5.0.1","mocha-jshint":"^2.3.1",rimraf:"^2.6.2","uglifyjs-webpack-plugin":"^1.2.2",webpack:"^4.1.1","webpack-cli":"^2.0.10"},app:"5aa5c93aafdd120014d1e3af",deploy:["."],format:"vertex"}},175:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(94));function r(e){return e&&e.__esModule?e:{default:e}}var l=r(n(158)).default.app||"";t.default={getRequest:function(e,t,n){return function(r){return(0,a.default)({site_id:l}).fetch(e,t).then(function(e){return null!=n&&r({type:n,params:t,data:e}),e}).catch(function(e){throw e})}},postRequest:function(e,t,n){return function(r){return(0,a.default)({site_id:l}).create(e,t).then(function(e){return null!=n&&r({type:n,data:e}),e}).catch(function(e){throw e})}},putRequest:function(e,t,n,r){return function(u){return(0,a.default)({site_id:l}).update(e,t,n).then(function(e){return null!=r&&u({type:r,data:e}),e}).catch(function(e){throw e})}},deleteRequest:function(e,t,n){return function(r){return(0,a.default)({site_id:l}).remove(e,t).then(function(e){return null!=n&&r({type:n,data:e}),e}).catch(function(e){throw e})}},createUser:function(e,t){return function(n){return(0,a.default)({site_id:l}).createUser(e).then(function(e){return null!=t&&n({type:t,data:e}),e}).catch(function(e){throw e})}},login:function(e,t){return function(n){return(0,a.default)({site_id:l}).login(e).then(function(e){return null!=t&&n({type:t,data:e}),e}).catch(function(e){throw e})}},currentUser:function(e){return function(t){return(0,a.default)({site_id:l}).currentUser().then(function(n){return null!=e&&t({type:e,data:n}),n}).catch(function(e){throw e})}},uploadFile:function(e){return(0,a.default)({site_id:l}).uploadFile(e)}}},176:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HTTPAsync=t.TurboClient=void 0;var a=l(n(175)),r=l(n(157));function l(e){return e&&e.__esModule?e:{default:e}}t.TurboClient=a.default,t.HTTPAsync=r.default},177:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),l=i(r),u=n(86),o=n(34),c=i(n(61));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={map:null},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidMount",value:function(){this.props.currentUser().then(function(e){console.log("CURREN USER: "+JSON.stringify(e))}).catch(function(e){})}},{key:"centerChanged",value:function(e){console.log("centerChaged: "+JSON.stringify(e)),this.props.locationChanged(e)}},{key:"render",value:function(){var e=this,t=[];return(this.props.item.all||[]).forEach(function(e,n){var a={key:e.id,label:e.name,position:e.position,defaultAnimation:2};t.push(a)}),l.default.createElement("div",{className:"sidebar-wrapper"},l.default.createElement(u.Map,{onMapReady:function(t){null==e.state.map&&(console.log("OnMapReady: "+JSON.stringify(t.getCenter())),e.setState({map:t}))},locationChanged:this.centerChanged.bind(this),markers:t,zoom:14,center:this.props.map.currentLocation,containerElement:l.default.createElement("div",{style:{height:"100%"}}),mapElement:l.default.createElement("div",{style:{height:"100vh"}})}))}}]),t}();t.default=(0,o.connect)(function(e){return{item:e.item,map:e.map}},function(e){return{locationChanged:function(t){return e(c.default.locationChanged(t))},currentUser:function(){return e(c.default.currentUser())}}})(s)},178:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Users=t.Nav=t.Results=t.Search=void 0;var a=o(n(177)),r=o(n(156)),l=o(n(155)),u=o(n(154));function o(e){return e&&e.__esModule?e:{default:e}}t.Search=a.default,t.Results=r.default,t.Nav=u.default,t.Users=l.default},374:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(0),o=(a=u)&&a.__esModule?a:{default:a},c=n(373);var i=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={map:null},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),l(t,[{key:"mapMoved",value:function(){null!=this.props.locationChanged&&this.props.locationChanged(this.state.map.getCenter())}},{key:"zoomChanged",value:function(){}},{key:"mapLoaded",value:function(e){null==this.state.map&&(this.props.onMapReady(e),this.setState({map:e}))}},{key:"handleMarkerClick",value:function(e){null!=this.props.markerClicked&&this.props.markerClicked(e,this.state.map)}},{key:"render",value:function(){var e=this,t=this.props.markers||[];return o.default.createElement(c.GoogleMap,{ref:this.mapLoaded.bind(this),onDragEnd:this.mapMoved.bind(this),onZoomChanged:this.zoomChanged.bind(this),defaultZoom:this.props.zoom,defaultCenter:this.props.center},t.map(function(t,n){return o.default.createElement(c.Marker,r({key:n,clickable:!0,icon:t.icon,label:t.label,title:t.key,onClick:e.handleMarkerClick.bind(e,t)},t))}))}}]),t}();t.default=(0,c.withGoogleMap)(i)},375:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),l=(a=r)&&a.__esModule?a:{default:a};t.default=function(e){var t=e.item;return l.default.createElement("div",{className:"col-lg-3 col-sm-6"},l.default.createElement("div",{className:"card"},l.default.createElement("div",{className:"content"},l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-xs-12"},l.default.createElement("div",{className:"numbers"},l.default.createElement("p",null,t.name),t.price)),l.default.createElement("div",{className:"col-xs-12"},l.default.createElement("img",{style:u.itemImage,src:t.image}))),l.default.createElement("div",{className:"footer"},l.default.createElement("hr",null),l.default.createElement("img",{style:u.icon,src:t.seller.image}),l.default.createElement("div",{className:"stats"},l.default.createElement("i",{className:"ti-rocket"}),t.seller.username)))))};var u={icon:{width:28,height:28,borderRadius:14,float:"right"},itemImage:{width:"100%",padding:3,border:"1px solid #F1EAE1"}}},376:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),l=(a=r)&&a.__esModule?a:{default:a};t.default=function(e){return l.default.createElement("footer",{className:"footer"},l.default.createElement("div",{className:"container-fluid"},l.default.createElement("nav",{className:"pull-left"},l.default.createElement("ul",null,l.default.createElement("li",null,l.default.createElement("a",{href:"http://www.creative-tim.com"},"Creative Tim")),l.default.createElement("li",null,l.default.createElement("a",{href:"http://blog.creative-tim.com"},"Blog")),l.default.createElement("li",null,l.default.createElement("a",{href:"http://www.creative-tim.com/license"},"Licenses")))),l.default.createElement("div",{className:"copyright pull-right"},"© 2018, made with ",l.default.createElement("i",{className:"fa fa-heart heart"})," by ",l.default.createElement("a",{href:"http://www.creative-tim.com"},"Creative Tim"))))}},377:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(0),u=(a=l)&&a.__esModule?a:{default:a},o=n(86),c=n(178);var i=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),r(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"wrapper"},u.default.createElement("div",{className:"sidebar","data-background-color":"white","data-active-color":"danger"},u.default.createElement(c.Search,null)),u.default.createElement("div",{className:"main-panel"},u.default.createElement(c.Nav,null),u.default.createElement("div",{className:"content"},u.default.createElement(c.Results,null)),u.default.createElement(o.Footer,null)))}}]),t}();t.default=i},381:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(39),l=(a=r)&&a.__esModule?a:{default:a};var u={currentUser:null};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1],n=Object.assign({},e);switch(t.type){case l.default.CURRENT_USER_RECEIVED:return console.log("CURRENT_USER_RECEIVED: "+JSON.stringify(t.data)),n.currentUser=t.data.user,n;default:return n}}},382:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(39),l=(a=r)&&a.__esModule?a:{default:a};var u={currentLocation:{lat:40.7224017,lng:-73.9896719}};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1],n=Object.assign({},e);switch(t.type){case l.default.LOCATION_CHANGED:return console.log("LOCATION_CHANGED: "+JSON.stringify(t.data)),n.currentLocation=t.data,n;default:return n}}},383:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(39),l=(a=r)&&a.__esModule?a:{default:a};var u={all:null};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1],n=Object.assign({},e);switch(t.type){case l.default.ITEM_ADDED:var a=t.data;console.log("ITEM ADDED: "+JSON.stringify(a.data));var r=Object.assign([],n.all);return r.push(a.data),n.all=r,n;case l.default.ITEMS_RECEIVED:return n.all=t.data.data,n;default:return n}}},384:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(39),l=(a=r)&&a.__esModule?a:{default:a};var u={all:null,currentUser:null};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1],n=Object.assign({},e);switch(t.type){case l.default.CURRENT_USER_RECEIVED:return n.currentUser=t.data,n;case l.default.USERS_RECEIVED:return n.all=t.data,n;case l.default.USER_CREATED:var a=n.all?Object.assign([],n.all):[];return a.unshift(t.data),n.all=a,n;default:return e}}},385:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.accountReducer=t.mapReducer=t.itemReducer=t.userReducer=void 0;var a=o(n(384)),r=o(n(383)),l=o(n(382)),u=o(n(381));function o(e){return e&&e.__esModule?e:{default:e}}t.userReducer=a.default,t.itemReducer=r.default,t.mapReducer=l.default,t.accountReducer=u.default},388:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r,l=n(88),u=n(386),o=(a=u)&&a.__esModule?a:{default:a},c=n(385);t.default={configure:function(e){var t=(0,l.combineReducers)({user:c.userReducer,item:c.itemReducer,map:c.mapReducer,account:c.accountReducer});return r=e?(0,l.createStore)(t,e,(0,l.applyMiddleware)(o.default)):(0,l.createStore)(t,(0,l.applyMiddleware)(o.default))},currentStore:function(){return r}}},39:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={LOCATION_CHANGED:"LOCATION_CHANGED",ITEM_ADDED:"ITEM_ADDED",ITEMS_RECEIVED:"ITEMS_RECEIVED",CURRENT_USER_RECEIVED:"CURRENT_USER_RECEIVED"}},398:function(e,t,n){"use strict";var a=c(n(0)),r=c(n(87)),l=c(n(388)),u=n(34),o=c(n(377));function c(e){return e&&e.__esModule?e:{default:e}}var i=a.default.createElement(u.Provider,{store:l.default.configure(null)},a.default.createElement(o.default,null));r.default.render(i,document.getElementById("root"))},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(39),l=(a=r)&&a.__esModule?a:{default:a},u=n(176);t.default={addItem:function(e){return function(t){return t(u.HTTPAsync.post("/api/item",e,l.default.ITEM_ADDED))}},fetchItems:function(e){return function(t){return t(u.HTTPAsync.get("/api/item",e,l.default.ITEMS_RECEIVED))}},locationChanged:function(e){return{type:l.default.LOCATION_CHANGED,data:e}},currentUser:function(){return function(e){return e(u.HTTPAsync.get("/auth/currentuser",null,l.default.CURRENT_USER_RECEIVED))}}}},86:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Map=t.Item=t.Footer=void 0;var a=u(n(376)),r=u(n(375)),l=u(n(374));function u(e){return e&&e.__esModule?e:{default:e}}t.Footer=a.default,t.Item=r.default,t.Map=l.default}});