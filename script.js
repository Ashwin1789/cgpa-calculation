var total1;
function submit1()
    {
        /*communication skills calculation*/
        var cs1_1
        cs1=document.getElementById("cs1").value;
        if(cs1=="O")
        {
            cs1_1=20;
        }
        if(cs1=="A+")
        {
            cs1_1=18;
        }
        if(cs1=="A")
        {
            cs1_1=16;
        }
        if(cs1=="B+")
        {
            cs1_1=14;
        }
        if(cs1=="B")
        {
            cs1_1=12;
        }
        if(cs1=="RA")
        {
            cs1_1=0;
        }

        /*calculus and Differential Equation*/
  
        var cde1_1
        cde1=document.getElementById("cde").value;
        if(cde1=="O")
        {
            cde1_1=40;
        }
        if(cde1=="A+")
        {
            cde1_1=36;
        }
        if(cde1=="A")
        {
            cde1_1=32;
        }
        if(cde1=="B+")
        {
            cde1_1=28;
        }
        if(cde1=="B")
        {
            cde1_1=24;
        }
        if(cde1=="RA")
        {
            cde1_1=0;
        }
        
        /*applied chemistry calculation*/

        var ac1_1
        ac1=document.getElementById("ac").value;
        if(ac1=="O")
        {
            ac1_1=30;
        }
        if(ac1=="A+")
        {
            ac1_1=27;
        }
        if(ac1=="A")
        {
            ac1_1=24;
        }
        if(ac1=="B+")
        {
            ac1_1=21;
        }
        if(ac1=="B")
        {
            ac1_1=18;
        }
        if(ac1=="RA")
        {
            ac1_1=0;
        }

        /*Engineering mechanics*/
    
        var em1_1
        em1=document.getElementById("em").value;
        if(em1=="O")
        {
            em1_1=40;
        }
        if(ac1=="A+")
        {
            em1_1=36;
        }
        if(em1=="A")
        {
            em1_1=32;
        }
        if(em1=="B+")
        {
            em1_1=28;
        }
        if(em1=="B")
        {
            em1_1=24;
        }
        if(em1=="RA")
        {
            em1_1=0;
        }

        /*programming for problem solving calculation*/

        var pps1_1
        pps1=document.getElementById("pps").value;
        if(pps1=="O")
        {
            pps1_1=30;
        }
        if(pps1=="A+")
        {
            pps1_1=27;
        }
        if(pps1=="A")
        {
            pps1_1=24;
        }
        if(pps1=="B+")
        {
            pps1_1=21;
        }
        if(pps1=="B")
        {
            pps1_1=18;
        }
        if(pps1=="RA")
        {
            pps1_1=0;
        }

        /*chemistry lab calculation*/

        var cl1_1
        cl1=document.getElementById("cl").value;
        if(cl1=="O")
        {
            cl1_1=20;
        }
        if(cl1=="A+")
        {
            cl1_1=18;
        }
        if(cl1=="A")
        {
            cl1_1=16;
        }
        if(cl1=="B+")
        {
            cl1_1=14;
        }
        if(cl1=="B")
        {
            cl1_1=12;
        }
        if(cl1=="RA")
        {
            cl1_1=0;
        }

        /*programming for problem solving calculation*/

        var ppsl1_1
        ppsl1=document.getElementById("ppsl").value;
        if(ppsl1=="O")
        {
            ppsl1_1=20;
        }
        if(ppsl1=="A+")
        {
            ppsl1_1=18;
        }
        if(ppsl1=="A")
        {
            ppsl1_1=16;
        }
        if(ppsl1=="B+")
        {
            ppsl1_1=14;
        }
        if(ppsl1=="B")
        {
            ppsl1_1=12;
        }
        if(pps1=="RA")
        {
            ppsl1_1=0;
        }
        
        total1=cs1_1+cde1_1+ac1_1+em1_1+pps1_1+cl1_1+ppsl1_1;
        var total_1="SEMESTER 1 SGPA : " +total1/20 +" SGPA";
        document.getElementById("output1").innerHTML=total_1;
        document.getElementById("output1_1").innerHTML=total1;


    }
    



/********************************************************************************************************************************* */



    /* semester 2 script*/
