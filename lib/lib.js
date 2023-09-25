function cargarMicrofrontend(urlGET, contenidoId) {
    var request = new XMLHttpRequest();
    request.open('GET', urlGET, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var contenidoDiv = document.getElementById(contenidoId);
        contenidoDiv.innerHTML = request.responseText;
      } else {
        console.error('Error al cargar el microfrontend.');
      }
    };
    request.onerror = function() {
      console.error('Error de conexión al cargar el microfrontend.');
    };
    request.send();
}

  
function agregarComponentes(tituloPagina) {
    var mapeoComponentes = {
        "Login": [
            {
                contenidoId: "navbar", 
                getURL: "/components/nav-azul.html"
            },
            {
                contenidoId: "sidenav", 
                getURL: "/components/sidenav.html"
            },
            
            {
                contenidoId: "contenidoT", 
                getURL: "/components/contenidoT.html"
            }
        ],
        "registro": {
            contenidoId: "contenido_registro", 
            getURL: "url_para_registro.html"
        }
    };

    if (mapeoComponentes[tituloPagina]) {
        var coleccionActual = mapeoComponentes[tituloPagina];
        
        // Itera a través de los componentes y cárgalos en la página
        coleccionActual.forEach(function(componente) {
            cargarMicrofrontend(componente.getURL, componente.contenidoId);
        });
    }
}

function agregarHTMLAlElemento(html, elementoId) {
    var elemento = document.getElementById(elementoId);
    
    if (elemento) {
        elemento.innerHTML = html;
    } else {
        console.error('El elemento con ID ' + elementoId + ' no se encontró en el DOM.');
    }
}

function cargarComponente(nombreComponente, elementoId) {
    fetch(nombreComponente)  // Utiliza el nombre de la ruta, como '/navbar' o '/footer'
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementoId).innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el componente:', error));
}


function agregarElementosAlMenu(tituloPagina) {
    var elementosJSON = {
        "Login": [
            { url: 'nueva_url1', textContent: 'Actualidad y Prevención' },
            { url: '/tutorial', textContent: 'Tutorial' },
            { url: 'salir_url', textContent: 'Salir', iconClass: 'fa fa-right-from-bracket' }
            
        ],
        
        "Registro noticias": [
            { url: 'otra_url1', textContent: 'Actualidad y Prevencion' },
            { url: 'otra_url2', textContent: 'Servicios' },
            { url: 'salir_url', textContent: 'Salir', iconClass: 'fa fa-right-from-bracket' }
        ],

        "ASISTENCIA MEDICA": [
            { url: 'otra_url1', textContent: 'Actualidad y Prevención' },
            { url: 'otra_url2', textContent: 'Servicios' },
            { url: 'otra_url2', textContent: 'salir' }
        ],

        "ADMINISTRADOR": [
            { url: 'otra_url1', textContent: 'Actualidad y Prevención' },
            { url: 'otra_url2', textContent: 'Servicios' },
            { url: 'otra_url2', textContent: 'salir' }
        ],

        "PERFIL": [
            { url: 'otra_url1', textContent: 'Actualidad y Prevención' },
            { url: 'otra_url2', textContent: 'Servicios' },
            { url: 'otra_url2', textContent: 'Avisos de Emergencia' },
            { url: 'otra_url2', textContent: 'salir' }
        ],

        "AGENDAMIENTO": [
            { url: 'otra_url1', textContent: 'Actualidad y Prevención' },
            { url: 'otra_url2', textContent: 'Servicios' },
            { url: 'otra_url2', textContent: 'salir' }
        ],

        "EDITAR CITA": [
            { url: 'otra_url1', textContent: 'Actualidad y Prevención' },
            { url: 'otra_url2', textContent: 'Servicios' },
            { url: 'otra_url2', textContent: 'salir' }
        ],

        "AVISOS DE EMERGENCIA": [
            { url: 'otra_url1', textContent: 'Actualidad y Prevención' },
            { url: 'otra_url2', textContent: 'Servicios' },
            { url: 'otra_url2', textContent: 'Avisos de Emergencia' },
            { url: 'otra_url2', textContent: 'Perfil' }
        ],

        "SENSORES": [
            { url: 'otra_url1', textContent: 'Actualidad y Prevención' },
            { url: 'otra_url2', textContent: 'Servicios' },
            { url: 'otra_url2', textContent: 'Perfil' }
        ],

        "NOTICIAS": [
            { url: 'otra_url1', textContent: 'Actualidad y Prevención' },
            { url: 'otra_url2', textContent: 'Servicios' },
            { url: 'otra_url2', textContent: 'Perfil' }
        ]
    
    };


    if (elementosJSON[tituloPagina]) {
        var menuUl = document.querySelector('.navbar-nav');

        elementosJSON[tituloPagina].forEach(function(elemento) {
            var nuevoLi = document.createElement('li');
            nuevoLi.classList.add('nav-item'); 

            var nuevoEnlace = document.createElement('a');
            nuevoEnlace.classList.add('nav-link'); 
            nuevoEnlace.textContent = elemento.textContent; 
            nuevoEnlace.href = elemento.url; 

            if (elemento.iconClass) {
                var nuevoIcono = document.createElement('i');
                nuevoIcono.className = elemento.iconClass; 
                nuevoEnlace.appendChild(nuevoIcono);
            }

            nuevoLi.appendChild(nuevoEnlace);
            menuUl.appendChild(nuevoLi);
        });
    }
}



