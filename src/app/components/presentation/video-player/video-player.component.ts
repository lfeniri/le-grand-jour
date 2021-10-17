import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  videos = [
    "http://www.youtube.com/embed/RDR51ay2aL0?autoplay=1",
    "http://www.youtube.com/embed/Dv6Cdj1o3os?autoplay=1",
    "http://www.youtube.com/embed/9S3-sqpo1eU?autoplay=1"
  ];
  currentVideo: SafeResourceUrl;
  @Output() close: EventEmitter<any> = new EventEmitter();;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.changeVideo(this.videos[0]);
  }
  changeVideo(url){
    this.currentVideo = this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  closeVideoPlayer(){
    this.close.emit(null);
  }

}
