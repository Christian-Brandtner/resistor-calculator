var r1 = 0;
var r2 = 0;
var voltage = 0;
var unit = 0;

function calculate(inputType) {
    r1 = parseFloat(document.getElementById("resistor-1").value);
    r2 = parseFloat(document.getElementById("resistor-2").value);
    voltage = parseFloat(document.getElementById("voltage").value);
    unit = document.getElementById("units").value;

    const outputVoltage = ((r2 / (r1 + r2)) * voltage);

    if (!isNaN(outputVoltage) && (r1 != 0 && r2 != 0)) {
        document.getElementById("output-voltage").value = outputVoltage.toFixed(2) + " V";
    } else if (r1 == 0 && r2 == 0) {
        if (!isNaN(voltage)) {

            document.getElementById("output-voltage").value = voltage.toFixed(2) + " V";
        } else {
            document.getElementById("output-voltage").value = "Error";
        }
    } else {
        document.getElementById("output-voltage").value = "Error"
    }


}

function toggleMode() {

    body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
    }
    else if (body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("dark");
    }
    else {
        body.classList.add("dark");
    }

}

// function changeCalculator() {
//     // section = document.getElementsByTagName('section')[0];
//     var div = document.getElementsByClassName("current")[0];
//     if (div.classList.contains("current")) {
//         div.remove("current");
//     }

// }

function changeCalculator(calculator) {
    var previous = document.getElementsByClassName("current")[0];
    previous.style.display = "none";
    previous.classList.remove("current");
    console.log(previous.classList);
    var current = document.getElementsByClassName(calculator)[0];
    current.style.display = "flex";
    current.classList.add("current");
    console.log(current.classList);
}