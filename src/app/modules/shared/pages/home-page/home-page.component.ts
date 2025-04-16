import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'home-page',
  imports: [],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePageComponent {
  title = inject(Title);
  meta = inject(Meta);

  metaTagsEffect = effect(() => {
    this.title.setTitle('Home Page');
    this.meta.updateTag({
      name: 'description',
      content: 'Welcome to my app',
    });

    this.meta.updateTag({
      name: 'og:image',
      content: `https://res.cloudinary.com/dhhxe6sif/image/upload/v1743279154/SSR-Angular/j6hesv3csnrzs2snykfd.png`,
    });
  });
}
