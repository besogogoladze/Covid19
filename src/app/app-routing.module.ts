import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ContactComponent } from './contact/contact.component';
import { BodyComponent } from './body/body.component';
import { SymptomesComponent } from './symptomes/symptomes.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'symptomes', component: SymptomesComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', component: ErrorpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
