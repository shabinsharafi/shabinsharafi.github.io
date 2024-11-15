'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "73b75a5557dec4c63e6c1a1a5abc8c9e",
".git/config": "63c78a4a9d87b133eb19036f17644c2b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "c6eab3b4968cabfcb4bc09c9f551f0a1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "57d57a4c5677d2c2b705c4e906c7440e",
".git/logs/refs/heads/main": "57d57a4c5677d2c2b705c4e906c7440e",
".git/logs/refs/remotes/origin/HEAD": "39c5354cf9905b3c7e59aa0e3852b028",
".git/logs/refs/remotes/origin/main": "ad11315112333e126c24433fbc41d63e",
".git/objects/21/6d25303d3b02485e0ce9e517f7ff30bff5538f": "3f7cab961fd614f7d47bccecf8378cd2",
".git/objects/26/4f9bee07f3717d1504f73a60debb195b649b93": "60c3f7c59abe796e7770d18864157e06",
".git/objects/4f/95652f6db39339c6246293a693fddae346ae8b": "2f8a37f88f785a4daed876e6c7930bd0",
".git/objects/4f/bead575144128cb4ef498620adb1249880c6c6": "940a30d234db6d7b65fa3c8bfe1018e9",
".git/objects/79/364b6a1ef94f4815cd4e7205272f4cbdcea835": "36d65bdf00f867ff1fae34a8c121ecb3",
".git/objects/80/9c4b909846ee670a9a49136a750b000b6f5070": "6410ea0be0dee149f32479186c7b4a49",
".git/objects/80/c765362fa2b9996cc48cc979ccb1a5a4437a09": "a9030d51856e1067a7c6c60ec8f9bbaf",
".git/objects/86/0bf94802d8bf44ec31c36d2e966a76ec6a7bc5": "857717ac1dde8053431f4cf0821ef3a0",
".git/objects/88/da1902ca251fa2fe642ce1f1a539fed5c7e2ee": "14658ac59a3e80099de9a10a214798ca",
".git/objects/b0/f07fd986cd07ca9994d8e617f9bc99059cc0ee": "3b641c1fc859f33d421cc334ca86cfe1",
".git/objects/b5/c86045bdef46ccc2f8becf8037e4b6a9448f00": "950c3b34f0b76519e31c424df2eb2585",
".git/objects/b7/2e7475c8373f488769e336aee466d5e9c4b058": "504a5f50af6fa3a92ff6629269d00ba9",
".git/objects/c6/b1278ce771d2a503ac062fe6a97a47539432ab": "f8d191bd0b34ba8ef1296fa6afbd2843",
".git/objects/dc/109ae344e491b590d9294755a3f8727cf4c40c": "c328160aa7b4914a6bb6b31d7f0bdfb3",
".git/objects/e1/0ab0069263d547f8941dac859f6438c3f26d89": "1536c78b779618ff4661c82a6065bda2",
".git/objects/e4/c8e769ecd3b3529978e2c2e9ef074d3ced565e": "e84422d1c40b146065c1ba20cda687e3",
".git/objects/f2/f6e22339ae91d53288b7a774d58e903f6dcddf": "95091d43f9bd1a1bcfab8ed47f99342b",
".git/objects/pack/pack-428508a0794c8443022facae9aecbe284fcbc35a.idx": "ba7a7d371f37227b58dc1072c1883fd2",
".git/objects/pack/pack-428508a0794c8443022facae9aecbe284fcbc35a.pack": "cb0e40e55291cc952426bff781608f27",
".git/objects/pack/pack-428508a0794c8443022facae9aecbe284fcbc35a.rev": "a2718996fb63b5f62658a811fbe22561",
".git/packed-refs": "3435d622ac7c2e3411c458ff3bb3baca",
".git/refs/heads/main": "fd7e632d56f07edc7a6e1b5e4435806b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "fd7e632d56f07edc7a6e1b5e4435806b",
"assets/AssetManifest.bin": "6f91f071e1729b2ed19416a155ce4d75",
"assets/AssetManifest.bin.json": "754c50e0a569a28004548d3f0dd785db",
"assets/AssetManifest.json": "5b87c343e6f281b5eeac39fac51a7759",
"assets/assets/AssetManifest.json": "c39ce65838e0b47108d258da4b382b6e",
"assets/assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/assets/images/care1.jpg": "ebbc1ff7365b3ae88d27f71ff12a1a3b",
"assets/assets/images/care2.jpg": "d418bd265d4fcab0e5f344a54b35c18d",
"assets/assets/images/care3.png": "a870c0ba1cf6d5bb4ba2b139a4ca2bde",
"assets/assets/images/care4.png": "dd99e4263c9c1c5e8669b0dd0297dad3",
"assets/assets/images/dash.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/doc1.png": "32124475c3574a9d9423d9506bfed65e",
"assets/assets/images/doc2.png": "2a31cea20a707ded4380dc0dfdfbd5e7",
"assets/assets/images/doc3.png": "52ffd31f015978520aeacc6353ea6798",
"assets/assets/images/doc4.png": "55b0df2f2b831ebf47df385756d7c4a0",
"assets/assets/images/fan1.jpg": "8cb09b50298f6ab2775deb4e14361d8c",
"assets/assets/images/fan2.jpg": "76f58f07077275f64d1cd75eaed5c3dd",
"assets/assets/images/fan3.jpg": "a004ea3d02eef2f0d19c67162dac443a",
"assets/assets/images/fan4.jpg": "66288d469c11351dded530204ff78544",
"assets/assets/images/foodzer1.png": "e4ad30018b1534dc2630b9ffa26e9bcf",
"assets/assets/images/foodzer2.png": "46b0beb5697e8371ac4596ab5bf05252",
"assets/assets/images/foodzer3.png": "0ff25a501deb5fccba4d3620939d808f",
"assets/assets/images/google_play.png": "8412cc2c8fb288c9c3cb9063e2e2aa11",
"assets/assets/images/play1.jpg": "6b3de3388e3617b2be5b87e77c444641",
"assets/assets/images/play2.jpg": "3528163d6e8c96223759b277015220e9",
"assets/assets/images/play3.jpg": "fa4a288edcd62c93cddd03997f48628f",
"assets/assets/images/play4.jpg": "22bd092eefcf3b454b69cf5fb7d50eb2",
"assets/assets/images/play5.png": "2051d6db1b608c23b544e9c95ba78493",
"assets/assets/images/play6.png": "207738923f02af71ee6dfbef235aaa74",
"assets/assets/images/play7.png": "8e6c77bc8fe7b7023b8e8e026d5ac046",
"assets/assets/images/poivaa1.png": "b510d2d1cc99b9bda8ba43182068783b",
"assets/assets/images/poivaa2.png": "79f2d14b4dac5b38848037b9bff61700",
"assets/assets/images/poivaa3.png": "95e01231fe97f37e18285cbbff75dc67",
"assets/assets/images/poivaa4.png": "24ca4ab7a1b1e7d9355e74dade031b40",
"assets/assets/images/rematch1.jpg": "93f036bbdebe2e73e1daf7ae7fba9f5d",
"assets/assets/images/rematch2.jpg": "6e094a72dd7e25876138f603c7e5491c",
"assets/assets/images/rematch3.jpg": "8c0ec336f28cf9f56e8ded811b3e3651",
"assets/assets/images/rematch4.jpg": "2f027e9b14fe7939037e66ace866a008",
"assets/assets/images/rematch5.jpg": "430ddaf3b3bd64fa8bbcd2ab3b389b6a",
"assets/assets/images/rematch6.jpg": "666499932bc5b82a64ec429ce3e18487",
"assets/assets/images/rematch7.png": "fd8cfff57b8961863a0917e0fe7a6966",
"assets/assets/images/rematch8.jpg": "1e3473d1197b01f0a09f7b90a5725393",
"assets/assets/images/shabz.png": "4c86c4c9d5c26272ee440e4e44424712",
"assets/assets/images/singx1.webp": "9d0b7148977b1cab798eb05ae734d43a",
"assets/assets/images/singx2.png": "5835b6289b0f65f1e29e2547ee4f09fd",
"assets/assets/images/singx3.webp": "7aafcd1da80ee6fa77de269f64485caa",
"assets/assets/images/singx4.png": "74071e837c354661fbe9db9dbc094bc2",
"assets/assets/images/wakanda1.webp": "906afb74d3498cbea5a5948691251560",
"assets/assets/images/wakanda2.webp": "546124542b9ace3ee77eb1bd623afdcd",
"assets/assets/images/wakanda3.webp": "7cae44251f1d70aab3acc542ace93b81",
"assets/assets/images/wakanda4.webp": "f960851f36242a2c038285f574243e01",
"assets/assets/images/wakanda5.webp": "a0adefa8f868ae3575faef40c11fec06",
"assets/assets/NOTICES": "e425d3b7b58c7a956e1dc77911c17ee8",
"assets/assets/splash_animation.json": "7f27ad44c341c7d131d70ba883a1aefd",
"assets/assets/splash_animation2.json": "b8b582ab47acc40403220ae25a51db0d",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "5621098cf9eda1bbe9cd8f4f18248e98",
"assets/NOTICES": "933afdb841af75eadcbb164ecf9473e7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "dae62e3c453ac7466c54f00dd948a415",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a1d6651f653f4aa6f8d3c63cdd4146a5",
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
"flutter_bootstrap.js": "3e92526730decb6b779af48708439b6f",
"icons/Icon-192.png": "33e4ad0e473ae9730b6249e1110b410f",
"icons/Icon-512.png": "7cf66c79a64872d9d8496727bc55d5a9",
"index.html": "9151cb706056fc22e5cb7b73a663450a",
"/": "9151cb706056fc22e5cb7b73a663450a",
"main.dart.js": "8bcee771d26176f3fa34ff8fa0562970",
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
