let weight = document.getElementById("weight");
let height = document.getElementById("height");
let result = document.getElementById("result");

function calbmi() {
    let w = +weight.value;
    let h = +height.value;
    let bmi = w / (h ** 2);
    if (bmi < 18.5) {
        result.innerText = ` Result: ${bmi} - Underweight`;
    } else if (bmi < 25) {
        result.innerText = `Result: ${bmi} - Normal`;
    } else if (bmi < 30) {
        result.innerText = `Result: ${bmi} - Overweight!`;
    } else {
        result.innerText = `Result: ${bmi} - Obese!!!`;
    }

}