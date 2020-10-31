import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private dataSubject = new Subject();
  constructor() { }

  updateData(data) {
    this.dataSubject.next(data);
  }

  getData() : Observable<any> {
    return this.dataSubject.asObservable();
  }
}
