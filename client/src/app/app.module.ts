import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './services/app.service';
import { StoreModule } from '@ngrx/store';
import { ItemlListService } from './services/iteml-list.service';
import { ProductReducer } from './store/product.reducer';
import { ItemdetailedComponent } from './components/itemdetailed/itemdetailed.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ItemListComponent, ItemdetailedComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ itemList: ProductReducer }),
  ],
  providers: [AppService, ItemlListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
