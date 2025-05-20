# ⚖️ Zasady denormalizacji i normalizacji w MongoDB

MongoDB, jako baza danych NoSQL, nie wymusza ścisłej normalizacji danych, jak ma to miejsce w relacyjnych bazach danych. Jednak zrozumienie zasad **normalizacji** i **denormalizacji** jest kluczowe do efektywnego projektowania schematów danych w MongoDB.

## 🧬 Normalizacja

Normalizacja polega na rozdzieleniu danych na wiele kolekcji, aby uniknąć redundancji i zapewnić spójność danych. Przypomina podejście znane z relacyjnych baz danych.

### ✅ Zalety:

* Brak duplikacji danych.
* Ułatwiona aktualizacja – zmiany w jednym miejscu są odzwierciedlane wszędzie.
* Spójność logiczna.

### ⚠️ Wady:

* Potrzeba wielu zapytań lub agregacji (`$lookup`).
* Gorsza wydajność przy częstym odczycie powiązanych danych.

### 📄 Przykład:

Dokument `products`:

```json
{
  "_id": ObjectId("..."),
  "name": "Laptop"
}
```

Dokument `orders`:

```json
{
  "_id": ObjectId("..."),
  "productId": ObjectId("...")
}
```

## 📦 Denormalizacja

Denormalizacja polega na przechowywaniu powiązanych danych razem, często poprzez duplikowanie informacji. Często wiąże się z osadzaniem dokumentów (embedded documents).

### ✅ Zalety:

* Wysoka wydajność odczytu – wszystkie dane są dostępne od razu.
* Mniej zapytań i brak konieczności łączenia (`join`).
* Prostsza struktura danych dla zapytań.

### ⚠️ Wady:

* Redundancja danych.
* Trudniejsze aktualizacje – trzeba zmieniać dane w wielu miejscach.
* Większe ryzyko niespójności.

### 📄 Przykład:

Dokument `orders` z denormalizowanymi danymi produktu:

```json
{
  "_id": ObjectId("..."),
  "product": {
    "name": "Laptop"
  }
}
```

## 🔍 Kiedy stosować którą strategię?

| Kryterium             | Normalizacja           | Denormalizacja           |
| --------------------- | ---------------------- | ------------------------ |
| Spójność danych       | Wysoka                 | Niska                    |
| Wydajność odczytu     | Niska (więcej zapytań) | Wysoka (jedno zapytanie) |
| Częstość aktualizacji | Częsta                 | Rzadka                   |
| Redundancja           | Brak                   | Wysoka                   |
| Złożoność struktury   | Większa                | Mniejsza                 |

## 🧠 Praktyczne zasady projektowania

* Jeśli dane są często aktualizowane i dzielone między wiele encji – **normalizacja**.
* Jeśli dane są często odczytywane razem i rzadko zmieniane – **denormalizacja**.
* MongoDB zachęca do projektowania modelu danych zgodnie z potrzebami aplikacji, a nie „na siłę” według zasad relacyjnych.
* Analizuj konkretne przypadki użycia – nie ma jednej uniwersalnej strategii.

## 🎓 Podsumowanie

* Normalizacja i denormalizacja to dwa przeciwstawne podejścia do modelowania danych.
* W MongoDB warto stosować podejście hybrydowe: osadzać dane tam, gdzie ma to sens, i używać referencji tam, gdzie to konieczne.
* Celem jest maksymalna efektywność – zarówno pod względem wydajności, jak i prostoty operacji.
