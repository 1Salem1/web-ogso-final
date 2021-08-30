import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
@Component({
  selector: 'app-ski-result',
  templateUrl: './ski-result.component.html',
  styleUrls: ['./ski-result.component.css']
})
export class SkiResultComponent implements OnInit {
  height : number = 0
  weight : number = 0
  ski_level: string = '';
  terrain: string = '';
  ski_style : string = '';
  riding_speed: string = '';
  rec_height : number = 0 ;
  rec_ski_name : string = '';
  constructor(private shared : SharedService) { }

  ngOnInit(): void {
   this.height = this.shared.getHeight()
   this.weight = this.shared.getWeight()
   this.ski_level = this.shared.getSkiLevel()
   this.terrain = this.shared.getTerrainType()
   this.ski_style = this.shared.getSkiStyle()
   this.riding_speed = this.shared.getRiding()
  

   if(this.height  >= 160 && this.height  <= 170 )
   { if(this.weight <= 46 )
     this.rec_height = 155
   }
   if(this.height  >= 169 && this.height  <= 179 )
   { if(this.weight  >= 46 && this.weight  <= 58)
     this.rec_height = 164
   }
   if(this.height  >= 177 && this.height  <= 187 )
   { if(this.weight  >= 59 && this.weight  <= 71)
     this.rec_height = 172
   }
   if(this.height  >=185  && this.height  <= 195 )
   { if(this.weight  >= 71 )
     this.rec_height = 180
   }
   if(this.terrain == "TR" && this.ski_style == "Piste" && this.riding_speed =="Fast")
   {this.rec_ski_name = "BONATTI 70" ;}
   alert("Votre SKi EST " + this.rec_ski_name + "SIZE " + this.rec_height)
  }
  

  

}
