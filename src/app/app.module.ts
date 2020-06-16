import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import { SupplierAddComponent } from './supplier-add/supplier-add.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'suppliers', component: SupplierListComponent},
  // {path: 'suppliers/:company', component: SupplierListComponent},
  {path: 'products/add', component: ProductAddComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: HomeComponent} // PageNotFoundComponent
];

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
    ProductAddComponent,
    SupplierAddComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        MatMenuModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
