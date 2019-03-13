import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OidcRedirectComponent } from './oidc-redirect/oidc-redirect.component';

const routes: Routes = [
	{
		path: 'oidc-redirect',
		component: OidcRedirectComponent,
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
