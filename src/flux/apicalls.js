import q from 'q';
import $ from 'jquery';

function getLocation() {
    let _this = this;
    let deferred = q.defer();
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
                deferred.resolve(position);
            });
    } else {
        deferred.reject('No geolocation')
    }
    return deferred.promise;
};

//TODO: Renew with meetup after 3500min
function getContent(token) {
    let deferred = q.defer();
    let position = getLocation().then(function(position) {
        console.log('position', position);
        if (!position) {
            deferred.reject('FAILED API CALL, NO POSITION');
            return deferred.promise;
        }
        let apiUrl = `https://api.meetup.com/2/open_events?and_text=False&offset=0&format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}&limited_events=False&photo-host=public&page=20&radius=200&desc=False&status=upcoming&sig_id=22875111&key=374217665c4e4a61707f4e4be336d4e&access_token=` + token;
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
