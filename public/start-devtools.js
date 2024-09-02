(() => {
	chrome.devtools.panels.create(
		'Duplicate Code',
		'',
		'devtools.html',
		function (panel) {
			console.log(panel);
		},
	);
})()