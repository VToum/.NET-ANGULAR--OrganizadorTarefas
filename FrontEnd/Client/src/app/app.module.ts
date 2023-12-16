import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CriarTarefaComponent } from './components/criar-tarefa/criar-tarefa.component';
import { MostrarTarefasComponent } from './components/mostrar-tarefas/mostrar-tarefas.component';
import { CardTarefasComponent } from './components/shared/card-tarefas/card-tarefas.component';
import { BuscaTarefaService } from './components/mostrar-tarefas/busca-tarefa-services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CriarTarefaComponent,
    MostrarTarefasComponent,
    CardTarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BuscaTarefaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
