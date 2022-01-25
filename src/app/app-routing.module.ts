import { RouterModule, Routes } from "@angular/router";
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {ComponentsModule} from "./components/components.module";
import {NgModule} from "@angular/core";

const routes: Routes = [
     { path: 'welcomePage', component: WelcomePageComponent },
  // { path: '**', redirectTo: '/welcomePage' },
  // { path: 'asd', component: RegisterPlotComponent },
  { path: 'components', loadChildren: () =>
      import('./components/components.module')
        .then(f => f.ComponentsModule)},

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    ComponentsModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
