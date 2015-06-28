import q from 'q';
import $ from 'jquery';

function getContent(token) {
    let deferred = q.defer();
    let apiUrl = 'https://api.meetup.com/2/open_events?and_text=False&offset=0&format=json&lon=16.998581&limited_events=False&photo-host=public&page=20&radius=200&lat=60.639107&desc=False&status=upcoming&sig_id=22875111&key=374217665c4e4a61707f4e4be336d4e&access_token=' + token;
    $.ajax({
            url:apiUrl,
            xhrFields:{
                withCredentials: true
            }
        })
         .done(function(data) {
             deferred.resolve(data);
         })
         .fail(function(msg) {
             console.error('msg', msg);
             deferred.reject('ERROR:' + msg);
         });
    return deferred.promise;
};

export default {
    meetups: (token) => {
        let myMeetups = {};
        let deferred = q.defer();
        getContent(token)
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
    }
}
