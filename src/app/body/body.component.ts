import { Component, Input } from '@angular/core';

@Component({
  selector: '.app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
numbers :Number[]  = new Array(50);

@Input() isDisable: Boolean | Number | undefined;

check(p:any):boolean{
  console.log(p);
  
return (p)% Number(this.isDisable) === 0;
}

}
