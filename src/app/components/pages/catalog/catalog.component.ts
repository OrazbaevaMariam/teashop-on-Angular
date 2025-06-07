import {Component, OnInit} from '@angular/core';
import {TeaService} from "../../../services/tea-service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  teas: any[] = [];
  selectedTea: any = null;
  isLoading = true;
  errorMessage: string | null = null;
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
}
// export class CatalogComponent {
//   private apiUrl = 'https://testologia.ru/tea';
//   constructor(private http: HttpClient) {
//   }
//   getTeas(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl);
//   }
//   getTeaById(id: number): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl}?id=${id}`);
//   }
//
//   public products = [
//
//     {
//       image: 'detox%20tea.png',
//       title: 'Детокс чай лайм',
//       description: 'Великолепный чай внесет в вашу жизнь яркие краски и вкус расслабления'
//     },
//     {
//       image: 'berry%20tea.png',
//       title: 'Ягодный чай',
//       description: 'Нотки ягод позволят вам расслабиться и насладиться великолепием этого чая'
//     },
//     {
//       image: 'flower%20tea.png',
//       title: 'Цветочный чай',
//       description: 'Душистые цветы создают невероятный аромат и наполняют вас энергией'
//     },
//     {
//       image: 'cleansing%20tea.png',
//       title: 'Очищающий чай',
//       description: 'Бесподобный чай для получения утреннего заряда бодрости'
//     },
//     {
//       image: 'sour%20tea.png',
//       title: 'Кислый чай',
//       description: 'Кислый чай для настоящих ценителей кислинки во время чаепития'
//     },
//     {
//       image: 'lemon%20mint.png',
//       title: 'Лимонная мята',
//       description: 'Смесь лимона с мятой сделает ваш день самым лучшим'
//     },
//   ];
//
//
//
// }
