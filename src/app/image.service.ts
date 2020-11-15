import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class Image {
  constructor(
    public name: string,
    public email: string,
    public age: Number,
    public dob: string,
    public imageLink: string,
    public signUpDate:string,
    public country:string
  ) { }
}

export class ImageService {
sharedData : Image;

  imgs: Image[] = [
    {
      name: 'Ankit Kulkarni',
       email :'ankitkulkarni2011@gmail.com',
      age :26,
      dob :'1994-03-18',
      imageLink :'./assets/1.jpg',
      signUpDate: '2000-03-12',
      country:"pakistan"
    },
  
  {
      name: 'Rajendra Jagtap',
       email:'rajendra007@gmail.com',
       age :20,
       dob :'1999-06-25',
       imageLink :'./assets/2.png',
       signUpDate: '2005-05-05',
       country:"USA"
  },
  {
  name :'luis phillipee',
  email:    'louisphille@hotmail.com',
  age:27,
  dob:    '1993-12-08',
  imageLink :'./assets/3.jpg',
  signUpDate:'1999-06-05',
  country:"India"
  },
  {
 
  name: 'vijendra pirane',
  email: 'viju.1993@rediffmail.com',
  age:21,
 dob: '1998-06-04',
 imageLink :'./assets/5.jpg',
 signUpDate:'2004-08-08',
 country:"United Arab Emirates"
   }  ,
   {
name: 'Dhanashree Deshmukh',
  email:'deshmukhdhanu.645@gmail.com',
   age: 21,
  dob: '1999-09-09',
  imageLink :'./assets/4.png',
  signUpDate:'2001-07-07',
  country:"Umapur"
   },
   {
 
 name:'Shankar Patil',
  email: 'patil.ruch614@gmail.com',
  age:25,
  dob:'1995-12-08',
  imageLink :'./assets/6.png',
  signUpDate:'2000-05-03',
  country:"Hulleluiya"
   },{
  name: 'shubhangi katkhede',
  email: 'katkhede.shubh@gmail.com',
  age:26,
 dob: '1994-02-04',
 imageLink :'./assets/7.jpg',
 signUpDate:'2001-04-09',
 country:"Afrika"
   },{
  name: 'devanshi karsinge',
  email:'karsingedevu143#gmail.com',
  age:22,
 dob: '1996-02-02',
 imageLink :'./assets/8.jpg',
 signUpDate:'2003-08-01',
 country:"Dubai"
   }
  ]
  constructor() { }
  
  showData(){
    return this.imgs
  }
}
