import { SharedModule } from '@shared/shared.module';
import { ItemRoutingModule } from './item-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';



@NgModule({
  declarations: [ItemComponent],
  imports: [
    CommonModule,
    ItemRoutingModule,
    SharedModule
  ]
})
export class ItemModule { }
