import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          import(
            'libs/page-builder/feature-page-builder/src/lib/feature-page-builder.module'
          ).then((m) => m.FeaturePageBuilderModule),
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
