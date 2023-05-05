// * Base
import { SharedModule } from 'src/app/shared/shared.module';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  imports: [SharedModule],
})
export default class BannerComponent {}
