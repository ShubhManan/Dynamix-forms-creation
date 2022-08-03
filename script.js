
function myFunction(){
    var x = document.getElementById("input").value;
    if( x === ''){
        alert("Please enter a number");
    } else{
        var f = document.createElement("form");
        f.id = 'f';
        for(i=0;i<x;i++)
        {
            var d = document.createElement('select');
            var arr = ['input','drop-down','radio-button','check-box','text-area'];
            for(j=0;j<5;j++){
                var newOption = document.createElement('option');
                var optionText = document.createTextNode(arr[j]);
                newOption.appendChild(optionText);
                d.appendChild(newOption);
            }   
                d.id = 'select' + i;
                f.appendChild(d);
                d='';
                var b = document.createElement('br');
                f.appendChild(b);
                
        
                
        }
        var b = document.createElement('br');
                f.appendChild(b);
                var b = document.createElement('br');
                f.appendChild(b);
                var sub = document.createElement('input');
                sub.type = "submit";
                sub.id = "sub";
        f.appendChild(sub);
        document.getElementsByTagName('body')[0].appendChild(f);
        document.getElementById("input").value = null;
        var sb = document.getElementById('f');
        sb.addEventListener("submit",function(e){
            var t = document.createElement("form");
            t.action = "index1.html";
            t.method = "POST";
            var b = document.createElement('br');
            t.appendChild(b); 
            var b = document.createElement('br');
            t.appendChild(b);
            for(k = 0;k < x;k++){
                var str;
               str = document.getElementById("select" + k);
                var p = document.createElement('label');
                p.innerHTML = str.value + "-  ";
                t.appendChild(p);
                switch(str.value){
                    case 'input' : input()
               
                    break;
                    case 'drop-down' : dropdown()
                    break;
                    case 'radio-button' : radiobutton()
                    break;
                    case 'check-box' : checkbox()
                    break;
                    case 'text-area' : textarea()
                    break;
                }
                var b = document.createElement('br');
                t.appendChild(b);
             
            }
            var sub = document.createElement('input');
                sub.type = "submit";
                sub.preventDefault;
                sub.onclick = function final(){
                    var strFinal = '';
                    for(t = 0;t < x;t++){
                        var str2;

                       str2 = document.getElementById("select" + t);
                        switch(str2.value){
                            case 'input' : strFinal += 't:'+ document.getElementById("input"+t).value + ':' + document.getElementById("length"+t).value+'-';
                            break;
                            case 'drop-down' : strFinal += 'd:'+ document.getElementById("dropdown"+t).value + ':' + document.getElementById("optionsD"+t).value+'-';
                            break;
                            case 'radio-button' : strFinal += 'r:'+ document.getElementById("radio"+t).value + ':' + document.getElementById("optionsR"+t).value+'-';
                            break;
                            case 'check-box' : strFinal += 'c:'+ document.getElementById("check"+t).value + ':' + document.getElementById("optionsC"+t).value+'-';
                            break;
                            case 'text-area' : strFinal += 'a:'+ document.getElementById("text"+t).value + ':' + document.getElementById("rowcol"+t).value+'-';
                            break;
                        }
                }
                //sessionStorage.setItem("Final",strFinal);
                const textToBLOB = new Blob([strFinal], { type: 'text/plain' });
                const sFileName = document.getElementById("input1").value;	   // The file to save the data.

                let newLink = document.createElement("a");
                newLink.download = sFileName;

                if (window.webkitURL != null) {
                newLink.href = window.webkitURL.createObjectURL(textToBLOB);
                }
                else {
                newLink.href = window.URL.createObjectURL(textToBLOB);
                newLink.style.display = "none";
                document.body.appendChild(newLink);
                }

                newLink.click(); 
            };
            t.appendChild(sub);
            
            document.getElementsByTagName('body')[0].appendChild(t);

            function input(){
          
                var q = document.createElement("input");
                q.type = "text";
                q.placeholder = "enter label";
                q.id = 'input' + k;
                var w = document.createElement("input");
                w.type = "text";
                w.id = 'length' + k;
                w.placeholder = "enter min & max length";
                t.appendChild(q);
                t.appendChild(w);

            }
            function dropdown(){
                var q = document.createElement("input");
                q.type = "text";
                q.placeholder = "enter label";
                q.id = 'dropdown' + k;
                var w = document.createElement("input");
                w.type = "text";
                w.placeholder = "options";
                w.id = 'optionsD' + k;
                t.appendChild(q);
                t.appendChild(w);

            }
            function radiobutton(){
                var q = document.createElement("input");
                q.type = "text";
                q.placeholder = "enter label";
                q.id = 'radio' + k;
                var w = document.createElement("input");
                w.type = "text";
                w.placeholder = "options";
                w.id = 'optionsR' + k;
                t.appendChild(q);
                t.appendChild(w);

            }

            function checkbox(){
                var q = document.createElement("input");
                q.type = "text";
                q.placeholder = "enter label";
                q.id = 'check' + k;
                var w = document.createElement("input");
                w.type = "text";
                w.placeholder = "options";
                w.id = 'optionsC' + k;
                t.appendChild(q);
                t.appendChild(w);

            }
            function textarea(){
                var q = document.createElement("input");
                q.type = "text";
                q.placeholder = "enter label";
                q.id = 'text' + k;
                var w = document.createElement("input");
                w.type = "text";
                w.id = 'rowcol' + k;
                w.placeholder = "enter rows & coloums";
                t.appendChild(q);
                t.appendChild(w);
            }

            e.preventDefault();
        })
    }
   
}
