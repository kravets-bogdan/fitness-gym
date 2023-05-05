// * Base
import { Injectable } from '@angular/core';

// * Types
import { Language, LanguageItem } from 'src/app/types/language.types';

@Injectable()
export default class LanguageService {
  readonly languageList: LanguageItem[] = [
    {
      title: 'UA',
      id: Language.UA,
    },
    {
      title: 'RU',
      id: Language.RU,
    },
  ];
}
