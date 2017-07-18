var app = angular.module('app');

app.controller('ExampleCtrl', function ($scope, $rootScope) {

    if($scope.web3 != undefined){
        console.log("web3 can be used");
    } else {
        console.log("Can't load web3");
    }
    $rootScope.ExampleContract.setProvider($rootScope.web3.currentProvider);
    var newExampleContract = $rootScope.ExampleContract.at('0xe14fb4f60f54fb62e92d3448d79913bdea3c3efd')

    // console.log(newExampleContract)
    newExampleContract.ProductName().then(function (result) {
        console.log(result)
    });

    newExampleContract.ContractID().then(function (result) {
        console.log(result.toNumber())
    });
});