# 🔗 Referencje vs. embedded documents w MongoDB

W MongoDB istnieją dwa główne sposoby odwzorowania relacji między danymi: **osadzanie dokumentów (embedded documents)** oraz **referencje (references)**. Wybór odpowiedniego podejścia zależy od charakteru danych i sposobu ich użycia.

## 📥 Embedded documents – osadzanie dokumentów

Osadzanie polega na umieszczaniu jednego dokumentu wewnątrz innego jako wartości pola. Jest to podejście preferowane, gdy dane są silnie związane i zwykle wykorzystywane razem.

### ✅ Zalety:

* Lepsza wydajność przy odczycie (jedno zapytanie `find()`).
* Spójność danych – całość aktualizowana razem.
* Prostsze zapytania i mniejsza liczba odwołań.

### ⚠️ Wady:

* Ograniczenie rozmiaru dokumentu (16 MB).
* Utrudnione aktualizacje poszczególnych elementów.

### 📄 Przykład:

```json
{
  "title": "Node.js Course",
  "instructor": {
    "name": "Jane Smith",
    "email": "jane@example.com"
  }
}
```

## 🔗 Referencje – powiązania między dokumentami

Zamiast osadzać dane, można przechowywać tylko identyfikator innego dokumentu. Podejście to przypomina klucze obce (foreign keys) w relacyjnych bazach danych.

### ✅ Zalety:

* Dane mogą być współdzielone między dokumentami.
* Łatwiejsze aktualizacje – można modyfikować dane niezależnie.
* Brak ograniczenia rozmiaru dokumentu.

### ⚠️ Wady:

* Potrzeba wielu zapytań (lub użycia `lookup` w agregacji).
* Brak wymuszonej spójności referencyjnej (MongoDB nie wspiera kluczy obcych).

### 📄 Przykład:

Dokument `course`:

```json
{
  "title": "Node.js Course",
  "instructorId": ObjectId("64a5f0...")
}
```

Dokument `instructor`:

```json
{
  "_id": ObjectId("64a5f0..."),
  "name": "Jane Smith",
  "email": "jane@example.com"
}
```

## 🔍 Kiedy używać którego podejścia?

| Kryterium                      | Osadzanie (embedded) | Referencje (referenced)        |
| ------------------------------ | -------------------- | ------------------------------ |
| Związanie danych               | Silne                | Luźne                          |
| Częstotliwość wspólnego użycia | Często razem         | Rzadko razem                   |
| Częstotliwość aktualizacji     | Rzadko               | Często                         |
| Rozmiar danych                 | Mały                 | Duży                           |
| Dzielenie danych               | Niepotrzebne         | Potrzebne (wielokrotne użycie) |

## 🎓 Podsumowanie

* Wybór między osadzaniem a referencjami powinien być oparty na analizie przypadków użycia.
* MongoDB daje dużą elastyczność, ale wymaga świadomego modelowania danych.
* Nie ma jednej dobrej odpowiedzi – liczy się kontekst: struktura danych, ich objętość, sposób odczytu i aktualizacji.
