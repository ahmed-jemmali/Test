// alert("Ceci est également affiché en JavaScript");
// alert(5.21 + ' ' + typeof (5.21));


// var x = 5;
// alert("la valeur de x est : "+x+
//     `\nla valeur de x est : ${x}`);


// var x ="45";
// alert("le type de x est : "+typeof(x));


// var x = 5;
// var y = -4;
// var z = 3.14;
// alert("le type de x est : "+typeof(x)+'\nle type de y est : '+typeof(y)+'\nle type de z est : '+typeof(z));


// var x = 5;
// x = x + 1;
// alert(x);
// x += 1;
// alert(x);
// x *= 2;
// alert(x);
// x /= 2;
// alert(x);
// x %= 2;
// alert(x);


// var prenom = "Ahmed", nom = "Jemmali", age = 24;
// alert(prenom + ' ' + nom + '\nAge : ' + age);
// alert(`Prenom : ${prenom} \nNom : ${nom} \nAge : ${age}`);


// var age;
// age = 24;
// alert(age);


// var homme = true, femme = false, enfant = "true";
// alert(homme + ' ' + femme + '\ntype of homme : ' + typeof (homme) + '\ntype of enfant : ' + typeof (enfant));


// var x = 4;
// alert('le type de x est : '+typeof(x));
// x = true ;
// alert('le type de x est : '+typeof(x));


// var ville1 = "j'habite à 'tunis'";
// var ville2 = 'j\'habite à \'tunis\'';


// var n = null;
// var u = undefined;
// var N = NaN;

// alert("la valeur de n est : " + n + "\nla valeur de u  est : " + u + "\nla valeur de N est : " + N +
//     "\nle type de n est : " + typeof (n) + "\nle type de u est : " + typeof (u) + "\nle type de N est : " + typeof (N));


// var x = 5 + 6 + "789";
// var y = 5 + "789" + 6;
// var z = "789" + 5 + 6;

// alert("la valeur de x est : " + x + "\nla valeur de y est : " + y + "\nla valeur de z est : " + z +
//     "\nle type de x est : " + typeof (x) + "\nle type de y est : " + typeof (y) + "\nle type de z est : " + typeof (z));


/********************************** Stucture Conditionnelle ************************************ */

/*var d = new Date();
var heure = d.getHours();
alert(typeof (d));
alert(typeof (heure));
alert(heure);

if (heure >= 0 && heure < 24) {
    if (heure < 12) {
        alert("C'est le matin");
    } else if (heure == 12) {
        alert('Il est midi pile');
    } else {
        alert("C'est le soir");
    }
} else{
    alert("Mauvais valeur de l'heure");
}*/


// var heure = prompt("Entrer la valeur de l'heure");
// if (heure < 0 || heure >= 24) {
//     alert("Mauvais valeur de l'heure choisi");
// }else{
//     alert("La valeur de l'heure est bien entre 0 et 24");
// }

// var heure = prompt("Entrer la valeur de l'heure");
// if (!(heure < 0) && !(heure >= 24)) {
//     alert("la valeur de l'heure est bien entre 0 et 24");
// } else {
//     alert("Mauvais valeur de l'heure");
// }

// var heure = prompt("Entrer la valeur de l'heure");
// if (!(heure >= 0) || !(heure < 24)) {
//     alert("Mauvais valeur de l'heure");
// } else {
//     alert("la valeur de l'heure est bien entre 0 et 24");
// }


/*************************  Structure ternaire ************************************** */

// var numberOfStudents = parseInt(prompt("Entrer le nombre des étudiants"));
// alert(typeof (numberOfStudents));

// var result = (numberOfStudents === 1) ? "student" : "students";
// alert(result);


// var numberOfStudents = prompt("Entrer le nombre des étudiants");
// alert(typeof (numberOfStudents));

// var result = (numberOfStudents == 1) ? "student" : "students";
// alert(result);


/***************************** Switch case ****************************************/

/*var heure = parseInt(prompt("Entrer la valeur de l'heure"));

switch (heure) {
    case 8:
        alert("Il est 8h");
        break;
    case 12:
        alert("Il est 12h");
        break;
    case 18:
        alert("Il est 18h");
        break;
    default:
        alert("Mauvais valeur de l'heure");
}*/


/////////////////////////////////////////////////////////////

// var x = 4;
// var y =x++;
// alert(y);
// alert(x);

// y=x;
// alert(y);

// var z = ++x;
// alert(z);
// alert(x);

/*************************************** Boucle for ************************************************ */

// var i ='';
// alert("le type de i est : "+typeof(i));
// for(i=0;i<=5;i++){
//     alert("la valeur de i est : "+i+"\nle type de i est : "+typeof(i));
// }
// alert("le type de i est : "+typeof(i));


/************************************* boucle while *********************************************/

// var x = 0, y = 3;
// while (x < y) {
//     alert("la valeur de x est : " + x + "\nla valeur de y est : " + y);
//     x++;
// }

/************************************** do while ********************************************* */

// var x = '';
// do {
//     alert("la valeur de x est : " + x);
//     x++;
// } while (x < 3);
// alert("le type de x est : " + typeof (x));


/********************************************* fonction ********************************** */

// function multiplication(x, y) {
//     return x * y;
//     alert("aucun message sera affiché ici");
// }

// alert(multiplication(9,8));


/*************************************** les objets littérales ******************************* */

// var moi = {
//     prenom : "Ahmed",
//     nom : "Jemmali",
//     age : 24,
//     identite : function (){
//         return "Prenom : "+this.prenom+"\nNom : "+this.nom+"\nAge : "+this.age;
//     }
// };

// alert(moi.identite());


/*********************************************** valeur primitif ********************************** */

// var dpt = "je suis un ingénieur mécatronique";

