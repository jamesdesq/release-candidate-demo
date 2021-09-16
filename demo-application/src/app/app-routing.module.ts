import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnotherPageComponent } from './another-page/another-page.component';
import { NewPageComponent } from './new-page/new-page.component';

const routes: Routes = [
  { path: 'new-page', component: NewPageComponent },
  { path: 'another-page', component: AnotherPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
