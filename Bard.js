tag = "";
guild = -1;
village = -1;
myroom= -1;
locwas = "start";
story = document.getElementById("story");
choose = document.getElementById("choose");



//Add HTML text to div story
function add(x) { story.innerHTML += x+"<br>"; }
//Display button with text x and onclick string f, in div choose
function pick(x,f) { choose.innerHTML += "<button onclick=' chose(this);"+f+"'>"+x+"</button><br>"; }
//Convert element x text to div with green text, and clear choose div
function chose(x) { 
					add("<br><div style='color:green'>"+ x.innerText +"</div><br><br>");
					choose.innerHTML ="";
}
//Add tag x
function set(x) { tag+=x+" "; }
//If found x in tag var, return true else false
function have(x) { if (tag.search(x) >= 0) return true; else return false; }
//Del tag x from tag, display err if x not found
function del(x) { if (have(x) ) tag = tag.replace(x+" ",""); else add("<br>ERR:" + x +  " not found!"); }



//Begin story
Guild();