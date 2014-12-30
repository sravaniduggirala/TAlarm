function getStopInfo(form) {
    var fromStop = form.fromStop.value;
    alert ("You typed: " + fromStop);
	var toStop = form.toStop.value;
$.getJSON("http://realtime.mbta.com/developer/api/v2/schedulebystop?api_key=wX9NwuHnZU2ToO7GmGR9uw&stop=Alewife&direction=0&format=json",function(data){
	
});
}
