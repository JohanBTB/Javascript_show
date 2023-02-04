const d = document,
w = window;


export default function contactFormValidation(){
    const $form = d.querySelector('.form-contacto'),
    $inputs = $form.querySelectorAll('[required]');


    $inputs.forEach(elem=>{
        const $span = d.createElement('span');
        $span.innerHTML = `Ingresa tu ${elem.name} de manera correcta.`;
        $span.classList.add('form-alert');
        $span.classList.add('none');
        $span.id = elem.name;
        elem.insertAdjacentElement('afterend', $span);
    });

    d.addEventListener('keyup',(e)=>{
        if(e.target.matches(".form-contacto [required]")){
            let $input = e.target,
            pattern = $input.pattern || $input.dataset.pattern;
            if(pattern && $input.value !== ''){
                const regExp = new RegExp(pattern);
                return regExp.test($input.value) ? 
                d.getElementById($input.name).classList.add('none') :
                d.getElementById($input.name).classList.remove('none');
            }
            if(!pattern){
                $input.value ==='' ?
                d.getElementById($input.name).classList.remove('none'):
                d.getElementById($input.name).classList.add('none');
            }

        }
    });

    d.addEventListener('submit',(e)=>{
        //e.preventDefault();
        const $loader = d.querySelector('.form-loader'),
        $response = d.querySelector('.form-response');
        $loader.classList.remove('none');

        setTimeout(()=>{
            
        $loader.classList.add('none');
        $response.classList.remove('none');
        $form.reset();
        setTimeout(()=>{$response.classList.add('none')},3000);
        },3000);

    });



}

