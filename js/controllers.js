angular.module('comicApp.controllers', ['ngRoute'])
.controller('loginController', function($scope) {
})
.controller('registerController', function($scope,$state) {
    $scope.usuario = [];
    $scope.submit=function(user){
       alert(user);
       $scope.usuario.push(user);
       $state.go('login');
    };
})
.controller('homeController', function($scope) {
     $scope.heroes = [
        {
            "id": 0,
            "title": "Nuevos titulos para el Capitan America.",
            "review":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            "thumb": "../imagenes/cap.png"
        },
         {
            "id": 1,
            "title": "Nuevos titulos para Flash.",
            "review":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            "thumb": "../imagenes/flash.png"
        },
        {
            "id": 2,
            "title": "Nuevos titulos para Iron Fist.",
            "review":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            "thumb": "../imagenes/ironfist.png"
        },
         {
            "id": 3,
            "title": "Nuevos titulos para Iron Man.",
            "review":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            "thumb": "../imagenes/ironman.png"
        },
         {
            "id": 4,
            "title": "Nuevos titulos para Super Man.",
            "review":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            "thumb": "../imagenes/super.png"
        }
    ];
 
})
.controller("comicListController", function ($scope) {
    $scope.comics = [
        {
            "id": 0,
            "name": "Avengers",
            "availability": 9,
            "review":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            "thumb": "../imagenes/avengers.jpg"
        },
        {
            "id": 1,
            "name": "Batman",
            "availability": 3,
            "review":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            "thumb": "../imagenes/batman.jpg"
        },
        {
            "id": 2,
            "name": "civilwar",
            "availability": 9,
            "review":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            "thumb": "../imagenes/civilwar.jpg"
        }
    ];
 
    $scope.currcomic = null;
    $scope.getcomicById = function (id) {
        var comics = $scope.comics;
        for (var i = 0; i < comics.length; i++) {
            var comic = $scope.comics[i];
            if (comic.id == id) {
                $scope.currcomic = comic;
            }
        }
    };
    $scope.back = function () {
        window.history.back();
    };
})
.controller('comicDetailsController', function ($scope, $stateParams) {
    $scope.comics = [
        {
            "id": 0,
            "name": "Avengers",
            "availability": 9,
            "review":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            "thumb": "../imagenes/avengers.jpg"
        },
        {
            "id": 1,
            "name": "Batman",
            "availability": 3,
            "review":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            "thumb": "../imagenes/batman.jpg"
        },
        {
            "id": 2,
            "name": "civilwar",
            "availability": 9,
            "review":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            "thumb": "../imagenes/civilwar.jpg"
        }
    ];
    $scope.currcomic =$scope.comics[$stateParams.id];
    //$scope.getcomicById($stateParams.id);
});
