import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent, NavbarComponent } from './components';
import {MaterialModule} from "@gaeia/shared/shared-ui";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [LandingComponent, NavbarComponent],
  exports: [LandingComponent, NavbarComponent],
})
export class FeatureContainerModule {}