// alert("Le nombre de caractères dans la variable dpt est : "+dpt.length+
//     "\nLa varaiable en majuscule est : "+dpt.toUpperCase());


/*************************************** l'objet natif/prédéfini  String *******************************/

// var dpt = new String("je suis un ingénieur mécatronique");

// alert("Le nombre de caractères dans la variable dpt est : "+dpt.length+
//     "\nLa variable en majuscule est : "+dpt.toUpperCase());


/********************************** l'objet natif/prédéfini *************************************/

// var obj1 = new Object();

// obj1.prenom = "Ahmed";
// obj1.nom = "Jemmali";
// obj1.age = 24;
// obj1.identite = function(){
//     return "Prenom : "+obj1.prenom+"\nNom : "+obj1.nom+"\nAge : "+obj1.age;
// }

// alert(obj1.identite());

// var obj2 = obj1;
// alert(obj1.identite());
// obj2.prenom = "Ali";
// alert(obj2.identite());
// alert(obj1.identite());


/******************************************* les objets littérales ********************* */

// var moi = {
//     prenom : "Ahmed",
//     nom : "Jemmali",
//     age : 24,
//     identite : function (){
//         return "Prenom : "+this.prenom+"\nNom : "+this.nom+"\nAge : "+this.age;
//     }
// };

// alert(moi.identite());


/**********************************        Constructor       **************************** */

// function identite(p, n, a) {
//     this.prenom = p;
//     this.nom = n;
//     this.age = a;
// };

// var new_object = new identite("Ahmed", "Jemmali", 24);
// alert("Prenom : " + new_object.prenom + "\nNom : " + new_object.nom + "\nAge : " + new_object.age);


/************************************** Passage par référence *********************************** */


// var obj1 = new Object();
// obj1.prenom = "Ahmed";
// obj1.nom = "Jemmali";
// obj1.age = 24;

// alert("Prenom : "+obj1.prenom+"\nNom : "+obj1.nom+"\nAge : "+obj1.age);

// obj1.prenom = "Ali";
// alert("Prenom : "+obj1.prenom+"\nNom : "+obj1.nom+"\nAge : "+obj1.age);

// var obj2 = obj1 ;
// obj2.prenom = "Mohamed";

// alert("Prenom : "+obj1.prenom+"\nNom : "+obj1.nom+"\nAge : "+obj1.age);



// var obj1 = {
//     prenom: "Ahmed",
//     nom: "Jemmali",
//     age: 24
// }

// alert("Prenom : "+obj1.prenom+"\nNom : "+obj1.nom+"\nAge : "+obj1.age);

// obj1.prenom = "Ali";
// alert("Prenom : "+obj1.prenom+"\nNom : "+obj1.nom+"\nAge : "+obj1.age);

// var obj2 = obj1;
// obj2.prenom = "Mohamed";
// alert("Prenom : "+obj1.prenom+"\nNom : "+obj1.nom+"\nAge : "+obj1.age);



// function identite(p,n,a){
//     this.prenom = p;
//     this.nom = n;
//     this.age = a;
// }

// var obj1 = new identite("Ahmed","Jemmali",24);
// alert("Prenom : "+obj1.prenom+"\nNom : "+obj1.nom+"\nAge : "+obj1.age);

// obj1.prenom  ="Ali";
// alert("Prenom : "+obj1.prenom+"\nNom : "+obj1.nom+"\nAge : "+obj1.age);

// var obj2 = obj1;
// obj2.prenom = "Mohamed";
// alert("Prenom : "+obj1.prenom+"\nNom : "+obj1.nom+"\nAge : "+obj1.age);


/****************************************** passage des données par valeur  ****************************** */

// var x = 5;
// alert("La valeur de x est : "+x);
// var y = x;
// alert("La valeur de y est : "+y);
// y=8;
// alert("La valeur de x est : "+x+"\nLa valeur de y est : "+y);



/*******************les méthodes de l'objet natif/prédéfini "String" ******************** */

// var ch = "je suis un ingénieur Mécatronique   s ";
// var chNonPropre = "         je suis un ingénieur Mécatronique                      ";


// var longeur  = ch.length;
// var majuscule = ch.toUpperCase();
// var minuscule = ch.toLowerCase();
// var charat = ch.charAt(3);
// var indexPremier = ch.indexOf('s');
// var indexDernier = ch.lastIndexOf('s');
// var replace = ch.replace("Mécatronique","Informatique");
// var slicePremier = ch.slice(0,5);
// var sliceDernier = ch.slice(-11,-1);
// var propreCh = chNonPropre.trim();

// alert('la longeur de ch est : '+longeur+
//     '\nla chaine en majuscule est : '+majuscule+
//     '\nla chaine en minuscule est : '+minuscule+
//     '\nle caratère d\'indice 3 est : '+charat+
//     '\nl\'indice de premier s est : '+indexPremier+
//     '\nl\'indice de dernier s est : '+indexDernier+
//     "\nla nouvelle  ch est  : "+replace+
//     "\nl'extraction de ch au premier est : "+slicePremier+
//     "\nl'extraction de ch au dernier est : "+sliceDernier+
//     "\nle bien ch est : "+propreCh);



/************** les propriétés et les méthodes de l'objet natif/prédéfini Number *********** */
//les propriétés

// var min = Number.MIN_VALUE;
// var max = Number.MAX_VALUE;
// var negInf = Number.NEGATIVE_INFINITY;
// var posInf = Number.POSITIVE_INFINITY;
// var nan = Number.NaN;

// alert("Min : " + min + "\nMax : " + max + "\nNegatifInfinity : " + negInf + "\npositifInfinity : " + posInf + "\nNaN : " + nan);


//les méthodes

