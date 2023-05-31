const bill = document.getElementById("bill-form")
const ppl = document.getElementById('ppl-form')
const result1 = document.querySelector('.result1')
const result2 = document.querySelector('.result2')
const tips = document.querySelectorAll(".btn")
const customTip = document.querySelector(".custom")
const resetBtn = document.querySelector(".btn-reset")
const billAlert = document.querySelector(".bills")
const tippsAlert = document.querySelector(".tips")
const pplssAlert = document.querySelector(".ppls")

bill.addEventListener('input', billInput)
ppl.addEventListener('input', pplInput)
tips.forEach(function(value){
    value.addEventListener("click", tipsClick)
})
customTip.addEventListener("input", customFill)
resetBtn.addEventListener("click", reset)

bill.value = '0.0'
ppl.value = '1'
result1.innerHTML = '$' + (0.0).toFixed(2);
result2.innerHTML = '$' + (0.0).toFixed(2);

let billValue = 0.0;
let pplValue = 1;
let tipValue = 0.15;

function billInput(){
    billValue = parseFloat(bill.value)
    if(billValue == 0){
        billAlert.innerHTML = "Bill Can't be Zero"
        result1.innerHTML = '$' + 0;
        result2.innerHTML = '$' + 0;
    }else{
        billAlert.innerHTML = ""
        calculate()
    }
   
}
tips.on('click', function(){
    tips.removeClass('active-tip');
    $(this).addClass('active-tip');
});

function pplInput(){
    pplValue = parseFloat(ppl.value)
    if(pplValue == 0){
        pplssAlert.innerHTML = "People Can't be Zero"
        result1.innerHTML = '$' + 0;
        result2.innerHTML = '$' + 0;
    }else{
        pplssAlert.innerHTML = ""
        calculate()
    }
   
}

function customFill(){
    tipValue = parseFloat(customTip.value / 100)
    tips.forEach(function(value){
        value.classList.remove('active-tip')
    })
    if(tipValue == 0){
        tippsAlert.innerHTML = "Tip Can't be Zero"
        result1.innerHTML = '$' + 0;
        result2.innerHTML = '$' + 0;
    }else{
        tippsAlert.innerHTML = ""
        calculate()
    }
    
}

function tipsClick(event){
    tips.forEach(function(value){
        value.classList.remove('active-tip')
        if(event.target.innerHTML == value.innerHTML){
            value.classList.add('active-tip')
            tipValue = parseFloat(value.innerHTML)/100
        }
    })
    console.log(tipValue);
    tippsAlert.innerHTML = ""
    calculate()
}

function calculate(){
    if(pplValue >=1){
        let tipAmount = (billValue * tipValue)/pplValue
        let total = (billValue * tipAmount)/pplValue
        result1.innerHTML = '$' + tipAmount.toFixed(2);
        result2.innerHTML = '$' + total.toFixed(2);
    }
}

function reset(){
    bill.value = '0.0'
    billInput()
    ppl.value = '1'
    pplInput()
    customTip.value=""
}