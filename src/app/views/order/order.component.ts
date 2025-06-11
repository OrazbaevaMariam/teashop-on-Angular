import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  private subscription: Subscription | null = null;

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

  errorMessage: boolean = false;
  success: boolean = true;


  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit(): void {


    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        this.orderForm.patchValue({
          product: params['product'],
        })
        this.orderForm.get('product')?.disable({ emitEvent: false });


      }
    });

  }


  sendOrder() {
    if (this.orderForm.valid) {
      const formData = this.orderForm.getRawValue();
      this.http.post('https://testologia.ru/order-tea', formData).subscribe({
        next: (response: any) => {
          if (response.success === 1) {
            this.errorMessage = false;
            this.success = false;


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
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
