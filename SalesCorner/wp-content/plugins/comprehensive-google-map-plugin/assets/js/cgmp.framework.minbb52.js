(function(){function o(d){(function(a){var i,d,I,r,m;function v(){a("object.cgmp-json-string-placeholder").each(function(l,c){var b=a(c).attr("id"),b=a(c).find("param#json-string-"+b).val(),b=n.searchReplace(b,"'",""),b=b.replace("&quot;",""),b=w(b);if("undefined"==typeof b||!b)return!1;if(0<a("div#"+b.id).length){var d=new google.maps.Map(document.getElementById(b.id));o.initMap(d,b.bubbleautopan,parseInt(b.zoom),b.maptype);p.init(d);var g=new D;g.init(d,b.bubbleautopan);o.setMapControls({mapTypeControl:"true"===
b.maptypecontrol,panControl:"true"===b.pancontrol,zoomControl:"true"===b.zoomcontrol,scaleControl:"true"===b.scalecontrol,scrollwheel:"true"===b.scrollwheelcontrol,streetViewControl:"true"===b.streetviewcontrol,tilt:"true"===b.tiltfourtyfive?45:null,draggable:"true"===b.draggable,overviewMapControl:!0,overviewMapControlOptions:{opened:!1}});"true"===b.showpanoramio&&p.buildPanoramioLayer(b.panoramiouid);"true"===b.showbike&&p.buildBikeLayer();"true"===b.showtraffic&&p.buildTrafficLayer();null!=b.kml&&
""!=n.trim(b.kml)?p.buildKmlLayer(b.kml):(null!=b.markerlist&&""!=n.trim(b.markerlist)&&g.buildAddressMarkers(b.markerlist,b.addmarkermashup,b.addmarkermashupbubble),g.isBuildAddressMarkersCalled()||E.alertError(i.msgMissingMarkers))}})}var w=function(){s.fatal("Using parseJson stub..")};m=parseFloat(a.fn.jquery);1.4<=m?w=a.parseJSON:window.JSON&&window.JSON.parse&&(w=window.JSON.parse);m=r=I=d=i=void 0;var o=function(){var a={};return{initMap:function(c,b,d,g){a=c;var c=[],J;for(J in google.maps.MapTypeId)c.push(google.maps.MapTypeId[J]);
if(g=="OSM"){c.push(g);a.mapTypes.set(g,new google.maps.ImageMapType({getTileUrl:function(a,b){return"http://tile.openstreetmap.org/"+b+"/"+a.x+"/"+a.y+".png"},tileSize:new google.maps.Size(256,256),name:"OpenStreet",maxZoom:20}))}else if(g=="ROADMAP")g=google.maps.MapTypeId.ROADMAP;else if(g=="SATELLITE")g=google.maps.MapTypeId.SATELLITE;else if(g=="HYBRID")g=google.maps.MapTypeId.HYBRID;else if(g=="TERRAIN")g=google.maps.MapTypeId.TERRAIN;a.setOptions({zoom:d,mapTypeId:g,mapTypeControlOptions:{mapTypeIds:c}})},
setMapControls:function(c){a.setOptions(c)}}}(),p=function(){var a={};return{init:function(c){a=c},buildKmlLayer:function(c){if(c.toLowerCase().indexOf("http")<0){s.error("KML URL must start with HTTP(S). Aborting..");return false}var b=new google.maps.KmlLayer(c);google.maps.event.addListener(b,"status_changed",function(){var a=b.getStatus();if(a!=google.maps.KmlLayerStatus.OK){var c="";switch(a){case google.maps.KmlLayerStatus.DOCUMENT_NOT_FOUND:c=i.kmlNotFound;break;case google.maps.KmlLayerStatus.DOCUMENT_TOO_LARGE:c=
i.kmlTooLarge;break;case google.maps.KmlLayerStatus.FETCH_ERROR:c=i.kmlFetchError;break;case google.maps.KmlLayerStatus.INVALID_DOCUMENT:c=i.kmlDocInvalid;break;case google.maps.KmlLayerStatus.INVALID_REQUEST:c=i.kmlRequestInvalid;break;case google.maps.KmlLayerStatus.LIMITS_EXCEEDED:c=i.kmlLimits;break;case google.maps.KmlLayerStatus.TIMED_OUT:c=i.kmlTimedOut;break;case google.maps.KmlLayerStatus.UNKNOWN:c=i.kmlUnknown}if(c!=""){var d=i.kml.replace("[MSG]",c),d=d.replace("[STATUS]",a);E.alertError(d);
s.error("Google returned KML error: "+c+" ("+a+")");s.error("KML file: "+b.getUrl())}}});google.maps.event.addListener(b,"defaultviewport_changed",function(){});b.setMap(a)},buildTrafficLayer:function(){(new google.maps.TrafficLayer).setMap(a)},buildBikeLayer:function(){(new google.maps.BicyclingLayer).setMap(a)},buildPanoramioLayer:function(c){if(typeof google.maps.panoramio=="undefined"||!google.maps.panoramio||google.maps.panoramio==null){s.error("We cannot access Panoramio library. Aborting..");
return false}var b=new google.maps.panoramio.PanoramioLayer;if(b){c!=null&&c!=""&&b.setUserId(c);b.setMap(a)}else s.error("Could not instantiate Panoramio object. Aborting..")}}}(),D=function(){function l(){if(x!=null){if(k.getCenter()!=x.getCenter()){k.fitBounds(x);k.setCenter(x.getCenter())}}else if(K!=null){k.setCenter(K);k.setZoom(M)}}function c(f){a(f+" input#a_address").val("");a(f+" input#b_address").val("");a(f+" input#a_address").removeClass("d_error");a(f+" input#b_address").removeClass("d_error")}
function b(f,j){var h=W(f.content,j),e="div#direction-controls-placeholder-"+t,b=a("div#rendered-directions-placeholder-"+t);google.maps.event.addListener(f,"click",function(){c(e);a(e).fadeOut();y.setMap(null);b.html("");b.hide();a(e+" button#print_sub").hide();g(f,h,e);m(f,h,e,b);u.setContent(h.bubbleContent);u.setOptions({disableAutoPan:Q=="true"?false:true});u.open(k,this)})}function m(f,j,h,e){var b="div#bubble-"+j.bubbleHolderId,d=f.content,d=d.replace("Lat/Long: ","");a(b+" a.dirToHereTrigger").live("click",
function(){if(this.id=="toHere-"+j.bubbleHolderId){a(h).fadeIn();a(h+" input#a_address").val("");a(h+" input#b_address").val(d);a(h+" input#radio_miles").attr("checked","checked")}});a(b+" a.dirFromHereTrigger").live("click",function(){if(this.id=="fromHere-"+j.bubbleHolderId){a(h).fadeIn();a(h+" input#a_address").val(d);a(h+" input#b_address").val("");a(h+" input#radio_miles").attr("checked","checked")}});a(h+" div.d_close-wrapper").live("click",function(){c(h);a(this).parent().fadeOut();y.setMap(null);
e.html("");e.hide();a(h+" button#print_sub").hide();l();return false})}function g(f,j,h){R.getPanoramaByLocation(f.position,50,function(e,b){if(b===google.maps.StreetViewStatus.OK)a("a#trigger-"+j.bubbleHolderId).live("click",function(){var e={navigationControl:true,enableCloseButton:true,addressControl:false,linksControl:true,scrollwheel:false,addressControlOptions:{position:google.maps.ControlPosition.BOTTOM},position:f.position,pov:{heading:165,pitch:0,zoom:1}},b=new google.maps.StreetViewPanorama(document.getElementById("bubble-"+
j.bubbleHolderId),e);b.setVisible(true);google.maps.event.addListener(u,"closeclick",function(){c(h);a(h).fadeOut();if(b!=null){b.unbind("position");b.setVisible(false)}b=null});google.maps.event.addListener(b,"closeclick",function(){if(b!=null){b.unbind("position");b.setVisible(false);a("div#bubble-"+j.bubbleHolderId).css("background","none")}b=null})});else{a("a#trigger-"+j.bubbleHolderId).live("click",function(a){a.preventDefault()});a("a#trigger-"+j.bubbleHolderId).attr("style","text-decoration: none !important; color: #ddd !important");
google.maps.event.addListener(u,"domready",function(){a("a#trigger-"+j.bubbleHolderId).removeAttr("href");a("a#trigger-"+j.bubbleHolderId).attr("style","text-decoration: none !important; color: #ddd !important")})}})}function J(){var f="div#direction-controls-placeholder-"+t,b=a("div#rendered-directions-placeholder-"+t);a(f+" a#reverse-btn").live("click",function(){var b=a(f+" input#a_address").val(),e=a(f+" input#b_address").val();a(f+" input#a_address").val(e);a(f+" input#b_address").val(b);return false});
a(f+" a#d_options_show").live("click",function(){a(f+" a#d_options_hide").show();a(f+" a#d_options_show").hide();a(f+" div#d_options").show();return false});a(f+" a#d_options_hide").live("click",function(){a(f+" a#d_options_hide").hide();a(f+" a#d_options_show").show();a(f+" div#d_options").hide();a(f+" input#avoid_hway").removeAttr("checked");a(f+" input#avoid_tolls").removeAttr("checked");a(f+" input#radio_km").removeAttr("checked");a(f+" input#radio_miles").attr("checked","checked");return false});
a(f+" button#d_sub").live("click",function(){var h=a(f+" input#a_address").val(),e=a(f+" input#b_address").val(),c=false;if(h==null||h==""){a(f+" input#a_address").addClass("d_error");c=true}if(e==null||e==""){a(f+" input#b_address").addClass("d_error");c=true}if(!c){a(f+" button#d_sub").attr("disabled","disabled").html("Please wait..");var d=google.maps.DirectionsTravelMode.DRIVING;if(a(f+" a#dir_w_btn").hasClass("selected"))d=google.maps.DirectionsTravelMode.WALKING;var c=a(f+" input#avoid_hway").is(":checked"),
l=a(f+" input#avoid_tolls").is(":checked"),g=a(f+" input#radio_miles").is(":checked"),d={origin:h,destination:e,travelMode:d,provideRouteAlternatives:true};if(c)d.avoidHighways=true;if(l)d.avoidTolls=true;d.unitSystem=g?google.maps.DirectionsUnitSystem.IMPERIAL:google.maps.DirectionsUnitSystem.METRIC;S.route(d,function(c,d){if(d==google.maps.DirectionsStatus.OK){b.html("");b.show();y.setMap(k);y.setDirections(c);a(f+" button#d_sub").removeAttr("disabled").html("Get directions");a(f+" button#print_sub").fadeIn();
u.close()}else{b.html("<span style='font-size: 12px; font-weight: bold; color: red'>Could not route directions from<br />'"+h+"' to<br />'"+e+"'<br />Got result from Google: ["+d+"]</span>");a(f+" button#print_sub").hide();a(f+" button#d_sub").removeAttr("disabled").html("Get directions")}})}});a(f+" button#print_sub").live("click",function(){var b=a(f+" input#a_address").val(),e=a(f+" input#b_address").val(),j="d";a(f+" a#dir_w_btn").hasClass("selected")&&(j="w");b="http://maps.google.com/?saddr="+
b+"&daddr="+e+"&dirflg="+j+"&pw=2";a(f+" input#radio_miles").is(":checked")&&(b=b+"&doflg=ptm");window.open(b);return false});a(f+" input#a_address").live("change focus",function(){a(f+" input#a_address").removeClass("d_error");return false});a(f+" input#b_address").live("change focus",function(){a(f+" input#b_address").removeClass("d_error");return false});a(f+" .kd-button").live("click",function(){var b=this.id;if(b=="dir_d_btn"){if(!a(f+" a#dir_d_btn").hasClass("selected")){a(f+" a#dir_d_btn").addClass("selected");
a(f+" a#dir_w_btn").removeClass("selected")}}else if(b=="dir_w_btn"&&!a(f+" a#dir_w_btn").hasClass("selected")){a(f+" a#dir_w_btn").addClass("selected");a(f+" a#dir_d_btn").removeClass("selected")}return false})}function W(a,b){var c=Math.floor(Math.random()*111111),c=c+"-"+t,e="<div id='bubble-"+c+"' style='height: 130px !important; width: 300px !important;' class='bubble-content'>";if(b.geoMashup)var l=b.postTitle.substring(0,30),e=e+""+("<p class='geo-mashup-post-title'><a title='Original post: "+
b.postTitle+"' href='"+b.postLink+"'>"+l+"..</a></p>"),e=e+("<p class='geo-mashup-post-excerpt'>"+b.postExcerpt+"</p>");else{e=e+("<h4>"+d.address+":</h4>");e=e+("<p class='custom-bubble-text'>"+a+"</p>");b.customBubbleText!=""&&(e=e+("<p class='custom-bubble-text'>"+b.customBubbleText+"</p>"))}e=e+"<div class='custom-bubble-links-section'><hr />"+("<p class='custom-bubble-text'>"+d.directions+": <a id='toHere-"+c+"' class='dirToHereTrigger' href='javascript:void(0);'>"+d.toHere+"</a> - <a id='fromHere-"+
c+"' class='dirFromHereTrigger' href='javascript:void(0);'>"+d.fromHere+"</a> | <a id='trigger-"+c+"' class='streetViewTrigger' href='javascript:void(0);'>"+d.streetView+"</a></p>");return{bubbleHolderId:c,bubbleContent:e+"</div></div>"}}function P(b,c){var h=1;a.each(b,function(){if(this.excerpt==null)this.excerpt="";var a=this.addy.split(I);a[0]=this.location;p(h,a,this.title,this.permalink,this.excerpt,c);h++});s.info("Have "+(h-1)+" destinations for marker Geo mashup..")}function o(a,b,c,e,d,
l){b[2]!=null?b[2].indexOf("No description provided")!=-1&&(b[2]=""):b[2]="";F.push({address:b[0],animation:google.maps.Animation.DROP,zIndex:a,markerIcon:b[1],customBubbleText:b[2],postTitle:c,postLink:e,postExcerpt:d,geoMashup:l})}function p(a,b,c,e,d,l){var g=[];b[0].indexOf(",")!=-1?g=b[0].split(","):b[0].indexOf(";")!=-1&&(g=b[0].split(";"));if(g.length==0)return false;g[0]=n.trim(g[0]);g[1]=n.trim(g[1]);if(g[0]==""||g[1]=="")return false;b[0]=new google.maps.LatLng(parseFloat(g[0]),parseFloat(g[1]));
o(a,b,c,e,d,l)}function z(){clearTimeout(G);if(F.length>0){var b=F.shift();b.address instanceof google.maps.LatLng?v(b):T.geocode({address:b.address},function(a,c){D(a,c,b)})}else{q();if(H.length>0){var c="";a.each(H,function(a,b){c=c+("&nbsp;&nbsp;&nbsp;<b>"+(1+a)+". "+b+"</b><br />")});E.alertError(i.badAddresses.replace("[REPLACE]",c))}H=[]}}function q(){if(A.length>1){a.each(A,function(a,b){B.contains(b.position)||B.extend(b.position)});x=B;B!=null&&k.fitBounds(B)}else if(A.length==1){k.setCenter(A[0].position);
M=k.getZoom();K=k.getCenter()}}function v(a){var b=a.address;a.address="Lat/Long: "+b.lat().toFixed(6)+", "+b.lng().toFixed(6);U(b,a);z()}function D(a,b,c){if(b==google.maps.GeocoderStatus.OK){U(a[0].geometry.location,c);G=setTimeout(function(){z()},330)}else if(b==google.maps.GeocoderStatus.OVER_QUERY_LIMIT){q();F.push(c);G=setTimeout(function(){z()},3E3)}else if(b==google.maps.GeocoderStatus.ZERO_RESULTS){H.push(c.address);G=setTimeout(function(){z()},400)}}function U(c,d){var h=new google.maps.Marker({position:c,
title:d.address.replace("<br />"," :: "),content:d.address,zIndex:d.zIndex+1E3,map:k});if(h){if(d.markerIcon){var e=d.markerIcon;if(typeof e=="undefined"||e==="undefined")e="1-default.html";h.setIcon(r+e);var g=null,g=["4-default.png","5-default.html","6-default.html","7-default.png"];if(a.inArray(e,["1-default.png","2-default.png"])!=-1){e=r+"msmarker.shadow.png";g=L(e,59,32,0,0,16,33)}else if(a.inArray(e,g)!=-1){e=r+"msmarker.shadow.png";g=L(e,59,32,0,0,21,34)}else if(e.indexOf("3-default")!=-1){e=
r+"beachflag_shadow.png";g=L(e,37,32,0,0,10,33)}else g=L(r+"shadow.png",68,37,0,0,32,38);h.setShadow(g)}b(h,d);if(!N){J();N=true}A.push(h)}}function L(a,b,c,e,d,g,l){return new google.maps.MarkerImage(a,new google.maps.Size(b,c),new google.maps.Point(e,d),new google.maps.Point(g,l))}var A,F,H,O,G,N,k,C,Q,x,K,M,t,T,B,u,R,y,S;return{init:function(a,b){k=a;t=k.getDiv().id;Q=b;google.maps.event.addListener(k,"click",function(){l()});A=[];H=[];F=[];M=5;x=K=C=G=null;O=N=false;T=new google.maps.Geocoder;
B=new google.maps.LatLngBounds;u=new google.maps.InfoWindow;R=new google.maps.StreetViewService;S=new google.maps.DirectionsService;rendererOptions={draggable:true};y=new google.maps.DirectionsRenderer(rendererOptions);y.setPanel(document.getElementById("rendered-directions-placeholder-"+t))},buildAddressMarkers:function(a,b,c){O=true;C=n.trim(a);C=n.searchReplace(C,"'","");if(b==="true"){a=w(C);c==="true"?P(a,true):c==="false"&&P(a,false);z()}else if(b==null||b==="false"){c=C.split("|");for(a=0;a<
c.length;a++){var e=c[a];if(e!=null&&e!=""){e=n.trim(e);if(e!=""){b=a+1;e=e.split(I);if(n.isNumeric(e[0]))p(b,e,"","","",false);else{n.isAlphaNumeric(e[0]);o(b,e,"","","",false)}}}}z()}},isBuildAddressMarkersCalled:function(){return O}}},n=function(){return{isNumeric:function(a){return/^([0-9?(\-.,;\s{1,})]+)$/.test(a)},isAlphaNumeric:function(a){return/^([a-zA-Z0-9?(/\-.,\s{1,})]+)$/.test(a)},trim:function(a){return a.replace(/^\s+|\s+$/g,"")},searchReplace:function(a,c,b){return a.replace(RegExp(c,
"g"),b)}}}(),s=function(){var d=function(c){a.browser.msie||(a.browser.mozilla&&parseInt(a.browser.version)>=1?console.log(c):a.browser.webkit&&parseInt(a.browser.version)>=534?console.log(c):a.browser.opera&&parseInt(a.browser.version)>=11&&console.log(c))};return{info:function(a){d("Info :: "+a)},raw:function(a){d(a)},warn:function(a){d("Warning :: "+a)},error:function(a){d("Error :: "+a)},fatal:function(a){d("Fatal :: "+a)}}}(),E=function(){return{alertError:function(d){function c(b,c){b.preventDefault();
var d=a(c).closest("div.cgmp-popup-shortcode-dialog");d&&a(d).remove();a("div.cgmp-popup-shortcode-dialog").length==0&&a("#cgmp-popup-mask").remove()}var b=a('<div id="cgmp-popup-mask"/>'),i=Math.random().toString(36).substring(3),g=a('<div id="'+i+'" class="cgmp-popup-shortcode-dialog cgmp-popup-window">');g.html("<div class='dismiss-container'><a class='dialog-dismiss' href='javascript:void(0)'>\u00d7</a></div><p style='text-align: left; padding: 10px 10px 0 10px'>"+d+"</p><div align='center'><input type='button' class='close-dialog' value='Close' /></div>");
a("body").append(b);a("body").append(g);d=a(document).height();b=a(window).width();a("#cgmp-popup-mask").css({width:b,height:d,opacity:0.1});a("#cgmp-popup-mask").length==1&&a("#cgmp-popup-mask").show();d=a(window).height();b=a(window).width();a("div#"+i).css("top",d/2-a("div#"+i).height()/2);a("div#"+i).css("left",b/2-a("div#"+i).width()/2);a("div#"+i).fadeIn(500);a(".cgmp-popup-window .close-dialog").click(function(b){c(b,a(this))});a(".cgmp-popup-window .dialog-dismiss").click(function(b){c(b,
a(this))});a("#cgmp-popup-mask").click(function(){a(this).remove();a(".cgmp-popup-window").remove()});a(window).resize(function(){var b=a(".window"),c=a(document).height(),d=a(window).width();a("#cgmp-popup-mask").css({width:d,height:c});c=a(window).height();d=a(window).width();b.css("top",c/2-b.height()/2);b.css("left",d/2-b.width()/2)})}}}();if(0!=a("object#global-data-placeholder").length){m=document.head||document.getElementsByTagName("head")[0]||document.documentElement;var q=document.createElement("link");
q.type="text/css";q.rel="stylesheet";q.href=a("object#global-data-placeholder").find("param#cssHref").val();q.media="screen";m.appendChild(q);I=a("object#global-data-placeholder").find("param#sep").val();r=a("object#global-data-placeholder").find("param#customMarkersUri").val();i=a("object#global-data-placeholder").find("param#errors").val();i=w(i);d=a("object#global-data-placeholder").find("param#translations").val();d=w(d);m=parseFloat(a.fn.jquery);if(1.3>m)return alert(i.oldJquery),!1;if("undefined"==
typeof google||!google)return E.alertError(i.msgNoGoogle),!1;if("undefined"!=typeof GMap2&&GMap2)return E.alertError(i.msgApiV2),!1;m=a("object#global-data-placeholder").find("param#language").val();google.load("maps","3",{other_params:"sensor=false&libraries=panoramio&language="+m,callback:function(){v()}})}})("undefined"===typeof d||null==d||!d?jQuery:d)}if("undefined"===typeof jQuery||null==jQuery){var D=!1,v=document.head||document.getElementsByTagName("head")[0]||document.documentElement,d=document.createElement("script");
d.type="text/javascript";d.src="../../ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";d.onload=d.onreadystatechange=function(){if(!D&&(!this.readyState||/loaded|complete/.test(d.readyState))){D=!0;var V=jQuery.noConflict();o(V);d.onload=d.onreadystatechange=null;v&&d.parentNode&&v.removeChild(d);d=void 0}};v.appendChild(d)}else o()})();
