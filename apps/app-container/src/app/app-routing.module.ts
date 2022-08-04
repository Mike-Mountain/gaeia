import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LandingComponent} from "@gaeia/container/feature-container";

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          component: LandingComponent,
        }
      ],
      {initialNavigation: 'enabledBlocking'}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
