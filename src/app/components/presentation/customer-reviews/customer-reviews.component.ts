import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-customer-reviews',
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.css']
})
export class CustomerReviewsComponent implements OnInit {

  reviews: any[] = [
    {
      name: "Lounes FENIRI 1",
      job: "Computer science ingeneer",
      avatar: "/assets/images/reviews/avatar.png",
      comment: "Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh posuere. Aenean sagittis nisl. uthicula sagitti"
    },
    {
      name: "Lounes FENIRI 2",
      job: "Computer science ingeneer",
      avatar: "/assets/images/reviews/avatar.png",
      comment: "Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh posuere. Aenean sagittis nisl. uthicula sagitti"
    },
    {
      name: "Lounes FENIRI 3",
      job: "Computer science ingeneer",
      avatar: "/assets/images/reviews/avatar.png",
      comment: "Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh posuere. Aenean sagittis nisl. uthicula sagitti"
    },
    {
      name: "Lounes FENIRI 4",
      job: "Computer science ingeneer",
      avatar: "/assets/images/reviews/avatar.png",
      comment: "Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh posuere. Aenean sagittis nisl. uthicula sagitti"
    },
    {
      name: "Lounes FENIRI 5",
      job: "Computer science ingeneer",
      avatar: "/assets/images/reviews/avatar.png",
      comment: "Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh posuere. Aenean sagittis nisl. uthicula sagitti"
    },
    {
      name: "Lounes FENIRI 6",
      job: "Computer science ingeneer",
      avatar: "/assets/images/reviews/avatar.png",
      comment: "Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh posuere. Aenean sagittis nisl. uthicula sagitti"
    },
    {
      name: "Lounes FENIRI 7",
      job: "Computer science ingeneer",
      avatar: "/assets/images/reviews/avatar.png",
      comment: "Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis nibh posuere. Aenean sagittis nisl. uthicula sagitti"
    }
  ];
  reviewsToDesplay: any[] = [];
  firstReviewIndex: number = Math.floor(Math.random() * this.reviews.length);
  constructor() { }

  ngOnInit(): void {
    timer(0, 20000).subscribe(val => {
      this.generateDesplayReviews();
    });

  }
  generateDesplayReviews(){
    for(let i=0; i<3; i++){
        if(this.firstReviewIndex >=  this.reviews.length){
          this.firstReviewIndex = 0;
        }
        this.reviewsToDesplay[i] = this.reviews[this.firstReviewIndex++];
    }
  }

}
