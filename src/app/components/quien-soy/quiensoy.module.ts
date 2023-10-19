import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuiensoyRoutingModule } from './quiensoy-routing.module';
import { QuienSoyComponent } from './quien-soy.component';

@NgModule({
  declarations: [QuienSoyComponent],
  imports: [CommonModule, QuiensoyRoutingModule],
})
export class QuiensoyModule {}
