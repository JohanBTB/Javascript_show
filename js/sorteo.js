const d = document;
export default function sortear(btn, lista){
    const opciones = d.querySelectorAll(lista + ' li');
    d.addEventListener('click', (e)=>{ if(e.target.matches(btn))  alert(`El ganador es ${opciones[Math.round(Math.random()*opciones.length)].outerText}`);});
}
