import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <div style="margin: 40px">
      <button (click)="throwError()">Error</button>
      <button (click)="throwHttpError()">HTTP Error</button>
      <button (click)="getComments()">Get Comments</button>
    </div>
  `
})
export class AppComponent {

  constructor(private http: HttpClient) {
  }

  throwError(){
    throw new Error('My Pretty Error');
  }

  throwHttpError(){
    // https://jsonplaceholder.typicode.com/posts // correct api
    this.http.get('https://jsonplaceholder.typicode.com/postssss').subscribe(
      data => {
        console.log('Values :', data);
      }
    );
  }

  getComments(){
    // https://jsonplaceholder.typicode.com/comments // correct api
    this.http.get('https://jsonplaceholder.typicode.com/comments').subscribe(
      data => {
        console.log('Values :', data);
      }
    );
  }

}
