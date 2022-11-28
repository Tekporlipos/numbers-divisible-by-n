import { Component, OnInit } from '@angular/core';

@Component({
  selector: '#app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  ngOnInit(): void {

  }

  change(p:any) {
    this.isDisabled = p;
  }

  title = 'tutorial1';
  isDisabled: any = 2;
}
