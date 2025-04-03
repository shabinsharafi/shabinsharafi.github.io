'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "55c1e20c7008284392c7d8e941bd8751",
".git/config": "93e6562848217ca79382dac557d366c7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "600f26c2f73ee4148dd2d4598b9e7b70",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "c3be341c7e70f6fd07629b15683040de",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4a93d34040cd231e5c7862a4c07af728",
".git/logs/refs/heads/master": "4a93d34040cd231e5c7862a4c07af728",
".git/logs/refs/remotes/origin/main": "0465eea1f95695d6644cc096c44b94ca",
".git/logs/refs/remotes/origin/master": "31023e8c4d6a3c23b19863ce4bb61d64",
".git/objects/26/a923d1ec701be084f6183b09aaa93935375e11": "9d2ded099dad05a43af92860b8bbf591",
".git/objects/8a/c70ad9ee5b549e8f4466241599805beaf30b29": "c6c93cd3776f847e57209c9074154140",
".git/objects/ce/eca295fe861a1026469f2e43d351f010b8d459": "1bebdfe7c5932dd5b93c330da9e3acc4",
".git/objects/d8/66f5108e27ea257a160c160f13db59c386fa0b": "0c90405452e433c75977bbcdb76499b2",
".git/objects/e7/76a5af85f691ef2e54a1ab6d13c9aa3fc747ee": "d31952793e604d60d1ac32b4e4f048c7",
".git/objects/pack/pack-d0e8b8fb02598ece9ba6a54c15fb21b08213604e.idx": "6364fa22ad7c6578f16ad7e457fe6fc3",
".git/objects/pack/pack-d0e8b8fb02598ece9ba6a54c15fb21b08213604e.pack": "6ea4af507d42d6fa224c8a5bbb4e2757",
".git/objects/pack/pack-d0e8b8fb02598ece9ba6a54c15fb21b08213604e.rev": "d3d39210b50b4bf171c405b71b6ef5e7",
".git/refs/heads/master": "0789d47bc650828dfddde46028cdcc80",
".git/refs/remotes/origin/main": "854f589f102ee3cbf51cf52aff9e2cec",
".git/refs/remotes/origin/master": "0789d47bc650828dfddde46028cdcc80",
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
"assets/fonts/MaterialIcons-Regular.otf": "8ecfa66fe62cb22b1ac685af4a8b3464",
"assets/NOTICES": "67e8c4bff40153f668aad6ee5d73beb3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "dae62e3c453ac7466c54f00dd948a415",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a1d6651f653f4aa6f8d3c63cdd4146a5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "33e4ad0e473ae9730b6249e1110b410f",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "23e456e80c3a5a1933c8c30f5bfaa0a1",
"icons/Icon-192.png": "33e4ad0e473ae9730b6249e1110b410f",
"icons/Icon-512.png": "7cf66c79a64872d9d8496727bc55d5a9",
"index.html": "855049265c5bd88bf17e2d40a570b416",
"/": "855049265c5bd88bf17e2d40a570b416",
"main.dart.js": "26c94c009eb1010bd4af589fa64aa26b",
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
