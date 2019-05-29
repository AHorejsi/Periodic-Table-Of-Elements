import $ from "jquery";


function getJsonData(url) {
    let data;

    $.ajax({
        url,
        async: false,
        dataType: "json",
        success: (response) => { data = response }
    })

    return data;
}


export default getJsonData