// var num = 10.987;
// var num = 10.487;
// var num = 10.587;
// var num = 0.987;
// var num = 10.985;
// var num = 10.585;
// var num = 1.987;


// var ch = num.toString();
// var fix = num.toFixed(2);
// var pre = num.toPrecision(2);
// var exp = num.toExponential(2);

// alert("ch : " + ch + "\nle type de ch est : " + typeof (ch) +
//      "\nfix : " + fix +"\nle type de fix est : " + typeof (fix) +"\npre : " + pre + "\nexp : " + exp)


// var d = new Date();
// var nombre = 5;
// alert(d);
// alert(Number(true)+"\n"+Number(false)+"\n"+Number(d)+"\n"+Number(nombre));


// var x = "0.55";
// var num = parseInt(x);
// var flo = parseFloat(x);
// alert("num : "+num+"\nle type de num est : "+typeof(num)+"\nflo : "+flo+"\nle type de flo est : "+typeof(flo));



/************************************* object natif/prédéfini  les Tableaux  Array *********************** */


// var prenom = ["Ahmed", "Mohamed", "Ali", "Ines"], p = '';

// var longeur = prenom.length;
// alert(longeur);
// alert(prenom);

// prenom[prenom.length] = "Habib";
// prenom[0] = "Fatma";
// alert(prenom);
// longeur = prenom.length;
// alert(longeur)


// for (var i = 0; i < prenom.length; i++) {
//     p += "Prenom n*" + (i + 1) + " : " + prenom[i] + "\n";
// }
// alert(p);


// var num = [2, 5, 78, 985], sum = 0;
// for (var i = 0; i < num.length; i++) {
//     sum += num[i];
// }
// alert(sum);


// var prenom = {
//     prenom1: "Ahmed",
//     prenom2: "Mohamed",
//     prenom3: "Ali",
//     prenom4: "Ines",
// }, p = "";

// for (var i in prenom) {
//     p += i + " : " + prenom[i] + "\n";
// }
// alert(p);



// var prenom = ["Ahmed", "Mohamed", "Ali", "Ines"], p = '';

// for (var i of prenom) {
//     p += "Prenom : " + i + "\n";
// }
// alert(p);


//////les méthodes de l'objet natif/prédéfini "Array"


// var prenom = ["Ahmed", "Mohamed", "Ali", "Ines"], p = "";

// // alert(typeof (prenom));

// var ajout = prenom.push("Habib", "Fatma");
// for (var i = 0; i < prenom.length; i++) {
//     p += "Prenom n*" + (i + 1) + " : " + prenom[i] + "\n";
// }
// alert(p + "\nLe nombre des éléments dans le tableau est : " + ajout);


// var supp = prenom.pop();
// for (var i = 0; i < prenom.length; i++) {
//     p += "Prenom n*" + (i + 1) + " : " + prenom[i] + "\n";
// }
// alert(p + "\nL'élément supprimé du tableau est : "+supp);


// var ajoutPremier = prenom.unshift("Habib","Fatma");
// for (var i = 0; i < prenom.length; i++) {
//     p += "Prenom n*" + (i + 1) + " : " + prenom[i] + "\n";
// }
// alert(p + "\nLe nombre des éléments dans le tableau est : "+ajoutPremier);


// var suppPremier = prenom.shift();
// for (var i = 0; i < prenom.length; i++) {
//     p += "Prenom n*" + (i + 1) + " : " + prenom[i] + "\n";
// }
// alert(p + "\nL'élément supprimé du tableau est : "+suppPremier);


// prenom.splice(1,0,"Habib","Fatma");
// for (var i = 0; i < prenom.length; i++) {
//     p += "Prenom n*" + (i + 1) + " : " + prenom[i] + "\n";
// }
// alert(p);


// var join = prenom.join("|");
// alert(join);
// for (var i = 0; i < prenom.length; i++) {
//     p += "Prenom n*" + (i + 1) + " : " + prenom[i] + "\n";
// }
// alert(p);



// var extraction = prenom.slice(0,2);
// alert(extraction);
// for (var i = 0; i < prenom.length; i++) {
//     p += "Prenom n*" + (i + 1) + " : " + prenom[i] + "\n";
// }
// alert(p);


// var prenom2 = ["habib" ,"fatma"];
// var prenom3 =["adel","faysel"];
// var concatination = prenom.concat(prenom2,prenom3);
// alert(concatination);

// for (var i = 0; i < prenom.length; i++) {
//     p += "Prenom n*" + (i + 1) + " : " + prenom[i] + "\n";
// }
// alert(p);



// var tab = [700,33,84];
// var s = tab.sort();
// alert(tab);


// var prenom2 = ["ahmed", "Ahmed", "fatma", "Fatma"], p2 = '';
// var s = prenom2.sort();
// alert(s);
// for (var i = 0; i < prenom2.length; i++) {
//     p2 += "Prenom n*" + (i + 1) + " : " + prenom2[i] + "\n";
// }
// alert(p2);



// var prenom2 =["ahmed","Ahmed","fatma","Fatma"];
// prenom2.sort();
// alert(prenom2);



// var prenom2 = ["ahmed", "Ahmed", "fatma", "Fatma"], p2 = '';
// prenom2.sort();
// for (var i = 0; i < prenom2.length; i++) {
//     p2 += "Prenom n*" + (i + 1) + " : " + prenom2[i] + "\n";
// }
// alert(p2);




// var r = prenom.reverse();
// alert(r);
// for (var i = 0; i < prenom.length; i++) {
//     p += "prenom n*" + (i + 1) + " : " + prenom[i] + '\n';
// }
// alert(p);


// prenom.reverse();
// for (var i = 0; i < prenom.length; i++) {
//     p += "prenom n*" + (i + 1) + " : " + prenom[i] + '\n';
// }
// alert(p);

