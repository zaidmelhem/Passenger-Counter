let count = 0 
let incrementEl = document.getElementById('counter')
let saveEl = document.getElementById('pre')

function increment(){
    count+=1
    incrementEl.textContent = count
    
}

function save (){
    if(count!=0){
        saveEl.textContent += count + " - "
        incrementEl.textContent = 0
        count = 0
    }
}