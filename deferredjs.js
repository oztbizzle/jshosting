function sizeAboutBlankIframes()
{
$("iframe.youtu-player").each(function(){
         var newwidth = $(this).width();
   		    		$(this).css({"height": newwidth/1.8 });
    });
}

sizeAboutBlankIframes();
