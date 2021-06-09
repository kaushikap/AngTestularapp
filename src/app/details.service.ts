import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private hc:HttpClient) { }

  getShowsById(id):Observable<any>{
    return this.hc.get<any>('https://imdb-api.com/en/API/Top250TVs/k_l9equydw/'+id);
  }
}
