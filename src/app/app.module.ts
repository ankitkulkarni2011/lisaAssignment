import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';  
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentAdminComponent } from './student-admin/student-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayListComponent } from './display-list/display-list.component';
import {  RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { NavbarComponent } from './navbar/navbar.component';
import {  MatCardModule,  } from '@angular/material/card';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";
import {  MatDialogModule,  } from '@angular/material/dialog';
import { EditComponent } from './display-list/edit/edit.component';
import { ImageService } from './image.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { ShowAgePipe } from './show-age.pipe';
import { EditRedirectComponent } from './edit-redirect/edit-redirect.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentAdminComponent,
    SignUpComponent,
    DisplayListComponent,
    NavbarComponent,
    EditComponent,
    ShowAgePipe,
    EditRedirectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDialogModule,MatIconModule,
    MatSnackBarModule,MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    FormsModule,
    MatFormFieldModule
  ],
  entryComponents: [
EditComponent
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
