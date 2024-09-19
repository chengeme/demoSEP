import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullComponent } from './core/layouts/full/full.component';
import { BlankComponent } from './core/layouts/blank/blank.component';
import { HeaderComponent } from './core/layouts/full/header/header.component';
import { AppNavItemComponent } from './core/layouts/full/sidebar/nav-item/nav-item.component';
import { SidebarComponent } from './core/layouts/full/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { BrandingComponent } from './core/layouts/full/sidebar/branding.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
    NgScrollbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TablerIconsModule],
})
export class AppModule {}
