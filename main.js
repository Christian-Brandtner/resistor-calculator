var r1 = 0;
var r2 = 0;
var voltage = 0;
var unit = 0;

function calculate() {
    r1 = parseFloat(document.getElementById("resistor-1").value);
    r2 = parseFloat(document.getElementById("resistor-2").value);
    voltage = parseFloat(document.getElementById("voltage").value);
    unit = document.getElementById("units").value;

    if (r1 > 0 && r2 > 0) {
        const outputVoltage = ((r2 / (r1 + r2)) * voltage);
        document.getElementById("output-voltage").value = outputVoltage.toFixed(2) + " V";
    } else {
        document.getElementById("output-voltage").value = voltage.toFixed(2) + " V";
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