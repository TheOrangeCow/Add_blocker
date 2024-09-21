function extractDomain(url) {
  var domain;
  if (url.indexOf('://') > -1) {
      domain = url.split('/')[2];
  } else {
      domain = url.split('/')[0];
  }
  domain = domain.split(':')[0];
  domain = domain.replace('www.', '');
  return domain;
}

function blockAds() {
  var domain = extractDomain(window.location.href);
  if (domain == "youtube.com") {
      setInterval(() => {
          const a1 = document.getElementsByClassName('ytp-ad-skip-button-slot');
          const a2 = document.getElementsByClassName('ytp-ad-skip-button-container');
          const a3 = document.getElementsByClassName('ytp-ad-skip-button-modern');
          const a4 = document.getElementsByClassName('ytp-ad-skip-button-text');
          const a5 = document.getElementsByClassName('ytp-ad-skip-button');
          const a6 = document.getElementsByClassName('ytp-ad-preview-slot');
          for (let i = 0; i < a1.length; i++) {
              a1[i].style.display = "block";
          }
          for (let i = 0; i < a2.length; i++) {
              a2[i].style.display = "block";
          }
          for (let i = 0; i < a3.length; i++) {
              a3[i].style.display = "block";
          }
          for (let i = 0; i < a4.length; i++) {
              a4[i].style.display = "block";
          }
          for (let i = 0; i < a5.length; i++) {
              a5[i].style.display = "block";
          }
          for (let i = 0; i < a6.length; i++) {
              a6[i].style.display = "none";
          }
          if (a5.length > 0) {
              a5[0].click();
          }
      }, 1000);
  } else {
      const adSelectors = [
          "div[id*='ad-']",
          "div[class*='ad-']",
          "div[id*='advertisement']",
          "div[class*='advertisement']",
          "div[id*='sponsor']",
          "div[class*='sponsor']",
          "iframe[src*='adservice.com']",
          "iframe[src*='adserver.com']",
          "iframe[src*='advertiser.com']",
          "iframe[src*='adnetwork.com']",
          "iframe[src*='doubleclick.net']",
          "iframe[src*='googlesyndication.com']",
          "iframe[src*='advertising.com']",
          "iframe[src*='adtech.com']",
          "iframe[src*='adnxs.com']",
          "iframe[src*='taboola.com']",
          "iframe[id*='ad-']",
          "iframe[class*='ad-']"
      ];

      adSelectors.forEach(selector => {
          const ads = document.querySelectorAll(selector);
          ads.forEach(ad => {
              ad.remove();
          });
      });
  }
}

window.onload = blockAds;
