import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, catchError, finalize, map, throwError } from 'rxjs';
import { Provider } from '../models/provider.model';
import { slotCategories } from './slot-categories';
import { Category } from '../models/category.model';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root',
})
export class SlotsApiService {
  private apiBaseUrl = '/api/integrations';
  isLoading = signal<boolean>(false);
  error = signal<string>('');

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    this.isLoading.set(true);
    return this.http
      .get<any>(`${this.apiBaseUrl}/v2/slot/categories?include=games`)
      .pipe(
        map((data) => {
          const filteredCategories = slotCategories.map(
            (category: Category) => {
              const categoryData = data.data.find(
                (c: Category) => c.category === category.category
              );
              return {
                ...category,
                games: categoryData?.games?.length ? categoryData.games : [],
                totalGames: categoryData?.totalGames || 0,
              };
            }
          );
          this.isLoading.set(false);
          return filteredCategories;
        }),
        catchError((err) => this.handleError(err)),
        finalize(() => this.isLoading.set(false))
      );
  }
  getProviders(): Observable<Provider[]> {
    return this.http.get<any>(`${this.apiBaseUrl}/v2/slot/providers`).pipe(
      map((data) =>
        data.data.slice(0, 10).map((provider: Provider) => ({
          name: provider.name,
          provider: provider.provider,
        }))
      ),
      catchError((err) => this.handleError(err))
    );
  }

  getSelectedProvider(providerName: string): Observable<any> {
    this.isLoading.set(true);
    return this.http
      .get<any>(`${this.apiBaseUrl}/v2/slot/providers/${providerName}`)
      .pipe(
        map((data: { data: { games: Game[] } }) => data?.data?.games),
        catchError((err) => this.handleError(err)),
        finalize(() => this.isLoading.set(false))
      );
  }

  private handleError(error: HttpErrorResponse) {
    const errMsg = 'Something bad happened! please try again later.';
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    this.error.set(errMsg);

    setTimeout(() => {
      this.error.set('');
    }, 5000);

    return throwError(() => new Error(errMsg));
  }
}
