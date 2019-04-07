import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders,HttpRequest,HttpParams } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import {Timings} from './timings'

@Injectable()

export class SalahtimingsService {


  constructor(private httpClient: HttpClient) { }

    baseUrl = 'http://api.aladhan.com/v1/calendarByCity?city=bengaluru&country=india&method=2&month=04&year=2019';

    getSalahTimings(): Observable<Timings> {
      const requestOptions = {
        params: new HttpParams()
      };
      
      
      //this.http.get(environment.api+ '.feed.json', requestOptions );
      let headers = new Headers({'Content-Type':'application/json'});



      requestOptions.params.set('headers', 'headers');


        return this.httpClient.get<Timings>(this.baseUrl,requestOptions)
        
            .pipe(catchError(this.handleError));
    }

    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error: ', errorResponse.error.message);
        } else {
            console.error('Server Side Error: ', errorResponse);
        }

        return new ErrorObservable('There is a problem with the service. We are notified & working on it. Please try again later.');
    }

    // getEmployee(id: number): Observable<Employee> {
    //     return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`)
    //         .pipe(catchError(this.handleError));
    // }

    // addEmployee(employee: Employee): Observable<Employee> {
    //     return this.httpClient.post<Employee>(this.baseUrl, employee, {
    //         headers: new HttpHeaders({
    //             'Content-Type': 'application/json'
    //         })
    //     })
    //     .pipe(catchError(this.handleError));
    // }

    // updateEmployee(employee: Employee): Observable<void> {
    //     return this.httpClient.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
    //         headers: new HttpHeaders({
    //             'Content-Type': 'application/json'
    //         })
    //     })
    //         .pipe(catchError(this.handleError));
    // }

    // deleteEmployee(id: number): Observable<void> {
    //     return this.httpClient.delete<void>(`${this.baseUrl}/${id}`)
    //         .pipe(catchError(this.handleError));
    // }
}
