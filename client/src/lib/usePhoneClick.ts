/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Fires a Google Ads conversion event ONLY when the visitor arrived via a
 * Google Ad (gclid present in URL or sessionStorage).
 */
export function handlePhoneClick() {
  const params = new URLSearchParams(window.location.search);
  const gclidFromUrl = params.get('gclid');
  const gclidFromSession = sessionStorage.getItem('gclid');
  if (gclidFromUrl || gclidFromSession) {
    window.gtag && window.gtag('event', 'conversion', {
      send_to: 'AW-17775313541/OJUeCK_Vh_wbEIWF95tC',
      transaction_id: Date.now().toString(),
    });
  }
}
