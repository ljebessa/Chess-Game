
        function user_game() {
           
            var jsonExamples = [{
                "Oponent": "joe",
                "move": "move king to B3"
            }, {
                "Oponent": "Jenna",
                "move": "move king to C4"
            }, {
                "Oponent": "joe",
                "move": "move queen to B8"
            }, {
                "Oponent": "Jenna",
                "move": "move queen to C7"
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


          //  for (var i = 0; i < col.length; i++) {
           //     var th = document.createElement("th");
                //this will add the name on the left of the Json as table name 
                // th.innerHTML = col[i];
                //this creates a custom table name 
                var th = document.createElement("th");
                th.innerHTML = "Player"
                tr.appendChild(th);

                var th = document.createElement("th");
                th.innerHTML = "Move"
                tr.appendChild(th);

                
           // } 


            for (var i = 0; i < jsonExamples.length; i++) {
                tr = table.insertRow(-1);

                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = jsonExamples[i][col[j]];
                }
            }
            var divContainer = document.getElementById("showData");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
            $("tr").click(function() {
                window.location = "index.html";
            });

        }
        window.onload = user_game;
        