import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() newIngredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(newName: HTMLInputElement, newAmount: HTMLInputElement){
    this.newIngredientAdded.emit({name: newName.value, amount: parseInt(newAmount.value)})
  }
  delIngredient(name: HTMLInputElement, amount: HTMLInputElement){

  }
  clearIngreadient(name: HTMLInputElement, amount: HTMLInputElement){

  }

}
