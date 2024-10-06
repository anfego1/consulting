const $menuMovil = document.querySelector(".menuMovil"),
$contacto = document.getElementById("contacto"),
$menuServicios = document.getElementById('menuServicios'),
$menuServiciosM = document.getElementById('menuServiciosM');

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
    if((!e.target.matches(".bMovil")) && (!e.target.matches(".bMovil i")) && (!e.target.matches(".menuMovil")) && (!e.target.matches(".menuMovil a")))
    {
        if(!$menuMovil.classList.contains("sMenuMovil"))
        {
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

});
