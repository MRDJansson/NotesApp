# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
#   N o t e s A p p 
 
 #   N o t e s A p p 
 
 


# Luentomuistiinpanosofta


# Tämä on Reactilla ja Vite:llä rakennettu ohjelma, jonka avulla voit hallita luentomuistiinpanojasi. Sovelluksessa voit lisätä kursseja ja muistiinpanoja, sekä järjestää ja poistaa niitä.


### Riippuvuudet (dependencies)

- **lucide-react**: Ikonikirjasto
- **react**: JavaScript-kirjasto käyttöliittymän rakentamiseen.
- **react-dom**: Reactin DOM-kiinnitykseen tarvittava kirjasto.
- **react-router-dom**: Kirjasto, joka mahdollistaa sovelluksen reitityksen ja navigoinnin.
- **zustand**: Tilanhallintakirjasto React-sovelluksille.

### Kehitykseen liittyvät riippuvuudet (devDependencies)

- **@eslint/js**: ESLintin viralliset säännöt ja asetukset.
- **@types/react** ja **@types/react-dom**: Tyypitystiedostot Reactille ja React DOM:lle TypeScriptin käytön tukemiseen.
- **@vitejs/plugin-react**: React-tuen tarjoava Vite-liitännäinen.
- **autoprefixer**: CSS-tiedostojen automaattinen selaintuki.
- **eslint**: JavaScriptin ja Reactin koodin tarkistus tyylin ja virheiden varalta.
- **eslint-plugin-react**: ESLintin lisäosa Reactin koodityyleille.
- **eslint-plugin-react-hooks**: ESLintin lisäosa Reactin hookien tarkistamiselle.
- **eslint-plugin-react-refresh**: ESLintin lisäosa React Fast Refresh -tuen tarkistamiseen.
- **globals**: Globaaleja muuttujia määrittävä kirjasto.
- **postcss**: Työkalupaketti CSS:lle, joka sisältää useita lisäosia.
- **tailwindcss**: CSS-kehys, joka mahdollistaa tehokkaan ja responsiivisen tyylittelyn.
- **vite**: Rakennus- ja kehitystyökalu, joka on nopea ja optimoi kehitysympäristön.


