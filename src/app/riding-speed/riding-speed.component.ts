import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-riding-speed',
  templateUrl: './riding-speed.component.html',
  styleUrls: ['./riding-speed.component.css']
})
export class RidingSpeedComponent implements OnInit {
myForm : any ;
riding_speed : any  ;
constructor(private fb:FormBuilder , private shared : SharedService){
this.myForm = this.fb.group({
  gender: "" ,
});
}


ngOnInit(): void {
}
onChange(){
alert(this.myForm.gender)
}
setSlow(){
  this.riding_speed = "Slow"
}
setFast(){
  this.riding_speed = "Fast"
}

sendRiding(){
  this.shared.setRiding(this.riding_speed)
}



}
