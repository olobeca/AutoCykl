# AutoPortal - Portal Motoryzacyjny

## Opis Projektu

AutoPortal to nowoczesna platforma e-commerce dedykowana sprzedaży pojazdów. System umożliwia użytkownikom publikowanie ogłoszeń o sprzedaży samochodów, komunikację w czasie rzeczywistym, zaawansowane wyszukiwanie i filtrowanie ofert, a także zarządzanie ulubionymi annonami.

---

## Funkcjonalności

### 1. System Zarządzania Ofertami

- **Tworzenie ogłoszeń** z pełnymi informacjami o pojeździe (marka, model, rok produkcji, przebieg, cena, lokalizacja)
- **Pakiety publikacji**:
  - Pakiet Standardowy - 30 dni, wyświetlenia standardowe
  - Pakiet Wyróżniony - 49 PLN / 30 dni, widoczność podwyższona
  - Pakiet TOP Oferta - 99 PLN / 30 dni, maksymalna ekspozycja i promocja w social mediach
- **Edycja i zarządzanie** własnymi ofertami w panelu sprzedawcy
- **Klasyfikacja pojazdów**: Samochody osobowe, Samochody dostawcze, Motocykle, Maszyny rolnicze

### 2. Zaawansowane Wyszukiwanie i Filtrowanie

- **Wyszukiwanie w czasie rzeczywistym** za pomocą Elasticsearch
- **Filtrowanie wielokryteriowe**:
  - Marka i model pojazdu
  - Przedział ceny
  - Rok produkcji
  - Przebieg
  - Lokalizacja
  - Typ paliwa
- **Sortowanie** wyników (cena, rok, przebieg)
- **Sekcja Featured Offers** - wyróżnione oferty na stronie głównej

### 3. System Komunikacji w Czasie Rzeczywistym

- **WebSocket** - czat na żywo między kupującym a sprzedawcą
- **Powiadomienia** o nowych wiadomościach
- **Historia konwersacji** - przechowywanie wiadomości w bazie danych
- **Panel Wiadomości** w profilu użytkownika

### 4. System Ulubieńców

- **Dodawanie/usuwanie** ofert z ulubionych
- **Panel "Moje Obserwowane Oferty"** - lista zapisanych annonacji
- **Szybki dostęp** do obserwowanych pojazdów

### 5. Profil Użytkownika i Panel Sprzedawcy

- **Dashboard** z statystykami:
  - Liczba aktywnych ogłoszeń
  - Liczba wyświetleń
  - Liczba polubień
  - Liczba wiadomości przychodzących
- **Zarządzanie ofertami** - edycja, usuwanie, zmiana statusu
- **Analityka** - wykres wyświetleń w ciągu tygodnia
- **Rozkład pakietów** - analiza użytych pakietów publikacji
- **Recenzje** - system oceny sprzedawców

### 6. System Uwierzytelniania

- **Rejestracja użytkowników** z walidacją email
- **Login/Logout** z bezpiecznym przechowywaniem tokenów
- **JWT Authentication** - tokeny dostępu i odświeżania
- **Sesje** - automatyczne odświeżanie tokena w tle
- **Bezpieczne ciasteczka** - refresh token w HTTP-only cookies

---

## Architektura Technologiczna

### Frontend

- **React 18** - interfejs użytkownika
- **Tailwind CSS** - responsive design i stylowanie
- **Context API** - zarządzanie stanem aplikacji (użytkownik, token)
- **localStorage** - przechowywanie tokenów JWT
- **Fetch API** - komunikacja z backendem

### Backend

- **Node.js + Express** - serwer aplikacji
- **Prisma ORM** - zarządzanie bazą danych z automatyczną migracją
- **PostgreSQL (Aiven)** - relacyjna baza danych
- **MongoDB** - przechowywanie danych alternatywne
- **Socket.io** - WebSocket do komunikacji w czasie rzeczywistym
- **Elasticsearch** - zaawansowane wyszukiwanie full-text
- **Redis** - caching i sesje
- **JWT (jsonwebtoken)** - bezpieczna autentykacja
- **CORS** - bezpieczna komunikacja cross-origin

### DevOps

- **Docker & Docker Compose** - konteneryzacja aplikacji
- **Elasticsearch Container** - wersja 8.15.0 w kontenerze

---

## Stack Techniczny - Szczegóły

### Baza Danych

- **Prisma** zarządza schematem i migracjami
- **PostgreSQL** na platformie Aiven (cloud database)
- **Automatyczne migracje** przy zmianach modelu danych
- **Relacje między tabelami**: Users → Offers, Offers → Chats, Users → Reviews

