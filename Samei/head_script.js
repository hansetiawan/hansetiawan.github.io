document.getElementById("headerPage").innerHTML =
'<header class = "primaryheader">'+
	'<span><a href="index.html" style="text-decoration: none; color: white;">Samei Group</a></span>'+
		 '</header>'+

'<header class = "secondaryheader">'+
 '<label for="show-menu" class="show-menu">Show Menu</label>'+
    '<input type="checkbox" id="show-menu" role="button">'+
        '<ul id="menu">'+
        	'<li><a href="index.html">About</a></li>'+
			'<li>'+
			'<a href="people.html">People</a>'+
			'<ul class="hidden">'+
				'<li><a href="alumni.html">Alumni</a></li>'+
				'<li><a href="https://cipg.duhs.duke.edu/content/members" target="_blank" rel="noopener">CIPG Members</a></li>'+
			'</ul>'+
			'</li>'+
        	'<li>'+
            '<a href="research.html">Research</a>'+
            '<ul class="hidden">'+
                '<li><a href="dosimetrics.html">Dosimetrics</a></li>'+
                '<li><a href="qualimetrics.html">Qualimetrics</a></li>'+
				'<li><a href="informatics.html">Performance Informatics</a></li>'+
				'<li><a href="vct.html">Virtual Clinical Trials</a></li>'+
				'<li><a href="quantitative.html">Quantitative Imaging</a></li>'+
            '</ul>'+
        	'</li>'+
			'<li><a href="publications.html">Publications</a>'+
			'<ul class="hidden">'+
				'<li><a href="notable_publications.html">Notable Publications</a></li>'+
			'</ul>'+
			'</li>'+
        	'<li><a href="resources.html">Resources</a></li>'+
			'<li>'+
            '<a href="contact.html">Contact</a>'+
            '<ul class="hidden">'+
                '<li><a href="prospective_student.html">Prospective Student</a></li>'+
            '</ul>'+
        '</li>'+
		'</ul>'+
	'</header>'+

'<header class = "decorationheader">'+
	'</header>';