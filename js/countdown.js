
export function countdown(countdown, date, message){
    
    let birthday = new Date(date);
    let now, resto, seconds=0, minutes=0, hours=0, days=0, $countdown;
    let stopCountdown = setInterval(()=> {
        now = new Date();
        resto = (birthday - now)/1000;
        seconds = Math.floor(resto%60);
        resto = (resto-seconds)/60;
        minutes = Math.floor(resto%60);
        resto = (resto-minutes)/60;
        hours = Math.floor(resto%24);
        resto = (resto-hours)/24;
        days = Math.floor(resto);
        if(days+hours+minutes+seconds == 0){
            alert(message)
            clearInterval(stopCountdown);
        }
        if(seconds < 0 | minutes < 0 | hours < 0 | days <0){
            birthday.setFullYear(birthday.getFullYear() + 1);
        }
        $countdown = document.querySelector(countdown);
        $countdown.innerHTML = `<h3>Dias ${days}     Horas ${hours}    Minutos ${minutes}    Segundos ${seconds}<h/3>`;
    },1000);



}