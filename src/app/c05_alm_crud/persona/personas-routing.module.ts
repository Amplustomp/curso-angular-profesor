import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { PersonaComponent } from './pages/persona/persona.component';
import { HomeComponent } from './pages/home/home.component';


const misRoutesHijas:Routes=[ 
          { path:'',
            component:HomeComponent,
            children:[
              //{path: 'home', component: HomeComponent    },
              {path: 'listado', component: ListarComponent    },
              {path: 'agregar', component: AgregarComponent    },
              {path: 'editar/:id', component: AgregarComponent    },
              {path: 'buscar', component: BuscarComponent    },
              {path: ':id', component: PersonaComponent    },
              {path: '**', redirectTo: 'listado'},
                     ]
          }
];

@NgModule({
  imports:[RouterModule.forChild(misRoutesHijas)],
  exports:[RouterModule],

})
export class AppPersonaRoutingModule { }
