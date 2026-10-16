// El sitio anterior (Create React App) publicaba un service worker.
// Este archivo lo reemplaza y se desactiva solo, para que nadie vea
// una versión vieja guardada en caché.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil(
    (async () => {
      const claves = await caches.keys();
      await Promise.all(claves.map((k) => caches.delete(k)));
      await self.registration.unregister();
      const clientes = await self.clients.matchAll({ type: 'window' });
      clientes.forEach((c) => c.navigate(c.url));
    })()
  );
});
