import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-driven',
  templateUrl: './form-driven.component.html',
  styleUrls: ['./form-driven.component.css']
})
export class FormDrivenComponent{

  @Input()
  title: string = 'Cadastre-se!'

  name: string = ''
  lastName: string = ''
  user: string = ''
  cpf: string = ''
  telefone: number = 0
  endereco: string = ''
  complemento: string = ''
  senha: string = ''
  confirmaSenha: string = ''

  cadastrosData: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    username: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required, Validators.minLength(11)]),
    telefone: new FormControl('', [Validators.required]),
    endereco: new FormControl('', [Validators.required]),
    complemento: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmaSenha: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

}