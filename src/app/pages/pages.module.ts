import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { MenComponent } from './men/men.component';
import { KidsComponent } from './kids/kids.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { NgbModule, NgbCarousel, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeproComponent } from './home/homepro/homepro.component';


@NgModule({
  declarations: [
     HomeComponent,
      MenComponent,
       KidsComponent,
        EquipmentComponent,
        HomeproComponent
      ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgbModule,
    NgbCarousel,
    FormsModule,
    ReactiveFormsModule,
    NgbSlide,
    BrowserModule
  ],
  exports : [NgbCarousel]
})
export class PagesModule { }
