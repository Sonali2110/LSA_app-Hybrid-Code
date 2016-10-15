app.factory('scoreboard', ['$q', '$http', function ($q, $http) {

    var getScore = function () {
        var deferred = $q.defer();

        $http.get('http://127.0.0.1:3000/score')
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (err) {
                console.log(err);
                deferred.reject(err);
            });

        return deferred.promise;

    };

    return {
        getScore: getScore
    };

}]);