var total2;
function submit2()
    {
        /*communication skills calculation 2*/
        var cs2_2
        cs2=document.getElementById("cs2").value;
        if(cs2=="O")
        {
            cs2_2=20;
        }
        if(cs2=="A+")
        {
            cs2_2=18;
        }
        if(cs2=="A")
        {
            cs2_2=16;
        }
        if(cs2=="B+")
        {
            cs2_2=14;
        }
        if(cs2=="B")
        {
            cs2_2=12;
        }
        if(cs2=="RA")
        {
            cs2_2=0;
        }

        /*Laplace Transform and complex variables*/
  
        var ltcv1_1
        ltcv1=document.getElementById("ltcv").value;
        if(ltcv1=="O")
        {
            ltcv1_1=40;
        }
        if(ltcv1=="A+")
        {
            ltcv1_1=36;
        }
        if(ltcv1=="A")
        {
            ltcv1_1=32;
        }
        if(ltcv1=="B+")
        {
            ltcv1_1=28;
        }
        if(ltcv1=="B")
        {
            ltcv1_1=24;
        }
        if(ltcv1=="RA")
        {
            ltcv1_1=0;
        }
        
        /*semiconductor optoelectronics*/

        var so1_1
        so1=document.getElementById("so").value;
        if(so1=="O")
        {
            so1_1=30;
        }
        if(so1=="A+")
        {
            so1_1=27;
        }
        if(so1=="A")
        {
            so1_1=24;
        }
        if(so1=="B+")
        {
            so1_1=21;
        }
        if(so1=="B")
        {
            so1_1=18;
        }
        if(so1=="RA")
        {
            so1_1=0;
        }

        /*basic Electrical Engineering*/
    
        var bee1_1
        bee1=document.getElementById("bee").value;
        if(bee1=="O")
        {
            bee1_1=30;
        }
        if(bee1=="A+")
        {
            bee1_1=27;
        }
        if(bee1=="A")
        {
            bee1_1=24;
        }
        if(bee1=="B+")
        {
            bee1_1=21;
        }
        if(bee1=="B")
        {
            bee1_1=18;
        }
        if(bee1=="RA")
        {
            bee1_1=0;
        }

        /*Engineering Graphics*/

        var eg1_1
        eg1=document.getElementById("eg").value;
        if(eg1=="O")
        {
            eg1_1=40;
        }
        if(eg1=="A+")
        {
            eg1_1=36;
        }
        if(eg1=="A")
        {
            eg1_1=32;
        }
        if(eg1=="B+")
        {
            eg1_1=28;
        }
        if(eg1=="B")
        {
            eg1_1=24;
        }
        if(eg1=="RA")
        {
            eg1_1=0;
        }

        /*Applied Physics lab calculation*/

        var apl1_1
        apl1=document.getElementById("apl").value;
        if(apl1=="O")
        {
            apl1_1=20;
        }
        if(apl1=="A+")
        {
            apl1_1=18;
        }
        if(apl1=="A")
        {
            apl1_1=16;
        }
        if(apl1=="B+")
        {
            apl1_1=14;
        }
        if(apl1=="B")
        {
            apl1_1=12;
        }
        if(apl1=="RA")
        {
            apl1_1=0;
        }

        /*Engineering Practices lab*/

        var epl1_1
        epl1=document.getElementById("epl").value;
        if(epl1=="O")
        {
            epl1_1=20;
        }
        if(epl1=="A+")
        {
            epl1_1=18;
        }
        if(epl1=="A")
        {
            epl1_1=16;
        }
        if(epl1=="B+")
        {
            epl1_1=14;
        }
        if(epl1=="B")
        {
            epl1_1=12;
        }      
        if(epl1=="RA")
        {
            epl1_1=0;
        } 
          
    var total2=cs2_2+ltcv1_1+so1_1+bee1_1+eg1_1+apl1_1+epl1_1;
    var total_2="SEMESTER 2 SGPA : " +total2/20 +" SGPA";
    document.getElementById("output2").innerHTML=total_2;
    document.getElementById("output2_2").innerHTML=total2;
}
    

/* ********************************************************************************************************************   */    



    /* semester 3 script*/


