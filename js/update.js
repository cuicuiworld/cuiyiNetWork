/**
 * Created by HTSB on 2016/8/18.
 */
var $buo=function(op,test){var jsv=18;var n=window.navigator,b;this.op=op||{};var langset=this.op.l;this.op.l=op.l||(n.languages?n.languages[0]:null)||n.language||n.browserLanguage||n.userLanguage||document.documentElement.getAttribute("lang")||"en";this.op.l=this.op.l.replace("_","-").toLowerCase();var ll=this.op.l.substr(0,2);this.op.vsakt={i:12,f:45,o:36,s:9.1,n:20,c:49};this.op.vsdefault={i:10,f:42,o:30,s:7.1,n:12,c:47};this.op.vsmin={i:9,f:5,o:12.5,s:6.2,n:12};var myvs=op.vs||{};this.op.vs=op.vs||this.op.vsdefault;for(b in this.op.vsakt){if(this.op.vs[b]>=this.op.vsakt[b])
    this.op.vs[b]=this.op.vsakt[b]-0.2;if(!this.op.vs[b])
    this.op.vs[b]=this.op.vsdefault[b];if(this.op.vs[b]<this.op.vsmin[b])
    this.op.vs[b]=this.op.vsmin[b];}
    if(op.reminder<0.1||op.reminder===0)
        this.op.reminder=0;else
        this.op.reminder=op.reminder||24;this.op.reminderClosed=op.reminderClosed||(24*7);this.op.onshow=op.onshow||function(o){};this.op.onclick=op.onclick||function(o){};this.op.onclose=op.onclose||function(o){};if(langset)
        this.op.url=op.url||"//browser-update.org/"+ll+"/update-browser.html#"+jsv+":"+(location.hostname||"x");else
        this.op.url=op.url||"//browser-update.org/update-browser.html#"+jsv+":"+(location.hostname||"x");this.op.pageurl=op.pageurl||window.location.hostname||"unknown";this.op.newwindow=(op.newwindow!==false);this.op.test=test||op.test||false;if(window.location.hash=="#test-bu")
        this.op.test=true;function getBrowser(ua_str){var n,t,ua=ua_str||navigator.userAgent;var names={i:'Internet Explorer',f:'Firefox',o:'Opera',s:'Apple Safari',n:'Netscape Navigator',c:"Chrome",x:"Other"};if(/bot|googlebot|facebook|slurp|wii|silk|blackberry|maxthon|maxton|mediapartners|dolfin|dolphin|adsbot|silk|android|phone|bingbot|google web preview|like firefox|chromeframe|seamonkey|opera mini|min|meego|netfront|moblin|maemo|arora|camino|flot|k-meleon|fennec|kazehakase|galeon|android|mobile|iphone|ipod|ipad|epiphany|konqueror|rekonq|symbian|webos|coolnovo|blackberry|bb10|RIM|PlayBook|PaleMoon|QupZilla|YaBrowser|Otter|Midori|qutebrowser/i.test(ua))n="x";else if(/Trident.*rv:(\d+\.\d+)/i.test(ua))n="i";else if(/Trident.(\d+\.\d+)/i.test(ua))n="io";else if(/MSIE.(\d+\.\d+)/i.test(ua))n="i";else if(/Edge.(\d+)/i.test(ua))n="i";else if(/OPR.(\d+\.\d+)/i.test(ua))n="o";else if(/Chrome.(\d+\.\d+)/i.test(ua))n="c";else if(/Firefox.(\d+\.\d+)/i.test(ua))n="f";else if(/Version.(\d+.\d+).{0,10}Safari/i.test(ua))n="s";else if(/Safari.(\d+)/i.test(ua))n="so";else if(/Opera.*Version.(\d+\.\d+)/i.test(ua))n="o";else if(/Opera.(\d+\.?\d+)/i.test(ua))n="o";else if(/Netscape.(\d+)/i.test(ua))n="n";else return{n:"x",v:0,t:names[n]};var v=parseFloat(RegExp.$1);var donotnotify=false;if(/windows.nt.5.0|windows.nt.4.0|windows.98|os x 10.4|os x 10.5|os x 10.3|os x 10.2/.test(ua))donotnotify="oldOS";if(n=="f"&&(Math.round(v)==31||Math.round(v)==38||Math.round(v)==45))
        donotnotify="ESR";if(n=="x")return{n:"x",v:v||0,t:names[n],donotnotify:donotnotify};if(n=="so"){v=((v<100)&&1.0)||((v<130)&&1.2)||((v<320)&&1.3)||((v<520)&&2.0)||((v<524)&&3.0)||((v<526)&&3.2)||4.0;n="s";}
        if(n=="i"&&v==7&&window.XDomainRequest){v=8;}
        if(n=="io"){n="i";if(v>6)v=11;else if(v>5)v=10;else if(v>4)v=9;else if(v>3.1)v=8;else if(v>3)v=7;else v=9;}
        return{n:n,v:v,t:names[n]+" "+v,donotnotify:donotnotify};}
    this.op.browser=getBrowser();if(!this.op.test&&(!this.op.browser||!this.op.browser.n||this.op.browser.n=="x"||this.op.browser.donotnotify!==false||(document.cookie.indexOf("browserupdateorg=pause")>-1&&this.op.reminder>0)||this.op.browser.v>this.op.vs[this.op.browser.n]))
        return;if(!this.op.test&&Math.round(Math.random()*5000)<1){var i=new Image();i.src="//browser-update.org/viewcount.php?n="+this.op.browser.n+"&v="+this.op.browser.v+"&p="+ escape(this.op.pageurl)+"&jsv="+jsv+"&inv="+this.op.v+"&vs="+myvs.i+","+myvs.f+","+myvs.o+","+myvs.s;}
    function setCookie(hours){var d=new Date(new Date().getTime()+1000*3600*hours);document.cookie='browserupdateorg=pause; expires='+d.toGMTString()+'; path=/';}
    if(this.op.reminder>0){setCookie(this.op.reminder);}
    var languages="xx,jp,sl,id,uk,rm,da,ca,sv,hu,fa,gl";if(languages.indexOf(ll)>0)
        this.op.url="//browser-update.org/update.html#"+jsv+"@"+(location.hostname||"x");var tar="";if(this.op.newwindow)
        tar=' target="_blank"';function busprintf(){var args=arguments;var data=args[0];for(var k=1;k<args.length;++k){data=data.replace(/%s/,args[k]);}
        return data;}
    var t='This website would like to remind you: Your browser (%s) is <b>out of date</b>. <a%s>Update your browser</a> for more security, comfort and the best experience on this site.';if(ll=="de")
        t='Sie verwenden einen <b>veralteten Browser</b> (%s) mit <b>Sicherheitsschwachstellen</b> und <b>k&ouml;nnen nicht alle Funktionen dieser Webseite nutzen</b>. <a%s>Hier erfahren Sie, wie einfach Sie Ihren Browser aktualisieren k&ouml;nnen</a>.';else if(ll=="it")
        t='Il tuo browser (%s) <b>non è aggiornato</b>. Ha delle <b>falle di sicurezza</b> e potrebbe <b>non visualizzare correttamente</b> le pagine di questo e altri siti. <a%s>Aggiorna il tuo browser</a>!';else if(ll=="pl")
        t='Przegl?darka (%s), której u?ywasz, jest przestarza?a. Posiada ona udokumentowane <b>luki bezpieczeństwa, inne wady</b> oraz <b>ograniczon? funkcjonalno??</b>. Tracisz mo?liwo?? skorzystania z pe?ni mo?liwo?ci oferowanych przez niektóre strony internetowe. <a%s>Dowiedz si? jak zaktualizowa? swoj? przegl?dark?</a>.';else if(ll=="es")
        t='Su navegador (%s) <b>no está actualizado</b>. Tiene <b>fallos de seguridad</b> conocidos y podría <b>no mostrar todas las características</b> de este y otros sitios web. <a%s>Averigüe cómo actualizar su navegador.</a>';else if(ll=="nl")
        t='Uw browser (%s) is <b>oud</b>. Het heeft bekende <b>veiligheidsissues</b> en kan <b>niet alle mogelijkheden</b> weergeven van deze of andere websites. <a%s>Lees meer over hoe uw browser te upgraden</a>';else if(ll=="pt")
        t='Seu navegador (%s) está <b>desatualizado</b>. Ele possui <b>falhas de seguran?a</b> e pode <b>apresentar problemas</b> para exibir este e outros websites. <a%s>Veja como atualizar o seu navegador</a>';else if(ll=="sl")
        t='Va? brskalnik (%s) je <b>zastarel</b>. Ima ve? <b>varnostnih pomankljivosti</b> in morda <b>ne bo pravilno prikazal</b> te ali drugih strani. <a%s>Poglejte kako lahko posodobite svoj brskalnik</a>';else if(ll=="ru")
        t='Ваш браузер (%s) <b>устарел</b>. Он имеет <b>уязвимости в безопасности</b> и может <b>не показывать все возможности</b> на этом и других сайтах. <a%s>Узнайте, как обновить Ваш браузер</a>';else if(ll=="id")
        t='Browser Anda (%s) sudah <b>kedaluarsa</b>. Browser yang Anda pakai memiliki <b>kelemahan keamanan</b> dan mungkin <b>tidak dapat menampilkan semua fitur</b> dari situs Web ini dan lainnya. <a%s> Pelajari cara memperbarui browser Anda</a>';else if(ll=="uk")
        t='Ваш браузер (%s) <b>застар?в</b>. В?н <b>уразливий</b> й може <b>не в?дображати вс? можливост?</b> на цьому й ?нших сайтах. <a%s>Д?знайтесь, як оновити Ваш браузер</a>';else if(ll=="ko")
        t='?? ???? ?? ????(%s)? <b>???????.</b> ??? <b>?? ???</b>? ????, ??? ? ???? <b>?? ?? ??</b> ????. <a%s>????? ??? ????????</a>';else if(ll=="rm")
        t='Tes navigatur (%s) è <b>antiquà</b>. El cuntegna <b>problems da segirezza</b> enconuschents e mussa eventualmain <b>betg tut las funcziuns</b> da questa ed autras websites. <a%s>Emprenda sco actualisar tes navigatur</a>.';else if(ll=="ja")
        t='お使いのブラウザ「%s」は、<b>時代遅れ</b>のバージョンです。既知の<b>脆弱性</b>が存在するばかりか、<b>機能不足</b>によって、サイトが正常に表示できない可能性があります。 <a%s>ブラウザを更新する方法を確認する</a>';else if(ll=="fr")
        t='Votre navigateur (%s) est <b>périmé</b>. Il contient des <b>failles de sécurité</b> et pourrait <b>ne pas afficher certaines fonctionnalités</b> des sites internet récents. <a%s>Découvrez comment mettre votre navigateur à jour</a>';else if(ll=="da")
        t='Din browser (%s) er <b>for&aelig;ldet</b>. Den har kendte <b>sikkerhedshuller</b> og kan m&aring;ske <b>ikke vise alle funktioner</b> p&aring; dette og andre websteder. <a%s>Se hvordan du opdaterer din browser</a>';else if(ll=="sq")
        t='Shfletuesi juaj (%s) ?sht? <b>ca i vjet?r</b>. Ai ka <b>t? meta sigurie</b> t? njohura dhe mundet t? <b>mos i shfaq? t? gjitha karakteristikat</b> e k?saj dhe shum? faqeve web t? tjera. <a%s>M?soni se si t? p?rdit?soni shfletuesin tuaj</a>';else if(ll=="ca")
        t='El teu navegador (%s) està <b>desactualitzat</b>. Té <b>vulnerabilitats</b> conegudes i pot <b>no mostrar totes les característiques</b> d\'aquest i altres llocs web. <a%s>Aprèn a actualitzar el navegador</a>';else if(ll=="tr")
        t='Taray?c?n?z (%s) <b>güncel de?ildir.</b>. Eski versiyon oldu?u i?in <b>güvenlik a??klar?</b> vard?r ve g?rmek istedi?iniz bu web sitesinin ve di?er web sitelerinin <b>tüm ?zelliklerini hatas?z bir ?ekilde</b> g?steremeyecektir. <a%s>Taray?c?n?z? nas?l güncelleyece?inizi ??renin!</a>';else if(ll=="fa")
        t='?????? ??? (%s) <b>?? ??? ???? ???</b> ?? ????. ??? ?????? ????? <b>?????? ?????? ?????? ???</b> ?? ???? ? <b>??? ????? ????? ????? ??? ???</b> ?? ???? ? ???? ?? ???? ?? ?? ?? ???? ????? ???. <a%s>?? ???? ????? ???????? ?????? ???? ? ?? ??? ????? ?????? ??? ????? ???? ????.</a>';else if(ll=="sv")
        t='Din webbl?sare (%s) ?r <b>f?r?ldrad</b>. Den har k?nda <b>s?kerhetsh?l</b> och <b>kan inte visa alla funktioner korrekt</b> p? denna och p? andra webbsidor. <a%s>Uppdatera din webbl?sare idag</a>';else if(ll=="hu")
        t='Az ?n b?ngész?je (%s) <b>elavult</b>. Ismert <b>biztonsági hiányosságai</b> vannak és esetlegesen <b>nem tud minden funkciót megjeleníteni</b> ezen vagy más weboldalakon. <a%s>Itt talál b?vebb információt a b?ngész?jének frissítésével kapcsolatban</a>		 ';else if(ll=="gl")
        t='O seu navegador (%s) está <b>desactualizado</b>. Ten co?ecidos <b>fallos de seguranza</b> e podería <b>non mostrar tódalas características</b> deste e outros sitios web. <a%s>Aprenda como pode actualizar o seu navegador</a>';else if(ll=="cs")
        t='Vá? prohlí?e? (%s) je <b>zastaral?</b>. Jsou známy <b>bezpe?nostní rizika</b> a mo?ná <b>nedoká?e zobrazit v?echny prvky</b> této a dal?ích webov?ch stránek. <a%s>Nau?te se, jak aktualizovat sv?j prohlí?e?</a>';else if(ll=="he")
        t='?????? ??? (%s) <b>???? ??????</b>. ?? ?? <b>????? ????? ??????</b> ????? <b>?? ????? ?? ?? ???????</b> ?? ??? ?? ?????? ?????. <a%s>??? ???? ????? ?? ?????? ???</a>';else if(ll=="nb")
        t='Nettleseren din (%s) er <b>utdatert</b>. Den har kjente <b>sikkerhetshull</b> og <b>kan ikke vise alle funksjonene</b> p? denne og andre websider. <a%s>L?r hvordan du kan oppdatere din nettleser</a>';else if(this.op.l=="zh-tw")
        t='您的瀏覽器(%s) 需要更新。該瀏覽器有諸多安全漏洞，無法顯示本網站的所有功能。 <a%s>瞭解如何更新瀏覽器</a>';else if(ll=="zh")
        t='您的浏览器(%s) 需要更新。该浏览器有诸多安全漏洞，无法显示本网站的所有功能。 <a%s>了解如何更新浏览器</a>';else if(ll=="fi")
        t='Selaimesi (%s) on <b>vanhentunut</b>. Siin? on tunnettuja tietoturvaongelmia eik? se v?ltt?m?tt? tue kaikkia ominaisuuksia t?ll? tai muilla sivustoilla. <a%s>Lue lis?? siit? kuinka p?ivit?t selaimesi</a>.';else if(ll=="tr")
        t='Taray?c?n?z (%s) <b>güncel de?il</b>. Eski versiyon oldu?u i?in <b>güvenlik a??klar?</b> vard?r ve g?rmek istedi?iniz bu web sitesinin ve di?er web sitelerinin <b>tüm ?zelliklerini hatas?z bir ?ekilde</b> g?steremeyecektir. <a%s>Taray?c?n?z? nas?l güncelleyebilece?inizi ??renin</a>';else if(ll=="ro")
        t='Browser-ul (%s) tau este <b>invechit</b>. Detine <b>probleme de securitate</b> cunoscute si poate <b>sa nu afiseze corect</b> toate elementele acestui si altor site-uri. <a%s>Invata cum sa-ti actualizezi browserul.</a>';else if(ll=="bg")
        t='Вашият браузър (%s) <b>не е актуален</b>. Известно е, че има <b>пропуски в сигурността</b> и може <b>да не покаже правилно</b> този или други сайтове. <a%s>Научете как да актуализирате браузъра си</a>.';else if(ll=="el")
        t='Αυτ?? ο ιστ?τοπο? σα? υπενθυμ?ζει: Ο φυλλομετρητ?? σα? (%s) ε?ναι <b>παρωχημ?νο?</b>. <a%s>Ενημερ?στε το πρ?γραμμα περι?γησ?? σα?</a> για μεγαλ?τερη ασφ?λεια και ?νεση σε αυτ?ν την ιστοσελ?δα.';else if(ll=="ar")
        t='?????? (%s) <b>????? ????????</b>. ????? ?? <b>????? ?????</b> ?????? ??? <b>?? ????? ???? ?? ???????</b> ???????? ???? ??????. <a%s>???? ???</a>????? ??? ???? ?????? ??????';else if(ll=="sr")
        t='Va? pretra?iva? (%s) je <b>zastareo</b>. Ima poznate <b>sigurnosne probleme</b> i najverovatnije <b>ne?e prikazati sve funkcionalnisti</b> ovog i drugih sajtova. <a%s>Nau?i vi?e o nadogradnji svog pretra?iva?a</a>';if(op.text)
        t=op.text;if(op["text_"+ll])
        t=op["text_"+ll];this.op.text=busprintf(t,this.op.browser.t,' href="'+this.op.url+'"'+tar);var div=document.createElement("div");this.op.div=div;div.id="buorg";div.className="buorg";div.innerHTML='<div>'+ this.op.text+'<div id="buorgclose">&times;</div></div>';var sheet=document.createElement("style");var style=".buorg {position:absolute;position:fixed;z-index:111111;\
width:100%; top:0px; left:0px; \
border-bottom:1px solid #A29330; \
background:#FDF2AB no-repeat 13px center url(//browser-update.org/img/small/"+this.op.browser.n+".png);\
text-align:left; cursor:pointer; \
font-family: Arial,Helvetica,sans-serif; color:#000; font-size: 12px;}\
.buorg div { padding:5px 36px 5px 40px; } \
.buorg a,.buorg a:visited  {color:#E25600; text-decoration: underline;}\
#buorgclose { position: absolute; right: 6px; top:-2px; height: 20px; width: 12px; font-weight: bold;font-size:18px; padding:0; }";document.body.insertBefore(div,document.body.firstChild);document.getElementsByTagName("head")[0].appendChild(sheet);try{sheet.innerText=style;sheet.innerHTML=style;}
    catch(e){try{sheet.styleSheet.cssText=style;}
    catch(e){return;}}
    var me=this;div.onclick=function(){if(me.op.newwindow)
        window.open(me.op.url,"_blank");else
        window.location.href=me.op.url;setCookie(me.op.reminderClosed);me.op.onclick(me.op);return false;};try{div.getElementsByTagName("a")[0].onclick=function(e){e=e||window.event;if(e.stopPropagation)e.stopPropagation();else e.cancelBubble=true;me.op.onclick(me.op);return true;};}
    catch(e){}
    var hm=document.getElementsByTagName("html")[0]||document.body;this.op.bodymt=hm.style.marginTop;hm.style.marginTop=(div.clientHeight)+"px";(function(me){document.getElementById("buorgclose").onclick=function(e){e=e||window.event;if(e.stopPropagation)e.stopPropagation();else e.cancelBubble=true;me.op.div.style.display="none";hm.style.marginTop=me.op.bodymt;me.op.onclose(me.op);setCookie(me.op.reminderClosed);return true;};})(me);op.onshow(this.op);};var $buoop=$buoop||{};$bu=$buo($buoop);