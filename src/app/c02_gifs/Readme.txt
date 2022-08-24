00
   
pip install python-http-client
HttpClientModule


.- ng new s03-gifsApp
    no routing 
    CSS
.- Levantar App
    ng serve -o


.- Bootstrap   // Pendiente?????????????????????????
   https://getbootstrap.com/
   copiamos el link, en nuestro src/index.html    

.-  Creamos en nuestro html nuestro sidebar

.- Una vez que funciono lo anterior 
    lo traspasamos a un modulo
   ng g m c02-gifs/shared       // Modulo
   ng g c c02-gifs/shared/sidebarGifs --skip-tests   // componente -is == sin css
       exportamos sidebar en shared.modules, automaticamente lo realizo el comando
       **** Agregamos en app.modules.ts
       **** movemos nuestro sidebar a nuestro html sidebar
       **** movemos las instrucciones css al sidebar.css



Pagina Gifst       
   ng g m c02-gifs       // Modulo
       importamos gifs en module.ts
   ng g c c02-gifs/prinPage  
   ng g c c02-gifs/gifsPage  --skip-tests      // Modulo       
   ng g c c02-gifs/busqueda  --skip-tests      
   ng g c c02-gifs/resultado  --skip-tests      
   ng g s c02-gifs/services/gifs  --skip-tests      
        note que puso root, significa que queda global
        por lo cual no hay que agregarlos en los módules
        @Injectable({  providedIn: 'root'})



   .- LocalStorage
   .- Accesso desde el SideBar al Servicio para buscar        
         agregamos click en el html
