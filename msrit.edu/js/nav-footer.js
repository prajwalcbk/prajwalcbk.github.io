var pageIndex = "";
var pageGovernance = "";
var pageAdmissions = "";
var pageAcademics = 'class="mega-menu"';
var pageFacilities = "";
var pageExamination = "";
var pagePlacement = "";
var pageContact = "";
var pageSupport = "";
var pageReports = "";

var PAGE = window.location.pathname.split("/").pop();
var isOthers = true;
var isSubBack = "";

switch (PAGE) {
  case "index.html":
    isOthers = false;
    break;
  case "about-us.html":
    pageIndex = 'class="current-menu-item"';
    isOthers = false;
    break;
  case "governance.html":
    pageGovernance = 'class="current-menu-item"';
    isOthers = false;
    break;
  case "gov-others.html":
    pageGovernance = 'class="current-menu-item"';
    isOthers = false;
    break;
  case "admissions.html":
    pageAdmissions = 'class="current-menu-item"';
    isOthers = false;
    break;
  case "academics.html":
    pageAcademics = 'class="mega-menu current-menu-item"';
    isOthers = false;
    break;
  case "examination.html":
    pageExamination = 'class="current-menu-item"';
    isOthers = false;
    break;
  case "placement.html":
    pagePlacement = 'class="current-menu-item"';
    isOthers = false;
    break;
  case "contact-us.html":
    pageContact = 'class="current-menu-item"';
    isOthers = false;
    break;
  case "reports.html":
    isOthers = false;
    break;
  case "news.html":
    isOthers = false;
    break;
  case "events.html":
    isOthers = false;
    break;
}

if (isOthers) {
  if (window.location.href.indexOf("facilities") > -1) {
    pageFacilities = 'class="current-menu-item"';
  }

  isSubBack = "../";
}

