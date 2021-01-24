createSystemMenu("Call of Cthlhu", "coc", "CoC");
createSystemMenu("Magicalogia", "magi", "マギロギ");
createSystemMenu("Insane", "insane", "インセイン");
createSystemMenu("Sword World 2.0/2.5", "sw", "SW");
createSystemMenu("Shinobi-Gami", "shinobi", "シノビガミ");
createSystemMenu("Amadeus", "amadeus", "アマデウス");
createSystemMenu("Other", "other", "");

function createSystemMenu(title, sysid, systag){
    document.write('<div class="system" onclick="clickSystem(&quot;' + sysid + '&quot;)">' + title + '</div>');
    document.write('<div id="open_' + sysid + '" style="display:none;clear:both;">');
    document.write('<ul class="subcontents">');
    if(systag !== ""){
        document.write('<li><a href="./chara_' + sysid + '.html">Character</a></li>');
        document.write('<li><a href="http://nek0yanagi.tumblr.com/tagged/' + systag + '" target="blank">Image</a></li>');
    }
    document.write('<li><a href="./history_' + sysid + '.html" >History</a></li>');
    if(systag !== "" && sysid !== "sw"){
       document.write('<li><a href="./log_' + sysid + '.html" >Log</a></li>');
    }
    document.write('</ul>');
    document.write('</div>');
}
function clickSystem(sysid){
    let idname = 'open_' + sysid;
    let style = document.getElementById(idname).style; 
    style.display = (style.display=='none')?'block':'none';
}
