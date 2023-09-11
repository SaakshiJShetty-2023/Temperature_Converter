const celsiusInput=document.getElementById("celsius");
const converBtn=document.getElementById("convertBtn");
const resultSpan=document.getElementById('result');


converBtn.addEventListener("click",()=>{

    const celsius=parseFloat(celsiusInput.value);

    if (!isNaN(celsius)){
        const fahrenheit=(celsius * 9/5)+32;
        resultSpan.textContent= `${celsius} °C is equal to ${fahrenheit.toFixed(2)} °F`;
    }
    else{
        resultSpan.textContent="Please enter a valid temperature"
    }
});