import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchText!:string;
  
  userRecords = [
    {
      id: 1,
      name: 'Neanne Graham',
      username: 'Bret',
      email: 'Sincere@gmail.com',
    },
    {
      id: 2,
      name: 'Rrvin Howell',
      username: 'Antonette',
      email: 'Shanna@gmail.com',
    },
    {
      id: 3,
      name: 'Dlementine Bauch',
      username: 'Samantha',
      email: 'Nathan@gmail.com',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@gmail.com',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@gmail.com',
    },
    {
      id: 6,
      name: 'Mrs. Fennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@gmail.com',
    },
    {
      id: 7,
      name: 'Gurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@gmail.com',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir ',
      username: 'Maxime_Nienow',
      email: 'Sherwood@gmail.com',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@gmail.com',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@gmail.com',
    },
  ];

}


