import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { LogginServiceService } from './LogginService.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  personas: Persona[] = [
    new Persona('Daniel', 'Delgado'),
    new Persona('Katerin', 'Delgado'),
  ];

  constructor(
    private logginService: LogginServiceService,
    private dataService: DataService
  ) { }

  setPersonas(personas: Persona[]) {
    this.personas = personas;
  }

  obtenerPersonas() {
    return this.dataService.cargarPersonas();
  }

  agregarPersona(persona: Persona) {
    this.logginService.enviaMensajeConsola();
    if (this.personas == null) {
      this.personas = [];
    }
    this.personas.push(persona);
    this.dataService.guardarPersonas(this.personas);
  }

  encontrarPersona(id: number) {
    let persona: Persona = this.personas[id];
    return persona;
  }

  modificarPersona(id: number, persona: Persona) {
    let personaBD = this.personas[id];
    personaBD.nombre = persona.nombre;
    personaBD.apellido = persona.apellido;
    this.dataService.modificarPersona(id, personaBD);
  }

  eliminarPersona(id: number) {
    this.personas.splice(id, 1);
    this.dataService.eliminarPersona(id);
    this.modificarPersonas();
  }

  modificarPersonas() {
    if (this.personas != null) {
      this.dataService.guardarPersonas(this.personas);
    }
  }

}
