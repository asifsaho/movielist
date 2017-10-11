var movieDb = angular.module('moviedb', [])
    .controller('mainController', function ($scope) {
        // Adding initial value to all property
        $scope.movieTitle = '';
        $scope.movieDirector = '';
        $scope.movieDuration = '';
        $scope.movieActors = '';
        $scope.sortTrack = 'title';
        $scope.movieGenre = 'Action';
        $scope.filterByModel = {
            genre: ""
        }
        
        $scope.sortMovie = function(order){
            if (order === 'ASC') {
                $scope.sortTrack = 'title';
            }
            if (order === 'DESC') {
                $scope.sortTrack = '-title';
            }
        }

        // This is a movie list already in our system, lets assue we've got it through a back end API.
        $scope.movies = [
            {
                title: "Logistics",
                duration: 120,
                actors: "Lorem, Ipsum, Dolor Sit, Amet",
                director: "Someone",
                genre: 'Animation'
            },
            {
                title: "Modern Times Forever",
                duration: 123,
                actors: "Lorem, Ipsum, Dolor Sit, Amet",
                director: "Someone",
                genre: 'Action'
            },
            {
                title: "Beijing 2003",
                duration: 115,
                actors: "Lorem, Ipsum, Dolor Sit, Amet",
                director: "Someone",
                genre: 'Biography'
            },
            {
                title: "Untitled",
                duration: 97,
                actors: "Lorem, Ipsum, Dolor Sit, Amet",
                director: "Someone",
                genre: 'Crime'
            },
            {
                title: "Matrjoschka",
                duration: 67,
                actors: "Lorem, Ipsum, Dolor Sit, Amet",
                director: "Someone",
                genre: 'Biography'
            },
            {
                title: "The Cure for Insomnia",
                duration: 170,
                actors: "Lorem, Ipsum, Dolor Sit, Amet",
                director: "Someone",
                genre: 'Documentory',
            }
        ];

        // Adding the movie list to localstorage, it would act like a DB
        localStorage.setItem('movies', JSON.stringify($scope.movies));

        // This is would add a new movie when user fill up the form and press "Add this movie".
        $scope.addMovie = function (event) {
            event.preventDefault();

            var movieList = JSON.parse(localStorage.getItem('movies'));

            movieList.push({
                title: $scope.movieTitle,
                duration: $scope.movieDuration,
                actors: $scope.movieActors,
                director: $scope.movieDirector,
                genre: $scope.movieGenre,
            })

            localStorage.setItem('movies', JSON.stringify(movieList));
            $scope.movies = movieList;
            $scope.filterByGenreModel = 'All';

            setTimeout(function () {
                console.log('Movie Added', {
                    title: $scope.movieTitle,
                    duration: $scope.movieDuration,
                    actors: $scope.movieActors,
                    director: $scope.movieDirector
                });

                $scope.movieTitle = '';
                $scope.movieDuration = '';
                $scope.movieActors = '';
                $scope.movieDirector = '';
                $('#addNewMovie').modal('hide');
            }, 50)
        }
    });


