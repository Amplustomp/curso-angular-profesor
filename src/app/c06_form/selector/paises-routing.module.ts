import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectorComponent } from './pages/selector/selector.component';
import { PagePrinComponent } from '../lifecycle/pages/page-prin/page-prin.component';

const routes: Routes = [
  {
    path: '',
    children: [
        { path: 'selector', component: SelectorComponent },
        { path: 'lifecycle', component: PagePrinComponent },
       // { path: '**', redirectTo: 'selector' },
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
