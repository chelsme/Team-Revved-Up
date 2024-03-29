import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { ContactFormComponent } from './components/contact-form/contact-form.component'
import { HeaderComponent } from './containers/header/header.component'
import { FooterComponent } from './containers/footer/footer.component'
import { ButtonComponent } from './components/button/button.component'
import { HeroComponent } from './containers/hero/hero.component'
import { TestimonialsComponent } from './containers/testimonials/testimonials.component'
import { ContactComponent } from './containers/contact/contact.component'
import { ServicesComponent } from './containers/services/services.component'
import { TeamComponent } from './containers/team/team.component'
import { ProfilePanelComponent } from './components/profile-panel/profile-panel.component'
import { HamburgerMenuComponent } from './components/hamburger-menu/hamburger-menu.component';
import { NavComponent } from './components/nav/nav.component'

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    HeroComponent,
    TestimonialsComponent,
    ContactComponent,
    ServicesComponent,
    TeamComponent,
    ProfilePanelComponent,
    HamburgerMenuComponent,
    NavComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
