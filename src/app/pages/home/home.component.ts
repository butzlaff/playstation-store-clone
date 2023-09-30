import { Component } from '@angular/core';
import { DataStore, pstoreData } from 'src/app/data/pstoreData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dataValues: DataStore[] = pstoreData;
}
