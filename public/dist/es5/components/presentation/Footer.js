"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
module.exports = function (props) {
    return React.createElement(
        "footer",
        { className: "footer" },
        React.createElement(
            "div",
            { className: "container-fluid" },
            React.createElement(
                "nav",
                { className: "pull-left" },
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "https://www.turbo360.co/" },
                            "Props to TURBO 360!!"
                        )
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "copyright pull-right" },
                "© 2018, made with ",
                React.createElement("i", { className: "fa fa-heart heart" }),
                " by ",
                React.createElement(
                    "a",
                    { href: "" },
                    "Jonathan Aquarone"
                )
            )
        )
    );
};