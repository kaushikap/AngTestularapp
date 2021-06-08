import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Post} from '../app/models/post.model'

@Injectable({
  providedIn: 'root'
})
export class DataoneService {

  //Inject HttpClient obj
  constructor(private hc:HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.hc.get<Post[]>('http://localhost:3000/users')
  }


 getPostById(id):Observable<Post>{
    return this.hc.get<Post>('http://localhost:3000/users/'+id)
 }
}

