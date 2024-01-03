import { VendorService } from './../../../../_services/vendor.service';
import { Vendor } from './../../../../_models/vendor';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VendorsHelper } from 'src/app/_helpers/vendors.helper';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.less']
})
export class VendorListComponent implements OnInit {
  @ViewChild('vendorName') vendorName: ElementRef;
  @ViewChild('vendorType') vendorType: ElementRef;

  vendorTypes: any[];

  originalVendorsList: Vendor[];
  vendorsList: Vendor[];

  constructor(private vendorService: VendorService, private vendorsHelper: VendorsHelper) { }

  ngOnInit() {
    this.vendorTypes = this.vendorsHelper.getTypes();

    this.vendorService.getList()
      .subscribe((data) => {
        this.originalVendorsList = this.vendorsList = data;
    });
  }

  search() {
    const name = this.vendorName.nativeElement.value.toLowerCase();
    const typeName = this.vendorType.nativeElement.value;

    this.vendorsList = this.originalVendorsList.filter(v =>
      v.name.toLowerCase().indexOf(name) > -1 &&
      v.typeName.indexOf(typeName) > -1);
  }

  clear() {
    this.vendorsList = this.originalVendorsList;
  }
}
