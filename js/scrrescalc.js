function endless()
{
    a = parseFloat((((parseFloat(document.getElementById("3").value))+(parseFloat(document.getElementById("4").value)))/2)+" "+document.getElementById("2").value);
    unit1 = document.getElementById("2").value;
    unit2 = document.getElementById("14").value;
    document.getElementById("5").innerHTML=a;
    d = parseFloat(document.getElementById("12").value);
    b = parseFloat(document.getElementById("10").value);
    c = parseFloat(document.getElementById("11").value);
    x = parseFloat(Math.sqrt((d*d)/((b*b)+(c*c))));
    bx=b*x;
    cx=c*x;
    dm = parseFloat(0.0)
    if(unit1=="m")
    {
        dm = a;
    }
    else if(unit1=="cm")
    {
        dm = a/100;
    }
    else if(unit1=="in")
    {
        dm = (0.0254)*a;
    }
    else if(unit1=="ft")
    {
        dm = (0.3048)*a;
    }
    if(unit2=="m")
    {
        bx = bx;
        cx = cx;
    }
    else if(unit2=="cm")
    {
        bx = bx/100;
        cx = cx/100;
    }
    else if(unit2=="in")
    {
        bx = (0.0254)*bx;
        cx = (0.0254)*cx;
    }
    else if(unit2=="ft")
    {
        bx = (0.3048)*bx;
        cx = (0.3048)*cx;
    }
    document.getElementById("17").innerHTML=(bx.toFixed(2)+" m X "+cx.toFixed(2)+" m");
    document.getElementById("6").innerHTML=unit1;
    document.getElementById("20").innerHTML=" ( "+dm.toFixed(2);
    document.getElementById("21").innerHTML="m )";
    ang = parseFloat(114.5916*(Math.atan((bx)/(2*dm))));
    //document.getElementById("22").innerHTML="( "+bx+" / (2 x "+dm+" )) = "+ang+" degress";
    angr = Math.round(ang);
    document.getElementById("22").innerHTML=ang.toFixed(2)+" degrees";
    hpix = parseFloat(ang*(60.00));
    vpix = parseFloat((hpix*cx)/(bx));
    document.getElementById("23").innerHTML=parseInt(hpix)+" X "+parseInt(vpix);
}