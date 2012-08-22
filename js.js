/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function show_hideTable(a){
    
    switch(a)
    {
    case 1:
        
        document.getElementById('tclasses').style.color ="red";
        document.getElementById('finances').style.visibility = "hidden";
        document.getElementById('grades').style.visibility = "hidden";
        document.getElementById('admin').style.visibility = "hidden";
        document.getElementById('classes').style.visibility = "visible";
        
        break;
     case 2:
        document.getElementById('tfinances').style.color ="red";
        document.getElementById('finances').style.visibility = "visible";
        document.getElementById('admin').style.visibility = "hidden";
        document.getElementById('classes').style.visibility = "hidden";
        document.getElementById('grades').style.visibility = "hidden";
        break;
     case 3:
        document.getElementById('tgrades').style.color ="red";
        document.getElementById('finances').style.visibility = "hidden";
        document.getElementById('grades').style.visibility = "visible";
        document.getElementById('classes').style.visibility = "hidden";
        document.getElementById('admin').style.visibility = "hidden";
        break;
     case 4:
        document.getElementById('tadmin').style.color ="red";
        document.getElementById('grades').style.visibility = "hidden";
        document.getElementById('admin').style.visibility = "visible";
        document.getElementById('classes').style.visibility = "hidden";
        document.getElementById('finances').style.visibility = "hidden";
        break;
        
                    
    }
}
function mo(q)
    {
        switch(q)
        {
            case 1:
                document.getElementById('tclasses').style.color ="black";
                break;
            case 2:
                document.getElementById('tfinances').style.color ="black";
                break;            
            case 3:
                document.getElementById('tgrades').style.color ="black";
                break;
            case 4:
                document.getElementById('tadmin').style.color ="black";
                break;
            
            
        }
        
        
      
        
    }
    
 