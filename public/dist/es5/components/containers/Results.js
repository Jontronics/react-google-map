"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Item = require("../presentation").Item;
var Dropzone = _interopRequire(require("react-dropzone"));

var Modal = require("react-bootstrap").Modal;
var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var turbo = _interopRequire(require("turbo360"));

var swal = _interopRequire(require("sweetalert"));

var Results = (function (Component) {
  function Results() {
    _classCallCheck(this, Results);

    _get(Object.getPrototypeOf(Results.prototype), "constructor", this).call(this);
    this.state = {
      showModal: false,
      item: {},
      order: {}

    };
  }

  _inherits(Results, Component);

  _prototypeProperties(Results, null, {
    componentDidMount: {
      value: function componentDidMount() {
        this.props.fetchItems();
      },
      writable: true,
      configurable: true
    },
    updateItem: {
      value: function updateItem(attr, event) {
        event.preventDefault();
        console.log(attr + " == " + event.target.value);
        var updated = Object.assign({}, this.state.item);
        updated[attr] = event.target.value;
        this.setState({
          item: updated
        });
      },
      writable: true,
      configurable: true
    },
    addItem: {
      value: function addItem() {
        if (this.props.account.currentUser == null) {
          // swal("Hello world!")
          alert("Please log in or register to post spots bruh");
          if (window.confirm) {
            window.location = "/auth";
          }
          return;
        }

        var currentUser = this.props.account.currentUser;
        var updated = Object.assign({}, this.state.item);
        updated.position = this.props.map.currentLocation;
        updated.seller = {
          id: currentUser.id,
          username: currentUser.username,
          image: currentUser.image || ""
        };

        // console.log('ADD ITEM: ' + JSON.stringify(updated))
        this.props.addItem(updated).then(function (data) {
          console.log("ITEM ADDER: " + JSON.stringify(data));
        })["catch"](function (er) {
          console.log("ERROR: " + err.message);
        });
      },
      writable: true,
      configurable: true
    },
    uploadImage: {
      value: function uploadImage(files) {
        var _this = this;
        var image = files[0];
        console.log("uploadImage: " + image.name);
        var turboClient = turbo({
          site_id: "5aa5c93aafdd120014d1e3af"
        });

        turboClient.uploadFile(image).then(function (data) {
          // console.log('FILE UPLOADED: ' + data.result.url)
          var updated = Object.assign({}, _this.state.item);
          updated.image = data.result.url;
          _this.setState({
            item: updated
          });
        })["catch"](function (err) {
          console.log("Upload ERROR: " + err.message);
        });
      },
      writable: true,
      configurable: true
    },
    onPurchase: {
      value: function onPurchase(item, event) {
        event.preventDefault();
        this.setState({
          showModal: true
        });
        console.log("onPurchase: " + JSON.stringify(item));
      },
      writable: true,
      configurable: true
    },
    updateOrder: {
      value: function updateOrder(event) {
        console.log("updateOrder: " + event.target.value);
        var updated = Object.assign({}, this.state.order);
        updated.message = event.target.value;
        this.setState({
          order: updated
        });
      },
      writable: true,
      configurable: true
    },
    submitOrder: {
      value: function submitOrder() {
        var _this = this;
        var updated = Object.assign({}, this.state.order);
        updated.item = this.state.selectedItem;

        updated.buyer = {
          id: this.props.account.currentUser.id,
          username: this.props.account.currentUser.username,
          email: this.props.account.currentUser.email
        };

        // console.log('submitOrder: ' + JSON.stringify(updated))
        this.props.submitOrder(updated).then(function (data) {
          // alert('You have sent a message!')
          // this.setState({
          //   showModal: false
          // }) 
          var email = {
            fromemail: "jonskatapp@gmail.com",
            fromname: "jonskatapp@gmail.com",
            subject: "You got a new message",
            content: updated.message,
            recipient: "jonskatapp@gmail.com"

          };

          return _this.props.sendEmail(email);
        }).then(function (data) {
          alert("You have sent a message!");
          _this.setState({
            showModal: false
          });
        })["catch"](function (err) {
          alert("OOPS: " + err.message);
        });
      },
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        var _this = this;
        var items = this.props.item.all || [];
        return React.createElement(
          "div",
          { className: "container-fluid" },
          React.createElement(
            "div",
            { className: "row" },
            items.map(function (item, i) {
              return React.createElement(Item, { key: item.id, onPurchase: _this.onPurchase.bind(_this, item), item: item });
            })
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-md-6" },
              React.createElement(
                "div",
                { className: "card" },
                React.createElement(
                  "div",
                  { className: "content" },
                  React.createElement(
                    "div",
                    { className: "footer" },
                    React.createElement(
                      "h3",
                      null,
                      "Add New Skate Spot"
                    ),
                    React.createElement("input", { onChange: this.updateItem.bind(this, "name"), type: "text", style: localStyle.input, className: "form-control", placeholder: "Name" }),
                    this.state.item.image == null ? null : React.createElement("img", { src: this.state.item.image + "=s120-c" }),
                    React.createElement("hr", null),
                    React.createElement(
                      "div",
                      { className: "stats" },
                      React.createElement(
                        Dropzone,
                        { onDrop: this.uploadImage.bind(this), className: "btn btn-success", style: { marginRight: 36 } },
                        "Add Pick"
                      ),
                      React.createElement(
                        "button",
                        { onClick: this.addItem.bind(this), className: "btn btn-outlined btn-primary", style: { borderRadius: 0 } },
                        "Add Spot"
                      )
                    )
                  )
                )
              )
            )
          ),
          React.createElement(
            Modal,
            { bsSize: "mg", show: this.state.showModal, onHide: function () {
                _this.setState({ showModal: false });
              } },
            React.createElement(
              Modal.Body,
              { style: localStyle.modal },
              React.createElement(
                "h3",
                null,
                " Send a request message for spot location "
              ),
              React.createElement("hr", null),
              React.createElement("textarea", { id: "textarea", method: "POST", action: "send", onChange: this.updateOrder.bind(this), style: localStyle.textarea, placeholder: "Enter Message Here", className: "form-control" }),
              React.createElement(
                "button",
                { type: "submit", onClick: this.submitOrder.bind(this), className: "btn btn-success btn-fill" },
                "Send Message!"
              )
            )
          )
        );
      },
      writable: true,
      configurable: true
    }
  });

  return Results;
})(Component);

var localStyle = {
  input: {
    border: "1px solid #ddd",
    marginBottom: 12
  },
  textarea: {
    border: "1px solid #ddd",
    height: 160,
    marginBottom: 16
  }
};

var stateToProps = function (state) {
  return {
    item: state.item,
    map: state.map,
    account: state.account
  };
};

var dispatchToProps = function (dispatch) {
  return {
    addItem: function (item) {
      return dispatch(actions.addItem(item));
    },
    fetchItems: function (params) {
      return dispatch(actions.fetchItems(params));
    },
    submitOrder: function (order) {
      return dispatch(actions.submitOrder(order));
    },
    sendEmail: function (email) {
      return dispatch(actions.sendEmail(email));
    }

  };
};

module.exports = connect(stateToProps, dispatchToProps)(Results);
// position: {lat:40.70224017, lng:-73.9796719}
// this.setState({
//   showModal: false
// })