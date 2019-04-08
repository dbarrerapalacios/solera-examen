import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [CardComponent, FormComponent, NavComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CardComponent,
    FormComponent,
    NavComponent
  ]
})
export class SharedModule { }
