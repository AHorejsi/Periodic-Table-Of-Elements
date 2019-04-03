var elemJSON = {
    data: null
};

var xmlHttp = new XMLHttpRequest();

xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        elemJSON.data = JSON.parse(xmlHttp.responseText);
    }
};

xmlHttp.open("GET", "./Elements.json", true);
xmlHttp.send();


export default elemJSON;
