var cle, phrase;
coordphrase=new Array();
coordphrase_cle=new Array();
newcoord=new Array();
coordcrypt=new Array();
alpha="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789àâéêèëîïôöçù',!?.;:=+-()/@%$* ";

function cryptage()
{
crypt="";
phrase_cle="";
var car=0;
phrase=document.fcrypt.acoder.value;
cle="?ecâbgj5H  ";
if (phrase != "" && cle != "")
{
for (var z=0; z<phrase.length; z++)
{
phrase_cle+=cle.charAt(car);
car++;
if (car==cle.length)
car=0;
}
for (var k=0; k<phrase.length; k++)
{
for (var p=0; p<alpha.length; p++)
{
if (phrase.charAt(k)==alpha.charAt(p))
coordphrase[k]=p;
if (phrase_cle.charAt(k)==alpha.charAt(p))
coordphrase_cle[k]=p;
}
newcoord[k]=coordphrase[k]+coordphrase_cle[k];
if (newcoord[k] > alpha.length-1)
newcoord[k]-=alpha.length;
crypt+=alpha.charAt(newcoord[k]);
}
document.fcrypt.sortie.value=crypt;
}
else
alert("il manque au moins un élément !");
}

function decryptage()
{
decrypt="";
phrase_cle="";
var car=0;
cle=document.fcrypt.clecryptage.value;
crypt=document.fcrypt.sortie.value;
if (cle != "" && crypt != "")
{
for (var o=0; o<crypt.length; o++)
{
for (var b=0; b<alpha.length; b++)
{
if (crypt.charAt(o)==alpha.charAt(b))
coordcrypt[o]=b;
}
}
for (var z=0; z<crypt.length; z++)
{
phrase_cle+=cle.charAt(car);
car++;
if (car==cle.length)
car=0;
}
for (var y=0; y<phrase_cle.length; y++)
{
for (var u=0; u<alpha.length; u++)
{
if (phrase_cle.charAt(y)==alpha.charAt(u))
coordcrypt[y]-=u;
if (coordcrypt[y] < 0)
coordcrypt[y]+=alpha.length;
}
}
for (var t=0; t<crypt.length; t++)
{
decrypt+=alpha.charAt(coordcrypt[t]);
}
document.fcrypt.decrypte.value=decrypt;
}
else
alert("il manque au moins un élément !");
}

function nettoyage()
{
document.fcrypt.acoder.value="";
document.fcrypt.clecryptage.value="";
document.fcrypt.sortie.value="";
document.fcrypt.decrypte.value="";
}
