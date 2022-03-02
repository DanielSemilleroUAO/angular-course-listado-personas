import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from './persona.model';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ) { }

  // Cargar personas
  cargarPersonas() {
    const token = this.loginService.getIdToken();
    return this.http.get<Persona[]>('https://listado-personas-f7c1e-default-rtdb.firebaseio.com/datos.json?auth=' + token);
  }

  // Guardar personas
  guardarPersonas(personas: Persona[]) {
    const token = this.loginService.getIdToken();
    this.http.put('https://listado-personas-f7c1e-default-rtdb.firebaseio.com/datos.json?auth=' + token, personas)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }

  modificarPersona(index: number, persona: Persona) {
    const token = this.loginService.getIdToken();
    let url: string;
    url = 'https://listado-personas-f7c1e-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token
    this.http.put(url, persona).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }

  eliminarPersona(index: number) {
    const token = this.loginService.getIdToken();
    let url: string;
    url = 'https://listado-personas-f7c1e-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token
    this.http.delete(url).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }

}
