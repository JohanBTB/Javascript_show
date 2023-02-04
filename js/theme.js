export function changeTheme(themeBtn, classDark){
    let moon='🌙',  sun = '☀️';
    const d = document, ls = localStorage;
    const $themeBtn = d.querySelector(themeBtn), 
    $selectors = d.querySelectorAll('[data-dark]');

    const darkMode = () =>{
        $selectors.forEach(el => {
            el.classList.remove(classDark);
        });
        $themeBtn.innerHTML = moon;
        ls.setItem('theme','dark');
    }

    const lightMode = () =>{
        $selectors.forEach(el => {
            el.classList.add(classDark);
        });
        $themeBtn.innerHTML = sun;
        ls.setItem('theme','light');
    }



    d.addEventListener('click',e=>{

        if (e.target.matches(themeBtn)) { 
            if($themeBtn.innerHTML === moon){
                lightMode();
            }else{
                darkMode();
            }
        }
    },1000);

    d.addEventListener("DOMContentLoaded", e=>{
        if(ls.getItem('theme') === null) ls.setItem('theme','light');
        if(ls.getItem('theme') === 'light') lightMode();
        if(ls.getItem('theme') === 'dark') darkMode();
             
    
    
    });



}