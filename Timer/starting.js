let waste;
function run()
{
    let inp1=document.getElementsByTagName("input")[0].value;
    let inp2=document.getElementsByTagName("input")[1].value;
    let inp3=document.getElementsByTagName("input")[2].value;

    if(isNaN(inp1) || isNaN(inp2) || isNaN(inp3))
    {
        alert("Enter Numbers Only");
        return;
    }

    inp1=Number(inp1);
    inp2=Number(inp2);
    inp3=Number(inp3);

    if(inp1<0 || inp2<0 || inp3<0)
    {
        clr();
        alert("Enter positive Numbers Only");
        return;
    }

    if(inp1>99)
    inp1=99;
    if(inp2>59)
    inp2=59;
    if(inp3>59)
    inp3=59;

    document.getElementsByTagName("input")[0].value=inp1;
    document.getElementsByTagName("input")[1].value=inp2;
    document.getElementsByTagName("input")[2].value=inp3;

    let val2=inp1%10;
    let val1=(inp1-val2)/10;

    let val4=inp2%10;
    let val3=(inp2-val4)/10;

    let val6=inp3%10;
    let val5=(inp3-val6)/10;

    waste=setInterval(function () {

        let h1=document.getElementsByTagName("span")[0];
        let h2=document.getElementsByTagName("span")[1];
        let m3=document.getElementsByTagName("span")[2];
        let m4=document.getElementsByTagName("span")[3];
        let s5=document.getElementsByTagName("span")[4];
        let s6=document.getElementsByTagName("span")[5];

        console.log(val6);

        h1.innerHTML=val1;
        h2.innerHTML=val2;
        m3.innerHTML=val3;
        m4.innerHTML=val4;
        s5.innerHTML=val5;
        s6.innerHTML=val6;

        if(val6>0)
        {
            val6--;
        }
        else
        {
            if(val5>0)
            {
                val5--;
                val6=9;
            }
            else
            {
                if(val4>0)
                {
                    val4--;
                    val5=5;
                    val6=9;
                }
                else
                {
                    if(val3>0)
                    {
                        val3--;
                        val4=9;
                        val5=5;
                        val6=9;
                    }
                    else
                    {
                        if(val2>0)
                        {
                            val2--;
                            val3=5;
                            val4=9;
                            val5=5;
                            val6=9;
                        }
                        else
                        {
                            if(val1>0)
                            {
                                val1--;
                                val2=9;
                                val3=5;
                                val4=9;
                                val5=5;
                                val6=9;
                            }
                            else
                            {
                                clearInterval(waste);
                                let v=document.getElementById("zip");
                                v.play();
                            }
                        }
                    }
                }
            }
        }
    },1000);
}

function clr()
{
    let h1=document.getElementsByTagName("span")[0];
    let h2=document.getElementsByTagName("span")[1];
    let m3=document.getElementsByTagName("span")[2];
    let m4=document.getElementsByTagName("span")[3];
    let s5=document.getElementsByTagName("span")[4];
    let s6=document.getElementsByTagName("span")[5];
    h1.innerHTML=0;
    h2.innerHTML=0;
    m3.innerHTML=0;
    m4.innerHTML=0;
    s5.innerHTML=0;
    s6.innerHTML=0;  
    
    let inp1=document.getElementsByTagName("input")[0].value="";
    let inp2=document.getElementsByTagName("input")[1].value="";
    let inp3=document.getElementsByTagName("input")[2].value="";

    let v=document.getElementById("zip");
    v.pause();
    v.load();

    clearInterval(waste);
}

