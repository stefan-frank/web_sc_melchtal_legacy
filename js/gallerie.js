var labelsDe = {
	photo : "Foto",
	photos : "Fotos",
	downloadphotos : "Fotos herunterladen",
	albums : "Zurück zum Album",
	noalbums : "Keine Alben verfügbar",
	page : "Seite",
	prev : "Zurück",
	next : "Weiter",
	showPermaLink : "Permanenten Link anzeigen",
	showMap : "Karte anzeigen",
	videoNotSupported : "Video wird nicht unterstützt"
};
var usernamePicasa = 'scmelchtal';
var colorboxConfig = {
	config_photos : {
		loop : true
	}
};


$(document).ready(function() {
	var currentYear = 2017;
	var oldestYear = 1978;
	
	for (year = currentYear; currentYear >= oldestYear; currentYear--) {
		currentGallery = "gallery_".concat(currentYear);
		
		$("#gallery").append($("<h4>").append(currentYear)).append($("<div>", {id : currentGallery}));
		
		currentSettings = {
			username : usernamePicasa,
			colorbox_config : colorboxConfig,
			labels : labelsDe,
			albumStartDateTime : currentYear.toString().concat("-01-01"),
			albumEndDateTime : currentYear.toString().concat("-12-31")	
		};
		
		$("#".concat(currentGallery)).pwi(currentSettings);
	}
	
});
