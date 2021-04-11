import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../main/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'api/items',
        loadChildren: () => import('../../main/items/items.module').then((m) => m.ItemsModule),
      },
      {
        path: 'api/items/:id',
        loadChildren: () => import('../../main/item/item.module').then((m) => m.ItemModule),
      }
    ],
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
