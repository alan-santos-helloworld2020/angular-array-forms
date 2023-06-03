import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICliente } from 'src/app/interfaces/cliente';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  form!: FormGroup;
  cliente!:ICliente;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createFormCadastro();
    this.contatos.push(this.gerarContato())

  }
  
  createFormCadastro() {
    this.form = this.fb.group({
      nome: new FormControl(null, [Validators.required]),
      cpf: new FormControl(null, [Validators.required]),      
      contatos: this.fb.array([])
    })
  }

  get contatos() {
    return this.form.controls['contatos'] as FormArray
  }

  gerarContato():FormGroup{
    return new FormGroup({
      email: new FormControl(null, [Validators.required]),
      telefone:new FormControl(null, [Validators.required]),
      celular:new FormControl(null, [Validators.required]),
    })
  }

  gerarMaisContatos(){
    this.contatos.push(this.gerarContato())
  }

  removerContato(idx:number){
    idx > 0  ? this.contatos.removeAt(idx):false;
  }


  Onsubmit() {
    this.cliente = <ICliente>this.form.value
    alert(JSON.stringify(this.cliente))
  }
}
