let heading = document.getElementById("heading")
    let input = document.getElementById("inputText")
    let para = document.getElementById("Para")

// change heading
    document.getElementById("changetextBtn").onclick = function(){ 
        heading.innerText=input.value;
    };
    // change event
    input.onchnage  = function(){
        console.log("Input changed : ", input .value);

    };
    document.getElementById("bgColorBtn").addEventListener("click", function() {
        documnet.body.style.backgroundColor="lightblue";
    });
      document.getElementById("fontSizeBtn").addEventListener("click",function(){
        heading.style.fontSize="40px";
      });
    //   show/hide Paragraph

    let isVisible = "true";
    documnet.getElementById("toggleParBtn").oneclick=function(){
        if(isVisible){
            para.style.display = "none";
            isVisible = "false"
        }
        else{
            para.style.display = "block";
            isVisible = true;
        }
    }
    document.getElementById("resetBtn").onclick = function(){
        location.reload();
    };
     heading.onmouseover = function(){
        heading.style.color="blue";
     }
    ;