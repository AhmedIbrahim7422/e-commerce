import { KidsComponent } from './../pages/kids/kids.component';
import { MenComponent } from './../pages/men/men.component';
import { HomeComponent } from './../pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { EquipmentComponent } from '../pages/equipment/equipment.component';

const routes: Routes = [
  {
    path: '', component: LandingComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'men', component: MenComponent},
      {path: 'kids', component: KidsComponent},
      {path: 'equipment', component: EquipmentComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
