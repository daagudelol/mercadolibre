import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from '@app-main/item/item.component';

const routes: Routes = [
  {
    path: '',
    component: ItemComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ItemRoutingModule { }
