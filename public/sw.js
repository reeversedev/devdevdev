/* Service Worker */

self.addEventListener("install", function (event) {
  let offlineRequest = new Request('offline.html');

  event.waitUntil(

      // Once the whole app is loaded, it'll fetch and cache the offline entities

      fetch(offlineRequest)
          .then(function (response) {
            return caches.open('offline')
                .then(function (cache) {
                  return Promise.all([
                    cache.put(offlineRequest, response),
                    cache.addAll(['/logo.svg'])
                  ]);
                })
          })
  )
});

self.addEventListener("fetch", function (event) {
  let request = event.request;

  // for every get request
  if (request.method === "GET") {
    event.respondWith(
        caches.match(request)
            .then(function(response){
              return response || fetch(request);            // respond from cache if there's a match, otherwise make the network call
            })
            .catch(function(){
              return caches.match('/offline.html');  // if GET results in an error, render offline.html
            })
    )
  }
})
