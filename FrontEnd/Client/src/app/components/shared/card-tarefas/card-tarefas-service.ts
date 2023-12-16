import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Tarefa } from "src/app/model/Tarefa";

@Injectable({
    providedIn: 'root'
})

export class CardService{

    private apiURL = 'https://localhost:7204/Tarefa/';

    constructor(private http: HttpClient){}

    deleteItem(id: number){
       return this.http.delete(`${this.apiURL} ${id}`);
    }
}