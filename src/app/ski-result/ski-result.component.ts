import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { Product, products ,Prediction } from '../skis';
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
   result: Array<Prediction> =[];
   predicted_value :number = 0;
  constructor(private shared : SharedService) { }

  ngOnInit(): void {
   this.height = this.shared.getHeight()
   this.weight = this.shared.getWeight()
   this.ski_level = this.shared.getSkiLevel()
   this.terrain = this.shared.getTerrainType()
   this.ski_style = this.shared.getSkiStyle()
   this.riding_speed = this.shared.getRiding()
   

   for (var ski of products){

     if (this.height >= ski.min_height && this.height <= ski.max_height){
    this.predicted_value += 22.5
     } 
     if (this.weight >= ski.min_weight && this.weight <= ski.max_weight){
      this.predicted_value += 22.5
     } 
     if (ski.ski_level.indexOf(this.ski_level) > -1){
      this.predicted_value += 5
     }
     if (ski.playground.indexOf(this.terrain) > -1){
      this.predicted_value += 20
     }
     if (ski.ski_style.indexOf(this.ski_style) > -1){
      this.predicted_value += 20
     }
     if (this.riding_speed == ski.riding_speed){
      this.predicted_value += 10
     }
     this.result.push({
       prediction : this.predicted_value,
       name : ski.name,
       size : ski.size
     })
     this.predicted_value = 0;
   
   }
   this.result.sort(function(a ,b){
    return b.prediction - a.prediction
  })
   console.log(this.result)
  }

  

  

}
