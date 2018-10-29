var staticFiles = {};
staticFiles.list = [
	staticFiles.root,
	staticFiles.root + 'lib/coin.mp3',
	staticFiles.root + 'lib/csv.min.js',
	staticFiles.root + 'lib/encoding.min.js',
	staticFiles.root + 'lib/end.mp3',
	staticFiles.root + 'lib/MaterialIcons-Regular.woff2',
	staticFiles.root + 'lib/perfect.mp3'
];

staticFiles.cacheName = APP_VERSION;
staticFiles.map = {};
staticFiles.root = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '')
+ location.pathname.slice(0, location.pathname.lastIndexOf('/'));
for(var i = 0; i < staticFiles.list.length; i++) {
	staticFiles[i] = staticFiles.root + staticFiles[i];
	staticFiles.map[staticFiles[i]] = true;
}

self.addEventListener('install', function(evt) {
	evt.waitUntil(
		caches.open(staticFiles.cacheName).then(function(cache) {
			return Promise.all(staticFiles.cacheName.list.map(function(url) {
				return fetch(new Request(url)).then(function(response) {
					if(response.ok) return cache.put(response.url, response);
				return Promise.reject(
					'Invalid response.  URL:' + response.url +
					' Status: ' + response.status);
			});
		}));
	}));
});

self.addEventListener('fetch', function(evt) {
	if(!staticFiles.map[evt.request.url]) return;
	evt.respondWith(caches.match(evt.request, {cacheName: staticFiles.cacheName}));
});

self.addEventListener('activate', function(evt) {
	evt.waitUntil(
		caches.keys().then(function(keys) {
			var olds = [];
			keys.forEach(function(cacheName) {
				if(cacheName != staticFiles.cacheName) olds.push(caches.delete(cacheName));
			});
			return Promise.all(olds);
		})
	);
});
