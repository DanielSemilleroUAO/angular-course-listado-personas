import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  titulo = 'Listado de personas';
  personas: Persona[] = [];
  nombre = '';
  apellido = '';

  constructor(
    private personasService: PersonasService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    // this.personas = this.personasService.personas;
    initializeApp({
      apiKey: "AIzaSyD_MyTEBQqu4EXIce1hUt52Qo_s_6C2NME",
      authDomain: "listado-personas-f7c1e.firebaseapp.com",
    });
  }

  personaAgregar(persona: Persona) {
    this.personasService.agregarPersona(persona);
    //this.personas.push(persona);
  }

  isAutenticado() {
    return this.loginService.isAutenticado();
  }

  salir() {
    this.loginService.logout();
  }

}
