# UDEMX-autokolcsonzes
Felvételi feladat megoldása a UDEMX cég számára.<br>
Internetes autókölcsönzést megvalósító applikáció.<br>
Nyelv: **Angular**

## Oldalak:
- **Cars**: Elérhető autók listája.
- **Edit**: Rendszerben tárolt autók módosítása. Kizárólag az admin felhasználók látják.
- **Reservations**: Foglalások listája. Kizárólag az admin felhasználók látják.
- **Login**: Bejelentkezés. Kizárólag az admin felhasználók látják.
- **Register**: Regisztráció
- **Not-found**: "Nem található"


### Cars

A felhasználó kezdetben kiválaszt egy szimpatikus autót a lenyitható listából. Ekkor megjelenik az autó fényképe és alatta egy rövid űrlap, amellyel le tudja foglalni.

#### Foglalási űrlap

Elemei:
- **name**: név 
- **email**: email cím
- **address**: lakcím
- **phone number**: telefonszám
- **days**: napok száma, melyekre a foglalás vonatkozik
- **price**: ár
<br>
<br>

Az űrlap kitöltése után a Reserve (foglalás) gomb segítségével lehet véglegesíteni a foglalást.

<span style="color:red">Minden mezőt kötelező kitölteni a sikeres foglaláshoz!</span>

Egyéb validátorok:
- A név legalább két karakter hosszú kell legyen
- Az email ténylegesen email formátumú (Szerepel benne a @ és a .com)
<br>
<br>

Ha az űrlap kitöltése szabályosan megtörtént és a foglalás sikeres volt, megjelnnek a foglalás adatai egy táblázatban az autó fotója alatt. (Ez a funkció ideiglenes!)

### Edit

_Fejlesztés alatt._

### Reservations

_Fejlesztés alatt._

### Login

Ez az oldal a bejelentkezés funkciót valósítja meg.

Egyelőre a **'test@gmail.com' - 'testpw'** felhasználónév-jelszó párossal lehet kipróbálni.

A Sign Up gombra kattintva a program átirányít a regisztrációs felületre.

### Register

A regisztráció funkciót valósítja meg ez az oldal.

A regisztrációhoz egy email cím, egy jelszó, egy kereszt- és egy vezetéknév szükségeltetik.

<span style="color:red">Az applikáció egyelőre nem tud új felhasználókat elmenteni!</span>

A Back gombra kattintva visszaléphetünk az előzőleg meglátogatott oldalra.

### Not-found

Amennyiben az URL-ben olyan oldalra hivatkoztunk, amely nem létezik úgy a program erre az oldalra irányít át.



