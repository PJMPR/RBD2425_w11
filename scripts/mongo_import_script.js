// Auto-generated MongoDB import script

use ecommerce;

db.products.insertMany([
  {
    "_id": 1,
    "name": "Wireless Mouse",
    "description": "Ergonomic wireless mouse with USB receiver.",
    "price": 365.9,
    "active": true
  },
  {
    "_id": 2,
    "name": "Mechanical Keyboard",
    "description": "RGB backlit mechanical keyboard with blue switches.",
    "price": 120.2,
    "active": true
  },
  {
    "_id": 3,
    "name": "Gaming Headset",
    "description": "Surround sound gaming headset with noise-canceling mic.",
    "price": 289.39,
    "active": true
  },
  {
    "_id": 4,
    "name": "Laptop Stand",
    "description": "Adjustable aluminum stand for laptops and tablets.",
    "price": 55.5,
    "active": true
  },
  {
    "_id": 5,
    "name": "Webcam 1080p",
    "description": "Full HD webcam with built-in microphone.",
    "price": 465.61,
    "active": true
  },
  {
    "_id": 6,
    "name": "USB-C Hub",
    "description": "Multi-port USB-C hub with HDMI and card reader.",
    "price": 129.19,
    "active": true
  },
  {
    "_id": 7,
    "name": "Smartphone Holder",
    "description": "Flexible phone holder for desk or bed.",
    "price": 444.38,
    "active": true
  },
  {
    "_id": 8,
    "name": "Bluetooth Speaker",
    "description": "Portable Bluetooth speaker with deep bass.",
    "price": 139.63,
    "active": true
  },
  {
    "_id": 9,
    "name": "External SSD",
    "description": "1TB high-speed external solid state drive.",
    "price": 31.08,
    "active": true
  },
  {
    "_id": 10,
    "name": "Monitor 27\"",
    "description": "27-inch 4K UHD monitor with HDR support.",
    "price": 255.27,
    "active": true
  },
  {
    "_id": 11,
    "name": "Wireless Charger",
    "description": "Fast wireless charging pad for smartphones.",
    "price": 478.5,
    "active": true
  },
  {
    "_id": 12,
    "name": "LED Desk Lamp",
    "description": "Dimmable LED desk lamp with touch controls.",
    "price": 257.51,
    "active": true
  },
  {
    "_id": 13,
    "name": "Fitness Tracker",
    "description": "Waterproof fitness tracker with heart rate monitor.",
    "price": 381.48,
    "active": true
  },
  {
    "_id": 14,
    "name": "Smartwatch",
    "description": "Stylish smartwatch with notifications and fitness features.",
    "price": 446.62,
    "active": true
  },
  {
    "_id": 15,
    "name": "Noise Cancelling Earbuds",
    "description": "True wireless earbuds with ANC.",
    "price": 18.41,
    "active": true
  },
  {
    "_id": 16,
    "name": "Portable Projector",
    "description": "Mini portable projector for home entertainment.",
    "price": 141.44,
    "active": true
  },
  {
    "_id": 17,
    "name": "USB Flash Drive",
    "description": "64GB USB 3.0 flash drive.",
    "price": 123.15,
    "active": true
  },
  {
    "_id": 18,
    "name": "Action Camera",
    "description": "4K action camera with waterproof case.",
    "price": 304.05,
    "active": true
  },
  {
    "_id": 19,
    "name": "Gaming Chair",
    "description": "Ergonomic gaming chair with lumbar support.",
    "price": 51.03,
    "active": true
  },
  {
    "_id": 20,
    "name": "Office Desk",
    "description": "Modern adjustable-height office desk.",
    "price": 281.72,
    "active": true
  }
]);

