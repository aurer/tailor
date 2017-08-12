var Docs = {
	run: function() {
		this.addNavigationIndicator();
		this.addNavHandle();
		this.handleNavigation();
		this.handleRandomLink();
		this.drawCanvasDemo();
	},

	addNavigationIndicator: function() {
		var nav = document.querySelector('.Page-nav');
		var indicator = document.createElement('span');
		indicator.className = 'Nav-indicator';
		nav.appendChild(indicator);
		var location = window.location.origin + window.location.pathname;
	},

	addNavHandle: function() {
		var nav = document.querySelector('.Page-nav');
		var navHandle = document.createElement('button');

		navHandle.innerHTML = `<svg viewbox="0 0 30 18" height="18">
			<rect x="0" y="0" width="30" height="2"></rect>
			<rect x=0 y="8" width="30" height="2"></rect>
			<rect x=0 y="16" width="30" height="2"></rect>
		</svg>`;
		navHandle.classList.add('Nav-handle');
		navHandle.onclick = function(e) {
			var handle = e.target;
			nav.classList.toggle('is-visible');
		}
		nav.append(navHandle);
	},


	handleNavigation() {
		var pageNav = document.querySelector('.Page-nav');
		var nav = document.querySelector('.Nav');
		var content = document.querySelector('.Page-main');

		nav.querySelectorAll('a:not(.Nav-github)').forEach(function(link){
			var href = link.href;
			link.onclick = function(e) {
				pageNav.classList.remove('is-visible');
				content.classList.add('is-fetching');
				e.target.parentNode.childNodes.forEach(node => node.classList.remove('is-active'));
				e.target.classList.add('is-active');
				fetch(href)
					.then(function(res){
						return res.text()
					})
					.then(function(res){
						content.classList.remove('is-fetching');
						var doc = document.createElement('html');
						doc.innerHTML = res;
						var resContent = doc.querySelector('.Page-main').innerHTML;
						content.innerHTML = resContent;
						history.replaceState({}, '', href);
						Docs.drawCanvasDemo();
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
	},

	drawCanvasDemo: function() {
		var canvas = document.querySelector('canvas');
		if (canvas) {
			var ctx = canvas.getContext('2d');
			ctx.rect(3, 3, 100, 100);
			ctx.rect(14, 14, 78, 78);
			ctx.rect(25, 25, 56, 56);
			ctx.rect(36, 36, 34, 34);
			ctx.strokeStyle = "#00A9DD";
			ctx.lineWidth = 3;
			ctx.stroke();
		}
	},

	mq: function(query) {
		if ( !('matchMedia' in window) ) {
			return false;
		}

		return window.matchMedia(query).matches;
	}
}

Docs.run();