// ===> trois méthodes ( "join()","concat()","slice()") ne touchent pas le tableau de base ;


/////////////// Remarque (objet natif/prédéfini Array)

/*var tab = new Array(3, 4, 78, 745), p = "";
for (var i = 0; i < tab.length; i++) {
    p += "Elément n*" + (i + 1) + " = " + tab[i] + "\n";
}
alert(p);*/


/********************************** l'objet natif/prédéfini Date ************************************* */

// var datelitt = Date();
// alert(datelitt);
// var datems = Date.now();
// alert(datems);


// var datelitterale = new Date();
// alert(Number(datelitterale));


// var d = new Date();
// alert(d);

// var dnow1 = new Date(Number(d));
// alert(Number(d));
// alert(dnow1);

// var dnow2 = new Date(1640286903606);
// alert(dnow2);

// var d0 = new Date(0);
// alert(d0);

// var d01 = new Date(Number(d0));
// alert(Number(d0));
// alert(d01);


// var d = new Date("Dec 23 2021");
// alert(d);

// var d = new Date("Dec 23 2021 20:38:34");
// alert(d);

// var d = new Date(2021,11,23);
// alert(d);

// var d = new Date(2021,11,23,20,41,53,789);
// alert(d);


// var diso1 = new Date("2021-12-23");
// var diso2 = new Date("2021-12-23T20:52:43");
// alert(diso1);
// alert(diso2);

// var dcourte = new Date("12/23/2021");
// alert(dcourte);

// var dlongue = new Date("2021 12 23 20:55:23");
// alert(dlongue);
// var dcomplette = new Date("2021 12 23 20:55:45 GMT+0100");
// alert(dcomplette);



// var d = new Date();

// var dy = d.getFullYear();
// alert(dy);
// var dm = d.getMonth();
// var dj = d.getDay();
// var dday = d.getDate();

// var dh = d.getHours();
// var dmi = d.getMinutes();
// var ds = d.getSeconds();
// var dms = d.getMilliseconds();

// var mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'];
// var jour = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];

// alert("Le "+jour[dj] + ", "+dday+" "+mois[dm]+" "+dy+"."+"\nIl est "+dh+" heures et "+dmi+" munites et "+ds+" secondes.");


// var d = new Date();
// var dy = d.setFullYear(2021,11,11);
// alert(dy);
// var dh = d.setHours(20);
// alert(dh);



/*******************************   l'objet natif/prédéfini Math ********************************************/

// var x = Math.random() * 1000;
// var arrondi = Math.round(x);
// var arrondiInf = Math.floor(x);
// var arrondiSup = Math.ceil(x);
// var min = Math.min(-4, 3.14);
// var max = Math.max(-4, 3.14);

// var abso = Math.abs(x);
// var racine = Math.sqrt(x);
// var puissance = Math.pow(x,2);
// var cosinus = Math.cos(x);
// var sinus = Math.sin(x);
// var pi = Math.PI;


/***********************************  la portée de javascript -- Scope ********************************* */

// var x = 7;
// function cal() {
//     var x = 4;
//     return x;
// }
// alert("La valeur de x global est : "+x+"\nLa valeur de x local est : "+cal());


/********************************* le mot clé var est required **************************************** */

// function cal() {
//     x = 4;
//     return x;
// }
// cal();
// alert("La valeur de x local est : " + x);


/********************************** fonction anonyme // arrow function****************  ***********/

// var carre = function (x){
//     alert("Le carré de x est : "+Math.pow(x,x));
// }

// var y = prompt("Entrer la valeur de x ");
// carre(y);



// var carre = (x) => {
//     alert("Le carré de x est : " + Math.pow(x, x));
// }

// var y = prompt("Entrer la valeur de x ");
// carre(y);

/*********************************** fct auto_invoquée *********************************** */

// (function (x) {
//     x = prompt("Entrer la valeur de x : ");
//     alert("Le carré de x est : " + Math.pow(x, x));
// })()


// ((x) => {
//     x = prompt("Entrer la valeur de x : ");
//     alert("Le carré de x est : " + Math.pow(x, x));
// })()


/************************************ les closures en javascript *********************************** */

// function compteur() {
//     var i = 0;
//     return function () {
//         return i++;
//     }
// }

// // alert(compteur());
// var plusUn = compteur();
// var autreInstance = compteur();
// alert("Premier tour : "+plusUn()+
//     "\nPremier tour autreInstance : "+autreInstance()+
//     "\nDeuxième tour autreInstance : "+autreInstance()+
//     "\nDeuxième tour : "+plusUn()+
//     "\nTroisième tour : "+plusUn());


// var ajout = function () {
//     var i = 0;
//     return function () {
//         return i++;
//     }
// }

// // alert(compteur());
// var plusUn = ajout();
// var autreInstance = ajout();
// alert("Premier tour : "+plusUn()+
//     "\nPremier tour autreInstance : "+autreInstance()+
//     "\nDeuxième tour autreInstance : "+autreInstance()+
//     "\nDeuxième tour : "+plusUn()+
//     "\nTroisième tour : "+plusUn());


/****************************************** DOM  ***************************************** */

// var titre = document.getElementById("gros_titre");
// alert(titre);
// alert(typeof(titre));
// alert(typeof(document));


// var tab = document.getElementsByTagName('li');
// alert("notre page web contient "+tab.length+" éléments 'li'"+
//     "\nTab[0] : "+tab[0]+
//     "\nTab[1] : "+tab[1]+
//     "\nTab[2] : "+tab[2]+
//     "\nTab[3] : "+tab[3]);


// var tableau = document.getElementsByTagName("p");
// alert("notre page web contient "+tableau.length+" éléments 'p'")


