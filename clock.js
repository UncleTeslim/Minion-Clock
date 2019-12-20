var wakeuptime = 6;
var noon = 12;
var lunchtime = 14;
var bedtime = 22;
var partytime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://cdn.pixabay.com/photo/2015/08/14/19/41/minion-888797__340.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var minionimgJS = document.getElementById('minionimg');
  
  if (time == partytime)
  {
    image = "https://cdn.pixabay.com/photo/2018/01/23/18/31/minions-guitar-3102083__340.jpg";
    messageText = "Let's party!";
  }
  else if (time == wakeuptime)
  {
    image = "https://cdn.pixabay.com/photo/2015/10/05/17/09/minion-972908__340.jpg";
    messageText = "Wake up!";
  }
  else if (time == lunchtime)
  {
    image = "https://cdn.pixabay.com/photo/2016/05/17/12/13/minions-1398000__340.jpg";
    messageText = "Let's have some lunch!";
  }
  else if (time == bedtime)
  {
    image = "https://cdn.pixabay.com/photo/2016/11/21/11/25/blue-1844759__340.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "https://cdn.pixabay.com/photo/2016/05/04/17/36/minion-1372249__340.jpg";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "https://cdn.pixabay.com/photo/2015/07/31/14/36/figure-869155__340.jpg";
    messageText = "Good evening!";
  }
  else
  {
    image = "https://cdn.pixabay.com/photo/2016/04/19/01/09/minion-1337819__340.jpg";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  minionimg.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var bedTimeSelector =  document.getElementById("bedTimeSelector");

var bedEvent = function()
{
    bedtime = bedTimeSelector.value;
};

bedTimeSelector.addEventListener("change", bedEvent);