const hr=document.getElementById('hr')
const min=document.getElementById('min')
const sec=document.getElementById('sec')
const ampm=document.getElementById('ampm')


function displayTime(){
    let date = new Date(); 
    let hour=date.getHours();
    let mins=date.getMinutes();
    let secs=date.getSeconds();
    if (hour>12){
        hour=hour-12;
        ampm.innerHTML= "PM"
    }
    hr.innerHTML=padZero(hour);
    min.innerHTML=padZero(mins);
    sec.innerHTML=padZero(secs);
    
}
function padZero(num){
    return num<10 ? "0"+num:num;
}
setInterval(displayTime,500)
