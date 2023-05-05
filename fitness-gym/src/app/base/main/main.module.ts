// * Base
import { MainRoutingModule } from './main-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// * Components
import ContactsComponent from './components/contacts/contacts.component';
import AmentiesComponent from './components/amenties/amenties.component';
import AboutUsComponent from './components/about-us/about-us.component';
import OurTeamComponent from './components/our-team/our-team.component';
import CatalogComponent from './components/catalog/catalog.component';
import BannerComponent from './components/banner/banner.component';
import FormComponent from './components/form/form.component';
import MainComponent from './main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    MainRoutingModule,
    AmentiesComponent,
    ContactsComponent,
    CatalogComponent,
    AboutUsComponent,
    OurTeamComponent,
    HttpClientModule,
    BannerComponent,
    FormComponent,
    CommonModule,
  ],
})
export default class MainModule {}
