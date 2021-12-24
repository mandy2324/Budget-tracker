// global constants 
const APP_PREFIX = 'FoodFest-';     
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;

const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/js/index.js',
  '/js/idb.js',
  '/manifest.json',
  '/css/styles.css',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'  
];

// adding files to the precache so that the application can use the cache (installing service worker)
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
          console.log('installing cache : ' + CACHE_NAME)
          return cache.addAll(FILES_TO_CACHE)
        })
      )
  });