
function checkInputs() {

    const input1 = document.getElementById('numberone').value;
    const input2 = document.getElementById('numbertwo').value;

    if (input2 > input1) {
        document.getElementById('result').innerHTML = "Seu formulário foi enviado!";
        setTimeout(function() {
            location.reload();
        }, 3000);
    } else {
        document.getElementById('result').innerHTML = "O segundo valor deve ser maior que o primeiro!";
        document.getElementById('submit').disabled = true;
        setTimeout(function() {
            location.reload();
        }, 3000);
        false
    }
}

/*const form = document.querySelector('testform');

form.addEventListener('submit', function(event) {
event.preventDefault();
});*/