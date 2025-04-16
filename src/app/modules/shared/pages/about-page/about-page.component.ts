import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'about-page',
  imports: [],
  templateUrl: './about-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPageComponent {
  title = inject(Title);
  meta = inject(Meta);

  metaTagsEffect = effect(() => {
    this.title.setTitle('About Page');
    this.meta.updateTag({
      name: 'description',
      content: 'This page got some important info about the app',
    });

    this.meta.updateTag({
      name: 'og:image',
      content: `https://res.cloudinary.com/dhhxe6sif/image/upload/v1743279154/SSR-Angular/s0mnvl8fi4pu6i2aea6i.png`,
    });
  });
}
