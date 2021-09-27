function Guild(x) {
		if (x==null) guild++; else guild=x;
	
		 if (guild==0) { 
			add("A sign looms up large on the side. Upon it lies a painting of three faceless jesters on it. One is kicking the rump of the second who is pushing a pie into the face of the third who is holding a lute. Underneath them, lie the words Bard's Guild. I am finally here. And no longer certain if I want to be.<br> I had first seen a bard, at age 6, after Lord Whitwere celebrated the birth of his first child in our village of Mayflower. At the feast, he had brought his bard, Adam Cutter, from the castle. A man of who was graciously allowed to talk freely of all, including the lord and his lady.<br>. Adam was dressed in clothes much finer than anyone at our village ever wore. His words were simple but everyone smiled at them. Our village mother, he called 'a sweet face among other sweet faces. Indeed, a fair face leading the sweet puddin\' race'. He sang songs, beautiful ones, both traditional and unknown.");
				pick("I enter", "Guild(3)");
				pick("I walk away","Village()");
			
			
		}
		if (guild==1) {
			add("Tardy are we? ");
			if (have("drunk")) add("Got pissed too? ");
			if (have("flirt")) add("Played with Milly too, I heard. ");
			add("Get inside you lout!<br>");
			pick("I flee!","Guild()");
			pick("I go inside","del(\"drunk\"); Guild(3);");
		}
		if (guild==2) {
			add("Wake up in a ditch with a raging hangover!");
		}
		if (guild==3) {
			//Converge
			add("Go to sleep and wake up ready for class.");
			
		}
		
	}