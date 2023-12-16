import { BuscaTarefaService } from './busca-tarefa-services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-tarefas',
  templateUrl: './mostrar-tarefas.component.html',
  styleUrls: ['./mostrar-tarefas.component.css']
})
export class MostrarTarefasComponent implements OnInit {

  tarefas: any;
  buscaTarefaService : BuscaTarefaService

  constructor( buscaTarefaService : BuscaTarefaService) { 

    this.buscaTarefaService = buscaTarefaService;

  }

  ngOnInit(): void {

    this.tarefas = this.buscaTarefaService.buscaTarefas().subscribe((data => {
    this.tarefas = data;
    console.log(this.tarefas);

    }))

  }
}
