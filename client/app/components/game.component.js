'use strict';

var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/gameActions');
var Link = require('react-router').Link;
var Question = require('./question.component');
var GameOver = require('./gameOverPage.component');

var gamePage = function(props) {
    if (props.currentQuestion == "GAME_OVER") {
        return (
            <GameOver tracks={props.tracks} />
        );
    } else if (props.currentQuestion) {
        return (
            <div className="game">
                <h1>5 Question Quiz</h1>
                <Question />
            </div>
        );
    } else {
        if (props.access_token) {
            props.dispatch(actions.getTracks(null, props.access_token));
            return (
                <div className="game">
                    <h3>Game</h3>
                    <h3>Loading...</h3>
                </div>
            ); 
        } else {
            return (
                <div className="game">
                    <h3>Game</h3>
                    <a className="btn btn-default" href="/login">LOGIN WITH SPOTIFY</a>
                </div>
            );
        }
    }

};

var mapStateToProps = function(state, props) {
    return {
    	access_token: state.user.access_token,
        tracks: state.game.tracks,
        currentQuestion: state.game.currentQuestion
    };
};

var Container = connect(mapStateToProps)(gamePage);

module.exports = Container;