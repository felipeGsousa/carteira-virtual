import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {NgxMaskModule} from "ngx-mask";




@NgModule({
  declarations: [
    CadastroComponent
  ],
  exports: [
    CadastroComponent
  ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        NgxMaskModule,
    ]
})
export class ComponentsModule { }
