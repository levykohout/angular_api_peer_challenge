var app = angular.module('giphyApp', []);

app.controller('MainController', MainController);

var API ='http://api.giphy.com/v1/gifs/';
var key = 'api_key=dc6zaTOxFJmzC';

function MainController ($http){

    var main = this;


    console.log('MainController loaded!');
    //
    main.random=[];
    main.searchresults=[];


    main.getGifsData = function(){


        $http.get(API + 'random?' + key).then(function(response){
            main.random = response.data.data.image_original_url;

            console.log(main.random);

        console.log(response);

        });

    };

    main.getSearchData =function(){

    main.q = main.search.replace(' ','+');
    
    $http.get(API +'search?q=' + main.q +'&' + key).then(function(response){
        console.log('Search result respond',response);
        main.searchresults = response.data.data;
        console.log(main.searchresults);

    });

    }
}
