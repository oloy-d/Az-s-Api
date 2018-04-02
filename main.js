function getData() {
  var x = new XMLHttpRequest();
  var method = "GET";
  var url = "https://apifootball.com/api/?action=get_events&from=2018-01-30&to=2018-12-01&league_id=62&APIkey=68e59b4c5f3aec612123d2d52b39239e30ba1dfd53149f07c32de0a3a2efb8f4";
  x.open(method,url,true);
  x.onload = function(seun) {
    let data = JSON.parse(seun.currentTarget.response);
     console.log(data);


       var  match_awayteam_name="", match_awayteam_score="",  match_hometeam_name ="", match_hometeam_score ="";
          match_awayteam_name  += "Away Team<hr><tr>";

           for (i = 1; i < data.length; i++) {
               match_awayteam_name += "<td>" + data[i].match_awayteam_name + "</td><br>";
               // match_awayteam_score += "<tr><td>" + data[i].match_awayteam_score+ "</td></tr>";
           };
           match_awayteam_name += "</tr>";
           document.getElementById("demo").innerHTML = match_awayteam_name;

       match_awayteam_score  += "Score<hr><tr>";

        for (i = 1; i < data.length; i++) {
            match_awayteam_score += "<td>" + data[i].match_awayteam_score + "</td><br>";
        };

        document.getElementById("demo2").innerHTML = match_awayteam_score;
          match_hometeam_score  += "Score <hr><tr>";
             for (i = 1; i < data.length; i++) {
                 match_hometeam_score += "<td>" + data[i].match_hometeam_score + "</td><br>";
             }
             match_hometeam_score += "</tr>";
             document.getElementById("demo4").innerHTML = match_hometeam_score;
               match_hometeam_name += "Home Team<hr></tr>";
        for (i = 1; i < data.length; i++) {
            match_hometeam_name += "<td>" + data[i].match_hometeam_name + "</td><br>";
            // match_awayteam_score += "<tr><td>" + data[i].match_awayteam_score+ "</td></tr>";
        }
        match_hometeam_name += "</tr>";
        document.getElementById("demo3").innerHTML = match_hometeam_name;




    x.send()
  }



  x.send();
}
