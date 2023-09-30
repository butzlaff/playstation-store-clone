import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  gameType: string = ''
  @Input()
  gamePrice: string = ''
  @Input()
  title: string = ""
  @Input()
  image: string = ''
  @Input()
  gameLabel: string = ''
}