import {ResolveFn, RouterModule, Routes} from '@angular/router';
import {ListContactComponent} from "./contact/list/list-contact.component";
import {inject, NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ViewContactComponent} from "./contact/view/view-contact.component";
import {ContactsService} from "./contact/service/contact.service";
import {Contact} from "./contact/model/contact";
import {ListProductComponent} from "./product/list/list-product.component";
import {ProductsService} from "./product/service/product.service";
import {ViewProductComponent} from "./product/view/view-product.component";
import {Product} from "./product/model/product";

export const contactResolver: ResolveFn<Contact> = (route, state) => {
  return inject(ContactsService).findById(route.paramMap.get('id')!);
};

export const productResolver: ResolveFn<Product> = (route, state) => {
  return inject(ProductsService).findById(route.paramMap.get('id')!);
};

export const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, data: {breadcrumb: 'dashboard'}},
  {
    path: 'product', data: {breadcrumb: 'product'},
    children: [
      {path: '', component: ListProductComponent, data: {breadcrumb: ''}},
      {
        path: ':id',
        component: ViewProductComponent,
        data: {breadcrumb: 'view', type: 'product'},
        resolve: {product: productResolver},
      }
    ]
  },
  {
    path: 'contact', data: {breadcrumb: 'contact'},
    children: [
      {path: '', component: ListContactComponent, data: {breadcrumb: ''}},
      {
        path: ':id',
        component: ViewContactComponent,
        data: {breadcrumb: 'view', type: 'contact'},
        resolve: {contact: contactResolver},
      }
    ]
  },

];

@NgModule({
  providers: [ContactsService],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
