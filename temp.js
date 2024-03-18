input = document.getElementById("value");
toFahrenheit = document.getElementById("toFahrenheit");
toCelcius = document.getElementById("toCelcius");
result = document.getElementById("result");



function convert() {
    if (toFahrenheit.checked) {
        if (input.value !== "") {
            console.log(input.value);
            let temp = input.value;
            result.textContent = ((9 / 5) * temp) + 32;
        }
        else {
            console.log("Enter a temperature in celcius");
        }
    }
    else if (toCelcius.checked) {
        if (input.value !== "") {
            // console.log(input.value);
            let temp = input.value;
            result.textContent = (temp - 32) * (5 / 9);
        }
        else {
            alert("Enter a temperature in Fahrenheit");
        }
    }
    else{
        alert("Please select a unit!!");
    }
}