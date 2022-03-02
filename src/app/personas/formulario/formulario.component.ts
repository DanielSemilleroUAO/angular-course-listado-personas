import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Persona } from '../../persona.model';
import { LogginServiceService } from '../../LogginService.service';
import { PersonasService } from '../../personas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() personaCreada = new EventEmitter<Persona>();

  nombre = '';
  apellido = '';
  index!: number;
  modoEdicion!: number;

  @ViewChild('nombreInput') nombreInput!: ElementRef;
  @ViewChild('apellidoInput') apellidoInput!: ElementRef;

  constructor(
    private logginService: LogginServiceService,
    private personaServices: PersonasService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
    if (this.modoEdicion != null && this.modoEdicion === 1) {
      let persona = this.personaServices.encontrarPersona(this.index);
      this.nombre = persona.nombre;
      this.apellido = persona.apellido;
    }
  }

  onGuardarPersona() {
    let persona = new Persona(this.nombre, this.apellido);
    if (this.index) {
      this.personaServices.modificarPersona(this.index, persona);
    } else {
      this.personaServices.agregarPersona(persona);
    }
    //this.logginService.enviaMensajeConsola();
    console.log(this.nombreInput.nativeElement.value);
    this.router.navigate(['personas'])
    //this.personaCreada.emit(new Persona(this.nombre, this.apellido));
    // this.personas.push(new Persona(this.nombre, this.apellido))
  }

  eliminarPersona() {
    if (this.index != null) {
      this.personaServices.eliminarPersona(this.index);
    }
    this.router.navigate(['personas'])
  }

}
