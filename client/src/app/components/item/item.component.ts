import { Component, OnInit } from '@angular/core';

export type ProductCard = {
  id: string;
  title: string;
  image: string;
  price: Number;
  overview: string;
};
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
