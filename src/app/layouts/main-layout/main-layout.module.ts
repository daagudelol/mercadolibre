import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { GlobalSearchComponent } from './components/toolbar/global-search/global-search.component';
import { SharedModule } from '@shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { httpInterceptorProviders } from '@app-core/interceptors';



@NgModule({
  declarations: [MainLayoutComponent, GlobalSearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    NgxSpinnerModule    
  ],
  providers: [
    httpInterceptorProviders
  ]
})
export class MainLayoutModule { }