// var tab = document.getElementsByClassName("element");
// alert("notre page web contient "+tab.length+" éléments de classe 'element'"+
//     "\nTab[0] : "+tab[0]+
//     "\nTab[1] : "+tab[1]+
//     "\nTab[2] : "+tab[2]+
//     "\nTab[3] : "+tab[3]);



// var lien = document.querySelector("ul li");
// alert(lien);

// var lien = document.querySelector("body h1");
// alert(lien);

// var lien = document.querySelector("body li");
// alert(lien);

// var lien = document.querySelector("body p");
// alert(lien);


// var p = document.querySelectorAll(".element");
// alert("notre page web contient "+p.length+" éléments HTML de classe 'element'"+"\n"+p+
//     "\np[0] : "+p[0]+
//     "\np[1] : "+p[1]+
//     "\np[2] : "+p[2]+
//     "\np[3] : "+p[3]);


// var title1 = document.querySelector('.element').innerHTML;
// alert(title1);

// var title2 = document.querySelector(".element").textContent;
// alert(title2);


// var body = document.body;
// // alert(body);
// var contenuBody = document.body.textContent;
// var title = document.title;
// var lien = document.links;
// alert("body : " + body + "\nContenu de body : " + contenuBody);
// alert("Title : " + title);
// alert("lien1 : " + lien[0] + "\nlien2 : " + lien[1] + "\nlien3 : " + lien[2]);



/*var title = document.getElementById("gros_titre");
var texteTitle = title.innerHTML;

var element = document.querySelector(".element").textContent;

alert("Title : " + texteTitle + "\nEléments : " + element);*/


// document.getElementById('gros_titre').innerHTML = "et de la modification en javascript";
// document.getElementById("gros_titre").innerHTML += "et de la modification en javascript";
// document.getElementById("gros_titre").innerHTML = "<mark>et de la modification en javascript</mark>"

// document.getElementById('gros_titre').textContent = "et de la modification en javascript";
// document.getElementById("gros_titre").textContent += "et de la modification en javascript";
// document.getElementById("gros_titre").textContent = "<mark>et de la modification en javascript</mark>"


// document.querySelector('a').href = "https://openclassrooms.com/fr/search?query=c&page=1";
// document.querySelector('h1').id = "title";
// document.querySelector(".element").className = "element1";
// document.getElementById("title").style.color="orange";
// document.getElementById("title").style.fontSize = "40px";

// alert(document.querySelector('a').href);
// alert(document.querySelector('h1').id);



// var newPara = document.createElement('p');
// console.log(newPara);
// newPara.id = "nouveau";
// newPara.className = "para1";
// newPara.style.color = "orange";
// console.log(newPara);
// alert(newPara);

// var texte = document.createTextNode("Insérer un nouveau texte");

// newPara.appendChild(texte);
// console.log(newPara);
// alert(newPara);

// document.body.appendChild(newPara);



// var newPara = document.createElement('p');
// newPara.id = "nouveau";
// newPara.className = "para1";
// newPara.style.color = "red";
// newPara.innerHTML = "Insérer un nouveau texte";

// document.body.appendChild(newPara);


// var newPara = document.createElement('p');
// newPara.id = "nouveau";
// newPara.className = "para1";
// newPara.style.color = "red";

// var texte = document.createTextNode("Insérer un nouveau texte");
// newPara.appendChild(texte);

// var element = document.querySelector(".element");

// element.appendChild(newPara);


// var newPara = document.createElement('p');
// newPara.id = "nouveau";
// newPara.className = "para1";
// newPara.style.color = "red";

// var texte = document.createTextNode("Insérer un nouveau texte");

// newPara.appendChild(texte);

// var element = document.querySelector('.element');

// document.body.insertBefore(newPara,element);


// var title = document.getElementById("gros_titre");
// var parent = document.body;

// parent.removeChild(title);


// var parent = document.querySelector(".element");
// var element = document.getElementById("prem");
// parent.removeChild(element);


// var title = document.getElementById("gros_titre");
// var parent = document.body;

// var newTitle = document.createElement('h2');
// newTitle.id="newTitle";

// var texte = document.createTextNode("Nouveau titre !");
// newTitle.appendChild(texte);

// parent.replaceChild(newTitle,title);



// var p = document.querySelector('.para');
// var div = p.parentNode;
// alert(div);



// var parent = document.body;
// alert(parent);

// var div = parent.childNodes[3];
// alert(div);

// var p1 = div.childNodes[1];
// alert(p1);
// var texte1 = p1.childNodes[0].nodeValue;
// alert(texte1);

// var p2 = div.childNodes[3];
// alert(p2)
// var texte2 = p2.childNodes[0].nodeValue;
// alert(texte2);

// var strong = p2.childNodes[1];
// alert(strong);
// var texte3 = strong.childNodes[0].nodeValue;
// alert(texte3);



// var p2 = document.querySelectorAll(".para")[1];
// alert(p2);

// var premier = p2.firstChild;
// var dernier = p2.lastChild;

// alert(premier+"\n"+dernier);

// var inner1 = premier.nodeValue;
// // var inner2 = dernier.innerHTML;
// // var inner2 = dernier.textContent;
// var inner2 = dernier.childNodes[0].nodeValue;
// alert(inner1+"\n"+inner2);


/////// noeud frère et espace et compté  //////////

// var title = document.getElementById("gros_titre");
// var div = title.nextSibling.nextSibling;

// div.innerHTML = "<p>modification et notion de frère </p>"


/********************************* les évènements ******************************************************************** */

// var p = document.querySelector('p');
// p.onclick = function(){
//     this.innerHTML = "<strong>Merci !<strong>";
//     this.style.color = "red";
// }


// var p = document.querySelector("p");
// p.onclick = bravo;
// function bravo(){
//     this.innerHTML = "<strong>Bravo !<strong>";
//     this.style.color = "red";
// }



