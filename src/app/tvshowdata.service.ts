import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Tvshows} from '../app/models/tvshows.model'
@Injectable({
  providedIn: 'root'
})
export class TvshowdataService {

  constructor(private hc:HttpClient) { }

  getTvshowsData():Observable<any>{
   return this.hc.get<any>("https://imdb-api.com/en/API/Top250TVs/k_l9equydw")
  }

  getShowsById(id):Observable<any>{
    return this.hc.get<any>("https://imdb-api.com/en/API/Top250TVs/k_pxd5hoyv/"+id);
  }
}
