var bio = {
    "name": "Taranvir Singh Saini",
    "role": "Front-End-Web Developer",
    "contacts": {
        "mobile": "+91-977-914-5509",
        "email": "taranvir.554@gmail.com",
        "github": "taranvir031196",
        "twitter": "taranvir_554",
        "location": "Panchkula,haryana,India"
    },
    "biopic": ['images/Optimized-Taranvir Singh Saini-min.jpg'],
    "welcomeMessage": "Welcome to my Online resume.Thanks for stopping By!!!!!",
    "skills": ["HTML", "CSS", "Javascript", "AngularJS", "jQuery", "PHP", "Wordpress", "Bootstrap", "Sublime Text", "Linux"]
};

var work = {
    "jobs": [{
        "employer": "Taranvir Web services",
        "title": "Freelance Web developer",
        "location": "Panchkula",
        "description": "Developed Sites for Day to Day use.Really helped me gain a little bit of experience."
    }]
};

var projects = {
    "projects": [{
            "title": "Udacity Portfolio",
            "dates": "2017",
            "description": "Portfolio to show off my amazing work while working on the Udacity Front-end Nanodegree.",
            "images": ['images/68747470733a2f2f646c2e64726f70626f7875736572636f6e74656e742e636f6d2f7370612f6c62763771307a32376a313470676c2f74657769316a31632e706e67.png']
        },
        {
            "title": "Udacity HTML5 Canvas project ",
            "dates": "2017",
            "description": "It was one of my favourite projects to show off my skills by creating such a beautiful Project.Really Added Feathers to my skill set.",
            "images": ['images/frogger.jpg']

        },
        {
            "title": "Udacity Web Site Optimization project",
            "dates": "2017",
            "description": "This Project really helped me optimize my code in a better fashion.I learnt a lot in this project while at the same time had a lot of fun building this one.",
            "images": ['images/P4 Screenshot.png']
        },
        {
            "title": "Udacity Neighborhood Map Project",
            "dates": "2017",
            "description": "This project was one of the most important project in my nanodegree as it gave me chance to show my creativity and how well i can use different tools which i knew so far.",
            "images": ['images/screen-shot-2015-02-23-at-11-11-00-pm.png']

        }
    ]

};

var education = {
    "schools": [{
        "name": "Chitkara University",
        "location": "Rajpura,Punjab,India",
        "degree": "Bachelor of technology",
        "majors": ["Computer Science"],
        "dates": "2017",
        "url": "www.chitkara.edu.in"
    }],
    "onlineCourses": [{
            "title": "Front-end Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2017",
            "url": "www.udacity.com"
        },
        {
            "title": "HTML5 Canvas",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://www.udacity.com/course/ud292"
        },
        {
            "title": "Object oriented Javascript",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://www.udacity.com/course/ud015"

        },
        {
            "title": "Javascript Basics",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://www.udacity.com/course/ud804"
        },
        {
            "title": "Introduction to HTML and CSS",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://www.udacity.com/course/ud304"

        },
        {
            "title": "Web development",
            "school": "Udacity",
            "dates": "2016",
            "url": "https://www.udacity.com/course/cs253"

        },
        {
            "title": "Introduction to Linux",
            "school": "edx",
            "dates": "2017",
            "url": "www.edx.com"
        }
    ]
};

bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));

    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#topContacts").append(formattedwelcomeMsg);

    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));

    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));

    $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));

    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));

    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);

        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
            $('#skills').append(formattedSkill);
        }
    }

    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));

    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));

    $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));

    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));

    $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
};

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $('#workExperience').append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

    }
};

projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (var image = 0; image < projects.projects[project].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

education.display = function() {

    $("#education").append(HTMLschoolStart);
    for (var school = 0; school < education.schools.length; school++) {
        $(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[school].name));
        $(".education-entry").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
        $(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
        $(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
        $(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
    }

    $(".education-entry").append(HTMLonlineClasses);

    for (var onlineClass = 0; onlineClass < education.onlineCourses.length; onlineClass++) {
        $(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineClass].title));
        $(".education-entry").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClass].school));
        $(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineClass].dates));
        $(".education-entry").append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineClass].url));
    }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);







