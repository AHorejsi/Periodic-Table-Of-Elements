"use strict";


var angular = require("angular");
var app = angular.module("mainApp");

app.controller("mainController", function($scope) {
    $scope.rowNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    $scope.columnNumbers = [1, 2, 3, 4, 5, 6, 7];
    $scope.currentSelectedElement = null;
});
