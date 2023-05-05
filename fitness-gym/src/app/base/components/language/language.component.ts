// * Base
import {
  ChangeDetectionStrategy,
  EventEmitter,
  Component,
  Output,
  inject,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

// * Service
import LanguageService from './language.service';

// * Types
import { Language } from 'src/app/types/language.types';

@Component({
  standalone: true,
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LanguageService],
  imports: [CommonModule],
})
export default class LanguageComponent {
  // * Injects
  private readonly navigationService = inject(LanguageService);
  private readonly translateService = inject(TranslateService);
  // * Outputs
  @Output() onclick = new EventEmitter<boolean>();

  get languageList() {
    return this.navigationService.languageList;
  }

  changeLanguage(lang: Language) {
    localStorage.setItem('language', lang);
    this.translateService.use(lang);
    this.onclick.emit(false);
  }
}
