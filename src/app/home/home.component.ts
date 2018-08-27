import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedJob: any;

  characters = [{
    "ID": "001",
   "Name": "Eurasian Collared-Dove",
    "Type": "Dove",
    "Scientific Name": "Streptopelia"
},
{
    "ID": "002",
    "Name": "Bald Eagle",
    "Type": "Hawk",
    "Scientific Name": "Haliaeetus leucocephalus" 
},
{
    "ID": "003",
    "Name": "Cooper's Hawk",
    "Type": "Hawk",
    "Scientific Name": "Accipiter cooperii" 
}]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(c:any) {
    this.selectedJob = c;
    console.log("selectedname" + this.selectedJob.Name);
  }

}
