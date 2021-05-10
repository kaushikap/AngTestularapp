import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

  products:Product[]=[

    {
    productTitle:"Picture-1",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://tse2.mm.bing.net/th?id=OIP.SHf13tdrEUahoixHnSjhtAHaFj&pid=Api&P=0&w=225&h=169"
    },
    {
    productTitle:"Picture-2",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://tse2.mm.bing.net/th?id=OIP.w-5me8uuthZ5gGUn-WuCzwHaEK&pid=Api&P=0&w=304&h=172"
    },
    
    {
    productTitle:"Picture-3",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://tse2.mm.bing.net/th?id=OIP.3aDFJUJ36BbYzSpvOhZ13gHaEK&pid=Api&P=0&w=274&h=155"
    },
    
    {
    productTitle:"Picture-4",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://tse4.mm.bing.net/th?id=OIP.xUSaGwcL5AxrbliWbQHBFgHaEo&pid=Api&P=0&w=245&h=154"
    },
    
    {
    productTitle:"Picture-5",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://tse1.mm.bing.net/th?id=OIP.Ggawl7DEPnaLSeyACbT2cAHaEL&pid=Api&P=0&w=291&h=164"
    },
    
    {
    productTitle:"Picture-6",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://cdn.pixabay.com/photo/2012/03/01/00/41/autumn-19806_640.jpg"
    }
    ];




    productsSentByChild=[];
    productCount:number=0;

    getProductDetailsFromChild(productTitle){

     
      this.productsSentByChild.push(productTitle);
      this.productCount++;
    }

}