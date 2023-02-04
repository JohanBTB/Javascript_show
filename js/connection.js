
const d = document,
    w = window,
    n = navigator;

export default function connection(coneccionTxt, coneccion){

    function isOnLine(){
        const $div = d.createElement("div");

        if(n.onLine){
            
            $div.classList.remove('offline');
            $div.classList.add('online');
            $div.innerHTML = '<p>Conectado</p>';
        }else{
            $div.classList.remove('online');
            $div.classList.add('offline');
            $div.innerHTML = '<p>Desconectado</p>';
        }

        d.body.insertAdjacentElement('afterbegin', $div);
        setTimeout(()=>{
            d.body.removeChild($div);
        }, 2000);

    }
    w.addEventListener('online', (e)=>isOnLine());
    
    w.addEventListener('offline', (e)=>isOnLine());
    



    

}




