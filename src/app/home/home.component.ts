import { Component, OnInit } from '@angular/core';
import { TechService} from '../services/tech/tech.service';
import { tech } from '../shared/models/tech';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  techs:tech[] = [];
constructor(private techservice:TechService, private route:ActivatedRoute) {}
ngOnInit(): void {
  this.route.params.subscribe(params => {
    if(params['searchTerm'])
    this.techs = this.techservice.getAll().filter(tech => tech.name.toLowerCase().includes(params['searchTerm'].toLowerCase()))
    else if (params['tag'])
    this.techs = this.techservice.getAllTechsByTag(params['tag']);
    else
    this.techs = this.techservice.getAll();
  })

}
}


