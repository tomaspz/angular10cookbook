import { Component, OnInit } from '@angular/core';
import Recipe from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'First recipe', 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pasta_e_ceci_%28Anelli%29_2.jpg'),
    new Recipe('Test Recipe 2', 'Second recipe', 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pasta_e_ceci_%28Anelli%29_2.jpg'),
    new Recipe('Test Recipe 3', 'Third recipe', 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pasta_e_ceci_%28Anelli%29_2.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }
}