import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemdetailedComponent } from './components/itemdetailed/itemdetailed.component';

const routes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'productdetail', component: ItemdetailedComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // enableTracing: true,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
