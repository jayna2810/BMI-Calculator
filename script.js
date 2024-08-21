//event listener for calculate
document.querySelector(".calculate").addEventListener("click", function () {
    document.getElementById("output").style.display = "none";
    document.querySelector(".loader").style.display = "block";
    setTimeout(BMI, 2000);
})
//event listener for clear
document.querySelector(".clear").addEventListener("click", clear)

function BMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    let index = (weight / (((height / 100) * height) / 100)).toFixed(0);

    if (height && weight != 0) {
        const output = document.getElementById("output");
        const state = document.getElementById("state");
        output.innerHTML = "Your BMI is : " + index;
        console.log("Your BMI is" + index);
        if (index < 18.5) {
            {
                state.innerHTML = "<span style='color:green;'><i class='fa-solid fa-weight-scale' style='color: #9b7a03;'></i>Underweight!</span>";
            };
        }
        else if (index < 25) {
            state.innerHTML = "<span style='color:green';><i class='fa-solid fa-weight-scale' style='color: #9b7a03;'></i>Normal weight!</span>";
        }
        else if (index < 30) {
            state.innerHTML = "<span style='color:green';><i class='fa-solid fa-weight-scale' style='color: #9b7a03;'></i>Overweight!</span>";
        }
        document.getElementById("output").style.display = "block";
        document.querySelector(".loader").style.display = "none";
    } else {
        //alert('Error!')
        error()
        function error() {
            document.getElementById("output").style.display = "block";
            document.querySelector(".loader").style.display = "none";
            document.getElementById("output").innerHTML = "Error: Enter height and weight first!";
            setTimeout(() => {
                document.getElementById("output").innerHTML = "";
                document.querySelector(".state").innerHTML = "";
            }, 5000);
        }

    }
}

function clear() {
    document.getElementById('height').value = "";
    document.getElementById('weight').value = "";
    document.getElementById('output').innerHTML = "";
    document.getElementById('state').innerHTML = "";
}