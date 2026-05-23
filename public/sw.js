const CACHE_NAME = 'nexoclx-061-shell-v4'
const BASE_PATH = '/nexoclx-061/'
const CORE_ASSETS = [
  BASE_PATH,
  `${BASE_PATH}manifest.webmanifest`,
  `${BASE_PATH}favicon.png`,
  `${BASE_PATH}assets/icons/icon-192.png`,
  `${BASE_PATH}assets/icons/icon-512.png`,
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.allSettled(CORE_ASSETS.map((asset) => cache.add(asset))),
    ),
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))),
      ),
  )
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return

  const requestUrl = new URL(event.request.url)
  const isAppRequest = requestUrl.origin === self.location.origin && requestUrl.pathname.startsWith(BASE_PATH)
  const isNavigation = event.request.mode === 'navigate'
  const isBuildAsset = isAppRequest && requestUrl.pathname.startsWith(`${BASE_PATH}assets/`)

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (isAppRequest && response.ok && !isNavigation) {
          const copy = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy))
        }
        return response
      })
      .catch(() => {
        if (isNavigation) return caches.match(BASE_PATH)
        if (isBuildAsset) return caches.match(event.request)
        return caches.match(event.request)
      }),
  )
})
