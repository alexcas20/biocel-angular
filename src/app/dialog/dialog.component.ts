import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  freshnessList = ["Brand New", "Second Hand", "Refurbishde"];
  productForm !: FormGroup;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      Usuario : ['',Validators.required],
      Rol : ['',Validators.required],
      Contraseña : ['',Validators.required],
    })
  }

  addProduct(){
    console.log(this.productForm.value)
  }

}
