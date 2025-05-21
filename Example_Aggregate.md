# 📊 Przykłady użycia agregacji (`aggregate`) w MongoDB

Funkcja `aggregate()` w MongoDB pozwala wykonywać zaawansowane operacje przetwarzania danych, takie jak filtrowanie, grupowanie, przekształcanie i zliczanie. Poniżej przedstawiono przykłady użycia agregacji na kolekcjach `customers` i `products`.

---

## 📌 Przykład 1: Liczba zamówień na klienta

```javascript
db.customers.aggregate([
  {
    $project: {
      full_name: { $concat: ["$first_name", " ", "$last_name"] },
      order_count: { $size: "$orders" }
    }
  }
])
```

Zwraca imię i nazwisko każdego klienta oraz liczbę jego zamówień.

---

## 📌 Przykład 2: Średnia cena aktywnych produktów

```javascript
db.products.aggregate([
  { $match: { active: true } },
  {
    $group: {
      _id: null,
      average_price: { $avg: "$price" }
    }
  }
])
```

Oblicza średnią cenę wszystkich aktywnych produktów.

---

## 📌 Przykład 3: Klienci z co najmniej jednym anulowanym zamówieniem

```javascript
db.customers.aggregate([
  { $match: { "orders.status": "cancelled" } },
  {
    $project: {
      email: 1,
      orders: {
        $filter: {
          input: "$orders",
          as: "order",
          cond: { $eq: ["$$order.status", "cancelled"] }
        }
      }
    }
  }
])
```

Filtruje klientów, którzy mają anulowane zamówienia i zwraca tylko te zamówienia.

---

## 📌 Przykład 4: Suma produktów zamówionych przez wszystkich klientów

```javascript
db.customers.aggregate([
  { $unwind: "$orders" },
  { $unwind: "$orders.items" },
  {
    $group: {
      _id: "$orders.items.product_source_id",
      total_quantity: { $sum: "$orders.items.quantity" }
    }
  },
  { $sort: { total_quantity: -1 } }
])
```

Zlicza sumę zamówionych produktów (`product_source_id`) i sortuje je malejąco według ilości.

---

## 📌 Przykład 5: Lista krajów z liczbą klientów

```javascript
db.customers.aggregate([
  {
    $group: {
      _id: "$address.country",
      total_customers: { $sum: 1 }
    }
  },
  { $sort: { total_customers: -1 } }
])
```

Zwraca kraje z przypisaną liczbą klientów, posortowane malejąco.

---

Te przykłady pokazują, jak elastyczna i potężna jest funkcja agregacji w MongoDB. Można ją łączyć z operacjami sortowania, filtrowania, rozwijania tablic (`$unwind`) czy transformacji (`$project`).
