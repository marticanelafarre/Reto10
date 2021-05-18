import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class CalendarioService {
  http: any;

  constructor() { }


  load(text) {
   
    
    return this.http.post(`${environment.apiUrl}/load.php`, JSON.stringify(text))
      .pipe(map(any => {
   
        
        return any;
      }));




      

  }
 

}
