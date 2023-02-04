const d = document;

export default function busqueda(entrada){
    const $entrada = d.querySelector(entrada);
    let $template = d.getElementById('template-card').content;
    let cardsContent = [
        
        {
            title:'Poppy',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm26Ku6zWphWuKW3vYjxCclftYjVQGA504o1UFx1V9q8yaJoF8U2Oc_9__BNeFKtpz3Ik&usqp=CAU'
        },
        {
            title:'Cyno',
            img:'https://i.pinimg.com/280x280_RS/31/a1/c4/31a1c49b79f8b09d5e9f1da4f0f470fd.jpg'
        },
        {
            title:'Eris Greyrat',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Ewno9qXv6yPUiqUbXtJVYWSZXDTF23suPw&usqp=CAU'
        },
        {
            title:'Nasus',
            img:'https://static1.personality-database.com/profile_images/4b659e6ef80346b2aed4609613b40507.png'
        },
        {
            title:'Guts',
            img:'https://otakuusamagazine.com/Uploads/Public/berserkhiatus.jpg'
        },
        {
            title:'Anya',
            img:'https://images.cults3d.com/MK8mBcuRIVGe1oQaXS_Uiy4ghHM=/https://files.cults3d.com/uploaders/13680643/illustration-file/657d1458-7372-43da-8840-1fef30ff9f6a/1.png'
        },
        {
            title:'Denji',
            img:'https://external-preview.redd.it/qjHSdaI903XYFZonE0zK2OPT-ql2Cr0TJXs_jHN-c8k.jpg?auto=webp&s=3f6f12a4b40e2bd79b7f721e96bc807af4355b59'
        },
        {
            title:'FaraGOD',
            img:'https://i1.sndcdn.com/artworks-000650238745-ou0glr-t500x500.jpg'
        }
    ];

    let $fragment = d.createDocumentFragment();

    cardsContent.forEach((elem) => {
        $template.querySelector('img').setAttribute("src",`${elem.img}`);
        $template.querySelector('img').setAttribute('alt',`${elem.title}`);
        $template.querySelector('figcaption').textContent = elem.title;

        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
    });

    d.querySelector('.cards').append($fragment);
    const $cards = d.querySelectorAll('.card');
    $entrada.addEventListener('keyup',(e)=>{
        if(e.key ==='Escape') $entrada.value ='';
        let contador = 0;
        cardsContent.forEach((elem)=>{
            elem.title.toLowerCase().includes($entrada.value.toLowerCase()) ? $cards[contador].classList.remove('filter') : $cards[contador].classList.add('filter'); 
            contador++;
        })
    });
}




