export default {
	localLibraryName: 'norsk_sagenkarta_library',

	requiredParams: {
		type: 'arkiv,tryckt',
		categorytypes: 'sägner',
	},

	siteOptions: {

	},

	country: 'norway',

	siteOptions: {
		// Dölja kontakt knapp i PopupWindow
		hideContactButton: true
	},

	startPageUrl: '',

	imageUrl: 'https://www4.isof.se/Folkminnen/Svenska_sagor_filer/',
	audioUrl: 'https://www4.isof.se/Folkminnen/Svenska_sagor_filer/inspelningar/',

	appUrl: 'https://frigg.isof.se/static/js-apps/sagenkarta-norsk/',
	siteUrl: 'https://www.hf.uio.no/ikos/tjenester/kunnskap/samlinger/norsk-folkeminnesamling/Sagnkart/sagnkart.html',

	apiUrl: 'https://frigg.isof.se/sagendatabas/api/es/',
	restApiUrl: 'https://frigg.isof.se/sagendatabas/api/'
//	apiUrl: 'http://uuc-isof004-t.its.uu.se/sagendatabas/api/es/'
//	apiUrl: 'http://uuc-isof004-t.its.uu.se/sagendatabas/api/'
//	apiUrl: 'http://localhost:8000/sagenkarta/'
};