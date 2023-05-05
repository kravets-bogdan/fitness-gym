//  * Base
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// * Language
import {
  MissingTranslationHandler,
  TranslateService,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import {
  MissingTranslationService,
  appInitializerFactory,
  HttpLoaderFactory,
} from './language';

// * Components
import AppComponent from './app.component';

@NgModule({
  declarations: [AppComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService, Injector],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
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
})
export class AppModule {}
