let facts = document.querySelector('#facts');
let display = document.querySelector('#display');
let numbers = document.querySelector('#number');

number.addEventListener('input',function(){
    displayFact();
});

// Fetch with XMLHttpRequest
function displayFact() {
    let val = numbers.value;
    if (val != '') {

        //create AJAX object
        let ajax = new XMLHttpRequest();

        //open request
        ajax.open('GET', 'http://numbersapi.com/' + val);

        //check status
        ajax.onload = function () {
            if (this.status == 200) {
                facts.style.display = 'block';
                display.innerText = this.responseText;
            }
            else
            {
                this.onerror=this.onerror();
            }
        }

        //send response
        ajax.send();
    }
}

function onerror()
{
    display.innerHTML="An error occured";
}