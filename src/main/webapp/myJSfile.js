var app = angular.module('myModule', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/', {
                    templateUrl: 'personList.html',
                    controller: 'personController',
                    controllerAs: 'ctrl'
                })
                .when('/details/:id', {
                    templateUrl: 'personDetails.html',
                    controller: 'personController',
                    controllerAs: 'ctrl'
                })
                .when('/newperson', {
                    templateUrl: 'newPerson.html',
                    controller: 'personController',
                    controllerAs: 'ctrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
    }]);

var persons = [
    {id: 1, name: 'Jens', age: 18},
    {id: 2, name: 'Peter', age: 23},
    {id: 3, name: 'Hanne', age: 23}
];

app.controller('personController', function ($routeParams) {
    var self = this;

    self.persons = persons;
    console.log('persons length ' + self.persons.length);

    for (i = 0; i < self.persons.length; i++) {
        console.log('forloop' + $routeParams.id)
        if (self.persons[i].id == $routeParams.id) {
            console.log('i if');
            self.person = self.persons[i];
            console.log(self.person);
        }
    }

    self.addPerson = function () {

        self.newperson.id = self.persons.length + 1;
        self.persons.push(self.newperson);
        self.newperson = '';
        console.log('after: length: ' + self.persons.length);

    };

});
