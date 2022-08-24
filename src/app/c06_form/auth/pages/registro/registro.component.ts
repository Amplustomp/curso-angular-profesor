import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/c06_form/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/c06_form/shared/validator/validator.service';
// ya no lo necesito, esta en validator.service
//import { nombreApellidoPattern,emailPattern, noPuedeSerStrider } from '../../../shared/validator/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  /* exportadas a validaciones.ts
  nombrePatrern = "([a-zA-Z]+) ([a-zA-Z]+)"
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  
  noPuedeSerStrider( control: FormControl ) {
    const valorForm = control.value.trim()
    console.log("noPuedeSerStrider",valorForm)
    console.log("noPuedeSerStrider???",control.value.trim())
    const valor:string = control.value?.trim().toLowerCase();
    // Que el username no puede ser strider
    if ( valor === 'strider' ) {
      // Retorno un objeto, ya que cuando es null, significa correcto
      // puede ser cualquier objeto
      return {noStrider: true }
    } 
    
    return null;
  }
  */
 
 /*
  miFormulario: FormGroup = this.fb.group({
    //nombre: ['', [ Validators.required,Validators.pattern(this.nombrePatrern)] ],
    nombre: ['', [ Validators.required,Validators.pattern(nombreApellidoPattern)] ],
    email: ['', [ Validators.required
                 //,Validators.email ==> error permite harrys@gmail
                 ,Validators.pattern(emailPattern)
                 ]],
    //username: ['', [ Validators.required,this.noPuedeSerStrider]],
    username: ['', [ Validators.required,noPuedeSerStrider]],
    password: ['', [ Validators.required, Validators.minLength(6) ]  ],
    password2: ['', [ Validators.required ]  ],
  }, {
    validators: [  ]
  });
  */
  
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, Validators.pattern( this.validatorService.nombreApellidoPattern ) ] ],
    email: ['', [ Validators.required, Validators.pattern( this.validatorService.emailPattern ) ]
                                                             , [ this.emailValidator ]  //Asincrona
                                                            ],
    username: ['', [ Validators.required, this.validatorService.noPuedeSerStrider ] ],
    password: ['', [ Validators.required, Validators.minLength(6) ]  ],
    password2: ['', [ Validators.required ]  ],
  }, {
    // llamamos a una funcion que se ejecutrá asincronamente
    validators: [ this.validatorService.camposIguales('password','password2') ]
  });


  get emailErrorMsg(): string {
    
    const errors = this.miFormulario.get('email')?.errors;
    if ( errors?.required ) {
      return 'Email es obligatorio';
    } else if ( errors?.pattern ) {
      return 'El valor ingresado no tiene formato de correo';
    } else if ( errors?.emailTomado ) {
      return 'El email ya fue tomado';
    }

    return '';
  }

  constructor( private fb: FormBuilder,
               private validatorService: ValidatorService,
               private emailValidator: EmailValidatorService 
               ) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Carlos Raul',
      email: 'test3@test.com',
      username: 'harrys',
      password: '123456',
      password2: '123456'
    })
  }

  // Validacion del campo que no exista
  campoNoValido( campo: string ) {
    //(campo)? ==> ?, por si no exite el campo
    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched;
  }




  submitFormulario() {
    console.log(this.miFormulario.value);
    // markAllAsTouched==> dispara todas las validaciones como si los tocara
    this.miFormulario.markAllAsTouched();
  }

  emailRequerido(){
    console.log("emailRequerido")
    return this.miFormulario.get('email')?.errors?.required
          && this.miFormulario.get('email')?.touched;
  }

  emailFormato(){
    console.log("emailFormato")
    return this.miFormulario.get('email')?.errors?.pattern
          && this.miFormulario.get('email')?.touched;
  }

  emailTomado(){
    console.log("emailTomado")
    return this.miFormulario.get('email')?.errors?.emailTomado
          && this.miFormulario.get('email')?.touched;
  }



}