db.inventory.insertMany([
  {
    "product_id": 1,
    "quantity": 5,
    "last_updated": "2025-05-21 04:40:03.392948"
  },
  {
    "product_id": 2,
    "quantity": 11,
    "last_updated": "2025-05-21 04:40:03.392950"
  },
  {
    "product_id": 3,
    "quantity": 85,
    "last_updated": "2025-05-21 04:40:03.392950"
  },
  {
    "product_id": 4,
    "quantity": 18,
    "last_updated": "2025-05-21 04:40:03.392951"
  },
  {
    "product_id": 5,
    "quantity": 16,
    "last_updated": "2025-05-21 04:40:03.392951"
  },
  {
    "product_id": 6,
    "quantity": 2,
    "last_updated": "2025-05-21 04:40:03.392952"
  },
  {
    "product_id": 7,
    "quantity": 37,
    "last_updated": "2025-05-21 04:40:03.392953"
  },
  {
    "product_id": 8,
    "quantity": 55,
    "last_updated": "2025-05-21 04:40:03.392955"
  },
  {
    "product_id": 9,
    "quantity": 73,
    "last_updated": "2025-05-21 04:40:03.392955"
  },
  {
    "product_id": 10,
    "quantity": 61,
    "last_updated": "2025-05-21 04:40:03.392956"
  },
  {
    "product_id": 11,
    "quantity": 33,
    "last_updated": "2025-05-21 04:40:03.392957"
  },
  {
    "product_id": 12,
    "quantity": 60,
    "last_updated": "2025-05-21 04:40:03.392957"
  },
  {
    "product_id": 13,
    "quantity": 4,
    "last_updated": "2025-05-21 04:40:03.392957"
  },
  {
    "product_id": 14,
    "quantity": 98,
    "last_updated": "2025-05-21 04:40:03.392958"
  },
  {
    "product_id": 15,
    "quantity": 39,
    "last_updated": "2025-05-21 04:40:03.392959"
  },
  {
    "product_id": 16,
    "quantity": 43,
    "last_updated": "2025-05-21 04:40:03.392959"
  },
  {
    "product_id": 17,
    "quantity": 66,
    "last_updated": "2025-05-21 04:40:03.392960"
  },
  {
    "product_id": 18,
    "quantity": 61,
    "last_updated": "2025-05-21 04:40:03.392960"
  },
  {
    "product_id": 19,
    "quantity": 26,
    "last_updated": "2025-05-21 04:40:03.392961"
  },
  {
    "product_id": 20,
    "quantity": 77,
    "last_updated": "2025-05-21 04:40:03.392961"
  }
]);

db.customers.insertMany([
  {
    "_id": 1,
    "first_name": "Brian",
    "last_name": "Miller",
    "email": "brian.miller1@example.com",
    "registration_date": "2023-06-19 06:08:48",
    "address": {
      "street": "76950 Brenda Village Suite 053",
      "city": "Patelton",
      "zip_code": "84229",
      "country": "France"
    }
  },
  {
    "_id": 2,
    "first_name": "Joseph",
    "last_name": "Roberson",
    "email": "joseph.roberson2@example.com",
    "registration_date": "2020-04-28 12:56:37",
    "address": {
      "street": "387 Eric Plain Suite 670",
      "city": "East Stephentown",
      "zip_code": "34102",
      "country": "South Georgia and the South Sandwich Islands"
    }
  },
  {
    "_id": 3,
    "first_name": "Nicholas",
    "last_name": "Hart",
    "email": "nicholas.hart3@example.com",
    "registration_date": "2022-11-24 19:45:27",
    "address": {
      "street": "466 Daniel Circles Suite 116",
      "city": "Port Amandaland",
      "zip_code": "72142",
      "country": "Puerto Rico"
    }
  },
  {
    "_id": 4,
    "first_name": "Melissa",
    "last_name": "Moore",
    "email": "melissa.moore4@example.com",
    "registration_date": "2022-11-13 16:41:47",
    "address": {
      "street": "54708 Gutierrez Burg Apt. 612",
      "city": "Elizabethland",
      "zip_code": "82751",
      "country": "Azerbaijan"
    }
  },
  {
    "_id": 5,
    "first_name": "Ann",
    "last_name": "Miles",
    "email": "ann.miles5@example.com",
    "registration_date": "2021-05-23 20:05:13",
    "address": {
      "street": "424 Richardson Place Suite 812",
      "city": "Reynoldsberg",
      "zip_code": "60104",
      "country": "Paraguay"
    }
  }
]);
