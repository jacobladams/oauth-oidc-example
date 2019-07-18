import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserManager } from 'oidc-client';
import { environment } from '../../environments/environment';
import { logging } from 'protractor';

@Injectable({ providedIn: 'root' })
export class AuthService {
	private userManager: UserManager;
	private user: User;

	constructor(private httpClient: HttpClient) {

		// this.userManager = new UserManager(environment.auth);
		this.userManager = new UserManager(environment.auth);


		this.userManager.getUser().then(user => {
			console.log(user);
			console.log(this);
			if (user && !user.expired) {
				this.user = user;
			}
		});
	}

	login(): Promise<any> {
		return this.userManager.signinRedirect();
	}

	loginIfNotLoggedIn(): Promise<any> {
		return this.userManager.getUser().then(user => {
			if (!user || user.expired) {
				console.log('not logged in');
				return this.login();
			}
		});
	}

	logout(): Promise<any>{
		return this.userManager.signoutRedirect();
	}

	isLoggedIn(): boolean {
		return this.user && this.user.access_token && !this.user.expired;
	}

	getAccessToken() {
		console.log(this.user);
		return this.user ? this.user.access_token : '';
	}

	signInRedirect(): Promise<any> {
		return this.userManager.signinRedirectCallback().then(
			(user) => {
				// window.history.replaceState({},
				// 	window.document.title,
				// 	window.location.origin);
				// window.location = "/";
				console.log(user);
				// this.router.navigate(['']);
				this.user = user;
			},
			error => {
				console.error(error);
			}
		);
	}

	refreshUser() {
		this.userManager.getUser().then(user => {
			console.log(user);
			console.log(this);
			if (user && !user.expired) {
				this.user = user;
			}
		});
	}
}
