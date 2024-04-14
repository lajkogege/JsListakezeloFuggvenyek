for (let index = 0; index < adatLISTA.length; index++) {
    const element = adatLISTA[index];
    console.log(element);
    
}

adatLISTA.forEach(function(element,index){
    console.log(element)
    console.log(index)
})

/*szürjünk a férfiakra*/
const FERFIAK=adatLISTA.filter(function(ember)
{
    return !ember.nem; //ez a vissza térési érték mindig logikai változó! true vag false
})

const FERFIAK2=adatLISTA.filter((ember)=> //ez u.a mint az elöző csak nyilal
{
    return !ember.nem; //ez a vissza térési érték mindig logikai változó! true vag false
})

console.log(FERFIAK);

//azkat az embereket szeretném, akik 20 évnél fiatalabbak
const FIATALOK=adatLISTA.filter(function(ember){
    return ember.kor<20;
}
)

console.log(FIATALOK);

//10 évnél idősebb férfiak
const FERFIAK10FELETT = adatLISTA.filter((ember)=>{
    return ember.kor>10 && ember.nem===false
})

console.log(FERFIAK10FELETT);

//RENDEZÉS
/*rendezzük forditott sorrendben kor szerint az embereinket */
adatLISTA.sort(function(e1, e2){
    return e2.kor-e1.kor;
})

console.log(adatLISTA);

//véletlen sorrend rendezés, kor szerint
adatLISTA.sort(function(e1,e2){
    //véletlen számot generálok -0.5 és +0.5 között
    return Math.random()-0.5
})
console.log(adatLISTA)
