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

    // print out all the countries in the console and the whole length (testing)
    for (let i = 0; i < countries.length; i++) {
        console.log(countries[i].getAttribute('title'));
    }
    console.log(countries.length);

    // counting variable used to keep track of all the items found
    let counting = 0;
    // tmb used to store all the found items
    let tmb = new Array();

    //sum_before array used to store all the *items* - helps to print it out on the sidebar
    //contains all the items
    let sum_before = [];
    // col_var = collapsible variable
    for (let col_var = 0; col_var < countries.length; col_var++) {
        sum_before.push(countries[col_var].getAttribute('title'));
    }

    function checkValue(event) {
        let value = event.target.value.toLowerCase();
        // Search the countries collections
        for (let i = 0; i < countries.length; i++) {
            let currCountryName = countries[i].getAttribute('title').toLowerCase()
            // check if the inserted value is one of the items, and not entered yet          
            if (value === currCountryName && !tmb.includes(value)) {

                countries[i].setAttribute("fill", "#7adb24");
                // counting variable to be dispalyed on the top
                counting++;
                document.getElementById("insert").innerHTML = counting + "/" + countries.length;

                tmb.push(value);
                console.log(tmb);

                console.log(value + " " + i + " " + counting);


                // 2nd version of the collapsible - select html paragraph
                let collapsible_class_p = document.querySelector('.collapsible-class');

                for (let found = 0; found < sum_before.length; found++) {
                    if (value == sum_before[found].toLowerCase()) {
                        sum_before[found] = sum_before[found].strike();
                    }
                }

                let brk = sum_before.toString().split(',');
                let res = brk.join(" <br> ");
                collapsible_class_p.innerHTML = res;

                this.value = "";
            }
        }
    }
},
    false
);

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    let sidebarLength = document.getElementById("mySidebar");
    if (sidebarLength.style.width == "0px") {
        sidebarLength.style.width = "500px";
        console.log("open");
    }
    else{
        closeNav();
        console.log("close");
    }
    //document.getElementById("main").style.marginLeft = "500px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    //document.getElementById("main").style.marginLeft = "0";
}