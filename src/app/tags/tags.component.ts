import { Component, Input, OnInit } from '@angular/core';
import { TechService } from '../services/tech/tech.service';
import { Tag } from '../shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']})
export class TagsComponent implements OnInit {

  @Input()
  techPageTags?:string[];

  @Input()
  justifyContent:string = 'center';

  tags?:Tag[];
  constructor(private techService:TechService) { }

  ngOnInit(): void {
    if(!this.techPageTags)
     this.tags = this.techService.getAllTags();
  }

}