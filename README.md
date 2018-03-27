# Final

1.. So far app.html is where I plan to make the search for shows by artist page since it currently has a button that is connected for a server query (if the server is running, it displays all data from the artists table); index.js is the file where this server is set up for the query.  

2.. I've started the second page, add_artist.html, and I plan to use this pages <form> for the inputs to the database. My issue up to this point is that I cannot get the post to go through to add_artist.js, which is where I'm trying to parse the data. I've tried numerous ways. Most of which seem to just completely ignore my $.post function (i get the "submitted" log from the function wrapped around this, but i can't see it getting further than that). The one time I did get a 'response' was when I changed the <form> action to http//localhost:3000, along with the $.post url parameter that references this 'action'. It then said "cannot POST/".    
