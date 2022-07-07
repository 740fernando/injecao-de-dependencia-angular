import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
/**
 * ng g service shared/people 
 * Injectable - Faz o serviço ser disponível a qualquer aplicação, 
 * pois vai ser injetado no root
 */

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any>{
    let peopleArray = [
      {
        firstName: "Fernando",
        lastName: "Luiz",
        age: 30
      },
      {
        firstName: "Lauren",
        lastName: "Ribeiro",
        age: 5
      },
      {
        firstName: "Chris",
        lastName: "Luiz",
        age: 7
      },
      {
        firstName: "Gabriel",
        lastName: "Luiz",
        age: 15
      }];
    return of(peopleArray) // of - GARANTE QUE OBSERVABLE TRANSMITE UM VALOR UNICO(ARRAY)
  }
}
