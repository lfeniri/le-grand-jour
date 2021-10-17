import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  isShowVideos: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showVideos(){
    this.isShowVideos = true;
  }
  closeVideos(event){
    console.log("OK");
    this.isShowVideos = false;
  }

}