// Navbar
var nav =
  '<div id="kopa-header-bottom" >' +
  "" +
  '				<div class="container">' +
  "" +
  '					<div class="row">' +
  "" +
  '						<div class="col-md-12 col-sm-12 col-sx-12">' +
  "" +
  '							<nav id="main-nav">' +
  "" +
  '								<ul id="main-menu" class="clearfix">' +
  "									<li " +
  pageIndex +
  ">" +
  "										<a href=" +
  isSubBack +
  "about-us.html>About Us</a>" +
  "										<ul>" +
  '											<li class="current-menu-item">' +
  "												<a href=" +
  isSubBack +
  "about-us.html>Overview</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "about-us.html#history>Evolution</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "governance.html>Governance</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "governance.html#bom>Board of Management</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "gov-others.html>Other Committee</a>" +
  "											</li>" +
  "										</ul>" +
  "									</li>" +
  /*	'									<li ' + pageGovernance + '>' +
	'										<a href=' + isSubBack + 'governance.html>Governance</a>' +
	'										<ul>' +
	'											<li>' +
	'												<a href=' + isSubBack + 'governance.html#bom\>Board of Management</a>' +
	'											</li>' +
	'											<li>' +
	'												<a href=' + isSubBack + 'gov-others.html\>Other Committee</a>' +
	'											</li>' +
	'										</ul>' +
	'									</li>' +*/
  "									<li " +
  pageAdmissions +
  ">" +
  "										<a href=" +
  isSubBack +
  "admissions.html>Admissions</a>" +
  "										<ul>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "admissions.html#po>Programs Offered</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "admissions.html#research-programs>Research Programs</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "admissions.html#prospectus>Brochure</a>" +
  "											</li>" +
  // '											<li>' +
  // '												<a href=' + isSubBack + 'admissions.html#application\>Application Form</a>' +
  // '											</li>' +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "admissions.html#scholarship>Scholarship Details</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "admissions.html#contact>Contact Details</a>" +
  "											</li>" +
  "										</ul>" +
  "									</li>" +
  "									<li " +
  ">" +
  '										<a href="#">Academics</a>' +
  "                   <ul>" +
  "                     <li " +
  pageAcademics +
  "> " +
  '                       <a href="#">Departments </a>' +
  '										<div class="sf-mega sf-mega-s1">' +
  '											<div class="row">' +
  // '												<div class="col-md-2 col-sm-2 col-xs-12">' +
  // "" +
  // '													<div class="row">' +
  // '														<div class="menu-menu-container">' +
  // "" +
  // '															<ul class="menu">' +
  // '																<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-537">' +
  // "																	<a href=" +
  // isSubBack +
  // 'phd/index.html> <h6 style="color: #fff">PhD</h6></a>																	' +
  // '																	<div class="clear"></div>																	' +
  // '																<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-537">' +
  // "																	<a href=" +
  // isSubBack +
  // 'department/rnd.html> <h6 style="color: #fff">R & D</h6></a>																	' +
  // '																	<div class="clear"></div>																	' +
  // "																</li>" +
  // '																<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-537">' +
  // "																	<a href=" +
  // isSubBack +
  // 'department/certificate-programs.html> <h6 style="color: #fff">Certificate Programs</h6></a>																	' +
  // '																	<div class="clear"></div>																	' +
  // "																</li>" +
  // // '																<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-537">' +
  // // '																	<a href=' + isSubBack + 'department/journals.html> <h6 style="color: #fff">Journals for Publication</h6></a>																	' +
  // // '																	<div class="clear"></div>																	' +
  // // '																</li>' +
  // "																" +
  // "															</ul><!--end:toggle-view-->" +
  // "														</div>														" +
  // "													</div>" +
  // "" +
  // "												</div>" +
  "												<!-- col-md-4 -->												" +
  "												" +
  '												<div class="col-md-12 col-sm-12 col-xs-12">' +
  "" +
  '													<div class="row">' +
  '														<div class="col-md-4 col-sm-4 col-xs-12">' +
  '															<div class="widget clearfix widget_nav_menu">' +
  "" +
  '																<h4 class="widget-title">A-D</h4>' +
  '																<div class="menu-menu-container">' +
  '																	<ul class="menu">' +
  "																		" +
  '																		<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-537">' +
  "																			<a href=" +
  isSubBack +
  "department/architecture.html>Architecture</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-537">' +
  "																			<a href=" +
  isSubBack +
  "department/ai_ds.html>Artificial Intelligence & Data Science</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-537">' +
  "																			<a href=" +
  isSubBack +
  "department/ai_ml.html>Artificial Intelligence & Machine Learning</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-540">' +
  "																			<a href=" +
  isSubBack +
  "department/biotechnology.html>Biotechnology</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-541">' +
  "																			<a href=" +
  isSubBack +
  "department/chemical-engineering.html>Chemical Engineering</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-542">' +
  "																			<a href=" +
  isSubBack +
  "department/chemistry.html>Chemistry</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-543">' +
  "																			<a href=" +
  isSubBack +
  "department/civil-engineering.html>Civil Engineering</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-542">' +
  "																			<a href=" +
  isSubBack +
  "department/cse.html>Computer Science & Engineering</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-537">' +
  "																			<a href=" +
  isSubBack +
  "department/cse_ai_ml.html>Computer Science & Engineering(AI & ML)</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-537">' +
  "																			<a href=" +
  isSubBack +
  "department/cse_cs.html>Computer Science & Engineering(Cyber Security)</a>" +
  "																		</li>" +
  "																	</ul>" +
  "																</div>" +
  "															</div>" +
  "															<!-- widget -->" +
  "														</div>" +
  "														" +
  '														<div class="col-md-4 col-sm-4 col-xs-12">' +
  '															<div class="widget clearfix widget_nav_menu">' +
  "" +
  '																<h4 class="widget-title">E-L</h4>' +
  '																<div class="menu-menu-container">' +
  '																	<ul class="menu">' +
  '																		<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-537">' +
  "																			<a href=" +
  isSubBack +
  "department/ece.html>Electronics & Communication Engineering</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-540">' +
  "																			<a href=" +
  isSubBack +
  "department/eie.html>Electronics & Instrumentation Engineering</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-541">' +
  "																			<a href=" +
  isSubBack +
  "department/eee.html>Electrical & Electronics Engineering</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-541">' +
  "																			<a href=" +
  isSubBack +
  "department/te.html>Electronics & Telecommunication Engineering</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-541">' +
  "																			<a href=" +
  isSubBack +
  "department/humanities.html>Humanities</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-542">' +
  "																			<a href=" +
  isSubBack +
  "department/iem.html>Industrial Engineering & Management</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-543">' +
  "																			<a href=" +
  isSubBack +
  "department/ise.html>Information Science & Engineering</a>" +
  "																		</li>" +
  "																	</ul>" +
  "																</div>" +
  "															</div>" +
  "															<!-- widget -->" +
  "														</div>" +
  "														" +
  '														<div class="col-md-4 col-sm-4 col-xs-12">' +
  '															<div class="widget clearfix widget_nav_menu">' +
  "" +
  '																<h4 class="widget-title">M-Z</h4>' +
  '																<div class="menu-menu-container">' +
  '																	<ul class="menu">' +
  '																		<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-537">' +
  "																			<a href=" +
  isSubBack +
  "department/maths.html>Mathematics</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-543">' +
  "																			<a href=" +
  isSubBack +
  "department/mca.html>Master of Computer Applications(MCA)</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-540">' +
  "																			<a href=" +
  isSubBack +
  "department/mba.html>Management Studies(MBA)</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-541">' +
  "																			<a href=" +
  isSubBack +
  "department/me.html>Mechanical Engineering</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-542">' +
  "																			<a href=" +
  isSubBack +
  "department/medical-engineering.html>Medical Electronics</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-543">' +
  "																			<a href=" +
  isSubBack +
  "department/physics.html>Physics</a>" +
  "																		</li>" +
  "																	</ul>" +
  "																</div>" +
  "															</div>" +
  "															<!-- widget -->" +
  "														</div>														" +
  "													</div>" +
  "" +
  "												</div>" +
  "												<!-- col-md-7 -->" +
  "											</div>" +
  "											<!-- row -->" +
  "										</div>" +
  "										<!-- sf-mega -->" +
  "									</li>" +
  ' <li> <a href="' +
  isSubBack +
  "department/int-411.html" +
  '">Intra Institutional Internship</a></li>' +
  ' <li> <a href="' +
  isSubBack +
  "department/certificate-programs.html" +
    '">Certificate Programs</a></li><li><a href="#">Ability Enhancement Courses</a><ul><li style="background: #a93965; color: white;"  class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-537"><a href="'+isSubBack+'aec/">AEC - 1 </li></ul></li></ul></li>' +
  "                 <li " +
  pageFacilities +
  ">" +
  '                   <a href="#">Research</a>' +
  "                   <ul>" +
  "                     <li>" +
  "                       <a href=" +
  isSubBack +
  "research/coe.html>Centers of Excellence</a>" +
  "                     </li>" +
  "                     <li>" +
  "                       <a href=" +
  isSubBack +
  "research/phd/index.html>Ph.D</a>" +
  "                     </li>" +
  "                     <li>" +
  "                       <a href=" +
  isSubBack +
  "research/rnd.html>Funded Projects</a>" +
  "                     </li>" +
  "                   </ul>" +
  "                 </li>" +
  "									<li " +
  pageFacilities +
  ">" +
  '										<a href="#">Facilities</a>' +
  "										<ul>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "facilities/hostel.html>Hostel</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "facilities/internet.html>Internet Center</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "facilities/gym.html>Gym</a>" +
  "											</li>" +
  "											<li>" +
  // "												<a href=" +
  // isSubBack +
  // "facilities/library.html>Library</a>" +
  "                       <a href=" +
  "https://www.msritlibrary.org/>Library</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "facilities/others.html>Others Facilities</a>" +
  "											</li>" +
  "										</ul>" +
  "									</li>" +
  "									<li " +
  pageExamination +
  ">" +
  "										<a href=" +
  isSubBack +
  "examination.html#exam-section>Examination</a>" +
  "										<ul>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "examination.html#process>Process</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "examination.html#circulars>Circulars</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  // isSubBack +
  "http://exam.msrit.edu>Results</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "examination.html#malpractice>Malpractice</a>" +
  "											</li>" +
  "" +
  "										</ul>" +
  "									</li>" +
  "									<li " +
  pagePlacement +
  ">" +
  "										<a href=" +
  isSubBack +
  "placement.html>Placement</a>" +
  "										<ul>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "placement.html#overview>Overview</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "placement.html#testimonial>Testimonial</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "placement.html#recruiters>Our Recruiters</a>" +
  "											</li>" +
  "										</ul>" +
  "									</li>" +
  // "									<li " +
  // pagePlacement +
  // ">" +
  // '										<a href="http://msrit.edu/skill-labs.html" target="_blank">Skill Labs</a>' +
  // "									</li>" +
  "									<li " +
  pagePlacement +
  ">" +
  "										<a>Others</a>" +
  "										<ul>" +
  "											<li>" +
  '												<a href="http://msrit-iqac.com" target="_blank">IQAC</a>' +
  "											</li>" +
  "											<li>" +
  '												<a href="http://events.msrit.edu/" target="_blank">Events</a>' +
  "											</li>" +
  "											<li>" +
  '												<a href="http://parents.msrit.edu/" target="_blank">Student Information System</a>' +
  "											</li>" +
  "											<li>" +
  '												<a href="https://staff.msrit.edu/" target="_blank">Staff Information System</a>' +
  "											</li>" +
  "									<li " +
  pageContact +
  ">" +
  "										<a href=" +
  isSubBack +
  "contact-us.html>Contact</a>" +
  "									</li>" +
  "										</ul>" +
  "									</li>" +
  "									<li " +
  pageContact +
  ' style="display:none">' +
  "										<a href=" +
  isSubBack +
  "contact-us.html>Contact</a>" +
  "									</li>" +
  "" +
  "								</ul>" +
  "								<!-- main-menu -->" +
  "" +
  '								<nav class="main-nav-mobile clearfix" style="width:100%">' +
  '									<button aria-controls="bs-navbar" aria-expanded="false" class="collapsed navbar-toggle pull" data-target="#bs-navbar" data-toggle="collapse" type="button"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>' +
  '									<ul class="main-menu-mobile clearfix" >' +
  "									<li " +
  pageIndex +
  ">" +
  "										<a href=" +
  isSubBack +
  "about-us.html>About Us</a>" +
  "										<ul>" +
  '											<li class="current-menu-item">' +
  "												<a href=" +
  isSubBack +
  "about-us.html>Overview</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "about-us.html#history>History</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "about-us.html#administration>Vision & Mission</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "about-us.html#ranking>Quality Policy</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "about-us.html#testimonial>Campus Tour</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "about-us.html#alumni>Alumni</a>" +
  "											</li>" +
  "										</ul>" +
  "									</li>" +
  "									<li " +
  pageGovernance +
  ">" +
  "										<a href=" +
  isSubBack +
  "governance.html>Governance</a>" +
  "										<ul>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "governance.html#bom>Board of Management</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "governance.html#governing_body>Governing Body</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "governance.html#finance_committee>Finance Committee</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "governance.html#academic_council>Academic Council</a>" +
  "											</li>" +
  "" +
  "										</ul>" +
  "									</li>" +
  "									<li " +
  pageAdmissions +
  ">" +
  "										<a href=" +
  isSubBack +
  "admissions.html>Admissions</a>" +
  "" +
  "										<ul>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "admissions.html#po>Programs Offered</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "admissions.html#research-programs>Research Programs</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "admissions.html#prospectus>Brochure</a>" +
  "											</li>" +
  // '											<li>' +
  // '												<a href=' + isSubBack + 'admissions.html#application\>Application Form</a>' +
  // '											</li>' +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "admissions.html#scholarship>Scholarship Details</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "admissions.html#ss>Scholarship Statistics</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "admissions.html#contact>Contact Details</a>" +
  "											</li>" +
  "										</ul>" +
  "									</li>" +
  "									<li " +
  pageAdmissions +
  ">" +
  '										<a href="#">Academics</a>' +
  "                    <ul>" +
  "                     <li>" +
  '                   <a href="#">Departments</a>' +
  '							<ul>		<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-537"' +
  pageAdmissions +
  ">" +
  '										<a href="#">A-D</a>' +
  "										<ul>" +
  '											<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-537">' +
  "																			<a href=" +
  isSubBack +
  "department/architecture.html>Architecture</a>" +
  "																		</li>" +
  '											<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-537">' +
  "																			<a href=" +
  isSubBack +
  "department/ai_ds.html>Artificial Intelligence & Data Science</a>" +
  "																		</li>" +
  '											<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-537">' +
  "																			<a href=" +
  isSubBack +
  "department/ai_ml.html>Artificial Intelligence & Machine Learning</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-540">' +
  "																			<a href=" +
  isSubBack +
  "department/biotechnology.html>Biotechnology</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-541">' +
  "																			<a href=" +
  isSubBack +
  "department/chemical-engineering.html>Chemical Engineering</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-542">' +
  "																			<a href=" +
  isSubBack +
  "department/chemistry.html>Chemistry</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-543">' +
  "																			<a href=" +
  isSubBack +
  "department/civil-engineering.html>Civil Engineering</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-542">' +
  "																			<a href=" +
  isSubBack +
  "department/cse.html>Computer Science & Engineering</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-542">' +
  "																			<a href=" +
  isSubBack +
  "department/cse_ai_ml.html>Computer Science & Engineering(AI & ML)</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-542">' +
  "																			<a href=" +
  isSubBack +
  "department/cse_cs.html>Computer Science & Engineering(Cyber Security)</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-543">' +
  "																			<a href=" +
  isSubBack +
  "department/mca.html>Master of Computer Applications(MCA)</a>" +
  "																		</li>" +
  "										</ul>" +
  "									</li>" +
  "									<li " +
  pageAdmissions +
  ">" +
  '										<a href="#">E-l</a>' +
  "										<ul>" +
  '											<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-537">' +
  "																			<a href=" +
  isSubBack +
  "department/ece.html>Electronics & Communication Engineering</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-540">' +
  "																			<a href=" +
  isSubBack +
  "department/eie.html>Electronics & Instrumentation Engineering</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-541">' +
  "																			<a href=" +
  isSubBack +
  "department/eee.html>Electrical & Electronics Engineering</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-541">' +
  "																			<a href=" +
  isSubBack +
  "department/humanities.html>Humanities</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-542">' +
  "																			<a href=" +
  isSubBack +
  "department/iem.html>Industrial Engineering & Management</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-543">' +
  "																			<a href=" +
  isSubBack +
  "department/ise.html>Information Science & Engineering</a>" +
  "																		</li>" +
  "										</ul>" +
  "									</li>" +
  "									<li " +
  pageAdmissions +
  ">" +
  '										<a href="#">M-Z</a>' +
  "										<ul>" +
  '																		<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-537">' +
  "																			<a href=" +
  isSubBack +
  "department/maths.html>Mathematics</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-540">' +
  "																			<a href=" +
  isSubBack +
  "department/mba.html>Management Studies(MBA)</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-541">' +
  "																			<a href=" +
  isSubBack +
  "department/me.html>Mechanical Engineering</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-542">' +
  "																			<a href=" +
  isSubBack +
  "department/medical-engineering.html>Medical Electronics</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-543">' +
  "																			<a href=" +
  isSubBack +
  "department/physics.html>Physics</a>" +
  "																		</li>" +
  '																		<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-543">' +
  "																			<a href=" +
  isSubBack +
  "department/te.html>Telecommunication Engineering</a>" +
  "																		</li>" +
  "										</ul>" +
  "									</li> </ul>" +
  "									</li>" +
  ' <li> <a href="' +
  isSubBack +
  "department/int-411.html" +
  '">Intra Institutional Internship</a></li>' +
  ' <li> <a href="' +
  isSubBack +
  "department/certificate-programs.html" +
  '">Certificate Programs</a></li><li><a href="#">Ability Enhancement Courses</a><ul><li style="background: #a93965; color: white;" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-537"><a href="'+isSubBack+'aec/">AEC - 1 </li></ul></li></ul></li>' +
  "                 <li " +
  pageFacilities +
  ">" +
  '                   <a href="#">Research</a>' +
  "                   <ul>" +
  "                     <li>" +
  "                       <a href=" +
  isSubBack +
  "research/coe.html>Centers of Excellence</a>" +
  "                     </li>" +
  "                     <li>" +
  "                       <a href=" +
  isSubBack +
  "research/phd/index.html>Ph.D</a>" +
  "                     </li>" +
  "                     <li>" +
  "                       <a href=" +
  isSubBack +
  "research/rnd.html>Funded Projects</a>" +
  "                     </li>" +
  "                   </ul>" +
  "                 </li>" +
  "									<li " +
  pageFacilities +
  ">" +
  '										<a href="#">Facilities</a>' +
  "										<ul>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "facilities/hostel.html>Hostel</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "facilities/internet.html>Internet Center</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "facilities/gym.html>Gym</a>" +
  "											</li>" +
  "											<li>" +
  // "												<a href=" +
  // isSubBack +
  // "facilities/library.html>Library</a>" +
  "                       <a href=" +
  "https://www.msritlibrary.org/>Library</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "facilities/others.html>Other Facilities</a>" +
  "											</li>" +
  "										</ul>" +
  "									</li>" +
  "									<li " +
  pageExamination +
  ">" +
  "										<a href=" +
  isSubBack +
  "examination.html>Examination</a>" +
  "										<ul>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "examination.html#process>Process</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "examination.html#circulars>Circulars</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  // isSubBack +
  "http://exam.msrit.edu>Results</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "examination.html#malpractice>Malpractice</a>" +
  "											</li>" +
  "										</ul>" +
  "									</li>" +
  "									<li " +
  pagePlacement +
  ">" +
  "										<a href=" +
  isSubBack +
  "placement.html>Placement</a>" +
  "										<ul>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "placement.html#overview>Overview</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "placement.html#testimonial>Testimonial</a>" +
  "											</li>" +
  "											<li>" +
  "												<a href=" +
  isSubBack +
  "placement.html#recruiters>Our Recruiters</a>" +
  "											</li>" +
  "										</ul>" +
  "									</li>" +
  "                 <li " +
  pagePlacement +
  ">" +
  "                   <a href='#'>Others</a>" +
  "                   <ul>" +
  "                     <li>" +
  '                       <a href="http://msrit-iqac.com" target="_blank">IQAC</a>' +
  "                     </li>" +
  "                     <li>" +
  '                       <a href="http://events.msrit.edu/" target="_blank">Events</a>' +
  "                     </li>" +
  "                     <li>" +
  '                       <a href="http://parents.msrit.edu/" target="_blank">Student Information System</a>' +
  "                     </li>" +
  "                     <li>" +
  '                       <a href="https://staff.msrit.edu/" target="_blank">Staff Information System</a>' +
  "                     </li>" +
  "									<li " +
  pageContact +
  ">" +
  "										<a href=" +
  isSubBack +
  "contact-us.html>Contact Us</a>" +
  "									</li>" +
  "									</ul>" +
  "								</nav>" +
  "								<!--/main-menu-mobile-->" +
  "" +
  "							</nav>" +
  "							<!-- main-nav -->" +
  "" +
  "						</div>" +
  "						<!-- col-md-12 -->" +
  "" +
  "					</div>" +
  "					<!-- row -->" +
  "" +
  "				</div>" +
  "				<!-- container -->" +
  "" +
  "			</div>" +
  "			<!-- kopa-header-bottom -->" +
  "" +
  "		</div>" +
  "		<!-- kopa-page-header -->";

