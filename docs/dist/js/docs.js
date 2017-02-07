var Docs = {
	run: function() {
		this.addNavigationIndicator();
		this.handleNavigation();
		this.handleRandomLink();
	},

	addNavigationIndicator: function() {
		var nav = document.querySelector('.Page-body-nav');
		var indicator = document.createElement('span');
		indicator.className = 'Nav-indicator';
		nav.appendChild(indicator);
		var location = window.location.origin + window.location.pathname;
		document.querySelectorAll('.Nav a').forEach(function(a){
			if (a.href == location) {
				return Docs.updateNavIndicator(a);
			}
		});
	},

	updateNavIndicator: function(a) {
		var indicator = document.querySelector('.Nav-indicator');

		var currenActiveLinks = document.querySelectorAll('.Nav a.is-active');
		currenActiveLinks.forEach(function(link){ link.classList.remove('is-active')});

		var box = a.getBoundingClientRect();
		var top = a.offsetTop;
		a.classList.add('is-active');
		indicator.style.height = box.height + 'px';
		indicator.style.transform = 'translateY(' + top + 'px)'
	},

	handleNavigation() {
		var nav = document.querySelector('.Nav');
		var content = document.querySelector('.Page-body-content');
		var indicator = document.querySelector('.Nav-indicator');

		nav.querySelectorAll('a').forEach(function(link){
			var href = link.href;
			link.onclick = function(e) {
				Docs.updateNavIndicator(e.target);
				indicator.classList.add('is-active');
				content.classList.add('is-fetching');
				fetch(href)
					.then(function(res){
						return res.text()
					})
					.then(function(res){
						content.classList.remove('is-fetching');
						var doc = document.createElement('html');
						doc.innerHTML = res;
						var resContent = doc.querySelector('.Page-body-content').innerHTML;
						content.innerHTML = resContent;
						history.replaceState({}, '', href);
					});
				e.preventDefault();
			}
		});
	},

	handleRandomLink: function() {
		var link = document.querySelector('a.randomLink');
		if (link) {
			var href = Math.round(Math.random() * 10000);
			link.href = '#' + href;
		}
	}
}

Docs.run();
