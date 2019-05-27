"use strict";

import $ from "jquery";


function getJsonData(fileURL) {
    let jsonData;

    $.ajax({
        url: fileURL,
        async: false,
        dataType: "json",
        success: function(response) {
            jsonData = response;
        }
    });

    return jsonData;
}


export default getJsonData
