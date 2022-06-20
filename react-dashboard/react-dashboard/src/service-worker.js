
/* eslint-disable no-restricted-globals */

const statics = self.__WB_MANIFEST;

self.addEventListener("install", event => {
  self.skipWaiting();
  console.log("Installed!")
  event.waitUntil(
    caches.open("isCache").then((cache) => {
      cache.addAll(statics.map(path => path.url))
      cache.add("/")
    })
  );
});

addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then(async (response) => {
        if (response) {
          return response;
        }

        const networkResponse = await fetch(event.request);

        const clonedResponse = networkResponse.clone();

        const runtimeCache = await caches.open("isCache");
        runtimeCache.put(event.request, networkResponse);

        return Promise.resolve(clonedResponse);
      })
    );
  
});

self.addEventListener("activate",event =>{
  console.log("Working")
});

self.addEventListener("offline",function(e){
  console.log("Doesntwork!")
});