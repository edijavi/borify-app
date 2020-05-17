import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-audio',
  templateUrl: './player-audio.component.html',
  styleUrls: ['./player-audio.component.scss']
})
export class PlayerAudioComponent implements OnInit {

  // audio: AudioBuffer = "assets/music/queen/BohemianRhapsody.mp3";
  playShow: boolean = false;
  pauseShow: boolean = true;

  audio = new Audio('assets/music/queen/dont-stop-me-now.mp3');

  songs = [
    {

      "audio": "asset/music/queen/BohemianRhapsody.mp3",

    },
    {

      "audio": "asset/music/queen/BohemianRhapsody.mp3",

    }

  ];

  constructor() { }

  ngOnInit(): void {

  }
  playPause() {
		if ( this.audio.paused || this.audio.ended ) {
			if ( this.audio.ended ) { this.audio.currentTime = 0; }
      this.audio.play();
      this.playShow = true;
      this.pauseShow = false;
		}
		else {
      this.audio.pause();
      this.playShow = false;
      this.pauseShow = true;
    }
  }

  play() {
    debugger
    console.log('!!  PLAY  !!');

    this.audio.play();
    debugger

  }

  pause() {
    debugger
    console.log('!!  PAUSE  !!');
    this.audio.pause();

  }

}
