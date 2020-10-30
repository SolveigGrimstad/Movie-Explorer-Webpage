# Project 3

## Innhold
1. [Om](#om)
2. [Teknologi](#teknologi)
    1. [React](#React)
    2. [Redux](#REDUX)
    3. [REST API](#REST API)
    4. [Tredjepartsomponenter](#komponenter)
    5. [MongoDB](#MongoDB)
3. [Testing](#testing)
    1.[Enhetstesting](#Enhetstesting)
    2.[ent-to-end testing](#end-to-end)
4. [Installering](#Installering)
5. [Bruk av git](#git)
6. [Sources](#source)

## Om prosjektet <a name="om"></a>:
I dette prosjektet har vi laget en nettside for filmsøk. Webapplikasjonen lar deg søke, filtrere, sortere, bla og like filmer. 
Når du kommer inn på hovedsiden kan du trykke deg inn på "Movies", hvor vi har hentet inn nærmere 900 filmer fra et public API. 
Når du trykker på filmposterne får man opp ytterlige informasjon om filmene som blant annet tittel, utgivelsesår, varighet og et 
lite sammendrag. Her vil du også få muligheten til å se hvor mange som har likt filmen, samt gi din egen like 
(samt unlike hvis du ombestemmer deg). Brukeren kan både søke, filtrere og sortere på hele filmsettet, og resultatet blir representert 
på ulike sider man kan bla seg gjennom.

## React <a name="react"></a>:
Prosjektet vårt er satt opp av ulike komponenter der alt blir satt sammen i App.tsx. Derifra er det en Router som bytter mellom hjemsiden og siden som viser alle filmene.
Inne i Content.tsx har vi alle filmene som skal vises, består blant annet av underkomponenter som moviebox som viser alle filmkomponentene, filternav som viser de ulike filtrene. 

## Redux <a name="redux"></a>:
Redux var noe medlemmene på gruppen ikke hadde vært borti før, så dette var noe vi ønsket å lære oss. Redux gir oss muligheten til å lagre verdier globalt slik at vi kan bruke verdiene ulike steder i applikasjonen vår.
Dette var noe vi tok i bruk for å gjøre et filtrert søk 

## Tredjepartskomponenter <a name="komponenter"></a>:
Vi har valgt å bruke Materialize som tredjepartskomponent da dette var noe vi hadde kjennskap til fra før. Her fikk vi gjenbrukt mye kode, og alt av design 
var mye lettere å håndtere enn om vi hadde implementert fra bunnen av. 