!function(){var e={51414:function(){$((function(){var e=function(){return $(".table-list .js-check-all-resources:checked").length},t=function(){var t=e(),s=$(".table-list [data-published-state=false] .js-check-all-resources:checked").length;0===t?$("#js-selected-resources-count").text(""):$("#js-selected-resources-count").text(t),t>=2?$('button[data-action="merge-resources"]').parent().show():$('button[data-action="merge-resources"]').parent().hide(),s>0?($('button[data-action="publish-answers"]').parent().show(),$("#js-form-publish-answers-number").text(s)):$('button[data-action="publish-answers"]').parent().hide()},s=function(){e()>0&&$("#js-bulk-actions-button").removeClass("hide")},c=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];0!==e()&&!0!==t||($("#js-bulk-actions-button").addClass("hide"),$("#js-bulk-actions-dropdown").removeClass("is-open"))},o=function(){$("#js-other-actions-wrapper").removeClass("hide")},n=function(){$(".js-bulk-action-form").addClass("hide")};0!==$("#js-bulk-actions-wrapper").length&&(window.hideBulkActionForms=n,window.hideBulkActionsButton=c,window.showOtherActionsButtons=o,window.selectedResourcesCountUpdate=t,$(".js-bulk-action-form").length&&(n(),$("#js-bulk-actions-button").addClass("hide"),$("#js-bulk-actions-dropdown ul li button").on("click",(function(e){e.preventDefault();var t=$(e.target).data("action");t&&($("#js-form-".concat(t)).on("submit",(function(){$(".layout-content > .callout-wrapper").html("")})),$("#js-".concat(t,"-actions")).removeClass("hide"),c(!0),$("#js-other-actions-wrapper").addClass("hide"))})),$(".js-check-all").on("change",(function(){$(".js-check-all-resources").prop("checked",$(this).prop("checked")),$(this).prop("checked")?($(".js-check-all-resources").closest("tr").addClass("selected"),s()):($(".js-check-all-resources").closest("tr").removeClass("selected"),c()),t()})),$(".table-list").on("change",".js-check-all-resources",(function(){var e=$(this).val(),o=$(this).prop("checked");!1===$(this).prop("checked")&&$(".js-check-all").prop("checked",!1),$(".js-check-all-resources:checked").length===$(".js-check-all-resources").length&&($(".js-check-all").prop("checked",!0),s()),$(this).prop("checked")?(s(),$(this).closest("tr").addClass("selected")):(c(),$(this).closest("tr").removeClass("selected")),0===$(".js-check-all-resources:checked").length&&c(),$(".js-bulk-action-form").find(".js-resource-id-".concat(e)).prop("checked",o),t()})),$(".js-cancel-bulk-action").on("click",(function(){n(),s(),o()}))))}))}},t={};function s(c){var o=t[c];if(void 0!==o)return o.exports;var n=t[c]={exports:{}};return e[c](n,n.exports,s),n.exports}s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},s.d=function(e,t){for(var c in t)s.o(t,c)&&!s.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:t[c]})},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";s(51414)}()}();
//# sourceMappingURL=decidim_budgets_admin-30ba20cb7ecd7d8ce53d.js.map