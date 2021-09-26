<?php
echo <<<EB

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>title</title>
    <style></style>
    <script src=""></script>
  </head>
  <body>
    <!-- page content -->
	<div id="loc" style="text-align:center">Start</div>
	<div id="story">

	</div>
	<div id="choose">
	</div>
<script>
	guild = 0;
	village = 0;
	locwas = "start";
	story = document.getElementById("story");
	choose = document.getElementById("choose");
	
	Guild();
	
	function add(x) { story.innerHTML += x; }
	function pick(x,f) { choose.innerHTML += "<button onclick=' chose(this);"+f+"'>"+x+"</button><br>"; }
	function chose(x) { 
						add("<br><div style='color:green'>"+ x.innerText +"</div><br><br>");
						choose.innerHTML ="";
	}
	function Village() {
		if (village==0) {
			add("I leave the gate and walk away down a nearby dirt road. Soon, I hear the sounds of a small, nearby village. It is bustling with activity. Plainly dressed people walk to and fro. Women carry geese and fruits as they move amongst the shacks. Men carry rocks or large sack of grain and dung. The inn looks inviting with the smell of ale and wine.....but there are also mercs carrying swords and axes.<br><br>");
				pick("Upon entering the inn....","Village()");
				pick("I return to the Guild", "Guild()");
		}
		if (village==1) {
			add("I get drunk");
		}
		village++;
	}
	
	function Guild() {
		 if (guild==0) { 
			add("A sign looms up large on the side. Upon it lies a painting of three faceless jesters on it. One is kicking the rump of the second who is pushing a pie into the face of the third who is holding a lute. Underneath them, lie the words Bard's Guild. I am finally here. And no longer certain if I want to be.<br> I had first seen a bard, at age 6, after Lord Whitwere celebrated the birth of his first child in our village of Mayflower. At the feast, he had brought his bard, Adam Cutter, from the castle. A man of who was graciously allowed to talk freely of all, including the lord and his lady.<br>. Adam was dressed in clothes much finer than anyone at our village ever wore. His words were simple but everyone smiled at them. Our village mother, he called 'a sweet face among other sweet faces'. Indeed, a fair face leading the sweet puddin\' race'. He sang songs, beautiful ones, both traditional and unknown.<br>");
				pick("I enter", "Guild()");
				pick("I walk away","Village()");
			
			
		}
		guild++;
		
	}
	

</script>
 </body>
</html>
EB;