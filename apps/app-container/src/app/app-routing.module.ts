import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingComponent } from '@gaeia/container/feature-container';
import { loadRemoteModule } from '@nrwl/angular/mf';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          component: LandingComponent,
        },
        {
          path: 'page-builder',
          loadChildren: () =>
            loadRemoteModule('pageBuilder', './Module').then(
              (m) => m.RemoteEntryModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
