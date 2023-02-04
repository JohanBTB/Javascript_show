const d = document, w = window;

export default function narrador(){
    const $select = d.querySelector('#narrador-select'),
    $texto = d.querySelector('#narrador-text'),
    $btn = d.querySelector('#narrador-btn'),
    narradorMensaje = new SpeechSynthesisUtterance();


    let voices = []
    
    d.addEventListener('DOMContentLoaded', e=>{
        if(!(speechSynthesis in w)){
            console.log("No hay speech");
        }
        print(window.speechSynthesis.getVoices());
    });

    d.addEventListener('change', e=>{

    });

    d.addEventListener('click', e=>{

    });
    
    voices.forEach(voice => {
        $option = d.createElement('option');
        $option.value = voice.name;
        $option.innerHTML = voice.name;
        $select.insertAdjacentElement('beforeend',$option);
    });

}

