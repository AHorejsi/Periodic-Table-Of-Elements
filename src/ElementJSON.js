import $ from "jquery";


var elemJSON = {};

$.getJSON("/Elements.json", function(jsonData) {
    elemJSON.data = jsonData;
});


export default elemJSON;
