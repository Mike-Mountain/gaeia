import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DashboardComponent }]),
  ],
  declarations: [DashboardComponent],
})
export class FeaturePageBuilderModule {}
