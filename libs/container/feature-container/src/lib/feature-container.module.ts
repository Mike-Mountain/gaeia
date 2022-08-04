import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [LandingComponent],
  exports: [LandingComponent]
})
export class FeatureContainerModule {
}
