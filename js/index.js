const $menuMovil = document.querySelector(".menuMovil"),
$contacto = document.getElementById("contacto"),
$menuServicios = document.getElementById('menuServicios'),
$menuServiciosM = document.getElementById('menuServiciosM');

/* EVITAR REENVÍO DE FORMULARIOS */
if (window.history.replaceState) 
{ 
    window.history.replaceState(null, null, window.location.href);
}

/* TAMAÑOS DE LA VENTANA */
function tamVentana() {
    var tam = [0, 0];
    if (typeof window.innerWidth != 'undefined')
    {
      tam = [window.innerWidth,window.innerHeight];
    }
    else if (typeof document.documentElement != 'undefined'
        && typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0)
    {
      tam = [
          document.documentElement.clientWidth,
          document.documentElement.clientHeight
      ];
    }
    else   {
      tam = [
          document.getElementsByTagName('body')[0].clientWidth,
          document.getElementsByTagName('body')[0].clientHeight
      ];
    }
    return tam;
}

tamI = tamVentana()
if (tamI[0] >= 1200)
{
    $nav = document.getElementById('nav1');
    $nav.classList.remove('fondoN');
    $nav.classList.add('fondoNA');
}

/* EVENTOS CLICK */
document.addEventListener("click", (e)=>{

    /* Toogle menú móvil */
    if(e.target.matches(".bMovil") || e.target.matches(".bMovil i"))
    {
        if($menuMovil.classList.contains("sMenuMovil"))
        {
            $menuMovil.classList.remove("sMenuMovil");
            $contacto.classList.remove("contactoSinMenu");
            $contacto.classList.add("contactoEnMenu");
        
        }
        else
        {
            $menuServiciosM.classList.add("d-none");
            $menuMovil.classList.add("sMenuMovil");
            $contacto.classList.remove("contactoEnMenu");
            $contacto.classList.add("contactoSinMenu");
        }
    }

    /* Fuera de target menú móvil */
    if((!e.target.matches(".bMovil")) && (!e.target.matches(".bMovil i")) && (!e.target.matches(".menuMovil")) && (!e.target.matches(".menuMovil a")) && (!e.target.matches("#enlaceServiciosM")) && (!e.target.matches("#enlaceServiciosMI")))
    {
        if(!$menuMovil.classList.contains("sMenuMovil"))
        {
            $menuServiciosM.classList.add("d-none");
            $menuMovil.classList.add("sMenuMovil");
            $contacto.classList.remove("contactoEnMenu");
            $contacto.classList.add("contactoSinMenu");
        }
    }

    if(e.target.matches(".whatsapp") || e.target.matches(".whatsappTE"))
    {
        window.location.href = "https://api.whatsapp.com/send?phone=34689918219";
    }

    if(e.target.matches(".telefono") || e.target.matches(".telefonoTE"))
    {
        window.location.href = "tel:+34689918219";
    }

    if(e.target.matches(".email") || e.target.matches(".emailTE"))
    {
        window.location.href = "mailto:consultinghblpauditoria@gmail.com";
    }

    /* Toogle menú Servicios */
    if(e.target.matches("#enlaceServicios") || e.target.matches("#enlaceServiciosI"))
    {
        if($menuServicios.classList.contains("d-none"))
        {
            $menuServicios.classList.remove("d-none");
        }
        else
        {
            $menuServicios.classList.add("d-none");
        }
    }

    /* Fuera de target menú Servicios */
    if((!e.target.matches("#enlaceServicios")) && (!e.target.matches("#menuServicios")) && (!e.target.matches("#enlaceServiciosI")))
    {
        $menuServicios.classList.add("d-none");
    }

    /* Toogle menú Servicios Móvil */
    if(e.target.matches("#enlaceServiciosM") || e.target.matches("#enlaceServiciosMI"))
    {
        if($menuServiciosM.classList.contains("d-none"))
        {
            $menuServiciosM.classList.remove("d-none");
        }
        else
        {
            $menuServiciosM.classList.add("d-none");
        }
    }

    if(e.target.matches("#consortium"))
    {
        window.location.href = "https://www.abogadis.com/";
    }

    if(e.target.matches("#redLegal"))
    {
        window.location.href = "https://twitter.com/redjuristas";
    }

    if(e.target.matches("#adn"))
    {
        window.location.href = "https://adngrm.com/";
    }

    if(e.target.matches("#copturismo"))
    {
        window.location.href = "https://www.copturismo.com/";
    }

    if(e.target.matches("#perezDiepa"))
    {
        window.location.href = "https://www.perezdiepaabogados.es/";
    }

});

/* MAPA */
function iniciarMap(){
    var coord = {lat:28.0989709 ,lng:-15.4171624};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 16,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

/* SCROLL */
window.onscroll = function() {
    var y = window.scrollY;
    if (y != 0) 
    {
        tam = tamVentana();
        if (tam[0] >= 1200)
        {
            $nav = document.getElementById('nav1');
            $nav.classList.remove('fondoNA');
            $nav.classList.add('fondoN');
        }
    }
    else
    {
        if (tam[0] >= 1200)
        {
            $nav = document.getElementById('nav1');
            $nav.classList.remove('fondoN');
            $nav.classList.add('fondoNA');
        }
    }
};

/* CAMBIO DE TAMAÑO DE LA VENTANA */
window.addEventListener("resize", (e)=>{
    y = window.scrollY;
    tam = tamVentana();
    if (tam[0] >= 1200)
    {
        if(y != 0)
        {
            $nav = document.getElementById('nav1');
            $nav.classList.remove('fondoNA');
            $nav.classList.add('fondoN');
        }
        else
        {
            $nav = document.getElementById('nav1');
            $nav.classList.remove('fondoN');
            $nav.classList.add('fondoNA');
        } 
    }
    else
    {
        $nav = document.getElementById('nav1');
        $nav.classList.remove('fondoNA');
        $nav.classList.add('fondoN'); 
    }

});

