var options;
var options_xhttp = new XMLHttpRequest();

// Duty Rate json
options_xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        options = JSON.parse(options_xhttp.responseText);
        console.log(options);
    }
};

options_xhttp.open("GET", "Data/courses.json", true);
options_xhttp.send();