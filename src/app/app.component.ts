import { Component } from '@angular/core';
import { CardComponent } from './reusable-card/card.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './app.component.html',

})

export class AppComponent {
  title = 'news-article-card';
  newstitle : string = 'Intro to NFT'
  newsContent : string =` An NFT, or non-fungible token, is a digital certificate of ownership for  unique digital asset.
            Think of it like a one-of-a-kind stamp on a digital file.
            This file could be anything from a jpeg image to a song or even a pair of virtual sneakers.`
  newsImg : string = '../assets/615e8e6a99fe86a81ed3ab8d6a662147.jpg'
  category: string = 'NFT'
  cta: string = 'Learn more';

}
