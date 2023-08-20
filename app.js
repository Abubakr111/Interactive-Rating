let totalValue = 5;

button = document.querySelectorAll('.btn');

button.forEach(button => {
    button.addEventListener('click', displayDiv)

    
});


function displayDiv(e){
const submit = document.getElementById('submit');

e.target.className = 'onClick';

submit.addEventListener('click', function(){
    total = document.getElementById('total');
    total.textContent = totalValue;

    select = document.getElementById('select');
    select.textContent = e.target.textContent;

    firstDiv = document.querySelector('.div-1');

    firstDiv.style.display = 'none';    secondDiv = document.querySelector('.div-2');
    secondDiv.style.display = 'block';
})

}