function submit3()
{
    /*PROBABILITY AND STATISTICS*/
    var pands1_1
    pands1=document.getElementById("pands").value;
    if(pands1=="O")
    {
        pands1_1=40;
    }
    if(pands1=="A+")
    {
        pands1_1=36;
    }
    if(pands1=="A")
    {
        pands1_1=32;
    }
    if(pands1=="B+")
    {
        pands1_1=28;
    }
    if(pands1=="B")
    {
        pands1_1=24;
    }
    if(pands1=="RA")
    {
        pands1_1=0;
    }

    /*data sturcture*/

    var ds1_1
    ds1=document.getElementById("ds").value;
    if(ds1=="O")
    {
        ds1_1=30;
    }
    if(ds1=="A+")
    {
        ds1_1=27;
    }
    if(ds1=="A")
    {
        ds1_1=24;
    }
    if(ds1=="B+")
    {
        ds1_1=21;
    }
    if(ds1=="B")
    {
        ds1_1=18;
    }
    if(ds1=="RA")
    {
        ds1_1=0;
    }
    
    /*Object Oriented Programming*/

    var oops1_1
    oops1=document.getElementById("oops").value;
    if(oops1=="O")
    {
        oops1_1=30;
    }
    if(oops1=="A+")
    {
        oops1_1=27;
    }
    if(oops1=="A")
    {
        oops1_1=24;
    }
    if(oops1=="B+")
    {
        oops1_1=21;
    }
    if(oops1=="B")
    {
        oops1_1=18;
    }
    if(oops1=="RA")
    {
        oops1_1=0;
    }

    /*Digital Logic Circuits*/

    var dlc1_1
    dlc1=document.getElementById("dlc").value;
    if(dlc1=="O")
    {
        dlc1_1=50;
    }
    if(dlc1=="A+")
    {
        dlc1_1=45;
    }
    if(dlc1=="A")
    {
        dlc1_1=40;
    }
    if(dlc1=="B+")
    {
        dlc1_1=35;
    }
    if(dlc1=="B")
    {
        dlc1_1=30;
    }
    if(dlc1=="RA")
    {
        dlc1_1=0;
    }

    /*Software Engineering*/

    var se1_1
    se1=document.getElementById("se").value;
    if(se1=="O")
    {
        se1_1=40;
    }
    if(se1=="A+")
    {
        se1_1=36;
    }
    if(se1=="A")
    {
        se1_1=32;
    }
    if(se1=="B+")
    {
        se1_1=28;
    }
    if(se1=="B")
    {
        se1_1=24;
    }
    if(se1=="RA")
    {
        se1_1=0;
    }



    /*Data Structures Laboratory*/

    var dsl1_1
    dsl1=document.getElementById("dsl").value;
    if(dsl1=="O")
    {
        dsl1_1=20;
    }
    if(dsl1=="A+")
    {
        dsl1_1=18;
    }
    if(dsl1=="A")
    {
        dsl1_1=16;
    }
    if(dsl1=="B+")
    {
        dsl1_1=14;
    }
    if(dsl1=="B")
    {
        dsl1_1=12;
    }
    if(dsl1=="RA")
    {
        dsl1_1=0;
    }

    /*Object Oriented Programming Laboratory*/

    var oopsl1_1
    oopsl1=document.getElementById("oopsl").value;
    if(oopsl1=="O")
    {
        oopsl1_1=20;
    }
    if(oopsl1=="A+")
    {
        oopsl1_1=18;
    }
    if(oopsl1=="A")
    {
        oopsl1_1=16;
    }
    if(oopsl1=="B+")
    {
        oopsl1_1=14;
    }
    if(oopsl1=="B")
    {
        oopsl1_1=12;
    }       
    if(oopsl1=="RA")
    {
        oopsl1_1=0;
    }
    var total3=pands1_1+ds1_1+oops1_1+dlc1_1+se1_1+dsl1_1+oopsl1_1;
    total_3="SEMESTER 3 SGPA : " +total3/23 +" SGPA";
    document.getElementById("output3").innerHTML=total_3;
    document.getElementById("output3_3").innerHTML=total3;  

}


