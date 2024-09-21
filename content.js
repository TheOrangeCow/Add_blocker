// content.js

// Function to check if an element contains ad-related content
function isAdElement(element) {
  const adKeywords = ["ad", "advertisement", "sponsored", "promo", "banner"];
  const textContent = element.textContent.toLowerCase();
  return adKeywords.some(keyword => textContent.includes(keyword));
}

// Function to traverse DOM and find ad-related elements
function findAdElements(rootNode) {
  const adElements = [];
  const queue = [rootNode];

  while (queue.length > 0) {
      const currentNode = queue.shift();
      if (currentNode.nodeType === Node.ELEMENT_NODE) {
          if (isAdElement(currentNode)) {
              adElements.push(currentNode);
          } else {
              queue.push(...currentNode.childNodes);
          }
      }
  }

  return adElements;
}

// Function to block ad-related elements
function blockAds() {
  const adElements = findAdElements(document.body);
  adElements.forEach(element => {
      element.style.display = 'none';
  });
}

// Call blockAds function when the page is loaded
blockAds();
