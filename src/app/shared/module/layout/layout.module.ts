import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { SideMenuModule } from './side-menu/side-menu.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderModule, SideMenuModule, FooterModule],
  exports: [CommonModule, HeaderModule, SideMenuModule, FooterModule],
})
export class LayoutModule {}
