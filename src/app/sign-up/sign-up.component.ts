import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup;
  countryList : any=['India','Austrelia','Africa','Pakistan','Dubai'];
  constructor(private f: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.f.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, RxwebValidators.email()]],
      country: ['', Validators.required],
      image:['',[Validators.required,
      
        // RxwebValidators.image({maxHeight:100,maxWidth:100 }),
        RxwebValidators.extension({extensions:["jpeg","gif","jpg"]})]
        ]  ,
      dob: ['', Validators.required]
    });
  }

  // tslint:disable-next-line: typedef
  submitForm() {
    alert('Your response has been recorded successfully..!');
    this.clearForm();
  }

  // tslint:disable-next-line: typedef
  clearForm() {
    this.registerForm.reset();
  }
}
