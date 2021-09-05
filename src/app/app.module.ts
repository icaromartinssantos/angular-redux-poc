import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { DetalheItemComponent } from './detalhe-item/detalhe-item.component';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { RippleModule } from 'primeng/ripple';
import { StoreModule } from '@ngrx/store';
import { shoppingCarReducer } from './redux/reducer/shopping-car-reducer';

@NgModule({
  declarations: [AppComponent, DetalheItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    TabViewModule,
    CardModule,
    PanelModule,
    RippleModule,
    StoreModule.forRoot({ shoppingCar: shoppingCarReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
