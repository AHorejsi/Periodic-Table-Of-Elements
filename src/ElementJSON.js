var elemJSON;
var xmlHttp = new XMLHttpRequest();

xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        elemJSON = JSON.parse(xmlHttp.responseText);
        exports.elementJSON = elemJSON;
    }
};

xmlHttp.open("GET", "./Elements.json", true);
xmlHttp.send();

