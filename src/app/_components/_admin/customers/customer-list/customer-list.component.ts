import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Customer } from 'src/app/_models/customer';
import { CustomerService } from 'src/app/_services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.less']
})

export class CustomerListComponent implements OnInit {
  @ViewChild('customerName') customerName: ElementRef;
  @ViewChild('customerType') customerType: ElementRef;

  originalCustomersList: Customer[];
  customersList: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getList()
      .subscribe((data) => {
        this.originalCustomersList = this.customersList = data;
    });
  }

  search() {
    const name = this.customerName.nativeElement.value.toLowerCase();
    const typeName = Number(this.customerType.nativeElement.value);

    this.customersList = this.originalCustomersList.filter(v =>
      v.firstName.toLowerCase().indexOf(name) > -1 ||
      v.lastName.toLowerCase().indexOf(name) > -1);

    switch (typeName) {
      case 1: {
        this.customersList = this.customersList.filter(v =>
          v.totalSpent > 7500);
        break;
      }
      case 2: {
        this.customersList = this.customersList.filter(v =>
          v.totalSpent <= 2000);
        break;
      }
      default: {
        break;
      }
    }
  }

  clear() {
    this.customersList = this.originalCustomersList;
  }
}
