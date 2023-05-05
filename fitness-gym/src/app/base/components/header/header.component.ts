// * Base
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

// * Components
import LanguageComponent from '../language/language.component';
import LogoComponent from '../logo/logo.component';

// * RxJS
import { Subscription } from 'rxjs';

// * Service
import HeaderNavigationService from '../../../services/header-navigation.service';

// * Types
import { NavigationRouteType } from 'src/app/types/navigation.types';
import { Language } from 'src/app/types/language.types';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, LogoComponent, LanguageComponent, SharedModule],
})
export default class HeaderComponent {
  // * Injects
  private readonly navigationService = inject(HeaderNavigationService);
  private readonly translateService = inject(TranslateService);
  // * Local
  protected route: NavigationRouteType = NavigationRouteType.PRICES;
  protected changeLanguageWindow: boolean = false;
  private languageSubscription!: Subscription;
  protected language = Language.UA;

  get list() {
    return this.navigationService.list;
  }

  ngOnInit() {
    this.languageSubscription = this.translateService.onLangChange.subscribe(
      () => {
        this.language = this.translateService.currentLang as Language;
      }
    );
  }

  ngOnDestroy() {
    this.languageSubscription.unsubscribe();
  }

  protected scrollToElement(route: NavigationRouteType) {
    this.navigationService.anchorNavigationSubject.next(route);
  }
}
