import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  elegantForm: FormGroup;
  selectedJob: any;
  searchText: string;
  characters = {
    "nodes": [
      {"id": "Myriel", "group": 1},
      {"id": "Napoleon", "group": 1},
      {"id": "Mlle.Baptistine", "group": 1},
      {"id": "Mme.Magloire", "group": 1},
      {"id": "CountessdeLo", "group": 1},
      {"id": "Geborand", "group": 1},
      {"id": "Champtercier", "group": 1},
      {"id": "Cravatte", "group": 1},
      {"id": "Count", "group": 1},
      {"id": "OldMan", "group": 1},
      {"id": "Labarre", "group": 2},
      {"id": "Valjean", "group": 2},
      {"id": "Marguerite", "group": 3},
      {"id": "Mme.deR", "group": 2},
      {"id": "Isabeau", "group": 2},
      {"id": "Gervais", "group": 2},
      {"id": "Tholomyes", "group": 3},
      {"id": "Listolier", "group": 3}
    ]};

constructor(public fb: FormBuilder, private router: Router) {
  this.elegantForm = fb.group({
    searchText: ['']
  });
}

  ngOnInit() {
    
  }

  getProjects(text) {
    console.log("searched  " + text.searchText);
  }

  onSelect(c:any) {
    this.selectedJob = c;
  }

  showVar: boolean = true;
  toggleChild(){
    this.showVar = !this.showVar;
 }

}
