'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c285fddcd877e554e2572b671d441605",
".git/config": "5a8228d3226c9ba682e417da93d5a898",
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
".git/index": "f553f61137bd87ccc13a3513a1408e09",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1827bec46004d530b1712c82b684507c",
".git/logs/refs/heads/main": "cbd10f76a4d60a7457431e21475c191e",
".git/logs/refs/remotes/origin/main": "ef56e60df3ce86ccf050f5889e83dd0e",
".git/objects/03/e02e8bca137d70e6a77f445f93d56a0b30add8": "25c0818ef3183b58d1da1610b3414ffc",
".git/objects/0b/0122d5baa0b88402d1364ddda56e7a953c56ad": "5edb4cf72101aa7944daeca74d2e60bb",
".git/objects/0d/2b1b3e66d6b150ec5924cebe40ea6afb40794e": "c3fe815fcdf40a9d205e365094b229e4",
".git/objects/12/1e2bab7d05f46843775f0d3344d587eda568e6": "0191d2fd6564446b5507b27f11b246d9",
".git/objects/13/c1fcc149422074a88380193d84bc8e4b493b45": "83679d9969e1afe1ea676b37a33ae020",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/27/884fc32911d550c26f7d1cce96a0be504cd6d8": "4dc32a6a36d791484c803f4e4c706d5b",
".git/objects/28/25a51c865183f542b5a8eb9f2417aba7681c9e": "8fa3d3e10e478dc50a5249de88ece99c",
".git/objects/29/84d5c69559e5194210959d2eda53f86a13091b": "b131d6dc0da330ed81f91f563fbf80f2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/58/2e2ee6faf270da7fe520de4be786645225e8cb": "27fbb9c935f1ae6dad56676b04167b6b",
".git/objects/58/898ffcb877bf34e2bc1818c5ad9be59dd1b582": "0061e8c243d6526f7ed7c43595f4e134",
".git/objects/59/527d8af913584acb7310145aa0e0ce7a83441b": "9f3a51fa40ccfff97f18894bafc55dc1",
".git/objects/60/9de0049ede55c5ac9388486c16a08569bfaa38": "339206a3a8185a64904671a74325a47a",
".git/objects/65/f791ce829b49b009bc6c2a3c561b6beff4eb04": "b35fd09404f196a761ceaeba86a117f1",
".git/objects/66/d47bff5ec72c4881c087778de7be1e1356bc67": "044db199de444d65fbd50e8e11152a3c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/c60a11f6c9cdd8967e2ab8f3351cb7e7b1e297": "752778ff4083fcbd0162d2d69741a363",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/78/3acb678e6571dbca3b45c8bcb6394b7b04a00a": "a57b370423bcb4ceaef65a6fd4857797",
".git/objects/7a/8760d7c208019d30a666aa549799d4cbf7ca3e": "eb1c72eb2fa084724dbfa7a5c3db2d78",
".git/objects/7c/edee40cd22a88cd6da7c36c910a2345ae61ab2": "a6bfd1b5e161ddbd0ea0aa1d00e66ff0",
".git/objects/7e/1ae982d0a4cd265fbb0f10e8634daf13a8df01": "4fbfde8166018858c6899518fd32b789",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/dc64c556562e6e0fdb6d735fa80dc1b7ad495a": "a5ca34c6c492328ab08f7605c9fbff53",
".git/objects/95/1b53faa1c440255611f812587de0b61f84a286": "e2f35d226382433a82bb1f315066ef89",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a1/2a320e12ab01c7aa0a4bd3d745b823552389b6": "fc3d66dae54f42e5ed6c9a295954a38a",
".git/objects/aa/b5cda58f2d4c0bd1738540738a3b065aba7b8d": "4f9947ef601b7ec90907dbc10e8928db",
".git/objects/ac/aa4f0671a3d5e5ec34eb762af1e4c4548aebb2": "69fe1eaed929f23cfae56913e45c80ef",
".git/objects/b2/7bb345f3758b9322f0608ae8cc6f89a3ed2f7d": "658a594326a9549a8b3537a9d046261e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/7e6d3658f01f4b812bd14c901a838d68efc683": "fbe2fd7666f15283bc6cec3eb141fc38",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cf/7f96ba08b5bcddd3b06e139d69cb87a92bb87c": "dcd469bcb5da0e5007075f1660319a8c",
".git/objects/cf/f3914eb81c46b3c9952ff5754b38bcb1b34552": "93a13fd8975bff65a584b71d9f87773c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/db/f19805727c78283586e4f002223f12efd47342": "806c0b23eed1292ad6d6d3b1f1ef743b",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/2d0fcc4f10e33b053e50ee51e9f46a396e2c2e": "4cd5a968ee3ef4f4cfb6797e46130464",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fb/5af2dff17831bec9573e88d07de4fa872c3711": "55161dc2ce0a56b6b12b2934c8531d7d",
".git/refs/heads/main": "43748ecb1d714845f122a201b586c17f",
".git/refs/remotes/origin/main": "43748ecb1d714845f122a201b586c17f",
"assets/AssetManifest.bin": "e1fecd9cc14e4f103dbec0f5dc32bfed",
"assets/AssetManifest.bin.json": "d6a1c9772f6b76dada154e4979fa684c",
"assets/AssetManifest.json": "f844468dbafb154e929003361a732183",
"assets/assets/logo.png": "2bd59217781781ddbfa290c6d4b1a316",
"assets/assets/profil.jpg": "e4b4674404db14e509d95e64aabcb06f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "326ce4c8dd3307462a3ee320f29b503b",
"assets/NOTICES": "f164dd61e9bd1d3ef9c00c712e4808d6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "4949209d334d20e64a9f23ef1d859eca",
"icons/android-192.png": "f1b69be21b188f0efa99c1c819f52091",
"icons/android-512.png": "eb0025448eaa08c75ce19af3b09b49e5",
"icons/apple-192.png": "f1b69be21b188f0efa99c1c819f52091",
"icons/apple-512.png": "eb0025448eaa08c75ce19af3b09b49e5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf08910f3e02e901bf7e69b518ea4e74",
"/": "bf08910f3e02e901bf7e69b518ea4e74",
"main.dart.js": "3d0a07a46711323af4a3b9450a699bda",
"manifest.json": "1ec3c9f8b2090210f6c9299761192a70",
"version.json": "0a38290121112b65c97b03e1abc6c263"};
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
