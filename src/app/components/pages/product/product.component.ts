import {Component, OnInit} from '@angular/core';
import {TeaService} from "../../../services/tea-service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  selectedTea: any = null;
  id: number = 0;
  popupIsShown: boolean = false;

  constructor(private teaService: TeaService,
              private route: ActivatedRoute,) {}

  ngOnInit(): void {
    this.id=Number(this.route.snapshot.queryParams['id']);
    this.loadTeaDetails(this.id);
    console.log(this.id);
  }

  // Загрузка конкретного чая

  loadTeaDetails(id: number): void {
    this.teaService.getTeaById(id).subscribe({
      next: (tea) => {
        this.selectedTea = tea;
        console.log(this.selectedTea);
      },
      error: (err) => {
        console.error('Error loading tea details:', err);
      }
    });
  }
}
