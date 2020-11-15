import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { getMaxListeners } from 'process';
import { Image, ImageService } from '../image.service';
export interface studentTable {
  
  age: number;
  name: string;
  email: string;
  signUpDate : string;
}
@Component({
  selector: 'app-student-admin',
  templateUrl: './student-admin.component.html',
  styleUrls: ['./student-admin.component.css']
})
export class StudentAdminComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource;
  imgs: Image[] = []
  constructor( private _imgService:ImageService) { }

  ngOnInit(): void {
    this.imgs = this._imgService.showData()
     this.dataSource = new MatTableDataSource(this.imgs);
    this.dataSource.paginator = this.paginator;
  }
 
 columnsToDisplay: string[] = ['name', 'email', 'age', 'signUpDate'];

}
