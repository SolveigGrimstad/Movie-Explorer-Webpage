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
Når du kommer inn på hovedsiden kan du trykke deg inn på "Movies", hvor vi har hentet inn nærmere 900 filmer fra et public API. Når du trykker på filmposterne får man opp
ytterlige informasjon om filmene som blant annet tittel, utgivelsesår, varighet og et lite sammendrag. Her vil du også få muligheten til å se hvor mange som har likt filmen, samt gi din egen like 
(samt unlike hvis du ombestemmer deg). På siden vil du også få mulighet til å bla gjennom filmene.

## Tredjepartskomponenter
Vi har valgt å bruke Materialize som tredjepartskomponent da dette var noe vi hadde kjennskap til fra før. Her fikk vi gjenbrukt mye kode, og alt av design 
var mye lettere å håndtere enn om vi hadde implementert fra bunnen av. 