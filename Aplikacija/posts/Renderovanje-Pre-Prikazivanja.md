---
title: 'Dve forme renderovanja pre pikazivanja'
date: '21.09.2022'
---

Next.js sadrzi dve forme renderovanja pre prikazivanja: **Staticko Generisanje** i **Renderovanje sa Serverske Strane**. Razlika je u tome **kada** se generise HTML stranica.

- **Staticko Generisanje** je metoda renderovanja pre pikazivanja u kojoj se HTML generise u toku **vremena izgradnje**. HTML koji je renderovan pre preikazivanja se izvova korisni na svakom zahtevu.
- **Renderovanje sa Serverske Strane** je metoda renderovanja pre pikazivanja u kojoj se HTML generise na **svakom zahtevu**.

Bitno je zapamtiti da Next.js dopusta da se **bira** koja od ovih metoda ce biti iskoriscena na kojoj stranici. Moguce je napraviti "hibridnu" veb aplikaciju i kojoj su vecina stranica staticki generisane a ostatak na serverskoj strani.