### Wyszukiwanie i Indeksowanie

- **Elasticsearch** indeksuje wszystkie oferty
- **Full-text search** po marce, modelu, opisie pojazdu
- **Agregacje i filtry** dla zaawansowanych zapytań
- **Automatyczne reindeksowanie** ofert ze skryptów

### Komunikacja Real-time

- **Socket.io** dla czatu między użytkownikami
- **Event-driven** architektura
- **Persist wiadomości** w bazie PostgreSQL
- **Powiadomienia push** o nowych wiadomościach

### Bezpieczeństwo

- **JWT tokeny** - 2-token system (access + refresh)
- **HTTP-only cookies** dla refresh tokenów
- **Password hashing** - bezpieczne przechowywanie haseł
- **CORS protection** - tylko autoryzowane domeny
- **Walidacja danych** po stronie serwera

---

## Struktura Projektu

```
carPricePredictor/
├── backend/
│   ├── controllers/          # Logika biznesowa
│   │   ├── userController.js
│   │   ├── offersController.js
│   │   ├── chatsController.js
│   │   └── databaseController.js
│   ├── routes/              # Definicje endpointów
│   ├── services/            # Usługi biznesowe
│   ├── config/              # Konfiguracja (CORS, Elasticsearch)
│   ├── databases/           # Połączenia bazodanowe
│   ├── prisma/              # ORM schema i migracje
│   ├── scripts/             # Automatyczne skrypty
│   └── server.js            # Punkt wejścia
├── frontend/
│   ├── src/
│   │   ├── components/      # Komponenty React
│   │   ├── pages/           # Strony aplikacji
│   │   ├── context/         # Context API state
│   │   └── App.jsx          # Główny komponent
│   └── tailwind.config.js   # Konfiguracja Tailwind
└── python/
    └── scikitLearnPrediction.py # Predykcja ceny (ML)
```

---

## Instalacja i Uruchomienie

### Wymagania

- Node.js 16+
- Docker & Docker Compose
- PostgreSQL (Aiven) - lub lokalne
- Elasticsearch 8.15+
- Redis (opcjonalnie)

### Backend

```bash
cd backend
npm install
npx prisma migrate dev  # Uruchomienie migracji
node server.js
```

Serwer uruchomi się na `http://localhost:5001`

### Frontend

```bash
cd frontend
npm install
npm start
```

Aplikacja będzie dostępna na `http://localhost:3000`

### Docker

```bash
docker-compose -f backend/docker-compose.yaml up
```

---

## Główne Funkcjonalności - Szczegóły

### Publikacja Ogłoszenia

Użytkownik sprzedawca wypełnia formularz z danymi pojazdu i wybiera pakiet publikacji. System tworzy record w bazie, indeksuje dane w Elasticsearch i wyświetla ofertę na platformie.

![Strona główna](./docs/Screenshot%202026-01-22%20at%2009.15.44.png)

### Wyszukiwanie Ofert

Elasticsearch przetwarzuje zapytania full-text search i filtry, zwracając rankingowane wyniki. Featured offers (Wyróżnione) wyświetlają się priorytetowo.

![Wyszukiwanie i filtrowanie](./docs/Screenshot%202026-01-22%20at%2009.15.55.png)

![Wyniki wyszukiwania](./docs/Screenshot%202026-01-22%20at%2009.16.40.png)

### Chat Real-time

Socket.io obsługuje dwukierunkową komunikację. Wiadomości przechowywane w PostgreSQL umożliwiają odtworzenie historii konwersacji po ponownym połączeniu.

![Dodawanie oferty](./docs/Screenshot%202026-01-22%20at%2009.16.55.png)

![Pakiety publikacji](./docs/Screenshot%202026-01-22%20at%2009.17.11.png)

### Zarządzanie Profilem

Panel sprzedawcy pokazuje statystyki: liczbę wyświetleń, polubień, wiadomości. Dane agregowane z bazy danych i Elasticsearch.

![Panel użytkownika](./docs/Screenshot%202026-01-22%20at%2009.17.40.png)

---

## Diagram Techniczny

