document.getElementById("headerPage").innerHTML =
'<header class = "primaryheader">'+
	'<span><a href="index.html" style="text-decoration: none; color: white;">Center for Virtual Imaging Trials</a></span>'+
		 '</header>'+

'<header class = "secondaryheader">'+
 '<label for="show-menu" class="show-menu">Show Menu</label>'+
    '<input type="checkbox" id="show-menu" role="button">'+
        '<ul id="menu">'+
        	'<li>'+
            '<a href="research.html">About</a>'+
        	'</li>'+
			'<li>'+
			'<a href="people.html">People</a>'+
			'<ul class="hidden">'+
			'</ul>'+
			'</li>'+        	
			'<li><a href="publications.html">Facilities</a>'+
			'</li>'+       	
			'<li>'+
            '<a href="contact.html">Contact</a>'+
			'<li><a href="resources.html">Downloads</a>'+
			'</li>'+
        '</li>'+
		'</ul>'+
	'</header>'+

'<header class = "decorationheader">'+
	'</header>';