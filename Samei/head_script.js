document.getElementById("headerPage").innerHTML =
'<header class = "primaryheader">'+
	'<span>Samei Group</span>'+
		 '</header>'+

'<header class = "secondaryheader">'+
 '<label for="show-menu" class="show-menu">Show Menu</label>'+
    '<input type="checkbox" id="show-menu" role="button">'+
        '<ul id="menu">'+
        	'<li><a href="./">About</a></li>'+
			'<li>'+
			'<a href="people.html">People</a>'+
			'<ul class="hidden">'+
				'<li><a href="alumni.html">Alumni</a></li>'+
				'<li><a href="https://cipg.duhs.duke.edu/content/staff" target="_blank" rel="noopener">CIPG Members</a></li>'+
			'</ul>'+
			'</li>'+
        	'<li>'+
            '<a href="research.html">Research</a>'+
            '<ul class="hidden">'+
                '<li><a href="#">Topic 1</a></li>'+
                '<li><a href="#">Topic 2</a></li>'+
				'<li><a href="#">Topic 3</a></li>'+
				'<li><a href="#">Topic 4</a></li>'+
				'<li><a href="#">Topic 5</a></li>'+
            '</ul>'+
        	'</li>'+
			'<li><a href="publications.html">Publications</a>'+
			'<ul class="hidden">'+
				'<li><a href="notable_publication.html">Notable Publications</a></li>'+
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