/************************************************************************************************************************* */


    /* semester 4 script*/


    function submit4()
    {
        /*Discrete mathematics */

        var dm1_1
        dm1=document.getElementById("dm").value;
        if(dm1=="O")
        {
            dm1_1=40;
        }
        if(dm1=="A+")
        {
            dm1_1=36;
        }
        if(dm1=="A")
        {
            dm1_1=32;
        }
        if(dm1=="B+")
        {
            dm1_1=28;
        }
        if(dm1=="B")
        {
            dm1_1=24;
        }
        if(dm1=="RA")
        {
            dm1_1=0;
        }
    
        /*Design and Analysis of Algorithm */
    
        var daa1_1
        daa1=document.getElementById("daa").value;
        if(daa1=="O")
        {
            daa1_1=30;
        }
        if(daa1=="A+")
        {
            daa1_1=27;
        }
        if(daa1=="A")
        {
            daa1_1=24;
        }
        if(daa1=="B+")
        {
            daa1_1=21;
        }
        if(daa1=="B")
        {
            daa1_1=18;
        }
        if(daa1=="RA")
        {
            daa1_1=0;
        }
        
        /*javga programming */
    
        var jp1_1
        jp1=document.getElementById("jp").value;
        if(jp1=="O")
        {
            jp1_1=30;
        }
        if(jp1=="A+")
        {
            jp1_1=27;
        }
        if(jp1=="A")
        {
            jp1_1=24;
        }
        if(jp1=="B+")
        {
            jp1_1=21;
        }
        if(jp1=="B")
        {
            jp1_1=18;
        }
        if(jp1=="RA")
        {
            jpl1_1=0;
        }
    
        /* Computer Organization and Architecture */
    
        var coa1_1
        coa1=document.getElementById("coa").value;
        if(coa1=="O")
        {
            coa1_1=30;
        }
        if(coa1=="A+")
        {
            coa1_1=27;
        }
        if(coa1=="A")
        {
            coa1_1=24;
        }
        if(coa1=="B+")
        {
            coa1_1=21;
        }
        if(coa1=="B")
        {
            coa1_1=18;
        }
        if(coa1=="RA")
        {
            coa1_1=0;
        }
    
        /* Operating System */
    
        var os1_1
        os1=document.getElementById("os").value;
        if(os1=="O")
        {
            os1_1=30;
        }
        if(os1=="A+")
        {
            os1_1=27;
        }
        if(os1=="A")
        {
            os1_1=24;
        }
        if(os1=="B+")
        {
            os1_1=21;
        }
        if(os1=="B")
        {
            os1_1=18;
        }
        if(osl=="RA")
        {
            osl1_1=0;
        }
    
    
        /* Open Elective One */
    
        var oeo1_1
        oeo1=document.getElementById("oeo").value;
        if(oeo1=="O")
        {
            oeo1_1=30;
        }
        if(oeo1=="A+")
        {
            oeo1_1=27;
        }
        if(oeo1=="A")
        {
            oeo1_1=24;
        }
        if(oeo1=="B+")
        {
            oeo1_1=21;
        }
        if(oeo1=="B")
        {
            oeo1_1=18;
        }
        if(oeo1="RA")
        {
            oeo1_1=0;
        }
    
        /* java programming laboratory */
    
        var jpl1_1
        jpl1=document.getElementById("jpl").value;
        if(jpl1=="O")
        {
            jpl1_1=20;
        }
        if(jpl1=="A+")
        {
            jpl1_1=18;
        }
        if(jpl1=="A")
        {
            jpl1_1=16;
        }
        if(jpl1=="B+")
        {
            jpl1_1=14;
        }
        if(jpl1=="B")
        {
            jpl1_1=12;
        }
        if(jpl1=="RA")
        {
            jpl1_1=0;
        }  
        
        
        /*Operating systyem and open source laboratory */

        var osl1_1
        osl1=document.getElementById("osl").value;
        if(osl1=="O")
        {
            osl1_1=20;
        }
        if(osl1=="A+")
        {
            osl1_1=18;
        }
        if(osl1=="A")
        {
            osl1_1=16;
        }
        if(osl1=="B+")
        {
            osl1_1=14;
        }
        if(osl1=="B")
        {
            osl1_1=12;
        }
        if(osl1=="RA")
        {
            osl1_1=0;
        }
        var total4=dm1_1+daa1_1+jp1_1+coa1_1+os1_1+oeo1_1+jpl1_1+osl1_1;
        total_4="SEMESTER 4 SGPA : " +total4/23 + "SGPA";
        document.getElementById("output4").innerHTML=total_4; 
        document.getElementById("output4_4").innerHTML=total4;
    }



