const CACHE_NAME = 'trap-v2';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
  'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.3/dist/leaflet.js',
  'https://cdn.pixabay.com/audio/2025/02/07/audio_3ea2e70d4a.mp3'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Arka planda konum takibi
self.addEventListener('message', (event) => {
  if (event.data.action === 'startTracking') {
    startBackgroundTracking(event.data.alarms);
  } else if (event.data.action === 'stopTracking') {
    stopBackgroundTracking();
  }
});

let backgroundWatchId = null;

function startBackgroundTracking(alarms) {
  if ('geolocation' in navigator) {
    backgroundWatchId = navigator.geolocation.watchPosition(
      (position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        
        alarms.forEach(alarm => {
          const distance = calculateDistance(
            userLocation.lat, userLocation.lng,
            alarm.location.lat, alarm.location.lng
          );
          
          if (distance <= alarm.distance) {
            self.registration.showNotification('Trap Alarmı', {
              body: `${alarm.name}: Hedef konuma ${Math.round(distance)} metre kaldı!`,
              icon: '/icon.png',
              vibrate: [200, 100, 200]
            });
          }
        });
      },
      (error) => console.error('Background location error:', error),
      { enableHighAccuracy: true, maximumAge: 10000 }
    );
  }
}

function stopBackgroundTracking() {
  if (backgroundWatchId !== null) {
    navigator.geolocation.clearWatch(backgroundWatchId);
    backgroundWatchId = null;
  }
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;
  
  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  
  return R * c;
}