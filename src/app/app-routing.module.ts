import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from "./homepage/homepage.component";
// import { TestTemplatesComponent } from './test-templates/test-templates.component';
import { AppointmentComponent } from './appointment/appointment.component';


const routes: Routes = [
  { path: "", component: HomepageComponent },
  // { path: "test-component", component: TestTemplatesComponent },
  { path: "appointment", component: AppointmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
