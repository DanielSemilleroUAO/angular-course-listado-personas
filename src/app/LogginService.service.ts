import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogginServiceService {

  constructor() { }

  enviaMensajeConsola() {
    console.log('Mensaje');
  }

}