// var p = document.querySelector('p');
// p.addEventListener('click',function(){
//     this.innerHTML = "<strong>Merci !</strong>";
//     this.style.color = "red";
// })


// var p = document.querySelector('p');
// p.addEventListener('click',changeText);

// function changeText(){
//     this.innerHTML = "<strong>Merci !</strong>";
//     this.style.color = "red";
// }


// var p = document.querySelector("p");
// p.addEventListener("click",message1);
// p.addEventListener("click",message2);

// function message1(){
//     alert("Message1");
//     this.innerHTML = "Bravo Ahmed !";
// }
// function message2(){
//     alert("Message2");
// }


// var p = document.querySelector("p");

// p.addEventListener("mouseover",Fonction1);
// p.addEventListener("mouseout",Reset1);
// p.addEventListener("mousedown",Fonction2);
// p.addEventListener("mouseup",Reset2);

// function Fonction1(){
//     this.innerHTML = "Cliquer sur moi !";
//     this.style.backgroundColor = "orange";
// }

// function Reset1(){
//     this.innerHTML = "Passer sur moi";
//     this.style.backgroundColor = "";
// }

// function Fonction2(){
//     this.innerHTML = "Bravo !";
//     this.style.backgroundColor = "#26C";
//     this.style.fontWeight = 'blod';
//     this.style.fontSize = "24px";
// }

// function Reset2(){
//     this.innerHTML = "Passer sur moi";
//     this.style.backgroundColor = "";
//     this.style.fontWeight = '';
//     this.style.fontSize = "";
// }



// var div = document.getElementById("div");
// var p = document.querySelector("p");

// div.addEventListener('click',MessageDiv);
// p.addEventListener("click",MessageP);

// function MessageDiv(){
//     alert("Evènement de div");
// }
// function MessageP(){
//     alert("Evènement de p");
// }


/*var div1 = document.getElementById("div1");
var p1 = document.getElementById("p1");
var div2 = document.getElementById("div2");
var p2 = document.getElementById("p2");

// // Phase de bouillonnement utilisée pour div1 et p1
div1.addEventListener('click', MessageDiv1);
p1.addEventListener("click", MessageP1);

function MessageDiv1() {
    alert("Evènement de div1");
}
function MessageP1(){
    alert("Evènement de p1");
}

// // Phase de capture utilisée pour div2 et p2
div2.addEventListener('click', MessageDiv2,true);
p2.addEventListener("click", MessageP2,true);

function MessageDiv2() {
    alert("Evènement de div2");
}
function MessageP2(){
    alert("Evènement de p2");
}*/


/*var body = document.body;
var div1 = document.getElementById('div1');
var p1 = document.getElementById('p1');
var strong = document.querySelector("strong");


p1.addEventListener("click", CP1, true);
strong.addEventListener("click", CS, true);

function CP1() {
    alert("Capture p1")
}
function CS() {
    alert("Capture strong");
}

body.addEventListener("click", BB);
div1.addEventListener("click", BD1);

function BB() {
    alert("Bouillonnement body");
}
function BD1() {
    alert("Bouillonnement div1")
}*/



/********************************* L'objet Event ********************************* */

/*var div1 = document.getElementById("div1");
div1.addEventListener("click",Message);

function Message(event){
    this.innerHTML = "Type de l'élément déclencheur : "+event.target+
    "<br>Elément portant l'évènement : "+event.currentTarget+
    "<br>Type de l'évènement : "+event.type;
}*/


// var div1 = document.getElementById("div1");
// var p1 = document.getElementById('p1');

// div1.addEventListener("click",TexteD,true);
// p1.addEventListener("click",TexteP,true);

// function TexteD(e){
//     alert('Stop de propagation');
//     e.stopPropagation();
// }
// function TexteP(){
//     alert("Cecie ne s'affiché plus");
// }


// var div1 = document.getElementById("div1");
// var p1 = document.getElementById('p1');

// div1.addEventListener("click",TexteD,true);
// p1.addEventListener("click",TexteP,true);

// function TexteD(e){
//     e.preventDefault();
//     alert('ceci ne s\'affiche pas');
// }
// function TexteP(){
//     alert("la méthode preventDefault() n'empeche pas la propagation des évènements");
// }


/************************************************ BOM  ****************************************** */

/************************************************* l'objet window **************************** */

/*var ouvrir = document.getElementById("ouvrir");
var fermer = document.getElementById("fermer");
var modifier = document.getElementById("modifier");
var fenetre = "";

ouvrir.addEventListener("click",fOuvrir);
fermer.addEventListener("click",fFermer);
modifier.addEventListener("click",fModifier);

function fOuvrir(){
    fenetre = window.open("https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal","_blank","width=500,height=500");
}

function fModifier(){
    fOuvrir();
    fenetre.resizeTo(200,200);
}

function fFermer(){
    fenetre.close();
}*/


/********************************************************** lobjet screen ************************************************* */

/*var p = document.querySelector("p");

var hauteur = screen.height;
var hauteurDispo = screen.availHeight;
var largeur = screen.width;
var largeurDispo = screen.availWidth;
var reso = screen.pixelDepth;

p.innerHTML = "Hauteur de l'écran : "+hauteur+
            "</br>Hauteur disponible de l'écran : "+hauteurDispo+
            "</br>Résolution : "+reso+ " bits/px"+
            "<br>Largeur de l'écran : "+largeur+
            "<br>Largeur disponible de l'écran : "+largeurDispo;*/



/*************************************************************** l'objet navigator ******************************************** */


// var para = document.querySelector("p");

// var langue = navigator.language;
// var navigateur = navigator.appName;
// var version = navigator.appVersion;
// var moteur = navigator.product;
// var cookieA = navigator.cookieEnabled;

