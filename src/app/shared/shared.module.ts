import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { sidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    sidebarComponent,
    SearchboxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    sidebarComponent,
    SearchboxComponent
  ]
})
export class SharedModule { }
