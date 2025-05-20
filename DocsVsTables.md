# 📄 Dokumenty i kolekcje vs. tabele i rekordy w MongoDB

MongoDB to nierelacyjna baza danych typu NoSQL, która przechowuje dane w formacie dokumentów BSON (Binary JSON). W przeciwieństwie do tradycyjnych baz danych SQL, takich jak MySQL czy PostgreSQL, które używają tabel, wierszy i kolumn, MongoDB operuje na kolekcjach i dokumentach. Poniżej przedstawiono porównanie kluczowych różnic między tymi dwoma podejściami.

## 🧮 Tabele i rekordy w relacyjnych bazach danych (SQL)

* **📊 Tabela**: Struktura danych przypominająca arkusz kalkulacyjny. Składa się z kolumn (atrybutów) i wierszy (rekordów).
* **🧾 Rekord**: Jeden wiersz w tabeli, zawierający dane zgodne z określoną strukturą tabeli (schematem).
* **📐 Schemat**: Z góry zdefiniowana struktura tabeli, określająca typy danych i ograniczenia dla każdej kolumny.
* **🔗 Relacje**: Dane są powiązane za pomocą kluczy głównych (primary key) i obcych (foreign key).

## 📚 Kolekcje i dokumenty w MongoDB

* **🗂️ Kolekcja**: Odpowiednik tabeli w MongoDB. Przechowuje zestaw dokumentów.
* **📄 Dokument**: Odpowiednik rekordu. Dokument jest strukturą danych w formacie BSON, który jest zbliżony do JSON. Dokumenty w tej samej kolekcji mogą mieć różne struktury.
* **⚙️ Schemat dynamiczny**: MongoDB nie wymaga z góry określonego schematu – dokumenty mogą mieć różne pola, typy danych i struktury zagnieżdżone.
* **🚫 Brak kluczy obcych**: Relacje między danymi mogą być odwzorowane poprzez osadzenie dokumentów (embedding) lub stosowanie referencji, ale nie są wymuszane przez system (brak mechanizmu foreign key).

## 🔍 Przykład porównania

### 🧾 Relacyjna baza danych (SQL):

Tabela `Uzytkownicy`:

| id | imie | nazwisko | email                                       |
| -- | ---- | -------- | ------------------------------------------- |
| 1  | Anna | Kowalska | [anna@przyklad.pl](mailto:anna@przyklad.pl) |

### 📄 MongoDB:

Kolekcja `users`:

```json
{
  "_id": ObjectId("..."),
  "imie": "Anna",
  "nazwisko": "Kowalska",
  "email": "anna@przyklad.pl"
}
```

## ✅ Zalety podejścia MongoDB

* 🎯 **Elastyczność**: brak konieczności modyfikowania schematu przy dodawaniu nowych pól.
* ⚡ **Wydajność**: osadzanie danych pozwala na unikanie kosztownych joinów.
* 📈 **Skalowalność**: MongoDB jest zaprojektowane z myślą o łatwej skalowalności poziomej.

## ⚠️ Wady i wyzwania

* ❌ Brak wymuszonej spójności referencyjnej.
* 🧩 Trudniejsza kontrola integralności danych.
* 🛠️ Potrzeba świadomego modelowania danych, zależnie od przypadków użycia.

---

