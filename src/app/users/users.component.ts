import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { DataoneService } from '../dataone.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit ,OnDestroy{

  mySubscription:Subscription;

  myPosts:Post[]=[];

  users;
  //inject Fakedata service object
  constructor(private fsObj:DataoneService,private router:Router) { }

  ngOnInit(): void {
   this.mySubscription= this.fsObj.getPosts().subscribe(
      userData=>{
        //assign posts
        this.users=userData;
        console.log(this.users)
       
      },
      err=>{
        console.log("err in getting posts data",err)
      }

    )
  }

  onSelectId(id){
    this.router.navigateByUrl('users/'+id)
  }

  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }
}

