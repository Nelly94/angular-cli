import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import {MatMenuItem, MatMenuModule} from '@angular/material/menu';
import { TotalComponent } from './total/total.component';
import { NumberComponent } from './number/number.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierComponent } from './supplier/supplier.component';
import { BanckAccountPipePipe } from './banck-account-pipe.pipe';
import { ShowPriceDirective } from './show-price.directive';
import { ProductAddComponent } from './product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductListComponent,
    ProductComponent,
    TotalComponent,
    NumberComponent,
    SupplierListComponent,
    SupplierComponent,
    BanckAccountPipePipe,
    ShowPriceDirective,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
