/*!
 *
 * TODO: Step 1 - Define the client of this project
 * Handcrafted by The Archangel for <client> using Handcrafted Framework (HCF).
 * Copyright 2020 <client>.
 * All Rights Reserved.
 *
 * /
 
 /* eslint-env browser */
import hcf from '@wearearchangel/handcrafted';

// TODO: Step 2 - Import your tools and libraries
// import $ from 'jquery';
// import 'slick-carousel';

(function () {
	'use strict';
	
	// TODO: Step 3 - Initialize a namespace to store your hcf instance
	let handcrafted = {};
	
	// TODO: Step 4 - Define all the models you intend to use [cms/ api/ storage]
	handcrafted.cms_1 = new hcf.models.cms('contentful', {
		space: '<space_id>',
		environment: '<environment_id>',
		accessToken: '<content_delivery_api_key>'
	}); // contentful's SDK is already predefined for you
	
	handcrafted.cms_2 = new hcf.models.cms('wordpress', {
		site: 'https://amalconsortium.com/cms'
	});
	
	handcrafted.api_1 = new hcf.models.api('https://api.dribbble.com/v2/', {
		access_token: '<oauth_token>',
		page: 2,
		per_page: 100
	}); // use this format if you only need a suffix for your API
	
	handcrafted.api_2 = new hcf.models.api('https://cdn.contentful.com/', {
		'prefix': {
			'spaces': '<space_id>',
			'environments': '<environment_id>'
		},
		'suffix': {
			'access_token': '<access_token>'
		}
	}); // use this format if you need both a prefix and suffix for you API
	
	// TODO: Step 5 - Test the models to ensure you've configured them correctly
	handcrafted.cms_1().getSpace().then(response => {
		console.log(response);
	}); // testing with cms as sdk
	
	handcrafted.cms_2().then(response => {
		console.log(response);
	}); // testing with cms as api
	
	handcrafted.api_1.read('user').then(response => {
		console.log(response);
	}); // only read is available for now. create, update and delete are not ready for use
	
	handcrafted.api_2.read().then(response => {
		console.log(response);
	}); // only read is available for now. create, update and delete are not ready for use
	
	// TODO: Step 6 - Define your views
	hcf.views({
		/*!
		 * A view will take at least one of these, at most all:
		 * A template is automatically fetched from ./static/templates but if you'd like to
		 * you can define it yourself. Note, a template and a templateUrl cannot be used together,
		 * the templateUrl will always take over.
		 * */
		'view-name-1': '/', // String: url to appear on the url bar
		'view-name-2': {
			path: '/view-name-2', // String: url to appear on the url bar
			title: 'View Name 2', // String: SEO friendly name to appear as the document title
		},
		'view-name-3': {
			path: '/view-name-3', // String: url to appear on the url bar
			template: "Thanks for downloading Handcrafted Framework.", // Template is loaded from ./static/templates but can be added in the script as text
		},
		'view-name-4': {
			path: '/view-name-4', // String: url to appear on the url bar
			templateUrl: "view-name-1.tpl.html", // Template is loaded from ./static/templates but can be added in the script as a file from the templates folder
		},
		'view-name-5': {
			path: '/view-name-5', // String: url to appear on the url bar
			data: {
				"handcrafted": true
			}, // 'Data can be consumed in the template as an object'
		},
		'view-name-6': {
			path: '/view-name-6', // String: url to appear on the url bar
			data: () => ({
				"handcrafted": true
			}), // 'Data can be consumed in the template as a function'
		}
	}, 'selected', null, () => {
		// TODO: Step 7 - Write the code you'd like executed on all views
	});
})();