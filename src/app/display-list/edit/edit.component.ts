import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar ,MatSnackBarModule } from "@angular/material/snack-bar";
import { Image } from 'src/app/image.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class EditComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    public dialog: MatDialog,
    private snackbar: MatSnackBar,
    public formBuilder: FormBuilder,

    @Inject(MAT_DIALOG_DATA) public data: Image,
  ) { }
  countryList : any=['India','Austrelia','Africa','Pakistan','Dubai'];

  
  ngOnInit(): void {
    console.log(this.data);
    this.registerForm = this.formBuilder.group({
      // age: ['', Validators.required],
    //  image:['', Validators.required],
     name: ['', Validators.required],
     email: ['', [Validators.required, Validators.email]],
     country: ['', Validators.required],
     dob: ['', Validators.required]
    });
  }
  resetForm() {
    this.registerForm.reset();
  }
  onEditItemFormSubmit(){
this.resetForm();
  }
  public close(): void {
    this.dialogRef.close();
  }
}
