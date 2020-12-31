import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  producat = [
    {
         name: 'Adidas shoes',
         id: 1,
         type: 'men',
         price: 200,
         img: 'https://opencart.mahardhi.com/MT03/fuffy/image/cache/catalog/products/5-490x490.jpg'
    },
    {
      name: 'nike shoes',
      id: 2,
      type: 'men',
      price: 200,
      img: 'https://opencart.mahardhi.com/MT03/fuffy/image/cache/catalog/products/1-490x490.jpg'
 },
 {
  name: 'Ace Sportswear',
  id: 3,
  type: 'women',
  price: 200,
  img: 'https://opencart.mahardhi.com/MT03/fuffy/image/cache/catalog/products/7-490x490.jpg'
},
{
  name: 'Championwear',
  id: 4,
  type: 'kids',
  price: 200,
  img: 'https://opencart.mahardhi.com/MT03/fuffy/image/cache/catalog/products/3-490x490.jpg'
},
{
  name: 'Classic Sports',
  id: 5,
  type: 'kids',
  price: 200,
  img: 'https://opencart.mahardhi.com/MT03/fuffy/image/cache/catalog/products/9-315x315.jpg'
},
{
  name: 'Adidas shoes',
  id: 6,
  type: 'men',
  price: 200,
  img: 'https://opencart.mahardhi.com/MT03/fuffy/image/cache/catalog/products/5-490x490.jpg'
},
  ];


  images = [1, 2, 3].map((n) => `assets/photos/${n}.jpg`);
  constructor() { }

  ngOnInit(): void {
  }

}