/*************************************************************************************************************************** */


    /* semester 5 script*/


    function submit5()
    {
        /* Computer Networking */

        var cn1_1
        cn1=document.getElementById("cn").value;
        if(cn1=="O")
        {
            cn1_1=30;
        }
        if(cn1=="A+")
        {
            cn1_1=27;
        }
        if(cn1=="A")
        {
            cn1_1=24;
        }
        if(cn1=="B+")
        {
            cn1_1=21;
        }
        if(cn1=="B")
        {
            cn1_1=18;
        }
        if(cn1=="RA")
        {
            cn1_1=0;
        }
    
        /*  Database Management System */
    
        var dbms1_1
        dbms1=document.getElementById("dbms").value;
        if(dbms1=="O")
        {
            dbms1_1=30;
        }
        if(dbms1=="A+")
        {
            dbms1_1=27;
        }
        if(dbms1=="A")
        {
            dbms1_1=24;
        }
        if(dbms1=="B+")
        {
            dbms1_1=21;
        }
        if(dbms1=="B")
        {
            dbms1_1=18;
        }
        if(dbms1=="RA")
        {
            dbms1_1=0;
        }
        
        /* programming using python */
    
        var pp1_1
        pp1=document.getElementById("pp").value;
        if(pp1=="O")
        {
            pp1_1=40;
        }
        if(pp1=="A+")
        {
            pp1_1=36;
        }
        if(pp1=="A")
        {
            pp1_1=32;
        }
        if(pp1=="B+")
        {
            pp1_1=28;
        }
        if(pp1=="B")
        {
            pp1_1=24;
        }
        if(pp=="RA")
        {
            pp1_1=0;
        }
    
        /* Elective */
    
        var e1_1
        e1=document.getElementById("e").value;
        if(e1=="O")
        {
            e1_1=30;
        }
        if(e1=="A+")
        {
            e1_1=27;
        }
        if(e1=="A")
        {
            e1_1=24;
        }
        if(e1=="B+")
        {
            e1_1=21;
        }
        if(e1=="B")
        {
            e1_1=18;
        }
        if(e1=="RA")
        {
            e1_1=0;
        }
    
        /* OpenElective 2 */
    
        var oet1_1
        oet1=document.getElementById("oet").value;
        if(oet1=="O")
        {
            oet1_1=30;
        }
        if(oet1=="A+")
        {
            oet1_1=27;
        }
        if(oet1=="A")
        {
            oet1_1=24;
        }
        if(oet1=="B+")
        {
            oet1_1=21;
        }
        if(oet1=="B")
        {
            oet1_1=18;
        }
        if(oet1=="RA")
        {
            oet1_1=0;
        }
    
    
        /* Networking Laboratory */
    
        var nl1_1
        nl1=document.getElementById("nl").value;
        if(nl1=="O")
        {
            nl1_1=20;
        }
        if(nl1=="A+")
        {
            nl1_1=18;
        }
        if(nl1=="A")
        {
            nl1_1=16;
        }
        if(nl1=="B+")
        {
            nl1_1=14;
        }
        if(nl1=="B")
        {
            nl1_1=12;
        }
        if(nl1=="RA")
        {
            nl1_1=0;
        }
    
        /* Database Management System Laboratory */
    
        var dbmsl1_1
        dbmsl1=document.getElementById("dbmsl").value;
        if(dbmsl1=="O")
        {
            dbmsl1_1=20;
        }
        if(dbmsl1=="A+")
        {
            dbmsl1_1=18;
        }
        if(dbmsl1=="A")
        {
            dbmsl1_1=16;
        }
        if(dbmsl1=="B+")
        {
            dbmsl1_1=14;
        }
        if(dbmsl1=="B")
        {
            dbmsl1_1=12;
        }  
        if(dbmsl1=="RA")
        {
            dbmsl1_1=0;
        }
        

        var total5=cn1_1+dbms1_1+pp1_1+e1_1+oet1_1+nl1_1+dbmsl1_1;
        total_5="SEMESTER 5 SGPA : " +total5/20 + "SGPA";
        document.getElementById("output5").innerHTML=total_5; 
        document.getElementById("output5_5").innerHTML=total5;
    }



/*************************************************************************************************************************************** */