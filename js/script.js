function toggle() {
	var x = document.getElementById('mobile-nav')
	var y = document.getElementById('togg')
	if (x.className == 'mobile-nav') {
		x.className = 'mobile-nav closed' 
		y.className = 'fa fa-bars'
	}
	else{
		x.className = 'mobile-nav';
		y.className = 'fa fa-times';
	}
} 