document.getElementById("my-nav").innerHTML += nav;

// Footer
var footer =
  '<div id="bottom-sidebar">' +
  "" +
  '				<div class="container">' +
  "" +
  '					<div class="row">' +
  "" +
  '						<div class="col-md-3 col-sm-3 col-xs-12">' +
  "" +
  '							<div id="footer-logo-image">' +
  '								<a><img src="https://msrit-bucket.s3.us-west-2.amazonaws.com/brand.png" style="max-height:78px" alt=""></a>' +
  '<div id="social-image-footer"' +
  '              <a href="https://www.facebook.com/RamaiahInstituteofTechnologyRIT">' +
  '                <span class="fa fa-facebook-official" style="font-size: 18px; color: white;"></span>' +
  '                </a><a href="https://www.youtube.com/c/RamaiahInstituteofTechnology/">' +
  '                <span class="fa fa-youtube" style="font-size: 18px; color: white;"></span>' +
  '              </a>  <a href="https://www.linkedin.com/school/15137883/">' +
  '                <span class="fa fa-linkedin" style="font-size: 18px; color: white;"></span>' +
  "              </a></div>" +
  "							</div>" +
  "" +
  "							<!-- widget -->" +
  "" +
  "						</div>" +
  "						<!-- col-md-4 -->" +
  "" +
  '						<div class="col-md-9 col-sm-9 col-xs-12">' +
  "" +
  '							<div class="row">' +
  "" +
  '								<div class="col-md-3 col-sm-12 col-xs-12">' +
  '									<div class="widget clearfix widget_nav_menu">' +
  "" +
  '										<h4 class="widget-title">Supporting Sections</h4>' +
  '										<div class="menu-menu-container">' +
  '											<ul class="menu">' +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  "													<a href=" +
  isSubBack +
  "qip-center.html>QIP Center</a>" +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  "													<a href=" +
  isSubBack +
  "support/proctorial-system.html>Proctorial System</a>" +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  '													<a href="https://site.ieee.org/sb-ritb/" target="_blank">IEEE RIT</a>' +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-530 current_page_item menu-item-532">' +
  "													<a href=" +
  isSubBack +
  "support/sports.html>Sports</a>" +
  "												</li>" +
  '												<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-537">' +
  "													<a href=" +
  isSubBack +
  "support/nss.html>NSS</a>" +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-540">' +
  "													<a href=" +
  isSubBack +
  "support/deca.html>Dept. Of Extra-Curricular Activities</a>" +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-541">' +
  "													<a href=" +
  isSubBack +
  "support/edc.html>Entrepreneurship Development Cell</a>" +
  "												</li>" +
  '												<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-537">' +
  "													<a href=" +
  isSubBack +
  "rit-iic.html>RIT Institution's Innovation Cell</a>" +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-541">' +
  "													<a href=" +
  isSubBack +
  "support/apple_training.html>Apple Training Center</a>" +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-530 current_page_item menu-item-532">' +
  "													<a href=" +
  isSubBack +
  "support/cocurricular.html>Co-curricular Activities</a>" +
  "												</li>" +
  '												<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-537">' +
  "													<a href=" +
  isSubBack +
  "support/alumni.html>Alumni</a>" +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-540">' +
  "													<a href=" +
  isSubBack +
  "support/TEQIP.html>TEQIP</a>" +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-541">' +
  "													<a href=" +
  isSubBack +
  "support/mandatory-committees.html>Mandatory Committees</a>" +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-542">' +
  "													<a href=" +
  isSubBack +
  "support/spdc.html>SPDC</a>" +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-543">' +
  '													<a target="_blank" href="https://s3-us-west-2.amazonaws.com/msrit-bucket/Supporting/PMSSS+NODAL+OFFICER">PMSSS NODAL OFFICER</a>' +
  "												</li>" +
  "											</ul>" +
  "										</div>" +
  "									</div>" +
  "									<!-- widget -->" +
  "								</div>" +
  "" +
  '								<div class="col-md-3 col-sm-12 col-xs-12">' +
  '									<div class="widget clearfix widget_nav_menu">' +
  "" +
  '										<h4 class="widget-title">Reports & Notifications</h4>' +
  '										<div class="menu-menu-container">' +
  '											<ul class="menu">' +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  "													<a href=" +
  isSubBack +
  "reports.html#audit>VTU Audit Report</a>" +
  "												</li>" /*
	'												<li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-530 current_page_item menu-item-532">' +
	'													<a href=' + isSubBack + 'reports.html#NAAC\>NAAC</a>' +
	'												</li>' +*/ +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-530 current_page_item menu-item-532">' +
  "													<a href='https://msrit-bucket.s3.us-west-2.amazonaws.com/Reports/NBA+%26+NAAC+Accreditation+Status.pdf'>NBA & NAAC Accreditation Status</a>" +
  "                       </li>" +
  '                       <li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-537">' +
  "                         <a href=" +
  isSubBack +
  "reports.html#IQAC>IQAC</a>" +
  "												</li>" +
  '												<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-537">' +
  "													<a href=" +
  isSubBack +
  "reports.html#NIRF>NIRF</a>" +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-540">' +
  "													<a href=" +
  isSubBack +
  "reports.html#NBA>NBA</a>" +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-541">' +
  "													<a href=" +
  isSubBack +
  "reports.html#AICTE>AICTE</a>" +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-541">' +
  "													<a href=" +
  '"https://msrit-bucket.s3.us-west-2.amazonaws.com/Uploads/MSRIT-ARI-C-1331-2021.pdf">ARIIA 2021</a>' +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-542">' +
  "													<a href=" +
  isSubBack +
  "reports.html#Sudarshana>Sudarshana Magazine</a>" +
  "												</li>" +
  '												<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-543">' +
  "													<a href=" +
  isSubBack +
  "reports.html#Pradarshana>Pradarshana</a>" +
  "												</li>" +
  '												<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-544">' +
  "													<a href=" +
  isSubBack +
  "reports.html#Sampige>Sampige Bulletin</a>" +
  "												</li>" +
  '												<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-544">' +
  "													<a href=" +
  isSubBack +
  "reports.html#AbhijnaDarpana>Abhijna Darpana GEF(E & GS) Newsletter</a>" +
  "												</li>" +
  // '												<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-545">' +
  // '													<a href="https://d2e9h3gjmozu47.cloudfront.net/Reports/QMS_2015_June-Controlled-Copy.pdf" target="_blank" \>QMS Manual</a>' +
  // '												</li>' +
  '												<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-546">' +
  '													<a href=' + isSubBack + 'reports.html#AuditedReports\>Audited Financial Reports</a>' +
  // '												</li>' +
  '												<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-546">' +
  /*'													<a href=' + isSubBack + 'reports.html#AuditedReports\>Strategic Planning</a>' + */
  '													<a href="http://www.msrit-iqac.com/assets/img/RoadMapPrint.pdf" target="_blank" >Strategic Planning</a>' +
  "												</li>" +
  "											</ul>" +
  "										</div>" +
  "									</div>" +
  "									<!-- widget -->" +
  "								</div>" +
  "" +
  '								<div class="col-md-3 col-sm-12 col-xs-12">' +
  '									<div class="widget clearfix widget_nav_menu">' +
  "" +
  '										<h4 class="widget-title">FEES PAYMENT</h4><br>' +
  '										<div class="menu-menu-container">' +
  '											<ul class="menu">' +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  '													<a href=" https://smarthubeducation.hdfcbank.com/SmartFees/Landing.action?instId=3151" target="_blank">NRI STUDENTS - HIGHER SEMESTER (ANNUAL FEES PAYMENT 2022-23) - <strong>DOLLAR PAYMENT</strong></a>' +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  '													<a href="https://smarthubeducation.hdfcbank.com/SmartFees/Landing.action?instId=2532" target="_blank">NRI STUDENTS - HIGHER SEMESTER (ANNUAL FEES PAYMENT 2022-23) - <strong>INR PAYMENT</strong></a>' +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  '													<a href="https://payments.billdesk.com/bdcollect/pay?p1=74&p2=6" target="_blank">PG COURSES - HIGHER SEMESTER (ANNUAL FEES PAYMENT 2022-23)</a>' +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  '													<a href="https://msrit-bucket.s3.us-west-2.amazonaws.com/fee-payment-ug-higher-sem-2022.pdf" target="_blank">UG COURSES - HIGHER SEMESTER (ANNUAL FEES PAYMENT 2022-23)</a>' +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528" >' +
  '													<a href="https://careerbook.federalbank.co.in/payment/StudentSearch/MSEF" target="_blank">Semester End Examinations of B.E. V & VII Semester;B.Arch V to IX Semester-Dec 2022/Jan 2023</a>' +
  "												</li>" +
  '                       <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528" >' +
  '                         <a href="https://careerbook.federalbank.co.in/payment/StudentSearch/MSEF" target="_blank">Supplementary Semester Examinations MBA/MCA/M.Tech/M.Arch I & II - November 2022</a>' +
  "                       </li>" +
  '                       <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528" >' +
  // '                          <a href="https://careerbook.federalbank.co.in/payment/StudentSearch/MSEF" target="_blank">Semester End Examinations of First Semester UG/PG - April to June 2022" </a>' +
  // '                         <a href="https://careerbook.federalbank.co.in/payment/StudentSearch/MSRITSF" target="_blank">Supplementary Semester Fee - July / August 2022" <span><img src="../new-gif.gif" width="30" height="30"/><span></a>' +
  '                         <a href="https://careerbook.federalbank.co.in/payment/StudentSearch/MSRITSF" target="_blank">Supplementary Semester Registration Fee - 2022."</a>' +
  "                       </li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528" >' +
  '													<a href="https://careerbook.federalbank.co.in/payment/StudentSearch/MSRITHF" target="_blank">Pay Hostel Fee Online</a>' +
  "												</li>" +
  "											</ul>" +
  "										</div>" +
  "									</div>" +
  "									<!-- widget -->" +
  "								</div>" +
  '						<div class="col-md-3 col-sm-12 col-xs-12">							' +
  "" +
  '							<div class="widget kopa-social-link-widget">' +
  "" +
  '								<div class="widget clearfix widget_nav_menu">' +
  "" +
  '										<h4 class="widget-title">Important Links</h4><br>' +
  '										<div class="menu-menu-container">' +
  '											<ul class="menu">' +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  '													<a href="https://msrit.edu/research/coe.html" target="_blank">Center of Excellence</a>' +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  "													<a href=" +
  isSubBack +
  "support/mandatory-committees.html#grievance_redressal_committee>Grievance Redressal Committee</a>" +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  '													<a href="http://msrit.edugrievance.com/" target="_blank">Grievance Redressal System</a>' +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  '													<a href="http://parents.msrit.edu/" target="_blank">Student Information Systems</a>' +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-530 current_page_item menu-item-532">' +
  '													<a href="http://exam.msrit.edu/" target="_blank">Results</a>' +
  "												</li>" +
  '												<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-537" style="display: none">' +
  '													<a href="https://www.mobile.vijayabankonline.in/feehive2/feehive/login/MSRIT" target="_blank">Pay Fee Online</a>' +
  "												</li>												" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  '													<a href="http://email.msrit.edu/" target="_blank">Faculty Email Login</a>' +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  '													<a href="http://www.msrit-iqac.com/amd.html" target="_blank">Mandatory Disclosures</a>' +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  '													<a href="https://d2e9h3gjmozu47.cloudfront.net/Uploads/GEFConductRules.pdf" target="_blank">GEF Conduct Rules</a>' +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  '													<a href="https://d2e9h3gjmozu47.cloudfront.net/Uploads/GEFServiceRules.pdf" target="_blank">GEF Service Rules</a>' +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  '													<a href="https://msrit.edu/student-satisfaction-survey.html" target="_blank">Student Satisfaction Survey of the Institute</a>' +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  '													<a href="/curriculum-feedback-analysis.html" target="_blank">Curriculum Feedback Analysis</a>' +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  '													<a href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Uploads/code_conduct_MSRIT.pdf" target="_blank">Code of Conduct</a>' +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  '													<a href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Uploads/Code_of_Ethics.pdf" target="_blank">Code of Ethics</a>' +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  '													<a href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Uploads/ConsultancyPolicy.pdf" target="_blank">Consultancy Policy</a>' +
  "												</li>" +
  '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  '													<a href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Uploads/ResearchPolicy.pdf" target="_blank">Research Policy</a>' +
  "												</li>" +
  // '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  // '													<a href="https://drive.google.com/file/d/1XFIMESQtv01VJlAe4OtvV2e4qvOGP3lM/view?usp=sharing" target="_blank">Academic Calendar 2021-22</a>' +
  // "												</li>" +
  '                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  '                         <a href="https://drive.google.com/file/d/1AV1aoAwouV_LbjMBYVqOBTjWyhBKi3rK/view?usp=sharing" target="_blank">Academic Calendar 2022-23 (Tentative)</a>' +
  "                       </li>" +
  // '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  // '													<a href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Uploads/academic_cal_2019-20.jpg" target="_blank">Academic Calendar 2019-20</a>' +
  // '												</li>'  +
  // '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  // '													<a href="http://msrit.edu/syllabus-18-19.html" target="_blank">Syllabus 2018-19</a>' +
  // '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  // '													<a href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Uploads/academic_cal_2019-19.pdf" target="_blank">Academic Calendar 2018-19</a>' +
  // '												</li>'  +
  // '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  // '													<a href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Uploads/academic_cal_2019-20.jpg" target="_blank">Academic Calendar 2019-20</a>' +
  // '												</li>'  +
  // '												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">' +
  // '													<a href="http://msrit.edu/syllabus-18-19.html" target="_blank">Syllabus 2018-19</a>' +
  "												</li>";
