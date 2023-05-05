// * Base
import { TranslateService } from '@ngx-translate/core';
import { Component, inject } from '@angular/core';

// * Types
import { Language } from './types/language.types';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export default class AppComponent {
  // * Injects
  private readonly translateService = inject(TranslateService);

  ngOnInit() {
    const language = localStorage.getItem('language') ?? Language.UA;
    this.translateService.use(language);
  }
}
