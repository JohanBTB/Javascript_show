
const d = document;

export default function scrollSpy(){
    const $sections = d.querySelectorAll('section[data-scroll-spy]');
    const cb = (entries) =>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${entry.target.id}"]`).classList.add('active');                
                
               }else{
                d.querySelector(`a[data-scroll-spy][href="#${entry.target.id}"]`).classList.remove('active');     
            }
        });

    }

    const observer = new IntersectionObserver(cb, {
        //rootMargin:"-460px",
        threshold: [0.45,0.5]
    });
    $sections.forEach((el) => {observer.observe(el)}); 
}

