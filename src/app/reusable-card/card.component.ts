import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
})

export class CardComponent {
  @Input() newstitle!: string;
  @Input() newsImg!: string;
  @Input() newsContent!: string;
  @Input() category!: string
  @Input() cta!: string;
  @Input() views!: string;
  @Input() comments!: string;
}
