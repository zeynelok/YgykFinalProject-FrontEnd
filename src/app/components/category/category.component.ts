import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
categories:Category[]=[];
currentCategory:Category;
newCurrentcategory:Category;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }
getCategories(){
  this.categoryService.getCategories().subscribe(response=>{
    this.categories=response.data;
  })
}
setCurrentCategory(category:Category){
this.currentCategory=category;
}
getCurrentCategoryClass(category:Category){
  if (category==this.currentCategory) {
    return "list-group-item active";
  }
  else{
    return "list-group-item";
  }
}

getAllCategoryClass(){
  if (!this.currentCategory) {
    return "list-group-item active";
    this.currentCategory={categoryId:0,categoryName:""};
  }
  else{
    return "list-group-item";
  }
}
 deleteCurrentCategory(){
 
 this.currentCategory=this.newCurrentcategory;

 }
}
