export function scroll(btn){

    const d = document,
    w = window;
    d.addEventListener('scroll', e=>{
        const $scrollBtn = d.querySelector(btn)
        let scrollTop =w.scrollY;
        if(scrollTop>600){
            $scrollBtn.classList.add('hidden');
        }else{
            $scrollBtn.classList.remove('hidden');  
        }
    });

    d.addEventListener('click', e=>{
        if(e.target.matches(btn)){
            w.scrollTo({
                behaviour:'smooth',
                top:0,
                left:0
            });
        }
    })
    
}