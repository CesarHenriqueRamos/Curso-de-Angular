import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap, map, filter, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-search',
  templateUrl: './reactive-search.component.html',
  styleUrls: ['./reactive-search.component.scss']
})
export class ReactiveSearchComponent implements OnInit {

  queryFilde = new FormControl();
  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';
  result$: Observable<any>;
  total: number;

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.result$ = this.queryFilde.valueChanges.pipe(
      map(value => value.trim()),
      filter(value => value.length > 1),
      debounceTime(200),
      distinctUntilChanged(),
      tap(value => console.log(value)),
      switchMap(value => this.http.get(this.SEARCH_URL + "?fields=name,version&search=" + value)),
      tap((res:any) => this.total = res.total),
      map((res:any) => res.results)
    )
  }
  onSherch(){
    let value = this.queryFilde.value
    if(value && (value = value.trim()) !== ''){   
      this.result$ = this.http.get(this.SEARCH_URL + "?fields=name,version&search=" + value).pipe(
        tap((res:any) => this.total = res.total),
        map((res:any) => res.results)
      );
    }
  }
}
