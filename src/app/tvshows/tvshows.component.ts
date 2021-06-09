import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TvshowdataService } from '../tvshowdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit, OnDestroy {

  tvdata;
  mySubscription:Subscription;

  constructor(private tsObj:TvshowdataService , private router:Router) { }

  ngOnInit(): void {
  
      this.mySubscription=this.tsObj.getTvshowsData().subscribe(
        userData=>{
          this.tvdata=userData;
          
          
        },
        err=>{
          console.log("err is",err);
        }
      )
  
  }
 
  onSelectId(id:String){
    this.router.navigateByUrl('tvshows/'+id)
  }

  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }

}
