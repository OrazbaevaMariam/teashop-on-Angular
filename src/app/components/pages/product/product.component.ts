import {Component, OnDestroy, OnInit} from '@angular/core';
import {TeaService} from "../../../services/tea-service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  selectedTea: any = null;
  id: number = 0;
  private subscription: Subscription | null = null;


  constructor(private teaService: TeaService,
              private route: ActivatedRoute,) {}

  ngOnInit(): void {
    this.id=Number(this.route.snapshot.queryParams['id']);
    this.loadTeaDetails(this.id);
  }

  // Загрузка конкретного чая

  loadTeaDetails(id: number): void {
    this.teaService.getTeaById(id).subscribe({
      next: (tea) => {
        this.selectedTea = tea;
      },
      error: (err) => {
        console.error('Error loading tea details:', err);
      }
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
