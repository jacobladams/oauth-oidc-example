import { UserManagerSettings, WebStorageStateStore } from 'oidc-client';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	auth: <UserManagerSettings> {
		authority: 'https://localhost:44362',
		client_id: 'AngularClient',
		redirect_uri: 'http://localhost:4200/oidc-redirect',
		response_type: 'id_token token',
		post_logout_redirect_uri: 'http://localhost:4200',
		scope: 'openid oauth-oidc-example-api profile',
		userStore: new WebStorageStateStore({ store: window.localStorage }),
		automaticSilentRenew: true,
		// silent_redirect_uri: `${Constants.clientRoot}assets/silent-redirect.html`

	},
	apiUri: 'https://localhost:44340'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
