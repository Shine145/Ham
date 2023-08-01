let feet = prompt("Feet: ");
let meter = prompt("Meter: ");
function feetToMeter(feet) {
    let meter = 0.305 * feet;
    return meter;
}

function meterTofeet(meter) {
    let feet = 3.279 * meter;
    return feet;
}

document.write(feet + " feet " + "= " + feetToMeter(feet) + " meter");
document.write ("<br>")
document.write(meter + " meter " + "= " + meterTofeet(meter) + " feet");