// para.innerHTML = "langue utilisée : " + langue +
//     "<br>nom du navigateur : " + navigator +
//     "<br>Version : " + version +
//     "<br>Moteur : " + moteur +
//     "<br>Cookie ? : " + cookieA;



// var loc = navigator.geolocation;

// (function(){
//     if(loc){
//         loc.getCurrentPosition(coordonnees);
//     }else{
//         para.innerHTML = "Localisation non disponible";
//     }
// })()

// function coordonnees(x){
//     para.innerHTML = "L'atitude : "+x.coords.latitude+
//                         "<br>Longitude : "+x.coords.longitude;
// }


/***************************************************************** l'objet location  ************************************* */


/*var charger = document.getElementById('charger');
var recharger = document.getElementById('recharger');
var changer = document.getElementById('changer');

charger.addEventListener('click',charge);
recharger.addEventListener('click',recharge);
changer.addEventListener('click',change);

function charge(){
    location.assign("https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal");
}

function recharge(){
    location.reload();
}

function change(){
    location.replace("https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal");
}

var url = location.href;
var chemin = location.pathname;

para = document.querySelector('p');
para.innerHTML = 'URL : '+url+'<br>Chemin : '+chemin;*/


/************************************************* l'objet history ****************************** */

// var precedent = document.getElementById('precedent');
// var suivant = document.getElementById('suivant');
// var specifique = document.getElementById('specifique');

// precedent.addEventListener('click',arriere)
// suivant.addEventListener('click',avant);
// specifique.addEventListener('click',spec);

// function arriere(){
//     history.back();
// }

// function avant(){
//     history.forward();
// }

// function spec(){
//     history.go(-3);
// }

// var histo = history.length;

// para = document.querySelector('p');
// para.innerHTML = 'URL : '+histo;



/********************************************** les expressions régulières **************** */

/*************************validation html des formulaires*********** */

///////************************validation JS des formulaires *************************** */

/*var validation = document.getElementById('bouton_envoi');
var prenom = document.getElementById("prenom");
var prenom_m = document.getElementById("prenom_manquant");

var prenom_v = /^[a-zA-Zéè]/;

validation.addEventListener("click",f_valid);

function f_valid(e){
    if(prenom.validity.valueMissing){// valueMissing renvoie true si le champ contenant l'attribut required est vide!
        e.preventDefault();
        prenom_m.innerHTML = "Prénom manquant ! ";
        prenom_m.style.color = "red";
    }else if(prenom_v.test(prenom.value) == false){
        e.preventDefault();
        prenom_m.innerHTML = "Format incorrect ! ";
        prenom_m.style.color = "red";
    }else{

    }
}*/


/************************************************* gestion du délai d'exécution en JS ******************* */

/*var heure = document.getElementById("temps");

setInterval(() => {
    var d = new Date();
    heure.innerHTML = d.toLocaleTimeString();
}, 3000);*/

/*var heure = document.getElementById("temps");

var tempsReel = setInterval(horloge,3000);

function horloge(){
    var d = new Date();
    heure.innerHTML = d.toLocaleTimeString();
}*/


/*var stop = document.getElementById("stop");

stop.addEventListener("click",arret);

function arret(){
    clearInterval(tempsReel);
}*/



// setTimeout(() => {

// }, timeout);


/*var body = document.body;
var btn = document.getElementById("btn");
btn.addEventListener("click", couleur);

function couleur() {
    setTimeout(function () { body.style.backgroundColor = "red" }, 1200);
    setTimeout(function () { body.style.backgroundColor = "yellow" }, 400);
    setTimeout(function () { body.style.backgroundColor = "blue" }, 800);
    setTimeout((function () { body.style.backgroundColor = "orange" }), 200);
}*/


/***************************************************** les cookies  ******************************** */

// document.cookie = "prenom1=Ahmed; expires =Sat Dec 24 2021 20:57:04; path = / ";
// document.cookie = "prenom2=Mohaemed; expires =Sat Dec 24 2021 20:57:04; path = / ";

// document.cookie = "prenom1=Ali; expires =Sat Dec 24 2021 20:57:04; path = / ";
// document.cookie = "prenom2=Mohamed; expires =Thu Dec 24 2021 20:57:04; path = / ";

// var c = document.cookie;
// alert(c);
// document.getElementById("cook").textContent = c;


/************************************************* gestion des erreurs en JS ******************* */

/*var b = document.getElementById("test");
b.addEventListener("click", testValeur);

function testValeur() {
    var p = document.getElementById("msg");
    var x = document.getElementById("nb").value;

    try {
        if (isNaN(x) || x == '') {
            throw "Vous n'avez pas rentré de nombre valide";
        } else if (x < 0 || x > 14) {
            throw "Valeur trop  grande ou trop petite"
        } else {
            p.innerHTML = "Nombre ok"
        }
    }
    catch (e) {
        p.innerHTML = e;
    }
    finally {
        document.getElementById("nb").value = '';
    }
}*/


/*************************************************** mode strict en JS ********************************* */

// 'use strict'
// var afficheX = document.getElementById('varX');
// var afficheY = document.getElementById('varY');

// var x = 5;
// afficheX.innerHTML = x;

// y = 10;
// afficheY.innerHTML = y;


// function affX() {
//     'use strict'
//     var x = 5;
//     alert(x);
// }

// function affY() {
//     'use strict'
//     y = 10;
//     alert(y);
// }
// affX();
// affY();


/********************************************** Remarques  *********************************************** */

////////////////////////// les constantes

// const x = 5;
// alert(x);

/************************************************** Les classes ********************** */

// object

/*let myBook = {
    title: 'GOT',
    numberOfPages: 250,
    isAvailable: true
};

//dotNotation
var book1 = myBook;
alert(book1.title);

var bookTitle = myBook.title;
alert(bookTitle);

//bracketNotation

var bookTitle = myBook["title"];
alert(bookTitle);*/


