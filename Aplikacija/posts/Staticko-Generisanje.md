---
title: 'Kada se koristi Staticko Generisanje sajtova a kada Renderovanje sa Serverske Strane'
date: '21.09.2022.'
---

Preporučujem korišćenje **Statičkog generisanja** (sa i bez podataka) kad god je to moguće jer vaša stranica može da se napravi jednom i da je opslužuje CDN, što je čini mnogo bržom nego da server renderuje stranicu na svaki zahtev.

Možete da koristite statičko generisanje za mnoge tipove stranica, uključujući:

- Marketinške stranice
- Blog postovi
- Liste proizvoda za e-trgovinu
- Pomoć i dokumentacija

Trebalo bi da se postavi pitanje: „Mogu li unapred da prikažem ovu stranicu **pre** korisnikovog zahteva?“ Ako je odgovor da, onda bi trebalo da se izabere Statičko generisanje.

S druge strane, statičko generisanje **nije** dobra ideja ako ne možete unapred da prikažete stranicu pre korisnikovog zahteva. Možda vaša stranica prikazuje podatke koji se često ažuriraju, a sadržaj stranice se menja na svaki zahtev.

U tom slučaju se može koristiti **Renderovanje sa serverske strane**. Biće sporije, ali će unapred prikazana stranica uvek biti ažurna. Ili možete preskočiti prethodno prikazivanje i koristiti JavaScript na strani klijenta za popunjavanje podataka.