/**
 * Created by bc on 9/19/15.
 */

//initialize variables
var tag, music, photoRequest, photowidget;

//dom objects
var $getimages = $('#getimages');
var $getmusic = $('#getmusic');
var $imagesbtn = $('#basic-addon1');
var $musicbtn = $('#basic-addon2');
var $photoholder = $('#photoholder').css('background-image');

$(document).ready(function(){

    //photo options object
    var photoOptions = {
        'croppedPhotos': 'false'
    };

    //function to request photos
    function requestPhotos() {
        $photoholder = '';
        photoRequest = {
            'tag': 'tag',
            'set': 'panoramio.PhotoSet.ALL'
        }
        var photowidget = new panoramio.PhotoWidget('$photoholder', photoRequest, photoOptions);
        photowidget.setPosition(0);
        console.log(photowidget);
    }

    //event handlers
        //button click to get images
    $imagesbtn.click(function(event) {
        event.preventDefault();
        var tag = $getimages.val();
        requestImages();
        console.log(tag);
        $getimages. val('');
    });
        //hit enter to get images
    $getimages.keyup(function(event) {
        if (event.which === 13) {
            event.preventDefault();
            var tag = $getimages.val();
            console.log(tag);
            $getimages. val('');
        }
    });
        //button click to get music
    $musicbtn.click(function(event) {
        event.preventDefault();
        var music = $getmusic.val();
        console.log(music);
        $getmusic. val('');
    });
        //hit enter to get music
    $getmusic.keyup(function(event) {
        if (event.which === 13) {
            event.preventDefault();
            var music = $getmusic.val();
            console.log(music);
            $getmusic. val('');
        }
    });

}); //end ready

