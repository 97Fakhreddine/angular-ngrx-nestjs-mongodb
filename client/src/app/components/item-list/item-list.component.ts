import { ItemlListService } from './../../services/iteml-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  constructor(private itemList: ItemlListService) {}

  ngOnInit() {
    // trying to do get request and fetch the data then log it in the console
    return this.itemList.getAllItems();
  }
}
