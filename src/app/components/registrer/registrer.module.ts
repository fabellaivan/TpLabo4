import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrerComponent } from './registrer.component';
import { RegistrerRoutingModule } from './registrer-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegistrerComponent],
  imports: [CommonModule, RegistrerRoutingModule, ReactiveFormsModule],
})
export class RegistrerModule {}
