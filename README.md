# **DAW-M06-UF3-4-PR02_INITIAL_CODE**
Repositori del codi inicial de la pràctica 1 del M06-UF3 i 4 (ReactJS)

# **Instruccions**
- Si el professor ho considera necessari serà obligatori superar una entrevista o presentació de la pràctica mostrant el correcte funcionament de l'aplicació per poder obtenir una nota.
- L'entrega es realitzarà utilitzant 2 plataformes: Sallenet i Github. És obligatoria l'entrega dins del termini a les dues per poder obtenir una nota.
- És obligatori que hi hagi mínim 2 commits per persona en el repositori.
- La pràctica es realitzarà en parelles, no es poden repetir les parelles de l'última pràctica.

# **API**
No hi haurà cap API, simularem la crida a una API utilitzant els 2 fitxers JSON que teniu disponibles dins de la carpeta *public/db*.

# **Enunciat**
### **Interaccions de l'usuari**
Hi haurà una navbar que permetrà anar a 2 rutes: MyCities i Search.
#### **MyCities** (Aquest component està ja creat)
- Es veurà una llista de ciutats guardades al context, el context obtindrà les dades del localStorage.
- A cada ciutat hi haurà: name, state, country, coordinates.
- A part a cada ciutat també hi haurà un botó per treure la ciutat del context i per tant del localStorage.

#### **Search**
Formulari de països:
- Es mostrarà un formulari amb un input de text, cal asegurar que no es recarregui la pàgina a l'enviar el formulari.
- Cada cop que l'usuari escrigui una tecla dins de l'input, es buscarà al fitxer *countries.json* un país que **inclogui** el text escrit.
- Si l'input està buit, no s'ha de mostrar res.

Llista de països:
- De cada país es mostrarà el name i el emoji (El país ha de ser un component a part).
- Cada país ha de ser clicable.
- Quan es cliqui a un país s'ha de canviar la URL per la ruta interna (:countryId/cities), passant per paràmetre dins la URL la id del país seleccionat.
- Si es carrega la pàgina directament amb la ruta interna, s'ha de seleccionar el país a través del paràmetre de la URL.

Títol de ciutats:
- Quan hi hagi un país seleccionat s'ha de veure en el títol el seu nom.

Formulari de ciutats:
- Es mostrarà un formulari amb un input de text, cal asegurar que no es recarregui la pàgina a l'enviar el formulari.
- Després de 0,5 segons de que l'usuari hagi acabat d'escriure dins de l'input, es buscarà al fitxer *cities.json* una ciutat que **comenci** pel text escrit.
- Si l'input està buit, no s'ha de mostrar res.

Llistat de ciutats:
- De cada ciutat es mostrarà el name (La ciutat ha de ser un component a part).
- Cada ciutat ha de tenir un botó:
  - Si la ciutat està dins del context, sortirà un botó per eliminar la ciutat del context i per tant també del localStorage.
  - Si la ciutat NO està dins del context, sortirà un botó per afegir la ciutat al context i per tant també al localStorage.

# **Distribució de la puntuació**
- useFetch *(1p)*
- useLocalStorage *(1p)*
- Country Component *(0,5p)*
- City Component *(0,5p)*
- CountryList Component *(2,5p)*
- CityList Component *(2,5p)*
- MyCities Component *(1p)*: Fer que funcioni amb el codi donat.
  - Code Quality: En totes les anteriors puntuacions es valorarà la funcionalitat i la qualitat del codi.
- Styles: *(0,5p)* *Estils en CSS propis.
- Github: *(0,5p)* *Seguiment fent servir GitHub amb branques una per cada component.
  - *Les dues anteriors puntuacions, només s'obtindran si s'aprova la pràctica amb la resta de les puntuacions.