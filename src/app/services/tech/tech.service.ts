import { Injectable } from '@angular/core';
import {tech} from '../../shared/models/tech'
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class TechService {
  static getTechById: any;
  constructor() { }

getTechById(id: number): tech {
     return this.getAll().find(tech => tech.id == id)!;
  }
  

  getAllTechsBySearchTerm(searchTerm:string) :tech[]{
    return  this.getAll().filter(tech =>
      tech.name.toLowerCase().includes(searchTerm.toLowerCase()));
  } 



getAllTags():Tag[]{

return[
{name: 'ყველა', count: 19},
{name: 'ბეკონით', count: 6},
{name: 'ჩიზბურგერი', count: 6},
{name: 'ვეგანური', count: 5},
{name: 'ორმაგი', count: 4},
{name: 'სამმაგი', count: 1},
]


}

getAllTechsByTag(tag: string): tech[]{
return tag == "ყველა" ? 
this.getAll() :  
this.getAll().filter(tech => tech.tags?.includes(tag));
}

  getAll():tech[]{
    return[
{
  id:1,
  name:'Medium Burger',
  price:15,
  tags:['ვეგანური',],
  
  stars: 5,
desc: 'შემადგენლობა:....',
  imageUrl: '/assets/images/techservice/1.png',
},

{
  id:2,
  name:'Medium Burger+',
  price:17,
  tags:['ჩიზბურგერი'],
  desc: 'შემადგენლობა:....',
  stars: 4.5,
  imageUrl: '/assets/images/techservice/2.png',
},
{
  id:3,
  name:'Medium Bacon Burger',
  price:16,
  tags:[ 'ბეკონით', 'ჩიზბურგერი', ],
  
  stars: 5,
desc: 'შემადგენლობა:....',
  imageUrl: '/assets/images/techservice/3.png',
},
{
  id:4,
  name:'Big Vegan Burger',
  price:25,
  tags:['ვეგანური',],
  
  stars: 5,
desc: 'შემადგენლობა:....',
  imageUrl: '/assets/images/techservice/4.png',
},

{
  id:5,
  name:'Small Burger',
  price: 7,
  tags:['ბეკონით'],
  
  stars: 5,
desc: 'შემადგენლობა:....',
  imageUrl: '/assets/images/techservice/5.png',
},

{
  id:6,
  name:'Big Bacon Burger',
  price:1200,
  tags:['ბეკონით'],
  
  stars: 5,
desc: 'შემადგენლობა:....',
  imageUrl: '/assets/images/techservice/6.png',
},

{
  id:7,
  name:'Small Vegan Burger',
  price: 8,
  tags:['ვეგანური',],
  
  stars: 5,
desc: 'შემადგენლობა:....',
  imageUrl: '/assets/images/techservice/7.png',
},

{
  id:8,
  name:'Big Chicken Burger',
  price:25,
  tags:['ქათმის',],
  
  stars: 5,
desc: 'შემადგენლობა:....',
  imageUrl: '/assets/images/techservice/8.png',
},

{
  id: 9,
  name:'Medium Vegan Burger',
  price:15,
  tags:['ვეგანური',],
  
  stars: 5,
desc: 'შემადგენლობა:....',
  imageUrl: '/assets/images/techservice/10.png',
},

{
  id:10,
  name:'Small Cheeseburger',
  price:600,
  tags:['ჩიზბურგერი',],
  
  stars: 5,
desc: 'შემადგენლობა:....',
  imageUrl: '/assets/images/techservice/9.png',
},
{
  id:11,
  name:'Small Burger ++',
  price:12,
  tags:['ჩიზბურგერი',],
  
  stars: 5,
desc: 'შემადგენლობა:....',
  imageUrl: '/assets/images/techservice/11.png',
},

{
  id:12,
  name:'Big Mac',
  price:20,
  tags:['ბეკონით',],
  
  stars: 5,
desc: 'შემადგენლობა:....',
  imageUrl: '/assets/images/techservice/12.png',
},

{
  id:13,
  name:'2x Burger',
  price:20,
  tags:['ორმაგი', ],
  
  stars: 5,
desc: 'შემადგენლობა:....',
  imageUrl: '/assets/images/techservice/13.png',
},

{
  id:14,
  name:'2x Burger',
  price:22,
  tags:['ორმაგი', 'ბეკონით',],
  
  stars: 5,
desc: 'შემადგენლობა:....',
  imageUrl: '/assets/images/techservice/14.png',
},

{
  id:15,
  name:'3x Burger',
  price:30,
  tags:['სამმაგი','ჩიზბურგერი',],
  
  stars: 5,
desc: 'შემადგენლობა:....',
  imageUrl: '/assets/images/techservice/15.png',
},

{
  id:16,
  name:'2x Vegan Burger',
  price:21,
  tags:['ორმაგი','ვეგანური',],
  
  stars: 5,
desc: 'შემადგენლობა:....',
  imageUrl: '/assets/images/techservice/16.png',
},
{
  id:18,
  name:'2x Bacon Burger',
  price:40,
  tags:['ორმაგი', 'ბეკონით',],
  
  stars: 5,
desc: 'შემადგენლობა:....',
  imageUrl: '/assets/images/techservice/17.png',
},

{
  id:19,
  name:'Small Burger',
  price:100,
  tags:['ჩიზბურგერი',],
  
  stars: 5,
desc: 'შემადგენლობა:....',
  imageUrl: '/assets/images/techservice/19.png',
},

    ]
  }
}
