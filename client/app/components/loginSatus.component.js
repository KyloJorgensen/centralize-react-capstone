'use strict';

var React = require('react');

var loginStatus= function(props) {
    if (props.status) {
        return (
            <div className="login-status">
                <a className="btn btn-default" href="/">Logout</a>
            </div>
        );
    } else {
        return (
            <div className="login-status">
                <a className="btn btn-default" href="/login">Log in with Spotify</a>
            </div>
        ); 
    }
};

module.exports = loginStatus;