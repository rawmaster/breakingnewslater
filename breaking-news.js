//<![CDATA[
// Breaking News
$(document).ready(function(){var e="https://ubedbox.blogspot.com/",t=2;$.ajax({url:""+e+"/feeds/posts/default?alt=json-in-script&max-results="+t,type:"get",dataType:"jsonp",success:function(e){function t(){$("#adbreakingnews li:first").noslide(function(){$(this).appendTo($("#adbreakingnews ul")).slideDown()})}var n,r,s="",a=e.feed.entry;if(void 0!==a){s="<ul>";for(var l=0;l<a.length;l++){for(var o=0;o<a[l].link.length;o++)if("alternate"==a[l].link[o].rel){n=a[l].link[o].href;break}r=a[l].title.$t,s+='<li><a href="'+n+'" target="_blank">'+r+"</a></li>"}s+="</ul>",$("#adbreakingnews").html(s),setInterval(function(){t()},5e3)}else $("#adbreakingnews").html("<span>No result!</span>")},error:function(){$("#adbreakingnews").html("<strong>Error Loading Feed!</strong>")}})});
//]]>
