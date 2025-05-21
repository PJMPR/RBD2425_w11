## 🔍 MongoDB — Przykłady operacji `find`

Wyszukiwanie w MongoDB odbywa się głównie za pomocą metody `find()` i jej pochodnych. Dzięki niej możemy:

* 🔎 pobierać dokumenty na podstawie wartości pól,
* 🧠 stosować operatory logiczne i warunkowe,
* 🧮 filtrować zagnieżdżone dane i tablice.

Poniżej znajdziesz **3 przykłady praktycznych zapytań `find`** na bazie danych z pliku `mongo_insert_full.js`.

---

### 📍 Przykład 1: Znajdź klienta o konkretnym adresie e-mail

```js
// 🔎 Wyszukiwanie klienta po emailu

db.customers.find({ email: "brian.miller1@example.com" });
```

📫 *Proste zapytanie dopasowujące pojedyncze pole.*

---

### 📍 Przykład 2: Znajdź wszystkich klientów z zamówieniami o statusie "cancelled"

```js
// 📉 Klienci z anulowanymi zamówieniami

db.customers.find({
  "orders.status": "cancelled"
});
```

🔁 *MongoDB automatycznie przeszukuje tablice — nie trzeba używać operatorów tablicowych.*

---

### 📍 Przykład 3: Znajdź wszystkie produkty w cenie od 100 do 300 PLN

```js
// 💰 Produkty w przedziale cenowym

db.products.find({
  price: { $gte: 100, $lte: 300 }
});
```

📊 *Użycie operatorów `$gte` i `$lte` do filtrowania zakresu liczbowego.*

---

### 🧩 Wskazówki:

* `findOne()` zwraca tylko jeden dokument — idealne do szybkich lookupów.
* Możesz dodać `.sort()` i `.limit()` do zapytań dla bardziej precyzyjnych wyników.
* Pamiętaj o indeksowaniu pól często używanych w `find()` dla wydajności ⚙️.

---

### 📚 Dokumentacja:

* [MongoDB `find()`](https://www.mongodb.com/docs/manual/reference/method/db.collection.find/)
* [Query Operators](https://www.mongodb.com/docs/manual/reference/operator/query/)

> ✨ Przygotowano na potrzeby wykładu MongoDB – dane z pliku `mongo_insert_full.js`.
