import q from 'q';
import $ from 'jquery';

function getContent() {
    let deferred = q.defer();
    let apiUrl = 'http://reactjs.meetup.com/newest/json/New+reactjs+Groups#';
    $.get(apiUrl)
         .done(function(data) {
             deferred.resolve(data);
         })
         .fail(function(msg) {
             deferred.reject('ERROR:' + msg);
         });
    return deferred.promise;
};

// function getWeather(location) {
//     let deferred = q.defer();
//     let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location},se&units=metric&APPID=7dd165e7655e0f84c0d3831a8b916eb2`;
//     $.get(apiUrl)
//          .done(function(data) {
//              deferred.resolve(data);
//          })
//          .fail(function(msg) {
//              deferred.reject('ERROR:' + msg);
//          });
//     return deferred.promise;
// }

export default {
    meetups: () => {
        let myMeetups = {};
        let deferred = q.defer();
        getContent()
            .then(function(data) {
                myMeetups = data;
            })
            .fail(function(error) {
                console.error(error);
            })
            .done(function() {
                    deferred.resolve(myMeetups)
                }
            );
        return deferred.promise;
    },
    // weather: () => {
    //     let weatherData = {};
    //     let deferred = q.defer();
    //     getWeather()
    //         .then(function(data) {
    //             weatherData = data;
    //         })
    //         .fail(function(error) {
    //             console.error(error);
    //         })
    //         .done(function() {
    //                 deferred.resolve(weatherData)
    //             }
    //         );
    //     return deferred.promise;
    // }
}
