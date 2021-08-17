

let bill = document.querySelector('#billAmount');
let persons = document.querySelector('#Guests');
let pros = document.querySelector('#pros');
let button = document.querySelector('button');

let tipbox = document.querySelector('#tipBox')

button.addEventListener('click',function(){

    let billValue = parseInt(bill.value);
    let personValue = parseInt(persons.value);
    let prosValue = parseInt(pros.value.slice(0, -pros.value.length+2) );
    if(isNaN(prosValue) || billValue == 0 || personValue == 0){
        document.querySelector('#tipBox').innerHTML = 0
    }
    else{
        document.querySelector('#tipBox').innerHTML = tipAmount(billValue,personValue,prosValue)
    }
    
    pros.value="";
    
    
    tipbox.classList.remove("tipAnimation");
    void tipbox.offsetWidth;
  
    tipbox.classList.add("tipAnimation");
});


function tipAmount(billing,people,prosent){
    let num =((billing*prosent/100)/people)
    return num.toFixed(2);
}