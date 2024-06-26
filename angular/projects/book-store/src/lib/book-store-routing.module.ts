import { NgModule } from '@angular/core';
import { RouterOutletComponent } from '@abp/ng.core';
import { Routes, RouterModule } from '@angular/router';
import { BookStoreComponent } from './components/book-store.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RouterOutletComponent,
    children: [
      {
        path: '',
        component: BookStoreComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookStoreRoutingModule {}
