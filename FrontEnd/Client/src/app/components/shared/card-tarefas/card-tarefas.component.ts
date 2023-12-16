import { Component, Input, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/model/Tarefa';
import { HttpClient } from '@angular/common/http';
import { CardService } from './card-tarefas-service';


@Component({
  selector: 'app-card-tarefas',
  templateUrl: './card-tarefas.component.html',
  styleUrls: ['./card-tarefas.component.css']
})
export class CardTarefasComponent implements OnInit {

  @Input()

  tarefa!: Tarefa;

  constructor(private itemService: CardService ) { }

  ngOnInit(): void {
  }

  deleteCard(id: number){
    this.itemService.deleteItem(id).subscribe(() => {
      console.log(this.tarefa.id);
    })
    // alert("Tarefa removida com sucesso!");
    location.reload();
  }

 
}
