function online() {
    var jsonExamples = [{
        "Oponent": "Bob"
    }, {
        "Oponent": "Jenna"
    }, {
        "Oponent": "Grave"
    }, {
        "Oponent": "Mary"
    }, {
        "Oponent": "Erick"
    }]

    var col = [];
    for (var i = 0; i < jsonExamples.length; i++) {
        for (var key in jsonExamples[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    var tr = table.insertRow(-1);


    var th = document.createElement("th");
    th.innerHTML = "User Games";
    tr.appendChild(th);


    for (var i = 0; i < jsonExamples.length; i++) {
        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = jsonExamples[i][col[j]];
        }
    }
    var divContainer = document.getElementById("on");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
    $("tr").click(function() {
        window.location = "index.html";
    });

}