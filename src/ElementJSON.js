import $ from "jquery";


var elemJSON = {};

$.get("/Elements.json", function(data, textStatus, jQueryXMLHttp) {
    elemJSON.data = data;
});


export default elemJSON;
