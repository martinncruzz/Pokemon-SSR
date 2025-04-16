import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from '@shared/components/navbar/navbar.component';

@Component({
  selector: 'main-layout',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './main-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MainLayoutComponent {}
