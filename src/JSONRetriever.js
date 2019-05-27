import $ from "jquery";


var elementData;
var measurementData;

$.ajax({
    url: "./ElementData.json",
    async: false,
    dataType: "json",
    success: (response) => elementData = response
});
$.ajax({
    url: "./MeasurementUnits.json",
    async: false,
    dataType: "json",
    success: (response) => measurementData = response
})


export { elementData, measurementData }
