'use strict';
require('dotenv').load();
require("lambda-git")();
const git = require('simple-git/promise');

const USER = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

const REPO_COMMON = process.env.REPO_COMMON;
const REPO_DATA = process.env.REPO_DATA;
const REPO_API = process.env.REPO_API;
const REPO_ACQUISITION = process.env.REPO_ACQUISITION;
const REPO_PHOENIX = process.env.REPO_PHOENIX;

const common = `https://${USER}:${PASSWORD}@${REPO_COMMON}`;
const data = `https://${USER}:${PASSWORD}@${REPO_DATA}`;
const api = `https://${USER}:${PASSWORD}@${REPO_API}`;
const acquisition = `https://${USER}:${PASSWORD}@${REPO_ACQUISITION}`;
const phoenix = `https://${USER}:${PASSWORD}@${REPO_PHOENIX}`;



git()
    .silent(true)
    .clone(common,'./temp/common')
    .then(() => {
        console.log('Repo Common cloned')
    });

git()
    .checkout(['staging'])
    .then(() => {
        console.log('Checkout staging');
    });
git()
    .merge(['master'])
    .then(() => {
        console.log('Merging master with staging')
    });
git()
    .push(common,'staging');


