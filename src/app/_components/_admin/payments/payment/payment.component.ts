import { UserProduct } from './../../../../_models/userProduct';
import { Customer } from './../../../../_models/customer';
import { CustomerService } from './../../../../_services/customer.service';
import { GrandServicesService } from 'src/app/_services/grandServices.service';
import { PaymentService } from './../../../../_services/payment.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.less']
})
export class PaymentComponent implements OnInit {
  userProduct: UserProduct;
  customer: Customer;

  constructor(private paymentService: PaymentService, private formBuilder: FormBuilder,
              private route: ActivatedRoute, private customerService: CustomerService, private grandServicesService: GrandServicesService) {
                this.route.params.subscribe(params => {

                  this.userProduct = new UserProduct();

                  this.grandServicesService.get(params.productName)
                    .subscribe((data) => {

                      alert(data);
                  }, error => {
                      console.log('error');
                  });

                  this.customerService.get(params.userid)
                    .subscribe((data) => {
                      this.customer = data;
                  }, error => {
                      console.log('error');
                  });
                });
  }

  ngOnInit() {
  }
}
