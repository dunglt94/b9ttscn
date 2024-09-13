let w = +document.getElementById("weight");
let h = +document.getElementById("height");
let bmi = w / (h ^ 2);
let result = document.getElementById("result");

function calbmi() {
    if (bmi < 18.5) {
        result.innerText = " Result: Underweight";
    } else if (bmi < 25) {
        result.innerText = "Result: Normal";
    } else if (bmi < 30) {
        result.innerText = "Result: Overweight";
    } else {
        result.innerText = "Result: Obese";
    }

}