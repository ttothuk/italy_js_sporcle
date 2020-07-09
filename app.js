// It's important to add an load event listener to the object,
// as it will load the svg doc asynchronously
window.addEventListener("load", function () {
    const q = document.getElementById("italysvg");
    // get the inner DOM of the svg file (note it will only if served from a server)
    var svgDoc = q.contentDocument;
    // get all elements
    let countries = svgDoc.getElementsByTagName("path");


    // Set a serach bar listener to compare against the countries array
    document.getElementById("inputCountryName").addEventListener("input", checkValue);

    for (let i = 0; i < countries.length; i++) {
        console.log(countries[i].getAttribute('title'));
    }
    console.log(countries.length);

    let counting = 0;
    let tmb = new Array();

    function checkValue(event) {
        let value = event.target.value.toLowerCase();
        // Search the countries collections
        for (let i = 0; i < countries.length; i++) {

            let currCountryName = countries[i].getAttribute('title').toLowerCase()
            let currCountryId = countries[i].getAttribute("id").toLowerCase()
            if (value === currCountryName && !tmb.includes(value) /*|| value === currCountryId*/) {

                countries[i].setAttribute("fill", "red");
                counting++;
                document.getElementById("insert").innerHTML = counting + "/" + countries.length;

                tmb.push(value);
                console.log(tmb);

                console.log(value + " " + i + " " + counting);
                this.value = "";
            }
        }
    }
},
    false
);