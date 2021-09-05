import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheItemComponent } from './detalhe-item/detalhe-item.component';

const routes: Routes = [{ path: '', component: DetalheItemComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