function agregarElementosAlSide(tituloPagina) {
    
    var elementosJSON = {
        "Resgistro de Noticias": [
            { url: 'nueva_url1', textContent: 'NOTICIAS ACTUALIDAD' },
            { url: '/tutorial', textContent: 'EDUCACIÓN EN SALUD' },
            { url: 'salir_url', textContent: 'Salir', iconClass: 'fa fa-right-from-bracket' }
        ],
    
        "ASISTENCIA MÉDICA": [
            { url: 'otra_url1', textContent: 'CITAS' },
            { url: 'otra_url2', textContent: 'SOLICITAR ASISTENCIA' },
            { url: 'otra_url2', textContent: 'REVISIÓN MÉDICA' }
        ],

        "ADMINISTRADOR": [
            { url: 'otra_url1', textContent: 'SENSORES' },
            { url: 'otra_url2', textContent: 'MÉDICOS' },
            { url: 'otra_url2', textContent: 'NOTICIAS/PUBLICIDAD' }
        ],

        "PERFIL": [
            { url: 'otra_url1', textContent: 'EDITAR PERFIL' },
            { url: 'otra_url2', textContent: 'CERRAR SESIÓN' },
        ],

        "AGENDAMIENTO": [
            { url: 'otra_url1', textContent: 'CITAS' },
            { url: 'otra_url2', textContent: 'SOLICITAR ASISTENCIA' },
            { url: 'otra_url2', textContent: 'REVISIÓN MEDICA' }
        ],

        "EDITAR CITA": [
            { url: 'otra_url1', textContent: 'CITAS' },
            { url: 'otra_url2', textContent: 'SOLICITAR ASISTENCIA' },
            { url: 'otra_url2', textContent: 'REVISIÓN MEDICA' }
        ],
        
        "AVISOS DE EMERGENCIA": [
            { url: 'otra_url1', textContent: 'HISOTRIAL MÉDICO' },
            { url: 'otra_url2', textContent: 'AGENDA' },
            { url: 'otra_url2', textContent: 'ATENCIÓN MEDICA' }
        ],

        "SENSORES": [
            { url: 'otra_url1', textContent: 'SENSORES' },
            { url: 'otra_url2', textContent: 'MÉDICOS' },
            { url: 'otra_url2', textContent: 'NOTICIA/PUBLICIDAD' }
        ],

        "NOTICIAS": [
            { url: 'otra_url1', textContent: 'SENSORES' },
            { url: 'otra_url2', textContent: 'MÉDICOS' },
            { url: 'otra_url2', textContent: 'NOTICIA/PUBLICIDAD' }
        ]

    };
    var menuUl = document.querySelector('.sidenav');

    if (elementosJSON[tituloPagina]) {
        elementosJSON[tituloPagina].forEach(function (elemento) {
            var nuevoEnlace = document.createElement('a');
            nuevoEnlace.textContent = elemento.textContent;
            nuevoEnlace.href = elemento.url;

            if (elemento.iconClass) {
                var nuevoIcono = document.createElement('i');
                nuevoIcono.className = elemento.iconClass; 
                nuevoEnlace.appendChild(nuevoIcono);
            }

            menuUl.appendChild(nuevoEnlace);
        });
    }
}

function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    var elements = document.querySelectorAll(".container, .container-fluid");

    if (sidenav.style.width === "150px") {
        sidenav.style.width = "0";
        elements.forEach(function (element) {
            element.style.left = "0"; 
            element.style.position = "absolute"; 
            element.style.transition= "0.5s";
            element.style.width = "100%";
            
        });
    } else {
        sidenav.style.width = "150px";
        elements.forEach(function (element) {
            element.style.left = "150px"; 
            element.style.position = "fixed";
            element.style.transition= "0.5s"; 
            element.style.width = "calc(100% - 150px)";
            
            
        });
    }
}