import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataoneService } from '../dataone.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnDestroy {

  mySubscription:Subscription;

  users:Post[]=[];

  //users;
  //inject Fakedata service object
  constructor(private fsObj:DataoneService//,private router:Router
    ) { }

  ngOnInit(): void {
   this.mySubscription= this.fsObj.getPosts().subscribe(
      userData=>{
        //assign posts
        this.users=userData;
        console.log(this.users)
        //console.log("jjjj")
       // console.log{{}}
       
      },
      err=>{
        console.log("err in getting posts data",err)
      }
    )
  }
  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }
}


