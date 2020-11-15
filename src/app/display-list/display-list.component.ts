import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Image, ImageService } from '../image.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {

  imgs: Image[] = []
showAge
  constructor( private _imgService:ImageService,
    public dialog: MatDialog,
    private router: Router,

    ) { }

  ngOnInit(): void {
    this.imgs = this._imgService.showData()

  }
  public ageFromDateOfBirthday(dateOfBirth: any): number {
    if(dateOfBirth){
      const convertAge = new Date(dateOfBirth);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365); 
     }
      return this.showAge;
    }
setData(img :Image){
  this._imgService.sharedData = img;
  this.router.navigate(['/editredirect']);

}

  // public openEditDialog(itemModel) {
  //   this.router.navigate(['/editredirect',itemModel]);



    // console.log('In Edit Component');
    // const dialogRef = this.dialog.open(EditComponent, {
    //     data: itemModel,
    //     panelClass: 'product-dialog',
    //     disableClose: true,
    // });
    // dialogRef.afterClosed().subscribe(orderHistory => {
    //   if (orderHistory) {
    //     this.router.navigate(['/']);
    //   }
    // });
  // }
}
