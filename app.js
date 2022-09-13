const counterResult = document.getElementById('counter_result')
// const counterResultString = counterResult.innerText;
// let counterResultNumber = parseInt(counterResultString);

let count = parseInt(localStorage.getItem('counter')) || 0;

const saveToStorage = count => {
    localStorage.setItem('counter', count)
}
const getFromStorage = () => {

    const counter = localStorage.getItem('counter')
    return counter;
}
const counterPlusBtn = document.getElementById('counter_plus_btn')
const counterMinusBtn = document.getElementById('counter_minus_btn')
const counterResetBtn = document.getElementById('counter_reset_btn')

counterPlusBtn.addEventListener('click',function(){
    count++
    console.log(count)
    // counterResult.innerText = counterResultNumber;
    
    saveToStorage(count);
    storedItemDisplay()
})
counterMinusBtn.addEventListener('click',function(){
    count--
    if(count < 0){
        count = 0
    }else{
        count--
    }
    console.log(count)
    // counterResult.innerText = counterResultNumber;
    
    saveToStorage(count);
    storedItemDisplay()
})
counterResetBtn.addEventListener('click',function(){
    count = 0;
   localStorage.setItem('counter', count);
    storedItemDisplay()
})

const storedItemDisplay = () => {
    let counterState = getFromStorage();
    // console.log(counterState)
    counterResult.innerText = counterState;

}
storedItemDisplay();