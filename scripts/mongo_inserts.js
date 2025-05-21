// Komendy MongoDB do załadowania danych z relacyjnej bazy SQL
// Wykonaj ten skrypt w mongo shell lub mongosh

db.customers.insertMany([
  {
    "source_id": 1,
    "first_name": "Brian",
    "last_name": "Miller",
    "email": "brian.miller1@example.com",
    "registration_date": "2023-06-19 06:08:48",
    "address": {
      "street": "76950 Brenda Village Suite 053",
      "city": "Patelton",
      "zip_code": "84229",
      "country": "France"
    },
    "orders": [
      {
        "source_id": 2,
        "order_date": "2025-02-23 03:32:31",
        "status": "cancelled",
        "items": []
      },
      {
        "source_id": 13,
        "order_date": "2025-01-21 13:55:10",
        "status": "shipped",
        "items": [
          {
            "product_source_id": 12,
            "quantity": 2
          }
        ]
      }
    ]
  },
  {
    "source_id": 2,
    "first_name": "Joseph",
    "last_name": "Roberson",
    "email": "joseph.roberson2@example.com",
    "registration_date": "2020-04-28 12:56:37",
    "address": {
      "street": "387 Eric Plain Suite 670",
      "city": "East Stephentown",
      "zip_code": "34102",
      "country": "South Georgia and the South Sandwich Islands"
    },
    "orders": []
  },
  {
    "source_id": 3,
    "first_name": "Nicholas",
    "last_name": "Hart",
    "email": "nicholas.hart3@example.com",
    "registration_date": "2022-11-24 19:45:27",
    "address": {
      "street": "466 Daniel Circles Suite 116",
      "city": "Port Amandaland",
      "zip_code": "72142",
      "country": "Puerto Rico"
    },
    "orders": [
      {
        "source_id": 11,
        "order_date": "2025-01-20 09:57:01",
        "status": "cancelled",
        "items": [
          {
            "product_source_id": 14,
            "quantity": 3
          }
        ]
      }
    ]
  },
  {
    "source_id": 4,
    "first_name": "Melissa",
    "last_name": "Moore",
    "email": "melissa.moore4@example.com",
    "registration_date": "2022-11-13 16:41:47",
    "address": {
      "street": "54708 Gutierrez Burg Apt. 612",
      "city": "Elizabethland",
      "zip_code": "82751",
      "country": "Azerbaijan"
    },
    "orders": []
  },
  {
    "source_id": 5,
    "first_name": "Ann",
    "last_name": "Miles",
    "email": "ann.miles5@example.com",
    "registration_date": "2021-05-23 20:05:13",
    "address": {
      "street": "424 Richardson Place Suite 812",
      "city": "Reynoldsberg",
      "zip_code": "60104",
      "country": "Paraguay"
    },
    "orders": []
  },
  {
    "source_id": 6,
    "first_name": "Aaron",
    "last_name": "Graham",
    "email": "aaron.graham6@example.com",
    "registration_date": "2020-09-29 04:56:08",
    "address": {
      "street": "7746 Eric Islands",
      "city": "West Vincent",
      "zip_code": "71995",
      "country": "Saint Kitts and Nevis"
    },
    "orders": [
      {
        "source_id": 7,
        "order_date": "2025-03-06 14:55:09",
        "status": "new",
        "items": []
      },
      {
        "source_id": 9,
        "order_date": "2025-01-30 21:57:27",
        "status": "delivered",
        "items": [
          {
            "product_source_id": 14,
            "quantity": 4
          }
        ]
      },
      {
        "source_id": 20,
        "order_date": "2025-01-15 22:44:47",
        "status": "shipped",
        "items": []
      }
    ]
  },
  {
    "source_id": 7,
    "first_name": "Natalie",
    "last_name": "Gray",
    "email": "natalie.gray7@example.com",
    "registration_date": "2020-01-21 11:45:42",
    "address": {
      "street": "95148 James Islands Suite 608",
      "city": "East Williamtown",
      "zip_code": "25950",
      "country": "Ethiopia"
    },
    "orders": []
  },
  {
    "source_id": 8,
    "first_name": "Leslie",
    "last_name": "West",
    "email": "leslie.west8@example.com",
    "registration_date": "2020-05-16 08:29:08",
    "address": {
      "street": "95158 Sarah Valleys",
      "city": "Port Rachel",
      "zip_code": "65026",
      "country": "Saint Martin"
    },
    "orders": [
      {
        "source_id": 19,
        "order_date": "2025-03-19 17:36:53",
        "status": "cancelled",
        "items": []
      }
    ]
  },
  {
    "source_id": 9,
    "first_name": "Christopher",
    "last_name": "Thomas",
    "email": "christopher.thomas9@example.com",
    "registration_date": "2020-03-06 23:28:08",
    "address": {
      "street": "49756 Mary Crossroad Apt. 997",
      "city": "Heatherville",
      "zip_code": "91107",
      "country": "Austria"
    },
    "orders": []
  },
  {
    "source_id": 10,
    "first_name": "Kelly",
    "last_name": "Jordan",
    "email": "kelly.jordan10@example.com",
    "registration_date": "2024-01-21 17:59:06",
    "address": {
      "street": "5655 Kayla Junctions Apt. 260",
      "city": "Bennettview",
      "zip_code": "23422",
      "country": "Togo"
    },
    "orders": [
      {
        "source_id": 18,
        "order_date": "2025-03-19 14:10:22",
        "status": "cancelled",
        "items": [
          {
            "product_source_id": 15,
            "quantity": 4
          },
          {
            "product_source_id": 11,
            "quantity": 5
          }
        ]
      }
    ]
  },
  {
    "source_id": 11,
    "first_name": "Joseph",
    "last_name": "Monroe",
    "email": "joseph.monroe11@example.com",
    "registration_date": "2022-08-05 21:41:27",
    "address": {
      "street": "1414 Brown Light Apt. 964",
      "city": "South Ashleymouth",
      "zip_code": "32308",
      "country": "Oman"
    },
    "orders": [
      {
        "source_id": 10,
        "order_date": "2025-01-28 15:49:48",
        "status": "cancelled",
        "items": [
          {
            "product_source_id": 5,
            "quantity": 3
          }
        ]
      }
    ]
  },
  {
    "source_id": 12,
    "first_name": "Matthew",
    "last_name": "Solis",
    "email": "matthew.solis12@example.com",
    "registration_date": "2021-10-04 16:47:00",
    "address": {
      "street": "7995 Stacy Motorway Suite 502",
      "city": "North Ronniefort",
      "zip_code": "96676",
      "country": "Bulgaria"
    },
    "orders": [
      {
        "source_id": 6,
        "order_date": "2025-01-03 04:48:12",
        "status": "new",
        "items": []
      },
      {
        "source_id": 15,
        "order_date": "2025-01-05 08:46:48",
        "status": "new",
        "items": [
          {
            "product_source_id": 2,
            "quantity": 1
          }
        ]
      },
      {
        "source_id": 16,
        "order_date": "2025-02-11 01:00:49",
        "status": "shipped",
        "items": [
          {
            "product_source_id": 2,
            "quantity": 5
          }
        ]
      }
    ]
  },
  {
    "source_id": 13,
    "first_name": "Lori",
    "last_name": "Fowler",
    "email": "lori.fowler13@example.com",
    "registration_date": "2024-10-20 19:35:12",
    "address": {
      "street": "078 Mark Land Apt. 907",
      "city": "Janicetown",
      "zip_code": "42525",
      "country": "Saint Lucia"
    },
    "orders": [
      {
        "source_id": 12,
        "order_date": "2025-02-11 10:55:33",
        "status": "delivered",
        "items": []
      },
      {
        "source_id": 17,
        "order_date": "2025-01-07 09:00:14",
        "status": "new",
        "items": [
          {
            "product_source_id": 13,
            "quantity": 5
          }
        ]
      }
    ]
  },
  {
    "source_id": 14,
    "first_name": "Lisa",
    "last_name": "Stewart",
    "email": "lisa.stewart14@example.com",
    "registration_date": "2023-05-22 06:47:19",
    "address": {
      "street": "14426 Coleman Rest Apt. 723",
      "city": "West Aliciahaven",
      "zip_code": "25936",
      "country": "Gabon"
    },
    "orders": []
  },
  {
    "source_id": 15,
    "first_name": "Patricia",
    "last_name": "Lucas",
    "email": "patricia.lucas15@example.com",
    "registration_date": "2023-09-11 14:13:04",
    "address": {
      "street": "3481 Scott Plains Suite 381",
      "city": "Russellmouth",
      "zip_code": "15043",
      "country": "Bahamas"
    },
    "orders": []
  },
  {
    "source_id": 16,
    "first_name": "Gail",
    "last_name": "Little",
    "email": "gail.little16@example.com",
    "registration_date": "2025-01-27 06:36:13",
    "address": {
      "street": "685 Trevor Fields Apt. 303",
      "city": "North Richard",
      "zip_code": "03890",
      "country": "Algeria"
    },
    "orders": [
      {
        "source_id": 8,
        "order_date": "2025-01-15 02:29:43",
        "status": "delivered",
        "items": [
          {
            "product_source_id": 3,
            "quantity": 1
          }
        ]
      }
    ]
  },
  {
    "source_id": 17,
    "first_name": "Pamela",
    "last_name": "Tucker",
    "email": "pamela.tucker17@example.com",
    "registration_date": "2023-07-27 07:54:27",
    "address": {
      "street": "580 Sandy Gateway Suite 424",
      "city": "West Emilymouth",
      "zip_code": "28289",
      "country": "Malawi"
    },
    "orders": [
      {
        "source_id": 1,
        "order_date": "2025-02-28 00:09:03",
        "status": "delivered",
        "items": [
          {
            "product_source_id": 9,
            "quantity": 3
          },
          {
            "product_source_id": 4,
            "quantity": 5
          },
          {
            "product_source_id": 18,
            "quantity": 4
          },
          {
            "product_source_id": 11,
            "quantity": 3
          },
          {
            "product_source_id": 6,
            "quantity": 4
          }
        ]
      },
      {
        "source_id": 3,
        "order_date": "2025-03-18 03:31:10",
        "status": "cancelled",
        "items": [
          {
            "product_source_id": 17,
            "quantity": 3
          },
          {
            "product_source_id": 3,
            "quantity": 4
          },
          {
            "product_source_id": 18,
            "quantity": 4
          },
          {
            "product_source_id": 5,
            "quantity": 3
          }
        ]
      },
      {
        "source_id": 5,
        "order_date": "2025-02-02 20:06:18",
        "status": "cancelled",
        "items": [
          {
            "product_source_id": 15,
            "quantity": 2
          }
        ]
      }
    ]
  },
  {
    "source_id": 18,
    "first_name": "Nicholas",
    "last_name": "Johnson",
    "email": "nicholas.johnson18@example.com",
    "registration_date": "2021-07-17 19:00:17",
    "address": {
      "street": "527 Robert Pass",
      "city": "Myersborough",
      "zip_code": "51630",
      "country": "Belarus"
    },
    "orders": [
      {
        "source_id": 4,
        "order_date": "2025-03-06 06:07:54",
        "status": "cancelled",
        "items": []
      }
    ]
  },
  {
    "source_id": 19,
    "first_name": "Jessica",
    "last_name": "Miller",
    "email": "jessica.miller19@example.com",
    "registration_date": "2024-02-21 18:16:46",
    "address": {
      "street": "42712 Steve Wall Suite 890",
      "city": "Meyerport",
      "zip_code": "48052",
      "country": "Croatia"
    },
    "orders": [
      {
        "source_id": 14,
        "order_date": "2025-02-18 07:14:42",
        "status": "new",
        "items": []
      }
    ]
  },
  {
    "source_id": 20,
    "first_name": "Dominique",
    "last_name": "Jackson",
    "email": "dominique.jackson20@example.com",
    "registration_date": "2022-11-12 18:17:20",
    "address": {
      "street": "18195 Kimberly Ford Suite 262",
      "city": "Taylortown",
      "zip_code": "21808",
      "country": "Solomon Islands"
    },
    "orders": []
  }
]);