```
┌─────────────┐
│   Frontend  │ (React + Tailwind)
│   React 18  │
└──────┬──────┘
       │ HTTP/WebSocket
       ▼
┌──────────────────┐
│   Node.js API    │ (Express)
│   Backend Server │
└───┬──────────┬───┘
    │          │
    ▼          ▼
┌─────────┐  ┌────────────────┐
│PostgreSQL│  │ Elasticsearch  │
│ (Aiven)  │  │ (Search Index) │
└─────────┘  └────────────────┘
    ▲
    │
┌─────────┐
│ Prisma  │ (ORM)
│   ORM   │
└─────────┘
```

---

## Endpointy API

### Offers (`/offers`)

| Metoda | Endpoint                         | Opis                                 |
| ------ | -------------------------------- | ------------------------------------ |
| GET    | `/getAll`                        | Pobiera wszystkie oferty             |
| GET    | `/getFeaturedOffers`             | Pobiera wyróżnione oferty            |
| GET    | `/getOfferById/:id`              | Pobiera szczegóły oferty po ID       |
| GET    | `/getTopOffers`                  | Pobiera TOP oferty                   |
| GET    | `/getSamochodyOsobowe`           | Pobiera samochody osobowe            |
| GET    | `/getSamochodyDostawcze`         | Pobiera samochody dostawcze          |
| GET    | `/getMotocykle`                  | Pobiera motocykle                    |
| GET    | `/getMaszynyRolnicze`            | Pobiera maszyny rolnicze             |
| GET    | `/getOffersByParams`             | Pobiera oferty po parametrach        |
| GET    | `/getAllUserOffers/:userId`      | Pobiera wszystkie oferty użytkownika |
| GET    | `/getSimilarOffers/:carType`     | Pobiera podobne oferty               |
| GET    | `/isOfferLiked/:offerId/:userId` | Sprawdza czy oferta jest polubiona   |
| GET    | `/getLikedOffersByUser/:userId`  | Pobiera ulubione oferty użytkownika  |
| POST   | `/create`                        | Tworzy nową ofertę                   |
| POST   | `/getOffersByFilters`            | Filtruje oferty (Elasticsearch)      |
| POST   | `/likeOffer`                     | Dodaje ofertę do ulubionych          |
| POST   | `/unlikeOffer`                   | Usuwa ofertę z ulubionych            |
| POST   | `/addView/:offerId`              | Dodaje wyświetlenie do oferty        |

### Users (`/`)

| Metoda | Endpoint           | Opis                           |
| ------ | ------------------ | ------------------------------ |
| POST   | `/register`        | Rejestracja nowego użytkownika |
| POST   | `/login`           | Logowanie użytkownika          |
| POST   | `/refresh`         | Odświeżenie tokena dostępu     |
| GET    | `/profile/:userId` | Pobiera profil użytkownika     |

### Chats (`/chats`)

| Metoda | Endpoint                                   | Opis                                |
| ------ | ------------------------------------------ | ----------------------------------- |
| POST   | `/newChat`                                 | Tworzy nową konwersację             |
| GET    | `/getChatsByUserId/:userId`                | Pobiera wszystkie czaty użytkownika |
| POST   | `/newMessage`                              | Wysyła nową wiadomość               |
| POST   | `/newPrizeProposal`                        | Tworzy propozycję ceny              |
| POST   | `/newMeetingProposal`                      | Tworzy propozycję spotkania         |
| POST   | `/changePrizeProposalStatus/:proposalId`   | Zmienia status propozycji ceny      |
| POST   | `/changeMeetingProposalStatus/:proposalId` | Zmienia status propozycji spotkania |
| POST   | `/handleReadMessages/:chatId/:userId`      | Oznacza wiadomości jako przeczytane |

### Database (`/database`)

| Metoda | Endpoint | Opis                          |
| ------ | -------- | ----------------------------- |
| POST   | `/setup` | Inicjalizuje nowe bazy danych |

---

## Technologie Klucze

| Technologia   | Zastosowanie       | Wersja         |
| ------------- | ------------------ | -------------- |
| React         | Frontend framework | 18+            |
| Node.js       | Backend runtime    | 16+            |
| Express       | HTTP server        | 4.21.2         |
| PostgreSQL    | Relacyjna DB       | Latest (Aiven) |
| Prisma        | ORM                | 5.20.0         |
| Elasticsearch | Full-text search   | 8.15.0         |
| Socket.io     | WebSocket          | 4.8.3          |
| Docker        | Konteneryzacja     | Latest         |
| Tailwind CSS  | CSS framework      | Latest         |
| JWT           | Autentykacja       | 9.0.2          |

---

## Autorzy i Licencja

Projekt: AutoPortal - Portal Motoryzacyjny
Autor: Aleksander Radecki
