export function tablazatRendez(lista){
    /*4. tablazatRendez(lista) - adott mező (név) szerint rendezi a táblázatot. - akkor hívódik meg,
     ha a táblázat név fejlécmezőjére kattintunk. Berendezzük a listát.*/
     lista.sort(function(a,b){
        /*szorgalmi: a.nev első betűjének a karakter kódja alapján*/
        return a.nev>b.nev?1:-1;  /*pozítiv, vagy negatív érték kell */
        //return a.nev.toUppercase() > b.nev.toUppercase() ? 1: -1;
     });
     return lista

     
     

}