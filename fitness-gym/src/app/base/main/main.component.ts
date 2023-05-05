import {
  Component,
  AfterContentInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  inject,
} from '@angular/core';
import { Subscription } from 'rxjs';
import HeaderNavigationService from '../../services/header-navigation.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export default class MainComponent {
  // * Injects
  private readonly navigationService = inject(HeaderNavigationService);
  // * ViewChild
  @ViewChild('contacts', { static: false }) contacts!: ElementRef;
  @ViewChild('coaches', { static: false }) coaches!: ElementRef;
  @ViewChild('service', { static: false }) service!: ElementRef;
  @ViewChild('prices', { static: false }) prices!: ElementRef;
  @ViewChild('about', { static: false }) about!: ElementRef;
  // * Local
  anchorNavigationSubsription$?: Subscription;

  ngAfterContentInit(): void {
    this.anchorNavigationSubsription();
  }

  ngOnDestroy(): void {
    this.anchorNavigationSubsription$?.unsubscribe();
  }

  protected scrollToElement(block: HTMLElement): void {
    block.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  private anchorNavigationSubsription() {
    this.anchorNavigationSubsription$ =
      this.navigationService.anchorNavigationSubject.subscribe((route) => {
        this.scrollToElement(this[route].nativeElement);
      });
  }
}
