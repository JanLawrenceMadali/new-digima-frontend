import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";



@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    // ng module
    MatSidenavModule,
    MatIconModule
  ],
  exports: [
    SidenavComponent
  ]
})
export class DashboardModule { }
