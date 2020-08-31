/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"Coxinha_Hana/Coxinha.v02/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"Coxinha_Hana/Coxinha.v02/test/integration/pages/App",
	"Coxinha_Hana/Coxinha.v02/test/integration/pages/Browser",
	"Coxinha_Hana/Coxinha.v02/test/integration/pages/Master",
	"Coxinha_Hana/Coxinha.v02/test/integration/pages/Detail",
	"Coxinha_Hana/Coxinha.v02/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "Coxinha_Hana.Coxinha.v02.view."
	});

	sap.ui.require([
		"Coxinha_Hana/Coxinha.v02/test/integration/NavigationJourneyPhone",
		"Coxinha_Hana/Coxinha.v02/test/integration/NotFoundJourneyPhone",
		"Coxinha_Hana/Coxinha.v02/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});