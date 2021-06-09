import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from '../details.service';


@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent implements OnInit {

  detailsObj;

  

  constructor(private ar:ActivatedRoute,private sd:DetailsService) { }

  ngOnInit(): void {

    let id=this.ar.snapshot.params.id;
    console.log(id);

    this.sd.getShowsById(id).subscribe(
      obj=>{
        console.log(obj);
        this.detailsObj=obj;
        

      },
      err=>{
        console.log("err in reading post",err);
      }
      
    )

  }
 

  

}
