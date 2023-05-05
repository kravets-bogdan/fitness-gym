//  * Base
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';

// * Service
import { DynamicScriptLoaderService } from 'src/app/services/dynamic-script-loader.service';

@Component({
  standalone: true,
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  imports: [CommonModule, SharedModule],
})
export default class ContactsComponent {
  // * Injectes
  private readonly dynamicScriptLoaderService = inject(
    DynamicScriptLoaderService
  );
  // * ViewChild
  @ViewChild('map', { static: false }) map!: ElementRef;
  // * Local
  protected google: google.maps.Map | undefined;

  ngAfterViewInit(): void {
    this.loadScripts();
  }

  protected initMap() {
    // The location of San Francisco
    const vinnytsia = { lat: 49.233218, lng: 28.474107 };

    // The map, centered at San Francisco
    this.google = new google.maps.Map(this.map.nativeElement, {
      center: vinnytsia,
      zoom: 16,
      mapId: '45e6069b743e9903',
    } as google.maps.MapOptions);
    // The marker, positioned at San Francisco
    const marker = new google.maps.Marker({
      position: vinnytsia,
      map: this.google,
    });
  }

  private loadScripts() {
    this.dynamicScriptLoaderService
      .load('google')
      .then(() => {
        this.initMap();
      })
      .catch((error) => console.log(error));
  }
}