db.products.insertMany([
  {
    "source_id": 1,
    "name": "Wireless Mouse",
    "description": "Ergonomic wireless mouse with USB receiver.",
    "price": 365.9,
    "active": true,
    "inventory": {
      "quantity": 5,
      "last_updated": "2025-05-21T00:00:00"
    }
  },
  {
    "source_id": 2,
    "name": "Mechanical Keyboard",
    "description": "RGB backlit mechanical keyboard with blue switches.",
    "price": 120.2,
    "active": true,
    "inventory": {
      "quantity": 11,
      "last_updated": "2025-05-21T00:00:00"
    }
  },
  {
    "source_id": 3,
    "name": "Gaming Headset",
    "description": "Surround sound gaming headset with noise-canceling mic.",
    "price": 289.39,
    "active": true,
    "inventory": {
      "quantity": 85,
      "last_updated": "2025-05-21T00:00:00"
    }
  },
  {
    "source_id": 4,
    "name": "Laptop Stand",
    "description": "Adjustable aluminum stand for laptops and tablets.",
    "price": 55.5,
    "active": true,
    "inventory": {
      "quantity": 18,
      "last_updated": "2025-05-21T00:00:00"
    }
  },
  {
    "source_id": 5,
    "name": "Webcam 1080p",
    "description": "Full HD webcam with built-in microphone.",
    "price": 465.61,
    "active": true,
    "inventory": {
      "quantity": 16,
      "last_updated": "2025-05-21T00:00:00"
    }
  },
  {
    "source_id": 6,
    "name": "USB-C Hub",
    "description": "Multi-port USB-C hub with HDMI and card reader.",
    "price": 129.19,
    "active": true,
    "inventory": {
      "quantity": 2,
      "last_updated": "2025-05-21T00:00:00"
    }
  },
  {
    "source_id": 7,
    "name": "Smartphone Holder",
    "description": "Flexible phone holder for desk or bed.",
    "price": 444.38,
    "active": true,
    "inventory": {
      "quantity": 37,
      "last_updated": "2025-05-21T00:00:00"
    }
  },
  {
    "source_id": 8,
    "name": "Bluetooth Speaker",
    "description": "Portable Bluetooth speaker with deep bass.",
    "price": 139.63,
    "active": true,
    "inventory": {
      "quantity": 55,
      "last_updated": "2025-05-21T00:00:00"
    }
  },
  {
    "source_id": 9,
    "name": "External SSD",
    "description": "1TB high-speed external solid state drive.",
    "price": 31.08,
    "active": true,
    "inventory": {
      "quantity": 73,
      "last_updated": "2025-05-21T00:00:00"
    }
  },
  {
    "source_id": 10,
    "name": "Monitor 27\"",
    "description": "27-inch 4K UHD monitor with HDR support.",
    "price": 255.27,
    "active": true,
    "inventory": {
      "quantity": 61,
      "last_updated": "2025-05-21T00:00:00"
    }
  },
  {
    "source_id": 11,
    "name": "Wireless Charger",
    "description": "Fast wireless charging pad for smartphones.",
    "price": 478.5,
    "active": true,
    "inventory": {
      "quantity": 33,
      "last_updated": "2025-05-21T00:00:00"
    }
  },
  {
    "source_id": 12,
    "name": "LED Desk Lamp",
    "description": "Dimmable LED desk lamp with touch controls.",
    "price": 257.51,
    "active": true,
    "inventory": {
      "quantity": 60,
      "last_updated": "2025-05-21T00:00:00"
    }
  },
  {
    "source_id": 13,
    "name": "Fitness Tracker",
    "description": "Waterproof fitness tracker with heart rate monitor.",
    "price": 381.48,
    "active": true,
    "inventory": {
      "quantity": 4,
      "last_updated": "2025-05-21T00:00:00"
    }
  },
  {
    "source_id": 14,
    "name": "Smartwatch",
    "description": "Stylish smartwatch with notifications and fitness features.",
    "price": 446.62,
    "active": true,
    "inventory": {
      "quantity": 98,
      "last_updated": "2025-05-21T00:00:00"
    }
  },
  {
    "source_id": 15,
    "name": "Noise Cancelling Earbuds",
    "description": "True wireless earbuds with ANC.",
    "price": 18.41,
    "active": true,
    "inventory": {
      "quantity": 39,
      "last_updated": "2025-05-21T00:00:00"
    }
  },
  {
    "source_id": 16,
    "name": "Portable Projector",
    "description": "Mini portable projector for home entertainment.",
    "price": 141.44,
    "active": true,
    "inventory": {
      "quantity": 43,
      "last_updated": "2025-05-21T00:00:00"
    }
  },
  {
    "source_id": 17,
    "name": "USB Flash Drive",
    "description": "64GB USB 3.0 flash drive.",
    "price": 123.15,
    "active": true,
    "inventory": {
      "quantity": 66,
      "last_updated": "2025-05-21T00:00:00"
    }
  },
  {
    "source_id": 18,
    "name": "Action Camera",
    "description": "4K action camera with waterproof case.",
    "price": 304.05,
    "active": true,
    "inventory": {
      "quantity": 61,
      "last_updated": "2025-05-21T00:00:00"
    }
  },
  {
    "source_id": 19,
    "name": "Gaming Chair",
    "description": "Ergonomic gaming chair with lumbar support.",
    "price": 51.03,
    "active": true,
    "inventory": {
      "quantity": 26,
      "last_updated": "2025-05-21T00:00:00"
    }
  },
  {
    "source_id": 20,
    "name": "Office Desk",
    "description": "Modern adjustable-height office desk.",
    "price": 281.72,
    "active": true,
    "inventory": {
      "quantity": 77,
      "last_updated": "2025-05-21T00:00:00"
    }
  }
]);