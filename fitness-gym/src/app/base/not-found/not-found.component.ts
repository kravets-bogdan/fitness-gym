// * Base
import { SharedModule } from 'src/app/shared/shared.module';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  imports: [SharedModule, RouterLink],
})
export default class NotFoundComponent {}
