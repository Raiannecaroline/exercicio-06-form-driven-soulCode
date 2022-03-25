import { Component, Input } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogDrivenComponent } from '../dialog-driven/dialog-driven.component';

@Component({
  selector: 'app-form-driven',
  templateUrl: './form-driven.component.html',
  styleUrls: ['./form-driven.component.css']
})
export class FormDrivenComponent {

  @Input()
  title: string = 'Cadastre-se!'

  name: string = ''
  lastName: string = ''
  user: string = ''
  email: string = ''
  cpf: string = ''
  tel: string = ''
  endereco: string = ''
  complemento: string = ''
  senha: any = ''
  confirmaSenha: any = ''

  constructor(
    private snackFormDriven: MatSnackBar,
    private dialog: MatDialog
  ){}

  buttonEnviar(): void {
    
    console.log(`Name = ${this.name}`)
    console.log(`Last Name = ${this.lastName}`)
    console.log(`User ${this.user}`)
    console.log(`Email = ${this.email}`)
    console.log(`CPF = ${this.cpf}`)
    console.log(`Telefone = ${this.tel}`)
    console.log(`Endereço = ${this.endereco}`)
    console.log(`Complemento = ${this.complemento}`)
    console.log(`Senha = ${this.senha}`)
    console.log(`Confirma Senha = ${this.confirmaSenha}`)

    this.snackFormDriven.open('Você foi cadastrado!', 'Ok', { duration: 3000 })

    let refDialog = this.dialog.open(DialogDrivenComponent)

    refDialog.componentInstance.nameDialog = this.name
    refDialog.componentInstance.lastnameDialog = this.lastName
    refDialog.componentInstance.usernameDialog = this.user
    refDialog.componentInstance.emailDialog = this.email
    refDialog.componentInstance.cpfDialog = this.cpf
    refDialog.componentInstance.telDialog = this.tel
    refDialog.componentInstance.enderecoDialog = this.endereco

    
  }

  
  validarButtonsSenhas(): void {
    if(this.senha === this.confirmaSenha){
      alert('Senhas são compatíveis!!')
    } else {
      alert('As senhas são divergentes!! Por favor, coloque os campos (senha) iguais')
    }
  }

}