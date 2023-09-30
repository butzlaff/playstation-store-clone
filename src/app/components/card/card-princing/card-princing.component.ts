import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-princing',
  templateUrl: './card-princing.component.html',
  styleUrls: ['./card-princing.component.css']
})
export class CardPrincingComponent implements OnInit {
  @Input()
  gameType: string = 'Digital PS4 PS5'
  @Input()
  gamePrice: string = ''

  
  currencyType: string = 'R$'
  priceLabel: string = ''
  title: string = "Play it now!"

  
  ngOnInit() {
    this.priceLabel = `${this.currencyType} ${this.gamePrice}`
  }
}
