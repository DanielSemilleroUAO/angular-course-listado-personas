import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];
  nombre = '';
  apellido = '';

  constructor(
    private personasService: PersonasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.personas = this.personasService.personas;
    this.personasService.obtenerPersonas().subscribe(
      (personas: Persona[]) => {
        console.log(personas);
        this.personas = personas;
        this.personasService.setPersonas(personas);
      }
    )

    

  }

  personaAgregar(persona: Persona) {
    this.personasService.agregarPersona(persona);
    //this.personas.push(persona);
  }

  agregar() {
    this.router.navigate(['personas/agregar']);
  }

}
