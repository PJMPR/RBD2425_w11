## 🗑️ MongoDB — Przykłady użycia operacji `delete`

Operacje usuwania danych w MongoDB są proste, ale bardzo potężne. Używa się ich do:

* ❌ usuwania pojedynczych dokumentów,
* 🚮 masowego usuwania wielu dokumentów,
* 🔎 usuwania zagnieżdżonych danych (np. elementów tablicy).

---

### 📍 Przykład 1: Usunięcie klienta o określonym `source_id`

```js
// ❌ Usunięcie klienta o source_id 7

db.customers.deleteOne({ source_id: 7 });
```

🧼 *`deleteOne` usuwa tylko pierwszy dokument spełniający kryteria.*

---

### 📍 Przykład 2: Usunięcie wszystkich anulowanych zamówień ze wszystkich klientów

```js
// 🧹 Usunięcie anulowanych zamówień (status: "cancelled") z tablicy orders

db.customers.updateMany(
  {},
  {
    $pull: {
      orders: { status: "cancelled" }
    }
  }
);
```

🧰 *Operator `$pull` służy do usuwania elementów z tablic.*

---

### 📍 Przykład 3: Usunięcie wszystkich nieaktywnych produktów

```js
// 🗑️ Usunięcie wszystkich produktów, które są nieaktywne

db.products.deleteMany({ active: false });
```

📦 *`deleteMany` pozwala szybko oczyścić bazę z wielu rekordów.*

---

### 🧩 Wskazówki:

* Zawsze sprawdzaj warunki filtra przed użyciem `deleteMany` ⚠️.
* Używaj `$pull` do czyszczenia danych w tablicach.
* Zamiast usuwania często lepiej ustawić flagę aktywności (`active: false`).

---

### 📚 Dokumentacja:

* [MongoDB `deleteOne`](https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteOne/)
* [MongoDB `deleteMany`](https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteMany/)
* [MongoDB `$pull`](https://www.mongodb.com/docs/manual/reference/operator/update/pull/)

> ✨ Przygotowano na potrzeby wykładu MongoDB – plik `mongo_insert_full.js` jako baza danych.
