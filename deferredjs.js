function sizeAboutBlankIframes()
{
         console.log('hi'); 
$("iframe.swarm-iframe").each(function(){
         var newwidth = $(this).width();
   		    		$(this).css({"height": newwidth/1.8 });
    });
}
sizeAboutBlankIframes();
