//  * Base
import { HttpLoaderFactory, MissingTranslationService } from './../language';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  TranslateLoader,
  TranslateModule,
  MissingTranslationHandler,
} from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: MissingTranslationService,
      },
      useDefaultLang: false,
    }),
  ],
  exports: [TranslateModule],
})
export class SharedModule {}
