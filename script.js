let string = "";

let buttons = document.querySelectorAll('.buttons');

buttons.forEach((button) => {

    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }

        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }

        else if (e.target.innerText === "%") {
            let operators = /[\+\-\*\/]/; // Detect mathematical operators
            let parts = string.split(operators); // Split the string based on operators
            let lastNumber = parts[parts.length - 1]; // Get last entered number
        
            if (lastNumber) {
                let percentValue = (parseFloat(lastNumber) / 100) * parseFloat(parts[parts.length - 2] || 1);
                string = string.replace(lastNumber, percentValue); // Replace last number with percentage value
            }
            
            document.querySelector("input").value = string;
        }
        

        else if (e.target.innerHTML == 'backspace') {
            string = document.querySelector('input').value;
            string = string.slice(0, -1); // Remove last character
            document.querySelector('input').value = string;

           

        }

        else {

            string = string + e.target.innerText;
            document.querySelector('input').value = string;


        }
    })
})