'												<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528" style="border-top: none;">' +
  '													<div class="container">' +
  '	<div class="row">' +
  "    " +
  "    " +
  '	<div id="myModal" class="modal fade in">' +
  '        <div class="modal-dialog">' +
  '            <div class="modal-content">' +
  " " +
  '                <div class="modal-header">' +
  '                    <a class="btn btn-default" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></a>' +
  '                    <h4 class="modal-title">RATE OUR WEBSITE</h4>' +
  "                </div>" +
  '                <div class="modal-body">' +
  "                    <h5 >Your feedbacks and rating are important to us. For more feedbacks and issues regarding website, kindly drop a mail to the developers at hi@weloftlabs.com. Thank you.</h4>" +
  '                    <div id="wpac-rating"></div>' +
  "                </div>" +
  '                <div class="modal-footer">' +
  '                    <div class="btn-group">' +
  '                        <button class="btn btn-danger" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span> Close</button>' +
  "                    </div>" +
  "                </div>" +
  " " +
  "            </div><!-- /.modal-content -->" +
  "        </div><!-- /.modal-dalog -->" +
  "    </div><!-- /.modal -->" +
  "    " +
  '<a data-toggle="modal" href="#myModal" class="btn btn-primary btn-footer" style="margin-left: 10px;"> RATE OUR WEBSITE</a>' +
  "" +
  "" +
  "	</div>" +
  "</div>";
"												</li>" +
  "											</ul>" +
  "										</div>" +
  "								</div>" +
  "							<!-- kopa-social-link-widget -->" +
  "							</div>" +
  "						<!-- col-md-4 -->";

"						</div>" +
  "						<!-- col-md-9 -->" +
  "" +
  "					</div>" +
  "					<!-- row -->" +
  "" +
  "				</div>" +
  "				<!-- container -->" +
  "" +
  "			</div>";

document.getElementById("my-footer").innerHTML += footer;

// (function (i, s, o, g, r, a, m) {
//   i["GoogleAnalyticsObject"] = r;
//   (i[r] =
//     i[r] ||
//     function () {
//       (i[r].q = i[r].q || []).push(arguments);
//     }),
//     (i[r].l = 1 * new Date());
//   (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
//   a.async = 1;
//   a.src = g;
//   m.parentNode.insertBefore(a, m);
// })(
//   window,
//   document,
//   "script",
//   "https://www.google-analytics.com/analytics.js",
//   "ga"
// );
// ga("create", "UA-71388201-8", "auto");
// ga("send", "pageview", location.pathname);
