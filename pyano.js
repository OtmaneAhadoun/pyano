const items=document.querySelectorAll('li')
const range=document.querySelector('input[type=range]')
const allkeys=[],inp=document.querySelector('input[type=checkbox]'),audio=new Audio("./tunes/a.wav")
check()
inp.addEventListener('change',check)
function check(){
    if(!inp.checked){
        items.forEach(e=>e.textContent='')  
    }else{
        items.forEach(e=>e.textContent=e.dataset.key) 
    }
    audio.volume=0.5
}
let elem
function plays(key){
    audio.src=`./tunes/${key}.wav`
    audio.play()
    elem.classList.add('active')
    setTimeout(() => {
        elem.classList.remove('active') 
    }, 200);
}
items.forEach(element => {
    allkeys.push(element.textContent)
    element.addEventListener('click',()=>{
        elem=element 
        plays(element.dataset.key)
    })
});
function pressed(e){
    if(allkeys.includes(e.key.toLowerCase())){
        elem=document.querySelector(`[data-key=${e.key.toLowerCase()}]`)
        plays(e.key)
    }
}
document.addEventListener("keydown",pressed)
range.addEventListener('change',()=>{
    audio.volume=event.target.value/100
    console.log(audio.volume);
})