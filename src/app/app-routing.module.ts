import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayListComponent } from './display-list/display-list.component';
import { EditRedirectComponent } from './edit-redirect/edit-redirect.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StudentAdminComponent } from './student-admin/student-admin.component';

const routes: Routes = [
  { path: 'student', component: StudentAdminComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'image', component:DisplayListComponent},
  { path: 'editredirect', component:EditRedirectComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
