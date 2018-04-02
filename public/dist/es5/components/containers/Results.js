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

var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var turbo = _interopRequire(require("turbo360"));

var Results = (function (Component) {
  function Results() {
    _classCallCheck(this, Results);

    _get(Object.getPrototypeOf(Results.prototype), "constructor", this).call(this);
    this.state = {
      item: {}
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
          alert("Please log in or register to post spots bruh");
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
    render: {
      value: function render() {
        var items = this.props.item.all || [];
        return React.createElement(
          "div",
          { className: "container-fluid" },
          React.createElement(
            "div",
            { className: "row" },
            items.map(function (item, i) {
              return React.createElement(Item, { key: item.id, item: item });
            })
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-md-4" },
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
                    React.createElement("input", { onChange: this.updateItem.bind(this, "price"), type: "text", style: localStyle.input, className: "form-control", placeholder: "# for now not sure why i did this" }),
                    this.state.item.image == null ? null : React.createElement("img", { src: this.state.item.image + "=s120-c" }),
                    React.createElement("hr", null),
                    React.createElement(
                      "div",
                      { className: "stats" },
                      React.createElement(
                        Dropzone,
                        { onDrop: this.uploadImage.bind(this), className: "btn btn-info btn-fill", style: { marginRight: 16 } },
                        "Add Pick"
                      ),
                      React.createElement(
                        "button",
                        { onClick: this.addItem.bind(this), className: "btn btn-success" },
                        "Add Spot"
                      )
                    )
                  )
                )
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
    }
  };
};

module.exports = connect(stateToProps, dispatchToProps)(Results);
// position: {lat:40.70224017, lng:-73.9796719}