const d = document, n = navigator, ua = n.userAgent;

export default function userDeviceInfo(id){
    const $id = d.getElementById(id),
     isDesktop = {
        windows:()=> ua.match(/windows nt/i),
        linux: ()=> ua.match(/linux/i),
        mac: ()=> ua.match(/mac os/i),
        any:function (){
            return (this.windows() || this.linux() || this.mac());
        }
     },
     isMobile = {
        android: ()=> ua.match(/android/i),
        ios: ()=> ua.match(/iphone|ipad|ipod/i),
        windows: ()=>ua.match(/windows phone/i),
        any: function(){
            return (this.android()||this.ios()||this.windows());
        }
     },
     isBrowser = {
        chrome: ()=> ua.match(/chrome/i),
        safari: ()=> ua.match(/safari/i),
        opera: ()=> ua.match(/opr|opera|opera mini/i),
        firefox: ()=> ua.match(/firefox/i),
        ie: ()=> ua.match(/msie|iemobile/i),
        edge: ()=> ua.match(/edge|edg/i),
        any: function(){
            return (this.ie()||this.edge()||this.firefox()||this.opera()||this.chrome()||this.safari());
        }
     };


     /*
    console.clear();
    console.log(ua);
    console.log("Mobile", isMobile.any());
    console.log("Desktop", isDesktop.any());
    console.log("Browser", isBrowser.any());
     */

    $id.innerHTML = `
     <ul>
        <li><b>User Agent: </b> ${ua}</li>
        <li><b>Plataforma: </b> ${isDesktop.any()? isDesktop.any() : isMobile.any()}</li>
        <li><b>Navegador: </b> ${isBrowser.any()}</li>
    </ul>
    `;

    if(isBrowser.chrome()){
        $id.innerHTML += '<p>Este contenido es solo para Chrome</p>';
    }
    if(isBrowser.firefox()){
        $id.innerHTML += '<p>Este contenido es solo para Firefox</p>';
    }
    if(isBrowser.opera()){
        $id.innerHTML += '<p>Este contenido es solo para Opera</p>';
    }
    if(isBrowser.safari()){
        $id.innerHTML += '<p>Este contenido es solo para Safari</p>';
    }
    if(isMobile.android()){
        window.location.href = "https://facebook.com";
    }



}

