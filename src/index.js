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

console.log(hcf);

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
		/* A view will respond to any of these formats: */
		'home': '/',
		'view-name-1': 'String: url to appear on the url bar',
		'view-name-2': {
			path: 'String: url to appear on the url bar',
			title: 'String: SEO friendly name to appear as the document title',
		},
		'view-name-3': {
			path: 'String: url to appear on the url bar',
			title: 'String: SEO friendly name to appear as the document title',
			data: {
				// 'Data to be consumed in the template'
			},
		},
		'view-name-4': {
			path: 'String: url to appear on the url bar',
			title: 'String: SEO friendly name to appear as the document title',
			data: () => {
				return {
					// 'Data to be consumed in the template'
				}
			},
		},
		'view-name-5': {
			path: 'String: url to appear on the url bar',
			title: 'String: SEO friendly name to appear as the document title',
			data: 'Object of Function that returns an object: Data to be consumed in the template',
			controller: /* View specific controllers are not ready for use */ 'Function: Code to be executed once only this view has loaded'
		}
	}, 'selected', null, () => {
		// TODO: Step 7 - Write the code you'd like executed on all views
	});
})();