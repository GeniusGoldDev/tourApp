import { VendorListComponent } from './../../_components/_admin/vendors/vendor-list/vendor-list.component';
import { VendorDetailsComponent } from './../../_components/_admin/vendors/vendor-details/vendor-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'admin/vendors',  component: VendorListComponent, data: { } },
  { path: 'admin/vendors/:name', component: VendorDetailsComponent, data: { } }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class VendorsRoutingModule { }
