import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { AhorComponent } from './ahorcado/ahor.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PalabraService } from 'src/app/services/palabra-service';


@NgModule({
  declarations: [ 
  ],
  exports:[],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    
  ],
  providers: [PalabraService],
  bootstrap: [AhorComponent]
})
export class JuegosModule { }
 