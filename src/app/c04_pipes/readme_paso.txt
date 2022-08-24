Seccion 11
    Todos los Pipes de Angular a la fecha
        Uppercase
        Lowercase
        TitleCase
        Date
        Decimal
        Currency
        Percent
        i18nSelect
        i18Plural
        KeyValue
        Json
        Async

    https://angular.io/api?query=pipe
    https://www.primefaces.org/primeng/

    npm install     primeng primeicons

    https://primefaces.org/primeng/showcase/#/setup
    agregar en angular.json en style bajo assets (lo get started)
            node_modules/primeicons/primeicons.css
            node_modules/primeng/resources/themes/saga-blue/theme.css
            node_modules/primeng/resources/primeng.min.css

    https://primefaces.org/primeng/showcase/#/primeflex
    npm install primeflex --save
        agregar en styles angular.json ==> "node_modules/primeflex/primeflex.css"


    ng g m c04_pipes/c00Modulo 
    ng g c c04_pipes/c01Basico --skip-tests
    ###    ng g m loadModulos
    ###    ng g c c04_pipes/c02Menu
    ng g m appRoute --flat
    ##     ng g c ./c04_pipes/numeros --skip-Tests --module=C00Modulo
    ng g c ./c04_pipes/pages/numeros --skip-Tests --skip-import
    ng g c ./c04_pipes/pages/noComunes --skip-Tests --skip-import
    ng g c ./c04_pipes/pages/basicos --skip-Tests --skip-import
    ng g c ./c04_pipes/pages/ordenar --skip-Tests --skip-import



    ng g pipe /c04_pipes/pipes/ordenar --skip-tests --skip-import
