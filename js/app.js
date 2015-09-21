/**
 * Created by bc on 9/19/15.
 */

//initialize variables
var photosearch, music, photoHTML;

//dom objects
var $getimages = $('#getimages');
var $getmusic = $('#getmusic');
var $imagesbtn = $('#basic-addon1');
var $musicbtn = $('#basic-addon2');
var $photoholder = $('#photoholder');
var $images = $('ul.images li');
var target;
var lastElem = $images.length-1;

//function to request photos from Flickr
function requestPhotos() {
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var flickrOptions = {
        tags: photosearch,
        format: "json"
    };
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
    displayPhotos();
}

//function to display photos
function displayPhotos (data) {
    photoHTML = '<ul class="images">';
        $.each(data.items, function(i, photo) {
            photoHTML += '<li>';
            photoHTML += '<img class="currentimg" src="' + photo.media.m + '"></li>';
        });//end each
    photoHTML += '</ul>';
    $photoholder.html(photoHTML);
}

//slider

$images.hide().first().show();

function sliderResponse(target) {
    $images.fadeOut(300).eq(target).fadeIn(300);
}
function sliderTiming() {
    target === lastElem ? target = 0 : target = target+1;
    sliderResponse(target);
}
var timingRun = setInterval(function() { sliderTiming(); },5000);
function resetTiming() {
    clearInterval(timingRun);
    timingRun = setInterval(function() { sliderTiming(); },5000);
}


$(document).ready(function(){

    //event handlers

        //button click to get images
    $imagesbtn.click(function(event) {
        event.preventDefault();
        var photosearch = $getimages.val();
        requestPhotos();
        console.log(photosearch);
        $getimages. val('');
    });

        //hit enter to get images
    $getimages.keyup(function(event) {
        if (event.which === 13) {
            event.preventDefault();
            var photosearch = $getimages.val();
            requestPhotos();
            console.log(photosearch);
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

