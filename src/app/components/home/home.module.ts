import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { ChatComponent } from '../chat/chat.component';
import { FormsModule } from '@angular/forms';
import { JuegosComponent } from '../Juegos/juegos.component';
import { CartasComponent } from '../Juegos/cartas/cartas.component';
import { AhorComponent } from '../Juegos/ahorcado/ahor.component';
import { IngresoPalabraComponent } from '../Juegos/ahorcado/palabras/palabra.component';
import { AhorcadoComponent } from '../Juegos/ahorcado/ahorcado/ahorcado.component';
import { PreguntadosComponent } from '../Juegos/preguntados/preguntados.component';
import { AdivinaElNumeroComponent } from '../Juegos/adivinaNumero/adivinaN.component';


@NgModule({
    declarations: [
        HomeComponent,
        NavbarComponent,
        ChatComponent,
        JuegosComponent,
        CartasComponent,
        AhorComponent,
        IngresoPalabraComponent,
        AhorcadoComponent,
        PreguntadosComponent,
        AdivinaElNumeroComponent],
    exports: [],
    imports: [CommonModule, HomeRoutingModule, FormsModule]
})
export class HomeModule { }