## KÄYTTÖOPAS ##
 1. Käy ensin View Notes näykmässä (dataa ei haeta API:stä vielä)
 2. Mene tämän jälkeen add courses näkymään. Tästä näkymästä haetaan kurssi data API:stä jonka jälkeen on mahdollista hakea muistiinpanojen data.
 3. Voit lisätä kursseja tässä kohtaa, jos haluat. Kurssit saavat uniikin ID:n.
 4. Palaa takasin joko Back-painikkeesta tai NotesApp logosta tai siirry suoraan navigaation lista-nappulasta list-viewiin tai + nappulasta add notes-viewiin.
 5. Kun siirryt add notes tai view notes -näkymään, haetaan API:stä muistiinpanojen data (mikäli kurssidata on jo haettu käymällä kyseisessä näkymässä)

 6. Add notes näkymään pääsee vasta, kun kurssien data on haettu API:stä
 7. Add notes-näkymässä voit valita lisätyn tai fetchatun kurssin dropdown-valikosta
 8. Valittuasi kurssin voit kirjoittaa muistiinpanon
 9. Tallentaaksesi muistiinpanon, sinulla tulee olla valittuna sekä kurssi että kirjoitettua sisältöä
 10.Tallennettuasi muistiinpanon, alasvetolaatikko lukittuu etkä voi vaihtaa sitä muuta kuin lähtemällä pois näkymästä
 11.Tallennettu muistiinpano sekä muut kyseisen kurssin muistiinpanot näkyvät alhaalla (näkyy max 4 riviä jonka jälkeen oikeaan alakulmaan tulee "...", tässä näkymässä struktuuri ei säily)
 12.Lähteäksesi pois add notes-näkymästä, paina back, logoa tai navin nappuloita

 13.Nyt voit mennä view notes näkymään joko etusivulta tai nav-nappulasta
 14.Defaulttina näkyy kaikkien kurssien muistiinpanot (jos muistiinpanoja ei ole, näkyy teksti "Ei muistiinpanoja!"
 15.Voit valita tietyn kurssin muistiinpanot alasvetolaatikon avulla
 16.Voit filtteröidä muistiinpanoja oikeassa ylänurkassa olevasta filter-nappulasta uusi-vanha järjestykseen
 16.Voit avata muistiinpanon painamalla sitä tai poistaa sen siirtämällä hiiren oikeaan alanurkkaan ilmestyvän deleten päälle
 17.Avatessasi muistiinpanon, formaatti on säilytetty samoin kuin olet kirjoittanut sen (hyvä esim koodin tallentamiseen)
 18.Voit poistaa muistiinpanon painamalla delete
 19.Voit poistaa muistiinpanon myös hoveroimalla muistiinpanon päällä ja painamalla oikeasta alanurkasta delete. Tästä aukeaa moduuli joka varmistaa haluatko tehdä näin
 20.Remember my choice ruksaamalla varmistusta ei kysytä uudelleen kyseisen session aikana. Tämä resetoituu poistuessasi näkymästä



Tekoälyn käyttö projektissa:
Koen olevani hyvässä symbioosissa mitä tulee tekoälyn käyttöön JÄRKEVÄSTI.
Koen sen olevan oiva opettaja tilanteisiin, mihin minulla ei ole kokemusta vastata (esim. tiedostojen strukturointiin).
En koskaan pyydä tekoälyltä suoraa koodia, vaan pyydän sitä neuvomaan ja opettamaan minulle miten ratkaisen jonkin ongelman.
Tämä tuntuu toimivan erittäin hyvin vaikka joissain asioissa täytyy mennä ihan step-by-step pohjalla, mutta koen sen olevan arvokkaampaa kuin suora koodi.

Projektissani käytin tekoälyä mm:
 - Projektin tiedostojen ja kansioiden strukturointiin
 - Tooltipseihin
 - Comppien järkevään erotteluun
 - Stylauksen yhtenäistämiseen
 - JATKUVAAN koodin analysointiin ja feedbackäämiseen; mitä voisi tehdä toisin tai paremmin ja MIKSI
 - Notejen filtterinapin toiminnallisuuksiin
 - Note view moduuleihin ja niiden toiminnallisuuksiin
 - Kommenttien generointiin

Varmasti moneen muuhunkin, mutta tunnen olevani todella hyvässä paikassa ohjelmointikykyjeni ja tekoälyn käytön osalta.



## Mitä tekisin toisin?
 Alkuun pääseminen oli varmasti projektin vaikein osuus. Kaikki oli uutta ja tuntui monimutkaiselta. Kuitenkin projektin lopussa, koin kaiken helpottuneen
 ja pääseeni hyvin mukaan koodattuani päivittäin.
 Tämä oli myös ensimmäinen projekti mihin olen käyttänyt gittiä. Tulevaisuudessa haluan strukturoida gittiä paremmin, mm erottamalla stylauksen omaan branchiinsä.
 Tämä oli hyvin mieluisa ja opettavainen projekti!



## Lokia aikaisemmista tehtävistä

# Tehdyt tehtävät:
Muistiinpanojen tallennus:

- Pituus suurempi kuin 0
- Jos ei ole opintojaksoa, ei pääse tallennusnäkymään
- Muistiinpano pitää liittää opintojaksoon

- Liitetään aikaleima
- Liitetään id

- Sessiointi
- Opintojaksovalikko
- Valikon lukitseminen
- Takaisin nappi

- Syöttökentän tyhjennys tallenuksen jälkeen
- Listataan kaikki tallennetut muistiinpanot
- Erillinen lista ilman id tai päivämäärää

Muistiinpanojen listaus:
- Näyttää oletuksena kaikkien opintojaksojen muistiinpanot
- Listauksessa näytetään opintojakson muistiinpano, nimi, id ja aikaleima
- Mahdollisuus valita vain tietyn opintojakson muistiinpanot alasvetovalikolla
- Mahdollisuus poistaa yksittäinen muistiinpano
- Jos ei muistiinpanoja, näytetään teksti "Ei muistiinpanoja!"

Opintojakson lisäys:
- Mahdollisuus lisätä opintojaksoja
- Lisäyksen jälkeen opintojaksoon vo liittää muistiinpanoja tallennus näkymässä
- Tallennuksen jälkeen syöte tyhjenee
- Mahdollisuus tallentaa uusia opintojaksoja peräkkäin
- Ohjelma näyttää tallennetun opintojakson nimen ja id:n

FUNKTIONAALISUUDET VALMIITA! 27.11.2024 17.18

Datan haku:
- Opintojaksojen haku kunnossa
- Muistiinpanojen haku kunnossa