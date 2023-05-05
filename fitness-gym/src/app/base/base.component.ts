// * Base
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

// * Component
import HeaderComponent from './components/header/header.component';
import FooterComponent from './components/footer/footer.component';
import SvgComponent from './components/svg/svg.component';

const components = [HeaderComponent, FooterComponent, SvgComponent];

@Component({
  standalone: true,
  templateUrl: './base.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...components, RouterOutlet, CommonModule],
})
export default class BaseComponent {}
