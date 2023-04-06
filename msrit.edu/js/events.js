var mySpreadsheet;

var DEPT = window.location.pathname.split("/").pop();
var customSQL = "select * where B = 'YES' order by A desc";
var fetchSize = 5;

var hasNews = true;
var hasEvents = true;
var hasSideEvents = false;

if (DEPT == 'achievements.html' || DEPT == 'activities.html' || DEPT == 'board-of-studies.html' || DEPT == 'faculty.html' || DEPT == 'research.html') {
	DEPT = getParameterByName('dept');
	hasNews = false;
	hasEvents = false;
}

switch(DEPT) {
case 'news.html':
	customSQL = "select * order by A desc";
	fetchSize = 200;
	hasSideEvents = false;
	hasNews = true;
	hasEvents = false;
	break;
case 'events.html':
	customSQL = "select * order by A desc";
	fetchSize = 200;
	hasSideEvents = false;
	hasNews = false;
	break;
case 'admissions.html':
	customSQL = "select * where C= 'admissions' and B='YES' order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
case 'examination.html':
	customSQL = "select * where C= 'examination' and B='YES' order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
case 'placement.html':
	customSQL = "select * where C= 'placement' and B='YES' order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
case 'contact-us.html':
	customSQL = "select * where C= 'admissions' and B='YES' order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
case 'reports.html':
	customSQL = "select * where C= 'admissions' and B='YES' order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;

case 'architecture.html':
	customSQL = "select * where C= 'architecture' and B='YES' order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
case 'biotechnology.html':
	customSQL = "select * where C= 'biotechnology' and B='YES' order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
case 'cse_cs.html':
	customSQL = "select * where (C= 'cse_cs' and B='YES') or (C='generic' and B='YES') order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
case 'cse_ai_ml.html':
	customSQL = "select * where (C= 'cse_ai_ml' and B='YES') or (C='generic' and B='YES') order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
case 'ai_ml.html':
	customSQL = "select * where (C= 'ai_ml' and B='YES') or (C='generic' and B='YES') order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
case 'ai_ds.html':
	customSQL = "select * where (C= 'ai_ds' and B='YES') or (C='generic' and B='YES') order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
case 'chemical-engineering.html':
	customSQL = "select * where C= 'chemical-engineering' and B='YES' order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
case 'chemistry.html':
	customSQL = "select * where C= 'chemistry' and B='YES' order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
case 'civil-engineering.html':
	customSQL = "select * where C= 'civil-engineering' and B='YES' order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
case 'cse.html':
	customSQL = "select * where C= 'cse' and B='YES' order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
case 'ece.html':
	customSQL = "select * where C= 'ece' and B='YES' order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
case 'eie.html':
	customSQL = "select * where C= 'eie' and B='YES' order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
case 'eee.html':
	customSQL = "select * where C= 'eee' and B='YES' order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
case 'humanities.html':
	customSQL = "select * where C= 'humanities' and B='YES' order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
case 'iem.html':
	customSQL = "select * where C= 'iem' and B='YES' order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
case 'ise.html':
	customSQL = "select * where C= 'ise' and B='YES' order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
case 'maths.html':
	customSQL = "select * where C= 'maths' and B='YES' order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
case 'mba.html':
	customSQL = "select * where C= 'mba' and B='YES' order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
case 'mca.html':
	customSQL = "select * where C= 'mca' and B='YES' order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
case 'me.html':
	customSQL = "select * where C= 'me' and B='YES' order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
case 'medical-engineering.html':
	customSQL = "select * where C= 'medical-engineering' and B='YES' order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
case 'physics.html':
	customSQL = "select * where C= 'physics' and B='YES' order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
case 'te.html':
	customSQL = "select * where C= 'te' and B='YES' order by A desc";
	fetchSize = 3;
	hasSideEvents = true;
	break;
}

if (hasEvents) {
	// Events
	var eventTemplate = Handlebars.compile($('#event-template').html());
	function showEventsPage() {
		document.getElementById("event-loader").style.display = "none";
	}

	var eventsSpreadsheet = 'https://docs.google.com/spreadsheets/d/1mXLIU_vLZ86GgAiPVY9aASAwXJvWSoiAbYlakLjWCjs/edit#gid=0';
	$('#event-content').sheetrock({
		url : eventsSpreadsheet,
		sql : customSQL,
		formatting : false,
		fetchSize : fetchSize,
		rowTemplate : eventTemplate,
		userCallback : showEventsPage()
	});
}

if (hasNews) {
	// News
	var newsTemplate = Handlebars.compile($('#news-template').html());
	function showNewsPage() {
		 document.getElementById("news-loader").style.display = "none";
	}

	var newsSpreadsheet = 'https://docs.google.com/spreadsheets/d/1xW5mVzxKNmgPW8qTK4M-OX8jHIEBUga-4ahXS5k-22U/edit#gid=0';
	$('#news-content').sheetrock({
		url : newsSpreadsheet,
		sql : customSQL,
		formatting : false,
		fetchSize : fetchSize,
		rowTemplate : newsTemplate,
		userCallback : showNewsPage()
	});
}

if (hasSideEvents) {
	// Events
	var sideEventTemplate = Handlebars.compile($('#side-event-template').html());
	function showSideEventsPage() {
		document.getElementById("side-event-loader").style.display = "none";
	}

	var sideEventsSpreadsheet = 'https://docs.google.com/spreadsheets/d/1mXLIU_vLZ86GgAiPVY9aASAwXJvWSoiAbYlakLjWCjs/edit#gid=0';
	$('#side-event-content').sheetrock({
		url : sideEventsSpreadsheet,
		sql : customSQL,
		formatting : false,
		fetchSize : 3,
		rowTemplate : sideEventTemplate,
		userCallback : showSideEventsPage()
	});
}
