var elemJSON;
var request = new XMLHttpRequest();

request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
        elemJSON = JSON.parse(request.responseText);
    }
};

request.open("GET", "./Elements.json", true);
request.send();

exports.elementJSON = elemJSON;
