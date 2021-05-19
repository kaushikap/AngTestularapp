import { Component, OnInit } from '@angular/core';
import {TestService} from '../test.service'
@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent  {


  num:any;
  constructor(private testObj:TestService) { }

  ngOnInit(): void {
    this.num=this.testObj.getData();
  }

  televisions=[

    {
    productTitle:"Sony",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://tse3.mm.bing.net/th?id=OIP.ypeJJT8IXDiOSr0HjVWUYgHaHa&pid=Api&P=0&w=300&h=300"
    },
    {
    productTitle:"LG",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"http://eastasiaeg.com/images/thumbs/0036274_lg-32-inch-hd-led-tv-built-in-receiver-32lm550bpva.jpeg"
    },
    
    {
    productTitle:"Onida",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://i0.wp.com/www.bestbudgetprice.com/wp-content/uploads/2018/11/Onida-127-cm-50-inches-50UIB1-4K-LED-Smart-TV-Black.png?fit=1324%2C896&ssl=1"
    },
    
    {
    productTitle:"Kevin",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://i0.wp.com/www.deals4m.com/wp-content/uploads/2017/07/kevin-kn20-32-inch-80-cm-hd-ready-led-tv-rs-11799-bluetooth-hdmi2-usb2.jpg?fit=1500%2C1500"
    },
    
    {
    productTitle:"Mi",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://www.gadgetdetail.com/wp-content/uploads/2018/03/Mi-LED-TV-4A-32_Front.jpg"
    },
    
    {
    productTitle:"Lloyd",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://www.aldahome.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/l/l/lloyd-l50u1w0iv-50-inch-uhd-4k-smart-led-television.jpg"
    }
    
    ]
}
