# 📦 Zagnieżdżone dokumenty i tablice w MongoDB

MongoDB pozwala na przechowywanie złożonych struktur danych bez konieczności dzielenia ich na osobne tabele, jak ma to miejsce w relacyjnych bazach danych. Jednym z kluczowych elementów tego podejścia są **zagnieżdżone dokumenty** i **tablice**, które umożliwiają efektywne odwzorowanie hierarchii i relacji w obrębie jednego dokumentu.

## 🧩 Czym są zagnieżdżone dokumenty?

Zagnieżdżony dokument to dokument JSON (BSON), który jest wartością pola innego dokumentu.

### 📄 Przykład:

```json
{
  "firstName": "Anna",
  "address": {
    "street": "Kwiatowa 10",
    "city": "Warsaw",
    "postalCode": "00-123"
  }
}
```

## 📚 Tablice w dokumentach

### 📄 Przykład tablicy prostych wartości:

```json
{
  "firstName": "John",
  "interests": ["music", "programming", "running"]
}
```

### 📄 Przykład tablicy dokumentów:

```json
{
  "firstName": "Eve",
  "orders": [
    { "id": 1, "product": "Laptop", "price": 3500 },
    { "id": 2, "product": "Mouse", "price": 100 }
  ]
}
```

## ✅ Zalety zagnieżdżania danych

* 📦 Lepsze odwzorowanie struktury danych z życia codziennego.
* ⚡ Mniejsza liczba zapytań – można pobrać wszystkie dane za pomocą jednego `find()`.
* 📋 Spójność danych – dane są przechowywane razem, nie trzeba ich łączyć przez `join`.

## ⚠️ Potencjalne problemy

* 📏 Rozmiar dokumentu – MongoDB ogranicza rozmiar pojedynczego dokumentu do 16 MB.
* 🧠 Złożoność zapytań – filtrowanie i aktualizowanie danych wewnątrz tablic i dokumentów może być bardziej skomplikowane.
* 🔄 Nadmiarowe dane – jeśli zagnieżdżenie nie jest potrzebne, może prowadzić do duplikacji.

## 🛠️ Kiedy używać zagnieżdżonych struktur?

Zagnieżdżanie danych warto stosować, gdy:

* dane są silnie związane ze sobą (np. adres użytkownika, lista zamówień),
* dane zawsze będą pobierane razem,
* relacja nie jest zbyt rozbudowana i nie wymaga częstych aktualizacji niezależnych elementów.

## 🎯 Przykładowe przypadki użycia

### 🛒 E-commerce: dokument `customer` z tablicą `orders`

```json
{
  "firstName": "Kate",
  "email": "kate@shop.com",
  "orders": [
    { "date": "2024-01-10", "items": ["shoes", "belt"], "amount": 420 },
    { "date": "2024-03-05", "items": ["dress"], "amount": 150 }
  ]
}
```

### 🧾 Aplikacja fakturująca: dokument `invoice` z tablicą `items`

```json
{
  "number": "INV/2025/04/01",
  "date": "2025-04-01",
  "buyer": {
    "name": "ABC Ltd.",
    "taxId": "1234567890"
  },
  "items": [
    { "product": "Server", "quantity": 1, "netPrice": 5000 },
    { "product": "Installation", "quantity": 1, "netPrice": 800 }
  ]
}
```

### 👨‍👩‍👧‍👦 Serwis społecznościowy: dokument `user` z tablicą `posts`

```json
{
  "username": "mark123",
  "email": "mark@example.com",
  "posts": [
    { "date": "2025-05-01", "content": "Labor Day!" },
    { "date": "2025-05-03", "content": "Weekend at the countryside." }
  ]
}
```
