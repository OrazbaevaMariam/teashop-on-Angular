import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeaService {
  private apiUrl = 'https://testologia.ru/tea';

  constructor(private http: HttpClient) { }

  // Получение списка чаев
  getTeas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Получение конкретного чая по ID
  getTeaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?id=${id}`);
  }
}
