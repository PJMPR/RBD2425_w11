## 🛠️ MongoDB — Przykłady użycia operacji `update`

MongoDB oferuje elastyczne operacje aktualizacji dokumentów. Dzięki nim możemy:

* 🔄 zaktualizować jedno lub wiele pól,
* ➕ dodać elementy do tablic,
* ➖ usunąć dane z dokumentów,
* 📦 nadpisać cały dokument lub zaktualizować jego część.

W tym dokumencie zobaczysz **praktyczne przykłady operacji `update`** wykonanych na danych klientów i produktów załadowanych z pliku `mongo_insert_full.js`.

---

### 📍 Przykład 1: Aktualizacja adresu klienta

Załóżmy, że klient o `source_id: 1` przeprowadził się. Chcemy zaktualizować jego adres:

```js
// 🧭 Znajdź klienta po source_id i zaktualizuj adres

db.customers.updateOne(
  { source_id: 1 },
  {
    $set: {
      "address.street": "123 New Avenue",
      "address.city": "Newtown",
      "address.zip_code": "12345",
      "address.country": "Poland"
    }
  }
);
```

✅ *Zastosowanie operatora `$set` do zmiany wielu pól jednocześnie.*

---

### 📍 Przykład 2: Oznaczenie produktu jako nieaktywnego

Produkt o `source_id: 14` ("Smartwatch") został wycofany ze sprzedaży. Zmieniamy jego status:

```js
// 🚫 Dezaktywacja produktu

db.products.updateOne(
  { source_id: 14 },
  { $set: { active: false } }
);
```

🟡 *Częste zastosowanie: wycofanie produktu bez usuwania go z bazy.*

---

### 📍 Przykład 3: Dodanie nowego zamówienia klientowi

Dodajemy nowe zamówienie klientowi o `source_id: 2`:

```js
// 🧾 Dodanie zamówienia do tablicy orders

db.customers.updateOne(
  { source_id: 2 },
  {
    $push: {
      orders: {
        source_id: 21,
        order_date: new Date("2025-05-21T10:30:00"),
        status: "new",
        items: [
          { product_source_id: 3, quantity: 2 }
        ]
      }
    }
  }
);
```

📌 *Operator `$push` pozwala dodawać dane do tablic bez nadpisywania istniejących.*

---

### 📍 Przykład 4: Aktualizacja konkretnego zamówienia klienta

Chcemy zmienić status zamówienia o `source_id: 13` na "delivered" u klienta `source_id: 1`:

```js
// 🎯 Użycie filtra i operatora pozycyjnego `$`

db.customers.updateOne(
  { source_id: 1, "orders.source_id": 13 },
  {
    $set: {
      "orders.$.status": "delivered"
    }
  }
);
```

🔍 *Operator `$` wskazuje dokładny element tablicy, który spełnia warunek.*

---

### 🧩 Wskazówki:

* Używaj `updateOne` gdy aktualizujesz tylko jeden dokument, `updateMany` przy wielu.
* Wstawiaj daty za pomocą `new Date()` — umożliwia filtrowanie po czasie.
* Możesz łączyć `$set`, `$push`, `$inc`, `$unset` i inne operatory w jednej operacji.
* Używaj `arrayFilters`, gdy aktualizujesz dokumenty zagnieżdżone głęboko w strukturze.

---

### 📚 Dokumentacja:

* [MongoDB `$update`](https://www.mongodb.com/docs/manual/reference/method/db.collection.updateOne/)
* [Operatory aktualizacji](https://www.mongodb.com/docs/manual/reference/operator/update/)
* [Array Filters](https://www.mongodb.com/docs/manual/reference/command/update/#arrayfilters)

> ✨ Przygotowano na potrzeby wykładu MongoDB – plik `mongo_insert_full.js` jako baza danych.
