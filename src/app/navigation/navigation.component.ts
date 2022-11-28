import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: '.app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  @Input() isDisable: Boolean | undefined;
  @Output() divisible = new EventEmitter<any>();
  

   change(value:any) {
    this.divisible.emit(value)
  }
  

  check(v:any):Number{
    return v;
  }

}
