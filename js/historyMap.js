/*
  Raphaël 2.1.0 - JavaScript Vector Library                         
  Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)   
  Copyright © 2008-2012 Sencha Labs (http://sencha.com)             
  Licensed under the MIT (http://raphaeljs.com/license.html) license. 
  ***
  Document   : Vectoral Mongolian Map with RaphaelJS
  @author Margulan BYEKMURAT <http://margulan.com> <http://twitter.com/margulan @margulan>
  @author Tortuvshin Byambaa <http://tortuvshin.github.io>
*/
function historyMapStart()
{
			var tekser="";
      var R = Raphael("paper", 1000, 600);
      var attr = {
          fill: "white",
          stroke: "black",
          "stroke-width": 0.1,
          "stroke-linejoin": "round",
	        "transform": " s3.5,3.5,0,0" 
      };
      var aus = {};

      var current = null;
			var i=0;
			for (var state in paths)
			{
				i++;
        aus[i] = R.path(paths[state].path).attr(attr);
				aus[i].name = paths[state].name;
			}
      for (var state in aus) {
          aus[state].color = Raphael.getColor();
          (function (st, state) {
              st[0].style.cursor = "pointer";
              st[0].onmouseover = function () {
                  current && aus[current].animate({
                    fill: "white",
                    stroke: "black", 
                    "stroke-width": 0.2
                  }, 300);
                  st.animate({
                    fill: "white",
                    stroke: "red", 
                    "stroke-width": 3
                  }, 300);
                  st.toFront();
                  R.safari();
			$("#mapTitle").text(capitaliseFirstLetter(aus[state].name));
          current = state;
      };
      st[0].onmouseout = function () {
          st.animate({
            fill: "white",
            stroke: "black",
            "stroke-width": 0.2
          }, 300);
          st.toFront();
          R.safari();
      };
	st[0].onmouseup = function ()
	{
			$("#sehirTakirp h3").text(capitaliseFirstLetter(aus[state].name));
			innertext=information[capitaliseFirstLetter(aus[state].name)];
			
		if (tekser==aus[state].name)
		{
			$('#main_messsage_box').modal({
			  dynamic:true
			});							
		
		}
	};
	st[0].onmousedown = function ()
	{
		tekser=aus[state].name;
	};
            if (state == "nsw") {
                st[0].onmouseover();
            }
        })(aus[state], state);
    }
}
function capitaliseFirstLetter(string)
{
	return string.charAt(0).toUpperCase() + string.slice(1);
}
