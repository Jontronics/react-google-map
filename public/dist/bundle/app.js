!function(e){function t(t){for(var r,o,l=t[0],c=t[1],s=t[2],f=0,d=[];f<l.length;f++)o=l[f],a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(i&&i(t);d.length;)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={1:0},u=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var i=c;u.push([468,0]),n()}({115:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Map=t.Item=t.Footer=void 0;var r=o(n(446)),a=o(n(445)),u=o(n(444));function o(e){return e&&e.__esModule?e:{default:e}}t.Footer=r.default,t.Item=a.default,t.Map=u.default},195:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),o=(r=u)&&r.__esModule?r:{default:r},l=n(54);var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),a(t,[{key:"render",value:function(){var e=this.props.account.currentUser;return o.default.createElement("nav",{className:"navbar navbar-default"},o.default.createElement("div",{className:"container-fluid"},o.default.createElement("div",{className:"navbar-header"},o.default.createElement("button",{type:"button",className:"navbar-toggle"},o.default.createElement("span",{className:"sr-only"},"Toggle navigation"),o.default.createElement("span",{className:"icon-bar bar1"}),o.default.createElement("span",{className:"icon-bar bar2"}),o.default.createElement("span",{className:"icon-bar bar3"})),o.default.createElement("a",{className:"navbar-brand"},"Skate.spots")),o.default.createElement("div",{className:"collapse navbar-collapse"},o.default.createElement("ul",{className:"nav navbar-nav navbar-right"},o.default.createElement("li",null,o.default.createElement("a",{href:"#"}," ",null==e?null:o.default.createElement("p",null,"Welcome ",e.username)," "))))))}}]),t}();t.default=(0,l.connect)(function(e){return{account:e.account}})(c)},196:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),u=c(a),o=n(54),l=c(n(90));function c(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={error:null,user:{username:""}},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"componentDidMount",value:function(){var e=this;this.props.fetchUsers({}).then(function(t){return e.props.currentUser()}).then(function(e){}).catch(function(e){console.log("ERROR: "+e.message)})}},{key:"updateUser",value:function(e,t){t&&t.preventDefault();var n=Object.assign({},this.state.user);n[e]=t.target.value,this.setState({user:n})}},{key:"submitUser",value:function(e){e&&e.preventDefault(),0!=this.state.user.username.length?this.props.addUser(this.state.user).then(function(e){}).catch(function(e){alert(e.message)}):alert("Please Enter a Username")}},{key:"loginUser",value:function(e){e&&e.preventDefault(),0!=this.state.user.username.length?null!=this.state.user.password?this.props.loginUser(this.state.user).then(function(e){console.log("LOGIN: "+JSON.stringify(e))}).catch(function(e){alert(e.message)}):alert("Please Enter a Password"):alert("Please Enter a Username")}},{key:"render",value:function(){var e=this.props.users.all||[];u.default.createElement("div",null,u.default.createElement("a",{target:"_blank",href:"https://www.velocity360.io/turbo"},"Join Turbo!"));return u.default.createElement("div",null,u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-md-6"},u.default.createElement("h3",{className:"topmargin-sm nobottommargin"},"Add User"),u.default.createElement("input",{className:"form-control",onChange:this.updateUser.bind(this,"username"),type:"text",placeholder:"username"}),u.default.createElement("br",null),u.default.createElement("input",{className:"form-control",onChange:this.updateUser.bind(this,"password"),type:"password",placeholder:"password"}),u.default.createElement("br",null),u.default.createElement("button",{className:"btn btn-info",onClick:this.submitUser.bind(this)},"Submit")),u.default.createElement("div",{className:"col-md-6"},u.default.createElement("h4",{className:"topmargin-sm nobottommargin"},"Current Users"),u.default.createElement("ol",{style:{paddingLeft:16}},e.map(function(e,t){return u.default.createElement("li",{key:e.id},e.username)})))),u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-md-6"},u.default.createElement("h3",{className:"topmargin-sm nobottommargin"},"Login User"),u.default.createElement("input",{className:"form-control",onChange:this.updateUser.bind(this,"username"),type:"text",placeholder:"username"}),u.default.createElement("br",null),u.default.createElement("input",{className:"form-control",onChange:this.updateUser.bind(this,"password"),type:"password",placeholder:"password"}),u.default.createElement("br",null),u.default.createElement("button",{className:"btn btn-info",onClick:this.loginUser.bind(this)},"Log In")),null==this.props.users.currentUser?null:u.default.createElement("div",{className:"col-md-6"},u.default.createElement("h4",{className:"topmargin-sm"},"Currently Logged In As: ",this.props.users.currentUser.username),u.default.createElement("button",{className:"btn btn-info"},"Log Out"))))}}]),t}();t.default=(0,o.connect)(function(e){return{users:e.user}},function(e){return{fetchUsers:function(t){return e(l.default.fetchUsers(t))},addUser:function(t){return e(l.default.addUser(t))},loginUser:function(t){return e(l.default.loginUser(t))},currentUser:function(){return e(l.default.currentUser())}}})(s)},229:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),u=d(a),o=n(115),l=d(n(193)),c=n(194),s=n(54),i=d(n(90)),f=d(n(136));function d(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={showModal:!1,item:{},order:{}},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"componentDidMount",value:function(){this.props.fetchItems()}},{key:"updateItem",value:function(e,t){t.preventDefault(),console.log(e+" == "+t.target.value);var n=Object.assign({},this.state.item);n[e]=t.target.value,this.setState({item:n})}},{key:"addItem",value:function(){if(null!=this.props.account.currentUser){var e=this.props.account.currentUser,t=Object.assign({},this.state.item);t.position=this.props.map.currentLocation,t.seller={id:e.id,username:e.username,image:e.image||""},this.props.addItem(t).then(function(e){console.log("ITEM ADDER: "+JSON.stringify(e))}).catch(function(e){console.log("ERROR: "+err.message)})}else alert("Please log in or register to post spots bruh")}},{key:"uploadImage",value:function(e){var t=this,n=e[0];console.log("uploadImage: "+n.name),(0,f.default)({site_id:"5aa5c93aafdd120014d1e3af"}).uploadFile(n).then(function(e){var n=Object.assign({},t.state.item);n.image=e.result.url,t.setState({item:n})}).catch(function(e){console.log("Upload ERROR: "+e.message)})}},{key:"onPurchase",value:function(e,t){t.preventDefault(),this.setState({showModal:!0}),console.log("onPurchase: "+JSON.stringify(e))}},{key:"updateOrder",value:function(e){console.log("updateOrder: "+e.target.value);var t=Object.assign({},this.state.order);t.message=e.target.value,this.setState({order:t})}},{key:"submitOrder",value:function(){var e=this,t=Object.assign({},this.state.order);t.item=this.state.selectedItem,t.buyer={id:this.props.account.currentUser.id,username:this.props.account.currentUser.username,email:this.props.account.currentUser.email},this.props.submitOrder(t).then(function(n){var r={fromemail:"j.aquarone@gmail.com",fromname:"j.aquarone",subject:"You got a new message",content:t.message,recipient:"j.aquarone@gmail.com"};return e.props.sendEmail(r)}).then(function(t){alert("You have sent a message!"),e.setState({showModal:!1})}).catch(function(e){alert("OOPS: "+e.message)})}},{key:"render",value:function(){var e=this,t=this.props.item.all||[];return u.default.createElement("div",{className:"container-fluid"},u.default.createElement("div",{className:"row"},t.map(function(t,n){return u.default.createElement(o.Item,{key:t.id,onPurchase:e.onPurchase.bind(e,t),item:t})})),u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-md-6"},u.default.createElement("div",{className:"card"},u.default.createElement("div",{className:"content"},u.default.createElement("div",{className:"footer"},u.default.createElement("h3",null,"Add New Skate Spot"),u.default.createElement("input",{onChange:this.updateItem.bind(this,"name"),type:"text",style:m.input,className:"form-control",placeholder:"Name"}),null==this.state.item.image?null:u.default.createElement("img",{src:this.state.item.image+"=s120-c"}),u.default.createElement("hr",null),u.default.createElement("div",{className:"stats"},u.default.createElement(l.default,{onDrop:this.uploadImage.bind(this),className:"btn btn-success",style:{marginRight:36}},"Add Pick"),u.default.createElement("button",{onClick:this.addItem.bind(this),className:"btn btn-outlined btn-primary",style:{borderRadius:0}},"Add Spot"))))))),u.default.createElement(c.Modal,{bsSize:"mg",show:this.state.showModal,onHide:function(){e.setState({showModal:!1})}},u.default.createElement(c.Modal.Body,{style:m.modal},u.default.createElement("h3",null," Send a request message for spot location "),u.default.createElement("hr",null),u.default.createElement("textarea",{onChange:this.updateOrder.bind(this),style:m.textarea,placeholder:"Enter Message Here",className:"form-control"}),u.default.createElement("button",{onClick:this.submitOrder.bind(this),className:"btn btn-success btn-fill"},"Send Message!"))))}}]),t}(),m={input:{border:"1px solid #ddd",marginBottom:12},textarea:{border:"1px solid #ddd",height:160,marginBottom:16}};t.default=(0,s.connect)(function(e){return{item:e.item,map:e.map,account:e.account}},function(e){return{addItem:function(t){return e(i.default.addItem(t))},fetchItems:function(t){return e(i.default.fetchItems(t))},submitOrder:function(t){return e(i.default.submitOrder(t))},sendEmail:function(t){return e(i.default.sendEmail(t))}}})(p)},230:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(22)),a=u(n(19));function u(e){return e&&e.__esModule?e:{default:e}}t.default={post:function(e,t,n){return function(u){return function(e,t){return new a.default(function(n,a){r.default.post(e).send(t).set("Accept","application/json").end(function(e,t){if(e)a(e);else{var r=t.body||t.text;n(r)}})})}(e,t).then(function(e){return null!=n&&u({type:n,data:e}),e}).catch(function(e){throw e})}},get:function(e,t,n){return function(u){return function(e,t){return new a.default(function(n,a){r.default.get(e).query(t).set("Accept","application/json").end(function(e,t){if(e)a(e);else{var r=t.body||t.text;n(r)}})})}(e,t).then(function(e){return null!=n&&u({type:n,data:e}),e}).catch(function(e){throw e})}}}},231:function(e){e.exports={name:"garage-sale",version:"0.0.0",server:!1,private:!0,scripts:{dev:"webpack --mode development -w",build:"npm run clean && NODE_ENV=production webpack -p && gulp prod",clean:"rm -rf ./public/dist",postinstall:"npm run build"},dependencies:{bluebird:"^3.5.1",debug:"^3.1.0",dotenv:"^5.0.1",moment:"^2.20.1",nodemon:"^1.17.1",react:"^16.2.0","react-bootstrap":"^0.32.1","react-dom":"^16.2.0","react-dropzone":"^4.2.8","react-google-maps":"^9.4.5","react-redux":"^5.0.7","react-time":"^4.3.0",redux:"^3.7.2","redux-thunk":"^2.2.0",superagent:"^3.8.2",turbo360:"latest",vertex360:"latest"},devDependencies:{"babel-core":"^6.26.0","babel-loader":"^7.1.3","babel-preset-env":"^1.6.1","babel-preset-react":"^6.24.1",chai:"^4.1.2","chai-http":"^3.0.0",gulp:"^3.9.1","gulp-6to5":"^3.0.0","gulp-autoprefixer":"^5.0.0","gulp-clean-css":"^3.9.2","gulp-concat":"^2.6.1","gulp-less":"^4.0.0","gulp-rename":"^1.2.2","gulp-sass":"^3.1.0","gulp-uglify":"^3.0.0","json-loader":"^0.5.7",mocha:"^5.0.1","mocha-jscs":"^5.0.1","mocha-jshint":"^2.3.1",rimraf:"^2.6.2","uglifyjs-webpack-plugin":"^1.2.2",webpack:"^4.1.1","webpack-cli":"^2.0.10"},app:"5aa5c93aafdd120014d1e3af",deploy:["."],format:"vertex"}},248:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(136));function a(e){return e&&e.__esModule?e:{default:e}}var u=a(n(231)).default.app||"";t.default={getRequest:function(e,t,n){return function(a){return(0,r.default)({site_id:u}).fetch(e,t).then(function(e){return null!=n&&a({type:n,params:t,data:e}),e}).catch(function(e){throw e})}},postRequest:function(e,t,n){return function(a){return(0,r.default)({site_id:u}).create(e,t).then(function(e){return null!=n&&a({type:n,data:e}),e}).catch(function(e){throw e})}},putRequest:function(e,t,n,a){return function(o){return(0,r.default)({site_id:u}).update(e,t,n).then(function(e){return null!=a&&o({type:a,data:e}),e}).catch(function(e){throw e})}},deleteRequest:function(e,t,n){return function(a){return(0,r.default)({site_id:u}).remove(e,t).then(function(e){return null!=n&&a({type:n,data:e}),e}).catch(function(e){throw e})}},createUser:function(e,t){return function(n){return(0,r.default)({site_id:u}).createUser(e).then(function(e){return null!=t&&n({type:t,data:e}),e}).catch(function(e){throw e})}},login:function(e,t){return function(n){return(0,r.default)({site_id:u}).login(e).then(function(e){return null!=t&&n({type:t,data:e}),e}).catch(function(e){throw e})}},currentUser:function(e){return function(t){return(0,r.default)({site_id:u}).currentUser().then(function(n){return null!=e&&t({type:e,data:n}),n}).catch(function(e){throw e})}},uploadFile:function(e){return(0,r.default)({site_id:u}).uploadFile(e)}}},249:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HTTPAsync=t.TurboClient=void 0;var r=u(n(248)),a=u(n(230));function u(e){return e&&e.__esModule?e:{default:e}}t.TurboClient=r.default,t.HTTPAsync=a.default},250:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),u=s(a),o=n(115),l=n(54),c=s(n(90));function s(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={map:null},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"componentDidMount",value:function(){this.props.currentUser().then(function(e){console.log("CURREN USER: "+JSON.stringify(e))}).catch(function(e){})}},{key:"centerChanged",value:function(e){console.log("centerChaged: "+JSON.stringify(e)),this.props.locationChanged(e)}},{key:"render",value:function(){var e=this,t=[];return(this.props.item.all||[]).forEach(function(e,n){var r={key:e.id,label:e.name,position:e.position,defaultAnimation:2};t.push(r)}),u.default.createElement("div",{className:"sidebar-wrapper"},u.default.createElement(o.Map,{onMapReady:function(t){null==e.state.map&&(console.log("OnMapReady: "+JSON.stringify(t.getCenter())),e.setState({map:t}))},locationChanged:this.centerChanged.bind(this),markers:t,zoom:14,center:this.props.map.currentLocation,containerElement:u.default.createElement("div",{style:{height:"100%"}}),mapElement:u.default.createElement("div",{style:{height:"100vh"}})}))}}]),t}();t.default=(0,l.connect)(function(e){return{item:e.item,map:e.map}},function(e){return{locationChanged:function(t){return e(c.default.locationChanged(t))},currentUser:function(){return e(c.default.currentUser())}}})(i)},251:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Users=t.Nav=t.Results=t.Search=void 0;var r=l(n(250)),a=l(n(229)),u=l(n(196)),o=l(n(195));function l(e){return e&&e.__esModule?e:{default:e}}t.Search=r.default,t.Results=a.default,t.Nav=o.default,t.Users=u.default},444:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),l=(r=o)&&r.__esModule?r:{default:r},c=n(443);var s=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={map:null},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),u(t,[{key:"mapMoved",value:function(){null!=this.props.locationChanged&&this.props.locationChanged(this.state.map.getCenter())}},{key:"zoomChanged",value:function(){}},{key:"mapLoaded",value:function(e){null==this.state.map&&(this.props.onMapReady(e),this.setState({map:e}))}},{key:"handleMarkerClick",value:function(e){null!=this.props.markerClicked&&this.props.markerClicked(e,this.state.map)}},{key:"render",value:function(){var e=this,t=this.props.markers||[];return l.default.createElement(c.GoogleMap,{ref:this.mapLoaded.bind(this),onDragEnd:this.mapMoved.bind(this),onZoomChanged:this.zoomChanged.bind(this),defaultZoom:this.props.zoom,defaultCenter:this.props.center},t.map(function(t,n){return l.default.createElement(c.Marker,a({key:n,clickable:!0,icon:t.icon,label:t.label,title:t.key,onClick:e.handleMarkerClick.bind(e,t)},t))}))}}]),t}();t.default=(0,c.withGoogleMap)(s)},445:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(1),u=(r=a)&&r.__esModule?r:{default:r};t.default=function(e){var t=e.item;return u.default.createElement("div",{className:"col-lg-6 col-sm-6"},u.default.createElement("div",{className:"card"},u.default.createElement("div",{className:"content"},u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-xs-12"},u.default.createElement("div",{className:"numbers"},u.default.createElement("p",null,t.name),t.price)),u.default.createElement("div",{className:"col-xs-12"},u.default.createElement("a",{href:"#"},u.default.createElement("img",{style:o.itemImage,src:t.image})))),u.default.createElement("div",{className:"footer"},u.default.createElement("hr",null),u.default.createElement("img",{style:o.icon}),u.default.createElement("div",{className:"stats"},u.default.createElement("i",{className:"ti-rocket"}),t.seller.username),u.default.createElement("button",{onClick:e.onPurchase.bind(void 0),className:"btn btn-success btn-outlined btn-primary",style:{borderRadius:0,float:"right",padding:5}},"send a message")))))};var o={itemImage:{width:"100%",padding:3,border:"1px solid #F1EAE1",marginBottom:12}}},446:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(1),u=(r=a)&&r.__esModule?r:{default:r};t.default=function(e){return u.default.createElement("footer",{className:"footer"},u.default.createElement("div",{className:"container-fluid"},u.default.createElement("nav",{className:"pull-left"},u.default.createElement("ul",null,u.default.createElement("li",null,u.default.createElement("a",{href:"https://www.turbo360.co/"},"Props to TURBO 360!!")))),u.default.createElement("div",{className:"copyright pull-right"},"© 2018, made with ",u.default.createElement("i",{className:"fa fa-heart heart"})," by ",u.default.createElement("a",{href:""},"Jonathan Aquarone"))))}},447:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),o=(r=u)&&r.__esModule?r:{default:r},l=n(115),c=n(251);var s=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),a(t,[{key:"render",value:function(){return o.default.createElement("div",{className:"wrapper"},o.default.createElement("div",{className:"sidebar","data-background-color":"white","data-active-color":"danger"},o.default.createElement(c.Search,null)),o.default.createElement("div",{className:"main-panel"},o.default.createElement(c.Nav,null),o.default.createElement("div",{className:"content"},o.default.createElement(c.Results,null)),o.default.createElement(l.Footer,null)))}}]),t}();t.default=s},451:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(61),u=(r=a)&&r.__esModule?r:{default:r};var o={currentUser:null};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1],n=Object.assign({},e);switch(t.type){case u.default.CURRENT_USER_RECEIVED:return console.log("CURRENT_USER_RECEIVED: "+JSON.stringify(t.data)),n.currentUser=t.data.user,n;default:return n}}},452:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(61),u=(r=a)&&r.__esModule?r:{default:r};var o={currentLocation:{lat:40.7224017,lng:-73.9896719}};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1],n=Object.assign({},e);switch(t.type){case u.default.LOCATION_CHANGED:return console.log("LOCATION_CHANGED: "+JSON.stringify(t.data)),n.currentLocation=t.data,n;default:return n}}},453:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(61),u=(r=a)&&r.__esModule?r:{default:r};var o={all:null};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1],n=Object.assign({},e);switch(t.type){case u.default.ITEM_ADDED:var r=t.data;console.log("ITEM ADDED: "+JSON.stringify(r.data));var a=Object.assign([],n.all);return a.unshift(r.data),n.all=a,n;case u.default.ITEMS_RECEIVED:return n.all=t.data.data,n;default:return n}}},454:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(61),u=(r=a)&&r.__esModule?r:{default:r};var o={all:null,currentUser:null};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1],n=Object.assign({},e);switch(t.type){case u.default.CURRENT_USER_RECEIVED:return n.currentUser=t.data,n;case u.default.USERS_RECEIVED:return n.all=t.data,n;case u.default.USER_CREATED:var r=n.all?Object.assign([],n.all):[];return r.unshift(t.data),n.all=r,n;default:return e}}},455:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.accountReducer=t.mapReducer=t.itemReducer=t.userReducer=void 0;var r=l(n(454)),a=l(n(453)),u=l(n(452)),o=l(n(451));function l(e){return e&&e.__esModule?e:{default:e}}t.userReducer=r.default,t.itemReducer=a.default,t.mapReducer=u.default,t.accountReducer=o.default},458:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a,u=n(116),o=n(456),l=(r=o)&&r.__esModule?r:{default:r},c=n(455);t.default={configure:function(e){var t=(0,u.combineReducers)({user:c.userReducer,item:c.itemReducer,map:c.mapReducer,account:c.accountReducer});return a=e?(0,u.createStore)(t,e,(0,u.applyMiddleware)(l.default)):(0,u.createStore)(t,(0,u.applyMiddleware)(l.default))},currentStore:function(){return a}}},468:function(e,t,n){"use strict";var r=c(n(1)),a=c(n(9)),u=c(n(458)),o=n(54),l=c(n(447));function c(e){return e&&e.__esModule?e:{default:e}}var s=r.default.createElement(o.Provider,{store:u.default.configure(null)},r.default.createElement(l.default,null));a.default.render(s,document.getElementById("root"))},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={LOCATION_CHANGED:"LOCATION_CHANGED",ITEM_ADDED:"ITEM_ADDED",ITEMS_RECEIVED:"ITEMS_RECEIVED",CURRENT_USER_RECEIVED:"CURRENT_USER_RECEIVED"}},90:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(61),u=(r=a)&&r.__esModule?r:{default:r},o=n(249);t.default={addItem:function(e){return function(t){return t(o.HTTPAsync.post("/api/item",e,u.default.ITEM_ADDED))}},fetchItems:function(e){return function(t){return t(o.HTTPAsync.get("/api/item",e,u.default.ITEMS_RECEIVED))}},submitOrder:function(e){return function(t){return t(o.HTTPAsync.post("/api/order",e,null))}},sendEmail:function(e){return function(t){return t(o.HTTPAsync.post("/email/send",e,null))}},locationChanged:function(e){return{type:u.default.LOCATION_CHANGED,data:e}},currentUser:function(){return function(e){return e(o.HTTPAsync.get("/auth/currentuser",null,u.default.CURRENT_USER_RECEIVED))}}}}});