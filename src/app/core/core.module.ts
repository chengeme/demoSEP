import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
// icons
import * as TablerIcons from 'angular-tabler-icons/icons';
import { PagesRoutes } from './core.routing.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { HeaderComponent } from './layouts/full/header/header.component';
import { SidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { AppNavItemComponent } from './layouts/full/sidebar/nav-item/nav-item.component';
import { BrandingComponent } from './layouts/full/sidebar/branding.component';
import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    TablerIconsModule.pick(TablerIcons),
    NgScrollbarModule
  ],
  declarations: [
    FullComponent,
    BlankComponent,
    HeaderComponent,
    SidebarComponent,
    AppNavItemComponent,
    BrandingComponent,
  ],
  exports: [TablerIconsModule, FullComponent, BlankComponent, AppNavItemComponent],
})
export class CoreModule {}
