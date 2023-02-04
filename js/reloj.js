
const d = document;
export function digitalClock(clock, btnPlay, btnStop){
    const activarReloj = d.querySelector(btnPlay);
    const desactivarReloj = d.querySelector(btnStop);
    var reloj = d.querySelector(clock);
    let interval;

    activarReloj.addEventListener('click',(e)=>{
        interval = setInterval(()=>{reloj.innerHTML = new Date().toLocaleTimeString()},1000);
        activarReloj.disabled = true;
    });

    desactivarReloj.addEventListener('click',(e)=>{
        clearInterval(interval);
        reloj.innerHTML = null;
        activarReloj.disabled = false;
    });
}
export function Alarm(sound, alarmPlay, alarmStop){
    const activarAlarma = d.querySelector(alarmPlay);
    const desactivarAlarma = d.querySelector(alarmStop);
    var audio = new Audio(sound);
    let interval;
    

    activarAlarma.addEventListener('click',(e)=>{
        interval = setInterval(()=>{
            activarAlarma.disabled = true;
            audio.play();
        },0);
        activarAlarma.disabled=true;
    });

    desactivarAlarma.addEventListener('click',(e)=>{
        clearInterval(interval);
        audio.pause();
        audio.currentTime = 0;
        activarAlarma.disabled=false;
    });

}
