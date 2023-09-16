import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  api: string = '4e7e6fd9dac20aab990497f467a08566'
  // https://api.themoviedb.org/3/movie/top_rated
  // https://api.themoviedb.org/3/tv/airing_today
  allMovies: any[] = [];
  allTvs: any[] = [];
  constructor(private http: HttpClient) {}

  getAllMovies(pageNumber:number=1,language: string = 'en-US'): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.api}&language=${language}&page=${pageNumber}`
    );
  }
  getMovieById(movieId: number): Observable<any> {
    return this.http
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.api}
    `);
  }

  searchAllMovie(movieName: string): Observable<any> {
    if (movieName == '') {
      return this.getAllMovies();
    } else {
      return this.http.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${this.api}&query=${movieName}`
      );
    }
  }
  getAllTvs(pageNumber:number=1,language: string = 'en-US'): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=${this.api}&language=${language}&page=${pageNumber}`
    );
  }
  getTvById(movieId: number): Observable<any> {
    return this.http
      .get(`https://api.themoviedb.org/3/tv/airing_today/${movieId}?api_key=${this.api}
    `);
  }

  searchAllTv(movieName: string): Observable<any> {
    if (movieName == '') {
      return this.getAllMovies();
    } else {
      return this.http.get(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=${this.api}&query=${movieName}`
      );
    }
  }
}
