import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  formEx: string = '1';

  form1: boolean = true;
  form2: boolean = false;
  form3: boolean = false;

  prosseguir: boolean = true;
  retornar: boolean = false;
  cadastrar: boolean = false;


  constructor() {
  }

  ngOnInit(): void {
  }

  prosseguirFunc(){
    if (this.formEx === "1"){
      this.formEx = "2"
      this.form1 = false;
      this.form2 = true;
      this.retornar = true;
    }
    else if (this.formEx === "2"){
      this.formEx = "3"
      this.form2 = false;
      this.form3 = true;
      this.prosseguir = false;
      this.cadastrar = true;
    }
  }

  retornarFunc(){
    if (this.formEx === "2"){
      this.formEx = "1"
      this.form1 = true;
      this.form2 = false;
      this.retornar = false;
    }
    else if (this.formEx === "3"){
      this.formEx = "2"
      this.form3 = false;
      this.form2 = true;
      this.prosseguir = true;
      this.cadastrar = false;
    }
  }
}
