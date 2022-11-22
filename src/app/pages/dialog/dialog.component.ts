import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import Register from 'src/app/models/register.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  productForm !: FormGroup;
  actionBtn : string = "Guardar"
  hide = true;
  
  constructor(private formBuilder : FormBuilder, 
    private api : ApiService, 
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      code: ["",Validators.required],
      user : ['',Validators.required],
      password : ['',Validators.required],
      rol : ['',Validators.required],
      status: ['Activo', Validators.required]
    });

    if(this.editData){
    console.log(this.editData);
    this.actionBtn = "Actualizar";
    this.productForm.controls["code"].setValue(this.editData.code);
    this.productForm.controls["user"].setValue(this.editData.user);
    this.productForm.controls["rol"].setValue(this.editData.rol);
    this.productForm.controls["password"].setValue("");
    }
  }

  addUser(form:Register){
    if(!this.editData){
      if(this.productForm.valid){
        this.api.postData(form).subscribe({
          next:(res)=>{
            Swal.fire('Exito','Se ha registrado el usuario','success')
            this.productForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            Swal.fire('Error','Se ha producido un error al registar el usuario','error')
          }
        })
      }
    }else{
      this.updateUser(form)
    }
  }

  updateUser(form:Register){
    console.log(this.productForm.get("code")?.value)
    this.api.putUser(this.productForm.get("code")?.value, form).subscribe({
      next:(res)=>{
        Swal.fire('Exito','Se ha actualizado el usuario','success')
        this.productForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        Swal.fire('Exito','Se ha producido un error al actualizar el usuario','error')
      }
    })
  }
}
