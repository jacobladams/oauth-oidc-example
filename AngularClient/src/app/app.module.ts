import { AuthInterceptor } from './shared/auth.interceptor';
import { AuthService } from './shared/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OidcRedirectComponent } from './oidc-redirect/oidc-redirect.component';

@NgModule({
	declarations: [
		AppComponent,
		OidcRedirectComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [
		AuthService,
		{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
