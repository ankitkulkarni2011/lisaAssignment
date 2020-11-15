import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../image.service';
import { Image } from 'src/app/image.service';

@Component({
  selector: 'app-edit-redirect',
  templateUrl: './edit-redirect.component.html',
  styleUrls: ['./edit-redirect.component.css']
})
export class EditRedirectComponent implements OnInit {
  registerForm: FormGroup;
  countryList : any=['India','Austrelia','Africa','Pakistan','Dubai'];
  public data: Image;

  constructor(private activatedRoute : ActivatedRoute,
    private imgservice :ImageService,
    public formBuilder: FormBuilder,

    ) {
    this.activatedRoute.paramMap.subscribe(param => {
      console.log(param);
      
    });
   }

  ngOnInit(): void {
    console.log(this.imgservice.sharedData);
    this.data = this.imgservice.sharedData;
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
  
}
