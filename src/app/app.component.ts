import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-redux';

  items!: MenuItem[];

  constructor(
    private primengConfig: PrimeNGConfig,
    private store: Store<{ shoppingCar: number }>
  ) {
    this.qtdItemCar$ = store.select('shoppingCar');
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.items = [
      {
        label: 'Inicio',
      },
    ];
  }

  qtdItemCar$: Observable<number>;
}
