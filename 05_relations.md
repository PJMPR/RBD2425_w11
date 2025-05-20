# 🔗 Przykłady modelowania relacji 1:1, 1\:N, N\:M w MongoDB

W MongoDB, w przeciwieństwie do relacyjnych baz danych, relacje nie są wymuszane przez system. Projektowanie relacji 1:1, 1\:N i N\:M odbywa się za pomocą osadzania dokumentów (embedding) lub stosowania referencji (references). Poniżej przedstawiono typowe sposoby modelowania tych relacji wraz z przykładami.

## 👤 Relacja 1:1 (jeden do jednego)

### 📌 Przykład: użytkownik i profil

### 📥 Opcja 1: osadzanie (embedding)

```json
{
  "_id": ObjectId("..."),
  "username": "john_doe",
  "profile": {
    "age": 30,
    "bio": "Software engineer"
  }
}
```

### 🔗 Opcja 2: referencja

```json
// Dokument użytkownika
{
  "_id": ObjectId("..."),
  "username": "john_doe",
  "profileId": ObjectId("...")
}

// Dokument profilu
{
  "_id": ObjectId("..."),
  "age": 30,
  "bio": "Software engineer"
}
```

## 🧾 Relacja 1\:N (jeden do wielu)

### 📌 Przykład: blog i komentarze

### 📥 Opcja 1: osadzanie (komentarze wewnątrz posta)

```json
{
  "_id": ObjectId("..."),
  "title": "My First Blog Post",
  "comments": [
    { "author": "Alice", "text": "Great post!" },
    { "author": "Bob", "text": "Thanks for sharing." }
  ]
}
```

### 🔗 Opcja 2: referencja (każdy komentarz jako osobny dokument)

```json
// Dokument posta
{
  "_id": ObjectId("..."),
  "title": "My First Blog Post"
}

// Dokument komentarza
{
  "_id": ObjectId("..."),
  "postId": ObjectId("..."),
  "author": "Alice",
  "text": "Great post!"
}
```

## 🤝 Relacja N\:M (wiele do wielu)

### 📌 Przykład: uczniowie i kursy

### 🔗 Opcja: kolekcja łącząca (junction collection)

```json
// Dokument ucznia
{
  "_id": ObjectId("..."),
  "name": "Tom"
}

// Dokument kursu
{
  "_id": ObjectId("..."),
  "title": "Math 101"
}

// Dokument pośredniczący (relacja)
{
  "studentId": ObjectId("..."),
  "courseId": ObjectId("..."),
  "enrollmentDate": "2025-01-10"
}
```

## 📌 Podsumowanie

* Relacja 1:1: osadzaj, jeśli dane są zawsze używane razem; stosuj referencje, gdy dane rosną lub są używane osobno.
* Relacja 1\:N: osadzaj, jeśli podzbiór danych jest niewielki i nie rośnie dynamicznie; referencje – gdy dane są liczne lub dynamiczne.
* Relacja N\:M: najczęściej stosuj kolekcję łączącą.

MongoDB oferuje dużą elastyczność, ale odpowiedni wybór modelu danych ma bezpośredni wpływ na wydajność i prostotę obsługi aplikacji.
