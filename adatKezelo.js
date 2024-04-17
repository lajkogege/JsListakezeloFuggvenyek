export function tablazatRendez(lista, irany){
    /*4. tablazatRendez(lista) - adott mező (név) szerint rendezi a táblázatot. - akkor hívódik meg,
     ha a táblázat név fejlécmezőjére kattintunk. Berendezzük a listát.*/
     lista.sort(function(a,b){
        /*szorgalmi: a.nev első betűjének a karakter kódja alapján*/
        return a.nev>b.nev?1*irany:-1*irany;  /*pozítiv, vagy negatív érték kell */
        //return a.nev.toUppercase() > b.nev.toUppercase() ? 1: -1;
     });
     return lista
}

/*szorgalmi hf: lehssen rendezni kor szerint is! *** testszőleges mező szerint*/

export function szuresNevSzerint(lista, szurtSzoveg){
    /*6. szuresNevSzerint(lista, szurtSzoveg) -> szurtLista - a szűrőbe írt szó alaján
     kilistázza azokat az adatokat a listából, amelyekben szerepel a név mezőjében az adott szó. */
    const szurtLista=lista.filter(function (elem) {
        return elem.nev.includes(szurtSzoveg);
    })
    console.log(szurtLista);
    return szurtLista
}

export function sorTorles(lista,index){
    /*5. sorTorles(lista, index) - minden sor végén legyen egy kuka, a sor indexével, erre a kukára kattintva
     töröljük az adott sort a listából, és újra megjelenítjük a táblázatot a módosult listával.  */
     lista.splice(index,1); //kitörli a splice index elemtpl 1-et
     return 
}