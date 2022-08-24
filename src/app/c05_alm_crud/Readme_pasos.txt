Angular Material
Interfaces y tipado
Pipes personalizados
Variables de entorno
Autocomplete de AngularMaterial
Peticiones HTTP
JSON-Server

CRUD L
    Create
    Read
    Update
    Delete
    List
    Pipes puros e impuros
    Snacks
    Dialogs
    Inyección de servicios manualmente


Angular Flex y Flexbox  
        También  Material



.- Instalar  angular Material
    alm_crud ==> auth lazy material crud
    https://material.angular.io/
    https://material.angular.io/guide/getting-started
    https://fonts.google.com/icons?selected=Material+Icons:bookmark
    https://material.angular.io/components/sidenav/overview

    https://www.npmjs.com/package/@angular/flex-layout
    
    npm install @angular/material   
        or     ng add @angular/material
    npm install @angular/flex-layout
    npm install @angular/cdk

        ## NO  npm install primeflex
        ## NO npm install primeicons
        ## NO npm install primeng


   .- agregar en angular.json bajo style 
       "node_modules/@angular/material/prebuilt-themes/purple-green.css",

    
    OJOOOOO GUARD
    ##  ojo agrega al modulo principal
    ng g pipe c05_alm_crud/persona/pipe/personaImagen --skip-tests

    ng g m c05_alm_crud/aauth  ##############   VERRRRRRR --routing
    ng g s c05_alm_crud/aauth/services/auth --skip-tests
    ng g c c05_alm_crud/aauth/pages/login --skip-tests
    ng g c c05_alm_crud/aauth/pages/registro --skip-tests

    #### ng g m c05_alm_crud/persona
    #### ng g m c05_alm_crud/persona/personasRouting --flat

    ng g m c05_alm_crud/persona2 --routing

    ng g c c05_alm_crud/persona/pages/agregar --skip-tests
    ng g c c05_alm_crud/persona/pages/buscar --skip-tests
    ng g c c05_alm_crud/persona/pages/listar --skip-tests
    ng g c c05_alm_crud/persona/pages/persona --skip-tests
    ng g c c05_alm_crud/persona/pages/home --skip-tests
    ng g s c05_alm_crud/persona/services/persona --skip-tests
    ng g c c05_alm_crud/persona/componente/personaTarjeta --skip-tests
    ng g c c05_alm_crud/persona/componente/confirmar --skip-tests
    ng g m c05_alm_crud/material
    ng g m c05_alm_crud/shared
    ng g c c05_alm_crud/shared/errorPage --skip-tests
    ng g m c05_alm_crud/aauth/authRouting   --flat

    Break=======

    


    modulo aauth ?????no agregado

Creando    Listado.html

.- Creamos  Routing Principal
    ng g m appRouting   --flat

    - o agregamos al modulo principal
    - probamos
        
    - No resulta por que falta, en el app.componente.html 
             <router-outlet></router-outlet>

    -  aun no funciona
          Revisar Chrome para ver el error
        , falta agregar el routin persona al modulo persona

    .-****************  funciona

.- http://localhost:4200/personas/Listado.html  
   Error en Variables
   Error en MatDivider
        -Agregar en modulo Persona, altura del  que import
        schemas: [ CUSTOM_ELEMENTS_SCHEMA ]  


.- Listado
    Agregue el html

.- Agregar.
    Solucionar todos los errores
          problema principal ngModel, agregar(import) FormsModule, en el módulo más cercano
          nombre del pipe corregir personaImagen(personaImagenPipe)
    Insertamos un registros
    Los alumnos realizan
         Leer 
         Actualizar
         Crear
         Eliminar

********   Material  Modulo, GUI

.- Agregamos las librerías 
    FlexLayoutModule, ==> en PersonaModule
    MaterialModule, Tomar Hoja de Style
        .- 1ro Primero agregamos todas las librería dentro 
           de PersonaMudule
        .- 2do Creamos mejor un modulo con todos los exports 
           necesarios y luego agregamos el módulo a PersonaModule
        .- Por último agregamos el stylo dentro del 
           angular.json  en ==> Sytle dentro de ==> "architect": {
   Observe que el listado  se ve, pero el Agregar No

.- HomeComponent
    Agregar HTML colocando comentario :
        - aut.usuario
        - logout
        - Da error en Animations, BrowserAnimationsModule
          Agregar al ModuloPrincipal =>BrowserAnimationsModule
        - Ver Resultado
        - Revisar simple el Html, Flex etc
    
.- Editar.
    - Revisar Listador.html
      Salta a app-persona-tarjeta 
      - Vemos persona/editar==> router=> AgregarComponent 
    .- AgregarComponent onInit
       route. include
       activatedRoute.params

.- Auth         






    Exportaremos de manera perezosa, por lo cual en app-modules no importamos nada
    

.- Server JSON  
   https://www.npmjs.com/package/json-server
   npm install -g json-server    

Parte 2
========**************************

Seguridad

.- S16-Seguridad     
    Protección de rutas
    Rutas privadas
    Rutas públicas
    Servicio de autenticación
    Guards
    CanActivate
    Can Load
    Mantener la sesión del usuario

    ng g guard c05_alm_crud/aauth/guards/auth --skip-tests
        .- seleccionamos canActivate
        .- Agregamos canLoad, canActivate
        .- agregamos lo básico, console.log
        .- Activamos en app.routing.principal canactivate y canLoad


    Creamos Servicio
    Creamos app-routing
    Creamos guard
        CantLoad , utilizar si tienes LazyLoad
        CantActivate, utilizar Siempre
        LocalStorage
           Verifica


