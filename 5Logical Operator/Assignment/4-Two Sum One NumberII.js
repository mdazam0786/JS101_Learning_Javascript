// You are given five numbers, stored in the variables with the following names one, two, three, four, five. Find the value of sum1 and sum2 such that sum1=one+two, sum2=three+four. If the value of sum1 or sum2 is greater than the value stored in variable five, print "Yes", else print "No".
one=1;two=2;three=3;four=4;five=5;
sum1=one+two;
sum2=three+four;
if(sum1>five||sum2>five)
{
    console.log("Yes");
}
else
{
    console.log("No");
}