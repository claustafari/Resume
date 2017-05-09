//Biography  -->
var bio = {
        name: "Claus Bülow",
        role: "Web Developer",
        contacts: {
          email: "claus.ba86@gmail.com",
          mobile: "+45 25477673",
          github: "claustafari",
          twitter: "@Claus_Bulow",
          location: "Copenhagen"
        },
        welcomeMessage: "Howdy! Welcome to my interactive resumé page... I have built the site using HTML, CSS and JavaScript.",
        skills: ["HTML ", "CSS ", "Adobe InDesign ", "JavaScript ", "Copy-Writing ", "Research ", "Google AdWords Certified ", "SEO"],
        bioPic: "images/fry.jpg"
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);

  var formattedEmail = addHyperLink(HTMLemail,bio.contacts.email,bio.contacts.email);
  $("#topContacts").append(formattedEmail);
  $("#footerContacts").append(formattedEmail);

  var formattedGithub = addHyperLink(HTMLgithub,bio.contacts.github,"claustafari");
  $("#topContacts").append(formattedGithub);
  $("#footerContacts").append(formattedGithub);

  var formattedTwitter = addHyperLink(HTMLtwitter,bio.contacts.twitter, "@Claus_Bulow");
  $("#topContacts").append(formattedTwitter);
  $("#footerContacts").append(formattedTwitter);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedLocation);
  $("#footerContacts").append(formattedLocation);

  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedBioPic);

  var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMessage);


    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);

      for (skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
          }
      }
};
bio.display();


var work = {
  jobs: [
    {
      title: "Freelance Copy Writer",
      employer: "Self-Employed",
      dates: "2017 - present",
      location: "Copenhagen, Denmark",
      description: "I research and write catchy, informative texts for different purposes via online platforms. These texts are written focusing on keywords and semantic elements - in order to improve crawling of the pages and indexing of products and services. Apart from that I function as a steady chronicle writer for the local newspaper, Randers Amtsavis."
    },
    {
      title: "Analyst/UX Designer",
      employer: "Randers Library",
      dates: "2015 - 2016",
      location: "Randers, Denmark",
      description: "I was involved as an analyst/UX designer in a national, IT-development project. Through analysis and wireframing, the project produced specific advice on how to improve the user experience on the danish libraries CMS."
    },
    {
      title: "Research Assistant",
      employer: "Centre for Health Research in the Humanities",
      dates: "2014 - 2015",
      location: "Copenhagen, Denmark",
      description: "My primary responsibilities were to carry out research and transmit information about a danish food-technological initiative. I presented the results at a Medical seminar and wrote a lengthy piece for a major danish newspaper. The article was featured on the frontpage."
    },
    {
      title: "Communications",
      employer: "Danish Architecture Centre",
      dates: "2012 - 2014",
      location: "Copenhagen, Denmark",
      description: "I researched and updated informational material on the social, political and architectural development of Copenhagen. I transmitted this knowledge to groups of varying sizes and backgrounds."
    },
    {
      title: "Guide",
      employer: "DFDS Seaways",
      dates: "2011 - 2012",
      location: "Copenhagen, Denmark",
      description: "My main occupation was to carry out research on the historical development of the Copenhagen harbour area and transmit this knowledge. I updated the teams manuscripts and communicated this information orally on boat tours throughout the harbour area."
    }
],

display() {
    if(work.jobs.length > 0) {
      for(job in work.jobs) {
          $("#workExperience").append(HTMLworkStart);

      			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);

      			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);

      			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      			$(".work-entry:last").append(formattedDescription);
  		}
  	}
  }
};
work.display();


var education = {
    schools: [
      {
        name: "University of Copenhagen",
        degree: "Master of Arts in History and Digital Communication and Aesthetics",
        dates: "2007 - 2015",
        location: "Copenhagen, Denmark",
        majors: "Science and Technology Studies",
        url: "http://www.ku.dk/ENGLISH/"
      }
    ],
    onlineCourses: [
      {
        school: "Udacity",
        title: "Front-End Web Developer, Nanodegree",
        dates: "2017",
        url: "https://profiles.udacity.com/p/7231491628"
      },
      {
        school: "Google",
        title: "AdWords Search Certification",
        dates: "2017",
        url: "https://www.google.com/partners/#p_certification_html;cert=8"
      },
      {
        school: "Udemy",
        title: "Google AdWords Course - stop SEO and win with PPC!",
        dates: "2017",
        url: "https://www.udemy.com/the-ultimate-google-adwords-training-course/"
    }
  ],
display() {
  if (education.schools.length > 0 || education.onlineCourses.length > 0) {
      $("#education").append(HTMLschoolStart);

    for(school in education.schools) {

      var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

			$(".education-entry:last").append(formattedName + formattedDegree);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedLocation);
			$(".education-entry:last").append(formattedMajor);
    }

  if(education.onlineCourses.length > 0) {
    	$("#education").append(HTMLonlineClasses);
    		for(onlineCourse in education.onlineCourses) {
    				$("#education").append(HTMLschoolStart);

    			  var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title).replace("#", education.onlineCourses[onlineCourse].url);
    				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
    				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].completed);
    				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url).replace("#", education.onlineCourses[onlineCourse].url);

    				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
    				$(".education-entry:last").append(formattedOnlineDates);
    				$(".education-entry:last").append(formattedOnlineURL);

          }
        }
      }
    }
};
education.display();


var projects = {
  projects: [
  {
    title: "Online Portfolio",
    dates: "2017",
    description: "Built a Portfolio using HTML, CSS and JavaScript",
    images: ["images/fry.jpg"],
    url: "https://profiles.udacity.com/p/7231491628"
  },
  {
    title: "Resume",
    dates: "2017",
    description: "Built a resumé using JavaScript",
    images: ["images/fry.jpg"],
    url: "https://profiles.udacity.com/p/7231491628"
  },
  {
    title: "Online Portfolio",
    dates: "2017",
    description: "Built a Portfolio using HTML, CSS and JavaScript",
    images: ["images/fry.jpg"],
    url: "https://profiles.udacity.com/p/7231491628"
  },
  {
    title: "Online Portfolio",
    dates: "2017",
    description: "Built a Portfolio using HTML, CSS and JavaScript",
    images: ["images/fry.jpg"],
    url: "https://profiles.udacity.com/p/7231491628"
  }
],
display() {
  if(projects.projects.length > 0) {
    for(project in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

      for(img in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
				$(".project-entry:last").append(formattedImage);
			}
    }
  }
}
};
projects.display();

function addHyperLink(html,url,text){
    if (!text) {
    	text = url;
    }

    var formattedURL = html.replace("#", url);
    formattedURL = formattedURL.replace("%data%",text);

    return formattedURL;
}
/*
Register click locations on Document -->
var clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});
*/

/*
$("#main").append(internationalizeButton);

function inName() {
  var finalName = bio.name;
  var names = bio.name.split(" ");
  names[1] = names[1].toUpperCase();
  names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
  finalName = names.join(" ");
  return finalName;
};
*/
$("#mapDiv").append(googleMap);
