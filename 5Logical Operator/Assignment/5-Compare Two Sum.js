// You are given six numbers, stored in the variable with the following name, one, two, three, four, five, six. find the value of sum1 and sum2, such that sum1=one+two, sum2=four+five. If both the following two conditions are true, print "Yes", else print "No". sum1>three, sum2>six.
one=1;two=2;three=3;four=4;five=5;six=6;
sum1=one+two;
sum2=four+five;
if(sum1>three&&sum2>six)
{
    console.log("Yes");
}
else
{
    console.log("No");
}