import { GokuViewComponent } from './templates/goku/goku-view/goku-view.component';
import { GokuInputComponent } from './templates/goku/goku-input/goku-input.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'template/goku/input', component: GokuInputComponent },
  { path: 'template/goku/view', component: GokuViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
