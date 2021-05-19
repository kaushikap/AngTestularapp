import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Post } from './models/post.model';
@Injectable({
  providedIn: 'root'
})
export class DataoneService {
  //Inject HttpClient obj
  constructor(private hc:HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.hc.get<Post[]>('https://jsonplaceholder.typicode.com/users')
  }
}

