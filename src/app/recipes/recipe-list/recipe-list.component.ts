import { Component, OnInit } from '@angular/core';

import { Recipe } from "../recipe.model";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Karnabahar yemegi", "Sebzeli karnabahar kizartmasi", "http://www.lezzetbank.com/wp-content/uploads/2013/12/firinda_sebzeli_karnabahar_1_1.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
