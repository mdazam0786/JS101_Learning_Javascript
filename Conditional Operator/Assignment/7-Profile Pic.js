/* L, W and lenght, width,
If the value stored in length is greater than the value stored in L and the value stored in width, is greater than value stored in w, print upload. Else if the value stored in length is less than value stored in L, print Increase length. Else if the value stored in width, is less than value stored in w, print increase width. */

var L=12; w=14; length=14; width=19;
if(length>L && width>w)
{
    console.log("Upload");
}
else if(length<L)
{
    console.log("Increase Length");
}
else if(width<w)
{
    console.log("Increase Width");
}