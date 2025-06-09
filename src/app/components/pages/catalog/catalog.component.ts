import {Component, OnDestroy, OnInit} from '@angular/core';
import {TeaService} from "../../../services/tea-service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {
  teas: any[] = [];
  selectedTea: any = null;
  isLoading = true;
  errorMessage: string | null = null;
  private subscription: Subscription | null = null;

  constructor(private teaService: TeaService) {}
  ngOnInit(): void {
    this.loadTeas();
  }
  // Загрузка всех чаев
  loadTeas(): void {
    this.isLoading = true;
    this.teaService.getTeas().subscribe({
      next: (data) => {
        this.teas = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Ошибка загрузки данных. Попробуйте позже.';
        this.isLoading = false;
        console.error('API error:', err);
      }
    });
  }


  // Сброс выбранного чая
  clearSelection(): void {
    this.selectedTea = null;
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
