const d = document;

export default function videoInteligente(){
    const $videos = d.querySelectorAll('video[data-smart-video]');
    
    const cb = (entries) =>{
        entries.forEach(elem =>{
            if(elem.isIntersecting){
                elem.target.play();
                window.addEventListener("visibilitychange",e=> d.visibilityState === 'visible' ? elem.target.play(): elem.target.pause());
                
            }else{
                elem.target.pause();
            }
            
            
        })
    }
    const $observador = new IntersectionObserver(cb, {threshold:[0.7,1]});
    $videos.forEach(elem=> $observador.observe(elem))

}



