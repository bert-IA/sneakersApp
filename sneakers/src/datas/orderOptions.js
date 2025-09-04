// src/datas/orderOptions.js
// Centralisation des prix des options de livraison et services additionnels

export const DELIVERY_OPTIONS = {
  standard: { label: "Standard (3-5 jours)", price: 0 },
  express: { label: "Express (24h)", price: 9.99 }
};


export const ADDITIONAL_SERVICES = {
  giftWrap: { label: "Emballage cadeau", price: 5 },
  insurance: { label: "Assurance livraison", price: 15 },
  assembly: { label: "Montage", price: 105 }
};
