import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addItem } from '../redux/actions/shopping-car-action';

@Component({
  selector: 'app-detalhe-item',
  templateUrl: './detalhe-item.component.html',
  styleUrls: ['./detalhe-item.component.scss'],
})
export class DetalheItemComponent implements OnInit {
  constructor(private store: Store<{ shoppingCar: number }>) {}

  ngOnInit(): void {}

  addItem() {
    this.store.dispatch(addItem());
  }
}
