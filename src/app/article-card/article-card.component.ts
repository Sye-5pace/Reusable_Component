import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.css'
})

export class ArticleCardComponent {
  @Input() newstitle!: string;
  @Input() newsImg!: string;
  @Input() newsContent!: string;
  @Input() category!: string
  @Input() cta!: string;
  @Input() views!: string;
  @Input() comments!: string;
}
