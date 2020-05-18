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

  audio = new Audio('assets/music/botella-para-dos.mp3');

  songs =
    [
      "assets/music/botella-para-dos.mp3",
      "assets/music/no-nos-da-miedo.mp3"
      // {song: 'assets/music/no-nos-da-mierdo.mp3'},
      // {song: 'assets/music/queen/dont-stop-me-now.mp3'}
    ]

  constructor() { }

  ngOnInit(): void {

  }



  playPause() {
    let id;
    this.songs.forEach(song => {
      debugger
      const audio = new Audio(song);

    });
    if (!this.audio.paused && !this.audio.ended) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.playShow = false;
      this.pauseShow = true;
    }
    else {
      this.playShow = true;
      this.pauseShow = false;
      this.audio.play();
    }

  }



  // Función que simula el comportamiento de stop (no existe nativamente), pausa el audio y fija el currentTime al inicio.
  audioStop() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
  // Función que sube el volumen del elemento audio.
  audioVolume(event) {
    debugger
      this.audio.volume = (event.target.value / 100);
      console.log(this.audio.volume);

    if (this.audio.volume < 1) {
      this.audio.volume = this.audio.volume + 0.1;
    }
  }


  mutedVolume() {
    if (!this.audio.muted) {
      debugger
      return this.audio.muted = true;

    } else {
      debugger
      return this.audio.muted = false
    }
  }
}
