import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dialog-driven',
  templateUrl: './dialog-driven.component.html',
  styleUrls: ['./dialog-driven.component.css']
})
export class DialogDrivenComponent implements OnInit {

  nameDialog: string = ''
  lastnameDialog: string = ''
  usernameDialog: string = ''
  emailDialog: string = ''
  cpfDialog: string = ''
  telDialog: string = ''
  enderecoDialog: string = ''

  constructor() { }

  ngOnInit(): void {
    
  }

}
