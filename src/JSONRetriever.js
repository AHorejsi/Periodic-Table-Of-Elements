import $ from "jquery";


function getJsonData(filename) {
    let data;

    $.ajax({
        url: filename,
        async: false,
        dataType: "json",
        success: (response) => data = response
    })

    return data;
}

export default getJsonData
