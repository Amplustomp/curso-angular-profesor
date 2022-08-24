import { NgModule} from "@angular/core"
import { RouterModule, Routes} from "@angular/router"
/*  Lazzy Load
import { PorPaisComponent } from './pais/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/por-region/por-region.component';
import { PorCapitalComponent } from './pais/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/ver-pais/ver-pais.component';
import { PrinPageComponent } from './gifs/prin-page/prin-page.component';
import { PagesPaisComponent } from './pais/pages/pages.component';


import { NumerosComponent } from "./c04_pipes/pages/numeros/numeros.component";
import { NoComunesComponent } from "./c04_pipes/pages/no-comunes/no-comunes.component";
import { OrdenarComponent } from "./c04_pipes/pages/ordenar/ordenar.component";
import { BasicosComponent } from "./c04_pipes/pages/basicos/basicos.component";
*/
import { ErrorPageComponent } from './c05_alm_crud/shared/error-page/error-page.component';
import { AuthGuard } from './c05_alm_crud/aauth/guards/auth.guard';

const misRoutes:Routes=[
    {path: '',    redirectTo: 'objetos/obj',    pathMatch: 'full'  },
    {path:'objetos'      , loadChildren:()=>import('./c01_persona/persona.module').then(m=>m.PersonaModule)},
    {path:'gifs-todo'    , loadChildren:()=>import('./c02_gifs/gifs.module').then(m=>m.GifsModule)},
    {path:'pipes'        , loadChildren:()=>import('./c04_pipes/c00-modulo.module').then(m=>m.C00ModuloModule)},
    {path:'pais-todo'    , loadChildren:()=>import('./c03_pais/pais.module').then(m=>m.PaisModule)},
    {path:'auth'         , loadChildren:()=>import('./c05_alm_crud/aauth/aauth.module').then(m=>m.AauthModule)},
    {path:'personas'     , loadChildren:()=>import('./c05_alm_crud/persona/persona.module').then(m=>m.PersonaModule)
                        //,canLoad:[AuthGuard]
                        //,canActivate:[AuthGuard]
                        },

    {path:'frm-tmp'      , loadChildren:()=>import('./c06_form/app-frm-tmp.module').then(m=>m.AppFrmTmpModule)},
    {path:'frm-tmp'      , loadChildren:()=>import('./c06_form/frm-tmp/frm-tmp.module').then(m=>m.FrmTmpModule)},
    {path:'frm-reac'     , loadChildren:()=>import('./c06_form/frm-reac/frm-reac.module').then(m=>m.FrmReacModule)},
    
    {path:'frm-auth'     , loadChildren:()=>import('./c06_form/auth/auth.module').then(m=>m.AuthReactModule)},

    {path:'frm-sel'     , loadChildren:()=>import('./c06_form/selector/paises.module').then(m=>m.PaisesModule)},
    {path:'mapas'       , loadChildren:()=>import('./c07_mapas/mapas/mapas.module').then(m=>m.MapasModule)},
    //Ver****{path:'graficos'    , loadChildren:()=>import('./c08_graficas/graficas/graficas.module').then(m=>m.GraficasModule)},
    {path:'directivas'  , loadChildren:()=>import('./c09_directivas/directivas.module').then(m=>m.DirectivasModule)},




    {path:'404'          , component:ErrorPageComponent},
    //{path:'**'           , redirectTo:'404'}
    /* Lazy Load
    {path:'gifs-todo'     , component:PrinPageComponent,     pathMatch:'full'},

    {path:'pais-menu'     , component:PagesPaisComponent},
    {path:'pais-menu/pais-pais'     , component:PorPaisComponent},
    {path:'pais-menu/pais-region'   , component:PorRegionComponent},
    {path:'pais-menu/pais-capital'  , component:PorCapitalComponent},
    //{path:'ver-pais/:id' , component:VerPaisComponent},
    // no ocupar guion(-)
    {path:'ver-pais/:countryId' , component:VerPaisComponent},


    {path:'pipes/numeros'         , component:NumerosComponent},
    {path:'pipes/no-comunes'      , component:NoComunesComponent},
    {path:'pipes/ordenar'         , component:OrdenarComponent},
    {path:'pipes/basicos'         , component:BasicosComponent},
    */
  
];

@NgModule({
    imports:[RouterModule.forRoot(misRoutes)],
    exports:[RouterModule],
})
export class AppRoutingModule{

}