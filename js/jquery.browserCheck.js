$(document).ready(function(){
	outdatedBrowserRework({
		browserSupport: {
			'Chrome': 57, // Includes Chrome for mobile devices
			'Edge': 39,
			'Safari': 10,
			'Mobile Safari': 10,
			'Firefox': 50,
			'Opera': 50,
			'Vivaldi': 1,
			// You could specify a version here if you still support IE in 2017.
			// You could also instead seriously consider what you're doing with your time and budget
			'IE': 10
		},
		backgroundColor: "#fff",
		textColor : "#031da8",
		requireChromeOnAndroid: false,
		isUnknownBrowserOK: true, 
		requiredCssProperty: true,
		messages: {
			ko: {
				outOfDate: "본 웹사이트는 인터넷 익스플로러 10이상과 크롬에 최적화 되어있습니다.",
				update: {
					"web": "본 웹사이트를 보기 위해 브라우저를 업데이트 해주시기 바랍니다.",
					googlePlay: "본 웹사이트를 보기 위해 구글플레이에서 크롬을 받아주시기 바랍니다.",
					appStore: "본 웹사이트를 보기 위해 iOS를 업데이트해주시기바랍니다."
				},
				url: "http://outdatedbrowser.com/ko",
				callToAction: "브라우저 업데이트하기",
				close: "Close"
			},
		}
	})
});