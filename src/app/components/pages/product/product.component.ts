import { Component, OnInit } from '@angular/core';
import {TeaService} from "../../../services/tea-service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  selectedTea: any = null;
  teas: any[] = [];
  isLoading = true;
  errorMessage: string | null = null;
  id: number = 0;

  constructor(private teaService: TeaService) {}

  ngOnInit(): void {
    this.loadTeas()
    this.loadTeaDetails(this.id);
  }

  loadTeas(): void {
    this.isLoading = true;
    this.teaService.getTeas().subscribe({
      next: (data) => {
        this.teas = data;
        console.log(data);
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Ошибка загрузки данных. Попробуйте позже.';
        this.isLoading = false;
        console.error('API error:', err);
      }
    });
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
}
