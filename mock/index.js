const express = require('express');

const router = express.Router({
    prefix: '/v1.0'
});
module.exports = router;

const result = require('./resultBuilder');

router
    .post('/build', (req, res) => {
        res.end(result.buildSuccessResult('/build'));
    // res.end(result.buildErrorResult(100001000));
    })
    .post('/entry', (req, res) => {
        res.end(result.buildSuccessResult('/entry'));
    // res.end(result.buildErrorResult(100001000));
    })
    .post('/info', (req, res) => {
        res.writeHead(200, {'Content-type': 'text/json; charset=UTF-8'});
        res.end(result.buildSuccessResult('/info'));
    // res.end(result.buildErrorResult(100001000));
    })
    .post('/tools', (req, res) => {
        res.end(result.buildSuccessResult('/tools'));
    // res.end(rsult.buildErrorResult(100001000));
    })
    .post('/chat', (req, res) => {
        res.end(result.buildSuccessResult('/chat'));
    // res.end(result.buildErrorResult(100001000));
    })
    .post('/sroom/chat_record', (req, res) => {
        res.end(result.buildSuccessResult('/chat_record'));
    // res.end(result.buildErrorResult(100001000));
    })
    .post('/reward', (req, res) => {
        res.end(result.buildSuccessResult('/reward'));
    // res.end(result.buildErrorResult(100001000));
    })
    .post('/leave', (req, res) => {
        res.end(result.buildSuccessResult('/leave'));
    // res.end(result.buildErrorResult(100001000));
    })
    .post('/private_chat', (req, res) => {
        res.end(result.buildSuccessResult('/private_chat'));
    // res.end(result.buildErrorResult(100001000));
    })
    .post('/private_chat_record', (req, res) => {
        res.end(result.buildSuccessResult('/private_chat_record'));
    // res.end(result.buildErrorResult(100001000));
    });
