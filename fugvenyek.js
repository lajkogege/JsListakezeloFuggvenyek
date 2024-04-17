export function tablazatOsszeallit(lista){

    /*1. tablazatOsszeallit(lista)->txt - összeállítja a html kódot szöveges formátumban, minden sor végén legyen egy kuka!*/
    let txt="";
    txt+="<table class='table table-striped'>";
    txt+="<tr> <th>Név</th> <th>Kor</th> <th>Nem</th> <th></th> </tr>";
    lista.forEach(element => {
        txt+=`<tr>`;
        for (const key in element) {//objektumon tud végig iterálni
            //console.log("key: ",key, "akt.elem: ", element[key]);
            txt+=`<td>${element[key]}</td> ` 
            
        }
        txt+=`<td>🦄</td>
            </tr>`;
       
    });
    txt+="</table>"
    return txt;
}

export function megjelenites(txt){
    /*2. megjelenites(txt)->nincs - megjelníti egy html szoveget egy html elemben*/
    const adatokELEM=$(".adatok");//megfogom a html elemet
    adatokELEM.html(txt);
}

