import { Tarefa } from './../../model/Tarefa';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,  FormGroup  }  from  '@angular/forms';


@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.component.html',
  styleUrls: ['./criar-tarefa.component.css']
})
export class CriarTarefaComponent implements OnInit {
  
  formTarefa!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { 
  }

  ngOnInit(): void {
    this.criarFormulario(new Tarefa());
  }

  criarFormulario(tarefa: Tarefa){
    this.formTarefa = this.formBuilder.group({
    titulo: [tarefa.titulo],
    descricao: [tarefa.descricao],
  })
}

  enviarFormulario(){
    const formData = this.formTarefa.getRawValue();
    this.http.post('https://localhost:7204/Tarefa/CriarTarefa', formData).subscribe(() =>{
      console.log("Formulario enviado com sucesso")
      console.log(this.formTarefa.value);
    })
    // alert("Tarefa criado com sucesso!");
    location.reload();
  }
}

