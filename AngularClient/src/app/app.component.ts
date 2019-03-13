import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'AngularClient';
	values: Observable<any>;

	constructor(
		private authService: AuthService,
		private httpClient: HttpClient,
		private router: Router,
		private location: Location
	) {}

	ngOnInit() {
		const currentUrl = this.location.path(); /// this will give you current url
		console.log(this.location.path());
		if (currentUrl !== '/oidc-redirect') {
			this.authService.loginIfNotLoggedIn();
		}
		// your logic to know if its my home page.
	}

	login() {
		console.log('login');
		this.authService.login();
	}

	getValues() {
		this.values = this.httpClient.get('https://localhost:44340/api/values');
	}
}
