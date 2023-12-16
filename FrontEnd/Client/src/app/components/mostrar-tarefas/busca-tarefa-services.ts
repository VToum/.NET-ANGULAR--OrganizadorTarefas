import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Tarefa } from "src/app/model/Tarefa";

@Injectable()

export class BuscaTarefaService{

    private baseURL = 'https://localhost:7204/Tarefa/BuscarTodos';

    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http:HttpClient){}

    buscaTarefas(){
        return this.http.get(this.baseURL);
    }
}