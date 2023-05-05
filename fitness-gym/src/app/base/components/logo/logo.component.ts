// * Base
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, CommonModule],
})
export default class LogoComponent {
  @Input() browserMode: boolean = true;
}
