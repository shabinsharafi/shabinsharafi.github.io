'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "eee523a657c878eb29b5d7892124d3dd",
".git/config": "f2f615453ba5b2702bf289657667c43c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c5831ec008ac08a6193d3677290546d9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "56cc8ffa3c683ba3e37f541824ebf275",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4771e6803f808da6562057b5699c3aae",
".git/logs/refs/heads/main": "4771e6803f808da6562057b5699c3aae",
".git/logs/refs/remotes/origin/HEAD": "d4b43da48f4778f1abdebf066b51f89b",
".git/logs/refs/remotes/origin/main": "6ff980682ede3ae8b6e6a6fa6741172e",
".git/objects/3d/784be461ae0932e8944911809cf32f4880dfc2": "75397beb322d84a1bab415b65fd0d34c",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/bf/99b8f6a19a9445e7219e7bfe86b7d144682ec4": "730d67f15ac6f9bd71fde411a814eb87",
".git/objects/c7/7048f550d7ee64e68e653ff6df6a4cd4dd2628": "0dcdf6f4fc2d22a9c534592fb7c849d9",
".git/objects/d6/d3c5ec8e9ed0ad6df3846223671b7bc3c306a6": "79373a9cd23e7f7fd158ec66b90b9949",
".git/objects/e4/3668180e9ee91365aafe448b427959b28a9652": "f8f3ae027a6ffe77d4f83c70156357d4",
".git/objects/f8/efc58fa33d1369b2c96b977202f4ec7de96892": "bf5cdea236852fed29dd118ed7f41d5d",
".git/objects/pack/pack-bc2ad11f698d6a1688b03753321dfbaca6d45b29.idx": "ff8b6ae6b1390420a1226918e8296f11",
".git/objects/pack/pack-bc2ad11f698d6a1688b03753321dfbaca6d45b29.pack": "5d793f37d9f695812f50e660b725e7b1",
".git/objects/pack/pack-bc2ad11f698d6a1688b03753321dfbaca6d45b29.rev": "ca2841d5bd170f755c002ca152287426",
".git/packed-refs": "bf966858004a6254d1fd103e3b1be53b",
".git/refs/heads/main": "3fce0f8c0aff3e079c0d7706a15e78b2",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "3fce0f8c0aff3e079c0d7706a15e78b2",
"assets/AssetManifest.bin": "7ab8dbc3bf16d43f42a7f050aec859c6",
"assets/AssetManifest.bin.json": "54a73253cad56c80237ecd9e57966658",
"assets/AssetManifest.json": "7d3f761d5219f44529aa52a26ac1a83c",
"assets/assets/images/care1.jpg": "ebbc1ff7365b3ae88d27f71ff12a1a3b",
"assets/assets/images/care2.jpg": "d418bd265d4fcab0e5f344a54b35c18d",
"assets/assets/images/care3.png": "a870c0ba1cf6d5bb4ba2b139a4ca2bde",
"assets/assets/images/care4.png": "dd99e4263c9c1c5e8669b0dd0297dad3",
"assets/assets/images/dash.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/fan1.jpg": "8cb09b50298f6ab2775deb4e14361d8c",
"assets/assets/images/fan2.jpg": "76f58f07077275f64d1cd75eaed5c3dd",
"assets/assets/images/fan3.jpg": "a004ea3d02eef2f0d19c67162dac443a",
"assets/assets/images/fan4.jpg": "66288d469c11351dded530204ff78544",
"assets/assets/images/play1.jpg": "6b3de3388e3617b2be5b87e77c444641",
"assets/assets/images/play2.jpg": "3528163d6e8c96223759b277015220e9",
"assets/assets/images/play3.jpg": "fa4a288edcd62c93cddd03997f48628f",
"assets/assets/images/play4.jpg": "22bd092eefcf3b454b69cf5fb7d50eb2",
"assets/assets/images/poivaa1.png": "b510d2d1cc99b9bda8ba43182068783b",
"assets/assets/images/poivaa2.png": "79f2d14b4dac5b38848037b9bff61700",
"assets/assets/images/poivaa3.png": "95e01231fe97f37e18285cbbff75dc67",
"assets/assets/images/poivaa4.png": "24ca4ab7a1b1e7d9355e74dade031b40",
"assets/assets/images/rematch1.jpg": "93f036bbdebe2e73e1daf7ae7fba9f5d",
"assets/assets/images/rematch2.jpg": "6e094a72dd7e25876138f603c7e5491c",
"assets/assets/images/rematch3.jpg": "8c0ec336f28cf9f56e8ded811b3e3651",
"assets/assets/images/rematch4.jpg": "2f027e9b14fe7939037e66ace866a008",
"assets/assets/images/shabz.png": "4c86c4c9d5c26272ee440e4e44424712",
"assets/assets/images/singx1.webp": "9d0b7148977b1cab798eb05ae734d43a",
"assets/assets/images/singx2.png": "5835b6289b0f65f1e29e2547ee4f09fd",
"assets/assets/images/singx3.webp": "7aafcd1da80ee6fa77de269f64485caa",
"assets/assets/images/singx4.png": "74071e837c354661fbe9db9dbc094bc2",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "5621098cf9eda1bbe9cd8f4f18248e98",
"assets/NOTICES": "ad419b0071ffe648d4cc8e5067503024",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "8d91bc29f45464eabb395e53a89da11e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "41f7b00ffd334fec8be93cf417b89051",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "33e4ad0e473ae9730b6249e1110b410f",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "4f7b98a279fe9dea59f0858d07b7f60c",
"icons/Icon-192.png": "33e4ad0e473ae9730b6249e1110b410f",
"icons/Icon-512.png": "7cf66c79a64872d9d8496727bc55d5a9",
"index.html": "e8237a36c22d16e979a06674f15e8544",
"/": "e8237a36c22d16e979a06674f15e8544",
"main.dart.js": "c21edb987e17c58bb76b1752403649f6",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
