import { Injectable } from '@angular/core';

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
}
