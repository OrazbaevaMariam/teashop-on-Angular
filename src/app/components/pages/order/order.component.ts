import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {OrderService} from "../../../services/order-service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderForm=this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-ЯёЁ]+$')]],
    last_name: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я]+$')]],
    phone: ['', [Validators.required, Validators.pattern('^\\+?[0-9]{11}$')]],
    country: ['', Validators.required],
    zip: ['', Validators.required],
    address: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-ЯёЁ0-9\\s\\-/]*$')]],
    product: ['', [Validators.required]],
    comment: ['']
  })


  isFormSubmitted: boolean = false;
  errorMessage: boolean = false;
  success: boolean = true;
  thanks: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit(): void {


    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        // this.productOrder = params['product'];
        // this.item = params['product'];
        this.orderForm.patchValue({
          product: params['product'],

        })
        console.log(this.orderForm.value);

      }
    })
  }

  sendOrder() {
    if (this.orderForm.valid) {
      const formData = this.orderForm.getRawValue();
      console.log(formData)// getRawValue включает disabled поля
      this.http.post('https://testologia.ru/order-tea', formData).subscribe({
        next: (response: any) => {
          console.log(response);
          if (response.success === 1) {
            this.isFormSubmitted = true; // Скрыть форму, показать "Спасибо за заказ!"
            this.errorMessage = false;
            this.success = false;
            this.thanks = true;


          }  if (response.success === 0) {
            this.errorMessage = true;
          }
        },
        error: () => {
          this.errorMessage = true;
        }
      });
    }
  }
}
