// Import the page's CSS. Webpack will know what to do with it.
import "./stylesheets/app.css";
import "./stylesheets/em-unity-1.0.1.css";
import "./stylesheets/style.css";

// Import libraries we need.
import { default as Web3 } from 'web3';

import { default as contract } from 'truffle-contract'

// import contract from '../build/contracts/Contract.json'

import angular from 'angular';
import exampleContract from '../build/contracts/Contract.json'


var app = angular.module('app', ['ngRoute']);

var web3 = new Web3(new Web3.providers.HttpProvider("http://52.171.217.10:8545"));

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/partials/example.html",
            controller: "ExampleCtrl"
        });
});

app.controller('HomeCtrl', function ($scope, $rootScope, $compile) {
    $rootScope.web3 = web3;
    $rootScope.ExampleContract = contract(exampleContract);

});

