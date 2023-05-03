//First section 
const tip_btns = document.querySelectorAll(".tip_percentage");
const custom_tip = document.querySelector(".input_tip_percentage");
const inputs = document.querySelectorAll("input");
const people_input = document.querySelector(".input_num_of_people");
const bill_input = document.querySelector(".input_bill");
const warning_text = document.querySelector(".warningtext");
//Second section
const tip_per_person = document.querySelector(".tip_amount");
const total_per_person = document.querySelector(".total_amount");
const reset_btn = document.querySelector(".reset_button"); 
// initial values
let tip_percentage = 0;
let bill = 0;
let people = 0;

// tip buttons --- >
  tip_btns.forEach(function (tip_selected){
    tip_selected.addEventListener ("click", (event)=>{
    tip_btns.forEach((tip_selected) => { 
      tip_selected.classList.remove("active");
      if (event.target.innerHTML == tip_selected.innerHTML){
      tip_selected.classList.add("active");
      tip_percentage = parseFloat(tip_selected.innerHTML);
    }});
      calculatetip();
    });
    });
// < --- tip buttons

// Input elements --- >
  inputs.forEach(function (input)  {
    input.addEventListener("change", ()=>{
      (input.value != ""  ? input.classList.add("active") : input.classList.remove("active"));
  });
}); 
    
custom_tip.addEventListener("input", custom_tip_function);
custom_tip.addEventListener("click", custom_tip_function);

function custom_tip_function (){
  tip_percentage = parseFloat(custom_tip.value);
  calculatetip();
} 

bill_input.addEventListener("input", ()=>{
  bill = parseFloat(bill_input.value);
  calculatetip();
});

people_input.addEventListener("input", ()=>{
  people = parseInt(people_input.value);
  if(people === 0) {
    warning_text.classList.add("activation");  // activation of warning text 
    people_input.classList.add("activation");   
  } else {
    warning_text.classList.remove("activation");
    people_input.classList.remove("activation");
  };
  calculatetip();
});
// < --- Input elements 

// calculations of Tip Amount & Total Amount per person --- >
  function calculatetip(){
    
    let tip_amount = bill * tip_percentage / 100 / people;  // Tip Amount per person
      if (isNaN(tip_amount) || !isFinite(tip_amount)){
        result1 = tip_per_person;
      }else{
        tip_per_person.innerHTML = "$" + tip_amount.toFixed(2);  
      };
      let total_amount = (bill + bill *  tip_percentage /100) / people;  // Total Amount per person
      if (isNaN(total_amount) || !isFinite(total_amount)){
        total_amount = total_per_person;
      }else{
        total_per_person.innerHTML = "$" + total_amount.toFixed(2);  
      };
  };
// < --- calculations of Tip Amount & Total Amount per person

reset_btn.addEventListener("click", ()=> {
    bill_input.value = 0;
    bill = 0;
    people_input.value = 0;
    people = 0;
    custom_tip.value = 0;
    tip_per_person.innerHTML = "$0.00";
    total_per_person.innerHTML = "$0.00";
    tip_btns.forEach((tip_selected) => { 
      tip_selected.classList.remove("active");
});
    inputs.forEach((input) =>{
      input.classList.remove("active");
    });
});