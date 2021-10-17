import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  constructor(private router: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.router.data.subscribe(data => {
      let idElem = data.idElem;
      console.log(idElem);
      setTimeout(() => {  this.scroll(document.getElementById(idElem)); }, 500);
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

}
