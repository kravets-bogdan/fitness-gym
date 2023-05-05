// * Base
import { SharedModule } from '../../../../shared/shared.module';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// * Services
import { CatalogService } from './catalog.service';

@Component({
  standalone: true,
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  providers: [CatalogService],
  imports: [CommonModule, RouterModule, SharedModule],
})
export default class CatalogComponent {
  // * Injects
  private readonly catalogService = inject(CatalogService);

  get list() {
    return this.catalogService.list;
  }
}
