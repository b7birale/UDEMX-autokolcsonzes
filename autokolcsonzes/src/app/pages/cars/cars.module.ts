import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
//import { MenuComponent } from '../../shared/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateFormatPipe } from '../../shared/pipes/date-format.pipe';


@NgModule({
  declarations: [
    CarsComponent,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CarsModule { }
