export default {
	localLibraryName: 'norsk_sagenkarta_library',

	requiredParams: {
		type: 'arkiv,tryckt',
		only_categories: 'true',
	},

	siteOptions: {

	},

	country: 'norway',

	siteOptions: {
		// Dölja kontakt knapp i PopupWindow
		hideContactButton: true
	},

	startPageUrl: '',

	imageUrl: 'https://www4.sprakochfolkminnen.se/Folkminnen/Svenska_sagor_filer/',
	audioUrl: 'https://www4.sprakochfolkminnen.se/Folkminnen/Svenska_sagor_filer/inspelningar/',

	appUrl: 'https://www4.sprakochfolkminnen.se/sagner/norsk/',
	siteUrl: 'https://www.hf.uio.no/ikos/tjenester/kunnskap/samlinger/norsk-folkeminnesamling/Sagnkart/sagnkart.html',

	apiUrl: 'https://frigg.sprakochfolkminnen.se/sagendatabas/api/es/',
	restApiUrl: 'https://frigg.sprakochfolkminnen.se/sagendatabas/api/'
//	apiUrl: 'http://uuc-isof004-t.its.uu.se/sagendatabas/api/es/'
//	apiUrl: 'http://uuc-isof004-t.its.uu.se/sagendatabas/api/'
//	apiUrl: 'http://localhost:8000/sagenkarta/'
};