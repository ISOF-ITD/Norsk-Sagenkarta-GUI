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

	imageUrl: 'http://www4.sprakochfolkminnen.se/Folkminnen/Svenska_sagor_filer/',
	audioUrl: 'http://www4.sprakochfolkminnen.se/Folkminnen/Svenska_sagor_filer/inspelningar/',

	appUrl: 'http://www4.sprakochfolkminnen.se/sagner/norsk/',
	siteUrl: 'http://www.hf.uio.no/ikos/tjenester/kunnskap/samlinger/norsk-folkeminnesamling/Sagnkart/sagnkart.html',

	apiUrl: 'http://frigg.sprakochfolkminnen.se/sagendatabas/api/es/',
	restApiUrl: 'http://frigg.sprakochfolkminnen.se/sagendatabas/api/'
//	apiUrl: 'http://uuc-isof004-t.its.uu.se/sagendatabas/api/es/'
//	apiUrl: 'http://uuc-isof004-t.its.uu.se/sagendatabas/api/'
//	apiUrl: 'http://localhost:8000/sagenkarta/'
};