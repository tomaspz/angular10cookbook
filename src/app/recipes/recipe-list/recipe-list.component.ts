import { Component, OnInit } from '@angular/core';
import Recipe from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'First recipe', 'https://images.app.goo.gl/RcpJRqUxYgjCF16JA')
  ];

  constructor() { }

  ngOnInit(): void {
  }
}