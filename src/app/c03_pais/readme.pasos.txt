https://angular.io/cli/generate

Seccion 8
==========
    .- Rutas
    .- RouterLink y RouterLinkActive
    .- Componentes especializados
    .- DebounceTime   (Avanzados)
    .- Inputs         (Avanzados-media)
    .- SwitchMaps
    .- Consumo de APIs
    .- Tipado de datos
    .- Menú de aplicación
    .- En esta sección daremos los fundamentos de una aplicación SPA (Single Page Application), y luego, las seguiremos haciendo pero mediante carga perezosa (lazyload), esta es otra aplicación real que nos enseñara mucho de cómo funciona Angular y como la información fluye en ella.         
    Creamos las carpetas de Pais
    //NOOOO   ng g m c03_pais/pais/shared
    ng g m c03_pais/pais 
    ng g c c03_pais/pais/pagePais --skip-tests
    ng g c c03_pais/pais/shared/sidebarPais --skip-tests
    ng g c c03_pais/pais/porCapital --skip-tests -is
    ng g c c03_pais/pais/porPais --skip-tests -is
    ng g c c03_pais/pais/porRegion --skip-tests -is
    ng g c c03_pais/pais/verPais --skip-tests -is
    ng g s c03_pais/pais/services/pais --skip-tests
    ng g c c03_pais/pais/componentes/paisTabla --skip-tests 
    ng g c c03_pais/pais/componentes/paisInput --skip-tests 

.- Agregamos css en index.htm    

.- Creamos app-routing-pais.module.ts en pais
    con cualquier página por error ==> 404
   Agregamos app-routing.module.ts a app.modules.ts en import ==> AppRoutingModule,
   
   agregamos en el html, de lo contrario no funcionará
        <router-outlet></router-outlet>

.- Creamos app-routing.module.ts  en principal
     http://localhost:4200/pais-todo
     http://localhost:4200/pais-todo/nose
     http://localhost:4200/pais-todo/pais-pais
     http://localhost:4200/pais-todo/pais-region
     http://localhost:4200/pais-todo/pais-capital
     http://localhost:4200/pais-todo/ver-pais/12
     .- primero agregar página principal en routing.pais
     agregar en el html 
         <router-outlet></router-outlet>
     se Caera
        importamos en  en pais.module   RouterModule
        importamos en pais AppRoutingPaisModule
