import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Credentials } from '../../interfaces/credentials';


@Component({
  selector: 'app-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {

  frameworkFavorito: string = ''

  mostrarFrameworkFavorito(){
    console.log(this.frameworkFavorito)
  }

  formLogin = new FormGroup({
    usuario: new FormControl(''),
    contrasenia: new FormControl('')
  })

  credenciales: Credentials | null = null;

  manejarLogin(){
  /* console.log(this.formLogin.value); */

    const usuario = this.formLogin.value.usuario ?? '';
    const contrasenia = this.formLogin.value.contrasenia ?? '';

    /* console.log(nombreUsuario, contrasenia); */
 
    if (typeof usuario === 'string' && typeof contrasenia === 'string'){
      this.credenciales = {
        nombreUsuario: usuario, 
        contrasena: contrasenia
      }
      console.log(this.credenciales);
      /* document.write(`Usuario: ${credenciales.nombreUsuario} <br> Contraseña: ${credenciales.contrasena}`); */
    }

  }
}
