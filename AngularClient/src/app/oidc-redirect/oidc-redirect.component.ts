import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { WebStorageStateStore, UserManager } from 'oidc-client';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
	selector: 'app-oidc-redirect',
	templateUrl: './oidc-redirect.component.html',
	styleUrls: ['./oidc-redirect.component.scss']
})
export class OidcRedirectComponent implements OnInit {
	constructor(private router: Router, private authService: AuthService) {}

	ngOnInit() {
		// const config = {
		// 	userStore: new WebStorageStateStore({ store: window.localStorage })
		// };
		// const userManager = new UserManager(config);
		// userManager.signinRedirectCallback().then(
		// 	(user) => {
		// 		// window.history.replaceState({},
		// 		// 	window.document.title,
		// 		// 	window.location.origin);
		// 		// window.location = "/";
		// 		console.log(user);
		// 		this.router.navigate(['']);
		// 	},
		// 	error => {
		// 		console.error(error);
		// 	}
		// );
		this.authService.signInRedirect().then(()=> {
			this.router.navigate([''])
		});
	}
}
