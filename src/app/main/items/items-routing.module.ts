import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from '@app-main/items/items.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ItemsRoutingModule { }
