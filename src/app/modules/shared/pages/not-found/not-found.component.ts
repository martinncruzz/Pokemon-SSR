import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'not-found',
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NotFoundComponent {
  title = inject(Title);
  meta = inject(Meta);

  metaTagsEffect = effect(() => {
    this.title.setTitle('Not Found Page');
    this.meta.updateTag({
      name: 'description',
      content: 'Page not found, please go home',
    });

    this.meta.updateTag({
      name: 'og:image',
      content: `https://res.cloudinary.com/dhhxe6sif/image/upload/v1743279153/SSR-Angular/oktnoaukwnbv0t6kxvq8.png`,
    });
  });
}
