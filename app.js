/* Only the PWA's internal test API is fixed. This does not override navigator.geolocation. */
'use strict';
const FIXED = Object.freeze({ latitude: -6.2212607, longitude: 106.8321831, accuracy: 15, altitude: null });
window.LocationTest = Object.freeze({
  getCurrentPosition() {
    return Object.freeze({ coords: FIXED, timestamp: Date.now(), simulated: true });
  }
});

const result = document.getElementById('result');
document.getElementById('test').addEventListener('click', () => {
  const value = window.LocationTest.getCurrentPosition();
  const date = new Date(value.timestamp).toLocaleTimeString('id-ID');
  result.textContent = `Simulasi berhasil · ${value.coords.latitude}, ${value.coords.longitude} · ${date} · bukan GPS perangkat`;
});
document.getElementById('copy').addEventListener('click', async () => {
  const value = `${FIXED.latitude}, ${FIXED.longitude}`;
  try {
    await navigator.clipboard.writeText(value);
    result.textContent = 'Koordinat simulasi disalin.';
  } catch (e) {
    result.textContent = `Salin secara manual: ${value}`;
  }
});

if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
