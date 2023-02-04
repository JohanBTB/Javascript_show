const d = document;

export default function slider(){
    const $btnNext = d.querySelector('.next'), $btnPrev = d.querySelector('.prev'), $slides = d.querySelectorAll('.slider-slide'), $sliderCircles = d.querySelector('.slider-circles');
    const tam = $slides.length;
    for(let a = 0; a<$slides.length; a++){
        $sliderCircles.innerHTML += `<a href="" id="${a}" class="circle">&nbsp;</a>`;
    }

    let i = 0;
    d.addEventListener('click', (e)=>{
        if(e.target === $btnNext){
            e.preventDefault();
            $slides[i].classList.remove('active');
            i===tam-1 ? i=0 : i=i+1;
            $slides[i].classList.add('active');
            setTimeout(()=>{
                $slides[i].classList.remove('active');
                i===tam-1 ? i=0 : i=i+1;
                $slides[i].classList.add('active');}
                ,1000);
            console.clear();
            console.log($slides, i);
            
        }

        if(e.target === $btnPrev){
            e.preventDefault();
            $slides[i].classList.remove('active');
            i===0 ? i=tam-1 : i=i-1;
            $slides[i].classList.add('active');
            setTimeout(()=>{
                $slides[i].classList.remove('active');
                i===0 ? i=tam-1 : i=i-1;
                $slides[i].classList.add('active');
            },1000);
            console.clear();
            console.log($slides, i);
            
        }

        if(e.target.matches('.circle')){
            e.preventDefault();
            $slides[i].classList.remove('active');
            i = parseInt(e.target.id);
            $slides[i].classList.add('active');
            if(i%2 === 1){
                setTimeout(()=>{
                    $slides[i].classList.remove('active');
                    i===tam-1 ? i=0 : i=i+1;
                    $slides[i].classList.add('active');}
                ,1000);
            }
        }
    });



}