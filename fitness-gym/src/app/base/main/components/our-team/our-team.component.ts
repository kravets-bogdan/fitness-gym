// * Base
import { SharedModule } from '../../../../shared/shared.module';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// * Service
import { OurTeamService } from './our-team.service';

@Component({
  standalone: true,
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss'],
  providers: [OurTeamService],
  imports: [CommonModule, SharedModule],
})
export default class OurTeamComponent {
  // * Injects
  private readonly ourTeamService = inject(OurTeamService);

  get list() {
    return this.ourTeamService.list;
  }
}
