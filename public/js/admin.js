!function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a(a.s=36)}({36:function(e,t,a){e.exports=a(37)},37:function(e,t){$((function(){try{var e=new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate());$("#datetimepicker").datetimepicker({format:"yyyy-mm-dd HH:MM",footer:!0,modal:!0,minDate:e,locale:"fr-fr",uiLibrary:"bootstrap4",change:function(e){$("#datetimepicker").val().length<19&&$("#datetimepicker").val($("#datetimepicker").val()+":00")}})}catch(e){console.error(e)}function t(e){var t=$(this).parents(".MemberCard").attr("data-name");members.includes(t)&&(members.splice(members.indexOf(t),1),confirm("Voulez vous supprimez de la liste ".concat(t,"?"))&&axios({method:"DELETE",url:"/admin/member/".concat(t)}).then((function(e){200==e.status&&$('.MemberCard[data-name="'.concat(t,'"')).remove()})))}$(".blog-form #name").on("keyup",(function(){$(".blog-form #slug").val(window.removeDiacritics($(this).val()))})),$(".forum-form #name").on("keyup",(function(){$(".forum-form #slug").val(window.removeDiacritics($(this).val()))})),$(".UserCard-delete").click((function(e){var t=$(this).parents(".UserCard").attr("data-name"),a=$(this).parents(".UserCard").attr("data-uuid");confirm("Voulez vous supprimez l'utilisateur ".concat(t,"?"))&&axios({method:"DELETE",url:"/admin/user/".concat(a)}).then((function(e){return location.reload()}))})),$(".UserCard-changeLevel").change((function(e){var t=$(this).parents(".UserCard").attr("data-name"),a=$(this).parents(".UserCard").attr("data-uuid"),r=$(this).find("option:selected").val();confirm("Voulez vous mettre l'utilisateur ".concat(t," au rang ").concat(["d'utilisateur","de modérateur","d'administrateur"][r-1],"?"))&&axios({method:"PUT",url:"/admin/user/".concat(a),data:{level:r}}).then((function(e){return location.reload()}))})),$(".MemberCard-delete").click(t),$(".MemberCard-add").click((function(e){var a=this,r=$(this).parents(".MemberCard").find(".MemberCard-name").val();r=r.toLowerCase().split(" ");for(var n=0;n<r.length;n++)r[n]=r[n].charAt(0).toUpperCase()+r[n].slice(1);r=r.join(" "),members.includes(r)||(members.push(r),axios({method:"POST",url:"/admin/member/".concat(r)}).then((function(e){$(a).parents(".MemberCard").find(".MemberCard-name").val(""),200==e.status&&($("#AdminLayout-membersList").append('\n                <div class="MemberCard col-12 col-md-6" data-name="'.concat(r,'">\n                <div class="MemberCard-header">\n                    <h3 class="MemberCard-name">').concat(r,'</h3>\n                </div>\n                <div class="MemberCard-actions">\n                    <button class="MemberCard-delete">Supprimer</button>\n                </div>\n            </div>')),$(".MemberCard-delete").click(t))})))})),$("#blog").on("change",(function(){"false"!=$("#title").attr("data-changed")&&""!=$("#title").val()||($("#title").val($(this).find(":selected").html()),$("#title").attr("data-changed","false"))})),$("#title").keypress((function(){$(this).attr("data-changed","true")})),$("#maxplaces-toggle").click((function(){$(this).is(":checked")?($("#maxplaces").attr("data-before",$("#maxplaces").val()),$("#maxplaces").val("-1"),$("#maxplaces").prop("readonly",!0)):($("#maxplaces").val($("#maxplaces").attr("data-before")),$("#maxplaces").prop("readonly",!1))})),"-1"==$("#maxplaces").val()&&($("#maxplaces").prop("readonly",!0),$("#maxplaces-toggle").prop("checked",!0),$("#maxplaces").attr("data-before","10"))}))}});