// les classes

/*class Book {
    constructor(t, a, p) {
        this.title = t;
        this.author = a;
        this.pages = p;
    }
}

var myBook = new Book("GOT", "Ahmed", 250);
var p = "";*/

/* cet ligne crée l'objet suivant :
  myBook = {
    title: "GOT",
    author: "Ahmed",
    pages: 250
}*/

// for (let b in myBook) {
//     p += b + " : " + myBook[b] + "\n";
// }
// alert(p);


//les tableaux : type complexe , passé par référence

/*let tab1 = ["ahmed", "ali"];
var tab2 = tab1;
tab2[0] = "ali";
var p = "";

for (var i = 0; i < tab1.length; i++) {
    p += "Prenom n*" + (i + 1) +" : "+ tab1[i] + "\n";
}
alert(p);*/



// let myBook = {
//     title: 'GOT',
//     numberOfPages: 250,
//     isAvailable: true

// };

// var tab = [myBook];
// console.log(tab);
// console.log(tab[1]);

// tab[0].isAvailable = false;
// console.log(myBook);

// myBook.isAvailable = false;
// alert(tab);


/*class BankAccount {

    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    showBalance() {
        console.log("Solde : " + this.balance + " EUR");
    }

    deposit(amount) {
        console.log("Dépot de : " + amount + " EUR");
        this.balance += amount;
        this.showBalance();
    }

    withdraw(amount) {
        if (this.balance < amount) {
            console.log("Retrait refusé !");
        } else {
            console.log("Retrait de : " + amount + " EUR");
            this.balance -= amount;
            this.showBalance();
        }
    }
}

var newAccount = new BankAccount("Ahmed",500);
console.log(newAccount.balance);
newAccount.showBalance();
newAccount.deposit(300);
newAccount.withdraw(200);*/


// les méthodes statiques

/*class BePolite {

    static sayHello() {
        console.log("Hello !");
    }

    static sayHelloTo() {
        console.log("Hello " + name + " !");
    }

    static add(firstName,lastName){
        return "Hello "+firstName +' '+ lastName + " !";
    }
}


BePolite.sayHello();
BePolite.sayHelloTo();
var cv = BePolite.add("Ahmed","Jemmali");
console.log(cv);*/


//////////// Récursivité Recherche d'un élément dans un tableau trié

/*const binarySearch = (array, thingToFind, start, end) => {

    if (start > end) {
        return false;
    }
    let mid = Math.floor((start + end) / 2);
    if (array[mid] == thingToFind) {
        return true;
    }

    if (thingToFind < array[mid]) {
        return binarySearch(array, thingToFind, start, mid - 1);
    }
    else {
        return binarySearch(array, thingToFind, mid + 1, end);
    }

}

var tab = [2, 4, 7, 9, 11, 14];
var debut = 0;
var fin = 5;
var element = prompt("entrer un nombre");
console.log(binarySearch(tab, element, debut, fin));*/


// //////////////// la factorielle  ///////////////////

/*function factorielle(number) {
    if (number <= 1)
        return 1;
    else
        return number * factorielle(number - 1);
}
console.log(factorielle(3));*/


/********************************** continue *********************************** */

//L'instruction continue arrête l'exécution des instructions pour l'itération de la boucle courante

//avec boucle for;

/*var text = "";
for (var i = 0; i < 5; i++) {
    if (i == 3) {
        continue;
    }
    text += i;
    console.log(text);
}
console.log(text);*/


//avec boucle while

/*var i = 0;
var n = 0;
while (i < 5) {
    i++;
    if (i == 3) {
        continue;
    };
    n += i;
    console.log("je suis ahmed");

    console.log(n);
}
console.log((n));*/


/*************************************** la méthode forEach(): ******************************/

//La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.


//exemple1
/*const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));*/

/*const array1 = ['a', 'b', 'c'];
array1.forEach((element) => {console.log(element)});*/


//exemple2

//Équivalence entre une boucle for et une boucle forEach
//boucle for

/*var items = ["item1", "item2", "item3"];
var copie = [];

for (var i = 0; i < items.length; i++) {
  copie.push(items[i]);
}
console.log(copie);*/


//forEach()

/*var items = ["item1", "item2", "item3"];
var copie = [];

items.forEach(function(item){
    copie.push(item);
})
console.log(copie);*/



//Exemple3
// Cette fonction n'est pas appelée pour les indices pour lesquels les éléments ont été supprimés ou qui n'ont pas été définis.

/*function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
[2, 5, , 9].forEach(logArrayElements);*/


/*[2,5, ,9].forEach(function logArrayElements(element,index,array){
    console.log("a["+index+"] = "+element);
});*/

/*********************************************** la methode map() *************************************/

//La méthode map() crée un nouveau tableau et permet d'exécuter une fonction donnée sur chaque élément du tableau.

//Exemple1

/*const array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);
console.log(map1);*/

//Exemple 2 
//Dans l'exemple suivant, on crée un tableau composé des racines carrées des éléments d'un premier tableau :

/*var nombres = [1, 4, 9];
var racines = nombres.map(Math.sqrt);
console.log(racines);*/


//Exemple3
//Ici, on illustre le fonctionnement de map avec une fonction à un argument. 
//Cet argument sera automatiquement remplacé par chaque élément du tableau au fur et à mesure que map parcourt le tableau

/*var nombres = [1, 4, 9];
var doubles = nombres.map(function (num){
    return num*2;
})

console.log(doubles);*/

//Remarque :
// map() construit un nouveau tableau. Si on utilise cette méthode sans utiliser le résultat, mieux vaudra utiliser forEach ou for...of.