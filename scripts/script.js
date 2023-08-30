var pathArray = window.location.pathname.split('/');
if(pathArray[1] == "kb" && !pathArray[3]) { 
    document.querySelector("body").setAttribute("class", "page-home");
}
else{
    document.querySelector("body").setAttribute("class", "page-articles");
}


$("a").on("click",function(event){
  var value= $(this).text();
  var hash = $(this).attr("href");
  if (value.toLowerCase().trim() == "chat" && hash == "#"){
    event.preventDefault();
    movideskChatWidgetChangeWindowState('maximized');
  }
})
