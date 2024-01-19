export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;
export const ADS_TRACKING_ID = process.env.NEXT_PUBLIC_ADS_TRACKING_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const event = (action, params) => {
  window.gtag('event', action, params);
}

export const download_event = (action, category, label, value, platform) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
    platform
  })
}

export const triggerGoogleAdConversion = () => {
  event("conversion", {'send_to': 'AW-613501016/a5_bCOnfptsDENiQxaQC'});
}