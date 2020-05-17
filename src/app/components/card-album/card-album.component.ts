import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-album',
  templateUrl: './card-album.component.html',
  styleUrls: ['./card-album.component.scss']
})
export class CardAlbumComponent implements OnInit {


  public listAlbums: Array<any> =
  [
    {
      title: "Barras Bravas",
      year: "2017",
      image: "../../../assets/images/barras-natos.jpg",
      songs: [
                "assets/music/botella-para-dos.mp3",
                "assets/music/no-nos-da-miedo.mp3",
                "assets/music/queen/dont-stop-me-now.mp3"
             ]
    },
    {
      title: "Hijos de la ruina",
      year: "2016",
      image: "../../../assets/images/natos-waor-hijos-de-la-ruina.jpg",
      songs: [
                "assets/music/botella-para-dos.mp3",
                "assets/music/no-nos-da-miedo.mp3",
                "assets/music/queen/dont-stop-me-now.mp3"
             ]
    },
    {
      title: "Caminare",
      year: "2016",
      image: "../../../assets/images/cover_NatosyWaor_01.jpeg",
      songs: [
                "assets/music/botella-para-dos.mp3",
                "assets/music/no-nos-da-miedo.mp3",
                "assets/music/queen/dont-stop-me-now.mp3"
             ]
    },
    {
      title: "Barras Bravas",
      year: "2017",
      image: "../../../assets/images/cover_NatosyWaor_03.jpeg",
      songs: [
                "assets/music/botella-para-dos.mp3",
                "assets/music/no-nos-da-miedo.mp3",
                "assets/music/queen/dont-stop-me-now.mp3"
             ]
    },
    {
      title: "Hijos de la ruina",
      year: "2016",
      image: "../../../assets/images/natos-waor-hijos-de-la-ruina.jpg",
      songs: [
                "assets/music/botella-para-dos.mp3",
                "assets/music/no-nos-da-miedo.mp3",
                "assets/music/queen/dont-stop-me-now.mp3"
             ]
    },
    {
      title: "Caminare",
      year: "2016",
      image: "../../../assets/images/cover_NatosyWaor_01.jpeg",
      songs: [
                "assets/music/botella-para-dos.mp3",
                "assets/music/no-nos-da-miedo.mp3",
                "assets/music/queen/dont-stop-me-now.mp3"
             ]
    }


  ];

  constructor() { }

  ngOnInit(): void {
  }

  showPlayList() {

  }
}
