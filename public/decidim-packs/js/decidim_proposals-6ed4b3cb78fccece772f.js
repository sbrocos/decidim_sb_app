!function(){var t={21160:function(t,e,a){var i={"./decidim/proposals/participatory_texts/participatory_text.md":24159,"./decidim/proposals/participatory_texts/participatory_text.odt":16685};function o(t){var e=n(t);return a(e)}function n(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=n,t.exports=o,o.id=21160},54159:function(t,e,a){var i={"./decidim/gamification/badges/decidim_gamification_badges_accepted_proposals.svg":15456,"./decidim/gamification/badges/decidim_gamification_badges_proposal_votes.svg":69073,"./decidim/gamification/badges/decidim_gamification_badges_proposals.svg":12782,"./decidim/proposals/decidim_proposals.svg":57766};function o(t){var e=n(t);return a(e)}function n(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=n,t.exports=o,o.id=54159},90817:function(){$((function(){$("#vote_button").mouseover((function(){$(this).text($(this).data("replace"))})),$("#vote_button").mouseout((function(){$(this).text($(this).data("original"))}))}))},24159:function(t,e,a){"use strict";t.exports=a.p+"media/documents/0e67170e72070b470a07.md"},16685:function(t,e,a){"use strict";t.exports=a.p+"media/documents/057f608bdff3d77526ff.odt"},15456:function(t,e,a){"use strict";t.exports=a.p+"media/images/decidim_gamification_badges_accepted_proposals-907eee548361dfee6abe.svg"},69073:function(t,e,a){"use strict";t.exports=a.p+"media/images/decidim_gamification_badges_proposal_votes-13426dd64ea84f600a64.svg"},12782:function(t,e,a){"use strict";t.exports=a.p+"media/images/decidim_gamification_badges_proposals-92b1e6ff9b790aad8550.svg"},57766:function(t,e,a){"use strict";t.exports=a.p+"media/images/decidim_proposals-15e5583a7f2834cd644e.svg"}},e={};function a(i){var o=e[i];if(void 0!==o)return o.exports;var n=e[i]={exports:{}};return t[i](n,n.exports,a),n.exports}a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/decidim-packs/",function(){"use strict";a(90817);function t(t,e,a){var i="".concat(t,"Name");if(a[i])return a[i];var o=e.attr("name"),n=/\[[^\]]+\]$/;return o.match(n)?o.replace(n,"[".concat(t,"]")):t}function e(e,a,i){var o=$.extend({},a),n=e.attr("id").split("_");n.pop();var d="".concat(n.join("_")),c="latitude",r="longitude";e.length>0&&(c=t("latitude",e,o),r=t("longitude",e,o));var s=$.extend({latitudeId:"".concat(d,"_latitude"),longitudeId:"".concat(d,"_longitude"),latitudeName:c,longitudeName:r},a),u=!1,p=function(t){!function(){var t=$("#".concat(s.latitudeId));t.length<1&&(t=$('<input type="hidden" name="'.concat(s.latitudeName,'" id="').concat(s.latitudeId,'" />')),e.after(t));var a=$("#".concat(s.longitudeId));a.length<1&&(a=$('<input type="hidden" name="'.concat(s.longitudeName,'" id="').concat(s.longitudeId,'" />')),e.after(a))}(),$("#".concat(s.latitudeId)).val(t[0]).attr("value",t[0]),$("#".concat(s.longitudeId)).val(t[1]).attr("value",t[1])};e.on("change.decidim",(function(){u||($("#".concat(s.latitudeId)).val("").removeAttr("value"),$("#".concat(s.longitudeId)).val("").removeAttr("value"))})),e.on("geocoder-suggest-coordinates.decidim",(function(t,e){p(e),u=!0,i(e)}));var l="".concat(e.data("coordinates")).split(",").map(parseFloat);Array.isArray(l)&&2===l.length&&p(l)}$((function(){var a=$("input:checkbox[name$='[has_address]']"),i=$("#address_input"),o=$("input",i),n=$("#address_map"),d="latitude",c="longitude";if(o.length>0&&(d=t("latitude",o,{}),c=t("longitude",o,{})),n.hide(),a.length>0){var r=function(){a[0].checked?(i.show(),o.prop("disabled",!1)):(i.hide(),o.prop("disabled",!0))};r(),a.on("change",r)}if(i.length>0){a[0].checked&&n.show();var s=$("[data-decidim-map]").data("map-controller");s.setEventHandler("coordinates",(function(t){$("input[name='".concat(d,"']")).val(t.lat),$("input[name='".concat(c,"']")).val(t.lng)})),e(o,null,(function(t){n.show(),s.removeMarker(),s.addMarker({latitude:t[0],longitude:t[1],address:i.val()})}))}})),a(54159),a(21160)}()}();
//# sourceMappingURL=decidim_proposals-6ed4b3cb78fccece772f.js.map