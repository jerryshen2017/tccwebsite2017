var today = new Date();
var yyyy = today.getFullYear();

var fallStart = new Date(yyyy + " August 30");
var fallEnd = new Date(yyyy + " December 22");
var springStart = new Date(yyyy + " January 25");
var springEnd = new Date(yyyy + " May 13");

var isFallSemester = fallStart <= today && today <= fallEnd;
var isSpringSemester = springStart <= today && today <= springEnd;

var isSemester = isFallSemester || isSpringSemester;
var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';


var grayScale = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]


var ubNorthLat = isSemester? 43.001312 : 43.001731, //SU during semester, Commons during breaks
    ubNorthLng = isSemester? -78.786110: -78.785545,

    ubSouthLat = 42.951134,
    ubSouthLng = -78.812091,

    eccLat = 42.958399,
    eccLng = -78.723321,

    medailleLat = 42.928706,
    medailleLng = -78.856215,

    // simply get average because the points are close together
    centerLat = (ubNorthLat + ubSouthLat + eccLat + medailleLat) / 4;
    centerLng = (ubNorthLng + ubSouthLng + eccLng + medailleLng) / 4;

    map = new GMaps({
        div: '#map-ubnorth',
        zoom: 12,
        lat: centerLat,
        lng: centerLng,
        styles: grayScale
    });

// Add a marker easily with gmaps addMarker() method
// We'll also add some custom text which will show up in a pop-up
// when the marker is clicked
map.addMarker({
    lat: ubNorthLat,
    lng: ubNorthLng,
    title: 'TCC at UB North',
    icon: iconBase + 'schools_maps.png',
    // label: '1',
    infoWindow: {
        content: '<strong> University at Buffalo - North Campus Chapter <br/> Time: 11:30am <br/> Place: Room 330, UB Student Union (Suite 200, UB Commons in school breaks) </strong>'
    }
});

map.addMarker({
    lat: ubSouthLat,
    lng: ubSouthLng,
    // label: '2',
    icon: iconBase + 'schools_maps.png',
    title: 'TCC at UB South',
    infoWindow: {
        content: '<strong> University at Buffalo - South Campus Chapter <br/> Time: 3pm <br/> Place: Harriman Hall 105 (Diefendorf 103 in school breaks) </strong>'
    }
});

map.addMarker({
    lat: eccLat,
    lng: eccLng,
    // label: '3',
    icon: iconBase + 'schools_maps.png',
    title: 'TCC at ECC',
    infoWindow: {
        content: '<strong> Erie Community College Chapter <br/> Join Sunday services at UB </strong>'
    }
});

map.addMarker({
    lat: medailleLat,
    lng: medailleLng,
    // label: '4',
    icon: iconBase + 'schools_maps.png',
    title: 'TCC at Medaille College',
    infoWindow: {
        content: '<strong> Medaille College Chapter <br/> Join Sunday services at UB </strong>'
    }
});
