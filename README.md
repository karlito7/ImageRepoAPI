# ImageRepoAPI

REST API namjenjen za klijentsku aplikaciju [ImageRepo](https://github.com/karlito7/ImageRepo.git)

## Osnovne informacije
REST API je namjenjen za upravljanje funkcionalnostima klijentske aplikacije. U ***server.js*** datoteci definirane su API rute. U **query** datotekama - query.js, userQuery.js i imageQuery.js se nalaze isključivo funkcije koje su zadužene za upite na bazu, dok se u mapi **database** nalaze datoteke zadužene za konfiguraciju same baze podataka. Aplikacija koristi i 2 **middlewarea** - middleware.js i storageMiddleware.js koji predstavljaju među sloj prije komunikacije s bazom podataka. 

- ### **Baza podataka**
    Za bazu podataka korišten je **postgres**. Baza se sastoji od dvije tablice - **user_table** i **image_table**. Kod spremanja slika, svaki redak u image_table tablici povezan je sa korisnikom, tako da se kod dohvaćanja slika mogu dohvatiti slike određenog korisnika.


- ### **ENV**
    Prije samog pokretanja projekta potrebno je kreirati ***.env*** datoteku prema primjeru iz ***.env.example*** datoteci.

## Pokretanje lokalno

Klonirati [projekt](https://github.com/karlito7/ImageRepoAPI.git) s GitHub-a preko terminala:

> `git clone https://github.com/karlito7/ImageRepoAPI.git`

Otvoriti direktorij u tekst editoru ([VS Code](https://code.visualstudio.com/)):

Instalirati potrebne pakete korišteći [npm](https://www.npmjs.com/):
```
npm install
```
Pokrenuti projekt komandom:
```
npm start
```
