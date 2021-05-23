import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipeList: Recipe[] = [
    new Recipe('TestName1', 'This is a Test1', 'https://cdn.pixabay.com/photo/2015/03/26/09/39/cupcakes-690040_960_720.jpg'),
    new Recipe('TestName2', 'This is a Test2', 'https://cdn.pixabay.com/photo/2015/03/26/09/39/cupcakes-690040_960_720.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipeSelected: Recipe){
    this.recipeWasSelected.emit(recipeSelected);
  }

}
