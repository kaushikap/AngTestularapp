import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvshowdataService } from '../tvshowdata.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent implements OnInit, OnDestroy {

  tvshowObj;
  mySubscription:Subscription;

  constructor(private ar:ActivatedRoute,private showsdata:TvshowdataService) { }

  ngOnInit(): void {
    let id=this.ar.snapshot.params.id;

   this.mySubscription= this.showsdata.getShowsById(id).subscribe(
      obj=>{
        console.log(obj);
        this.tvshowObj=obj;
        

      },
      err=>{
        console.log("err in reading post",err);
      }
      
    )

  }

  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }

}
