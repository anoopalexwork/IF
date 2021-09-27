function Village(x) {
		if (x==null) village++; else village=x;
		
		if (village==0) {
			set("goVillage");
			add("I leave the gate and walk away down a nearby dirt road. Soon, I hear the sounds of a small, nearby village. It is bustling with activity. Plainly dressed people walk to and fro. Women carry geese and fruits as they move amongst the shacks. Men carry rocks or large sack of grain and dung. The inn looks inviting with the smell of ale and wine.....but there are also mercs carrying swords and axes.<br>");
				pick("Upon entering the inn....","Village()");
				pick("I return to the Guild", "Guild()");
		}
		if (village==1) {
			add("I get drunk.<br>");
			set("drunk");
			pick("Return to Guild","Guild()");
			pick("Make out with barmaid","Village()");
		}
		if (village==2) {
			add("Me and Milly the barmaid flirt for a bit.");
			set("flirt");
			pick("Then, I return to the Guild.","Guild()");
		}
	
	}