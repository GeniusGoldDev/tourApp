import { VendorsRoutingModule } from './../_routing/_admin/vendors-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorListComponent } from '../_components/_admin/vendors/vendor-list/vendor-list.component';
import { VendorDetailsComponent } from '../_components/_admin/vendors/vendor-details/vendor-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    VendorListComponent,
    VendorDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    VendorsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class VendorsModule { }
