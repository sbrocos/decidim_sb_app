!function(){var e,t={53320:function(e,t,n){"use strict";n(2261);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(r=i.key,l=void 0,l=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(r,"string"),"symbol"===o(l)?l:String(l)),i)}var r,l}var r=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.listSelector=t.listSelector,this.minItems=t.minItems,this.hideOnMinItemsOrLessSelector=t.hideOnMinItemsOrLessSelector,this.run()}var t,n,o;return t=e,(n=[{key:"run",value:function(){var e=$(this.listSelector),t=e.find(this.hideOnMinItemsOrLessSelector);e.length<=this.minItems?t.hide():t.show()}}])&&i(t.prototype,n),o&&i(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(i=o.key,r=void 0,r=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==l(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===l(r)?r:String(r)),o)}var i,r}var c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wrapperSelector=t.wrapperSelector,this.selectSelector=t.selectSelector,this.listSelector=t.listSelector}var t,n,o;return t=e,(n=[{key:"run",value:function(){var e=$(this.listSelector),t=e.parents(this.wrapperSelector).find(this.selectSelector);t.find("option").slice(1).remove();for(var n=2;n<=e.length;n+=1)$('<option value="'.concat(n,'">').concat(n,"</option>")).appendTo(t)}}])&&a(t.prototype,n),o&&a(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(i=o.key,r=void 0,r=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==u(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===u(r)?r:String(r)),o)}var i,r}var s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$source=t.source,this.$select=t.select,this.sourceToParams=t.sourceToParams,this.run()}var t,n,o;return t=e,(n=[{key:"run",value:function(){this.$source.on("change",this._onSourceChange.bind(this)),this._onSourceChange()}},{key:"_onSourceChange",value:function(){var e=this.$select,t=this.sourceToParams(this.$source),n=this.$source.data("url");$.getJSON(n,t,(function(t){e.find("option:not([value=''])").remove();var n=e.data("selected");t.forEach((function(t){var o=$('<option value="'.concat(t.id,'">').concat(t.body,"</option>")).appendTo(e);t.id===n&&o.attr("selected",!0)})),n&&e.val(n)}))}}])&&d(t.prototype,n),o&&d(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(i=o.key,r=void 0,r=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==f(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===f(r)?r:String(r)),o)}var i,r}var v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.inputSelector=t.inputSelector,this.targetSelector=t.targetSelector,this.maxLength=t.maxLength,this.omission=t.omission,this.placeholder=t.placeholder,this._bindEvent(),this._run()}var t,n,o;return t=e,(n=[{key:"_run",value:function(){var e=$(this.inputSelector),t=$(this.targetSelector),n=e.val()||this.placeholder;n.length>this.maxLength&&(n=n.substring(0,this.maxLength-this.omission.length)+this.omission),t.text(n)}},{key:"_bindEvent",value:function(){$(this.inputSelector).on("change",this._run.bind(this))}}])&&p(t.prototype,n),o&&p(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(i=o.key,r=void 0,r=function(e,t){if("object"!==h(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==h(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===h(r)?r:String(r)),o)}var i,r}var S=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.listSelector=t.listSelector,this.hideOnFirstSelector=t.hideOnFirstSelector,this.hideOnLastSelector=t.hideOnLastSelector,this.run()}var t,n,o;return t=e,(n=[{key:"run",value:function(){var e=$(this.listSelector),t=this.hideOnFirstSelector,n=this.hideOnLastSelector;if(1===e.length){var o=e.first();o.find(t).hide(),o.find(n).hide()}else e.each((function(o,i){i.id===e.first().attr("id")?($(i).find(t).hide(),$(i).find(n).show()):i.id===e.last().attr("id")?($(i).find(n).hide(),$(i).find(t).show()):($(i).find(n).show(),$(i).find(t).show())}))}}])&&m(t.prototype,n),o&&m(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(i=o.key,r=void 0,r=function(e,t){if("object"!==b(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==b(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===b(r)?r:String(r)),o)}var i,r}var w=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.listSelector=t.listSelector,this.labelSelector=t.labelSelector,this.onPositionComputed=t.onPositionComputed,this.run()}var t,n,o;return t=e,(n=[{key:"run",value:function(){var e=this;$(this.listSelector).each((function(t,n){var o=$(n).find(e.labelSelector),i=o.html();i.match(/#(\d+)/)?o.html(i.replace(/#(\d+)/,"#".concat(t+1))):o.html("".concat(i," #").concat(t+1)),e.onPositionComputed&&e.onPositionComputed(n,t)}))}}])&&y(t.prototype,n),o&&y(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}(),g=n(64112);function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function q(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(i=o.key,r=void 0,r=function(e,t){if("object"!==F(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==F(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===F(r)?r:String(r)),o)}var i,r}function _(e,t,n){return t&&q(e.prototype,t),n&&q(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var T=_((function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),$(t).length>0&&(0,g.Z)(t,n)[0].addEventListener("sortupdate",(function(e){var t=$(e.target).children();n.onSortUpdate&&n.onSortUpdate(t)}))}));function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function P(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(i=o.key,r=void 0,r=function(e,t){if("object"!==O(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==O(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===O(r)?r:String(r)),o)}var i,r}var k=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wrapperSelector=t.wrapperSelector,this.containerSelector=t.containerSelector,this.fieldSelector=t.fieldSelector,this.addFieldButtonSelector=t.addFieldButtonSelector,this.addSeparatorButtonSelector=t.addSeparatorButtonSelector,this.addTitleAndDescriptionButtonSelector=t.addTitleAndDescriptionButtonSelector,this.fieldTemplateSelector=t.fieldTemplateSelector,this.separatorTemplateSelector=t.separatorTemplateSelector,this.TitleAndDescriptionTemplateSelector=t.TitleAndDescriptionTemplateSelector,this.removeFieldButtonSelector=t.removeFieldButtonSelector,this.moveUpFieldButtonSelector=t.moveUpFieldButtonSelector,this.moveDownFieldButtonSelector=t.moveDownFieldButtonSelector,this.onAddField=t.onAddField,this.onRemoveField=t.onRemoveField,this.onMoveUpField=t.onMoveUpField,this.onMoveDownField=t.onMoveDownField,this.placeholderId=t.placeholderId,this.elementCounter=0,this._enableInterpolation(),this._activateFields(),this._bindEvents()}var t,n,o;return t=e,n=[{key:"_enableInterpolation",value:function(){$.fn.replaceAttribute=function(e,t,n){return $(this).find("[".concat(e,"*=").concat(t,"]")).addBack("[".concat(e,"*=").concat(t,"]")).each((function(o,i){$(i).attr(e,$(i).attr(e).replace(t,n))})),this},$.fn.template=function(e,t){var n=$(this).find("template, .decidim-template");n.length>0&&n.html((function(n,o){return $(o).template(e,t)[0].outerHTML}));var o=$(this).find("[data-template]");return o.length>0&&o.each((function(n,o){var i=$(o),r=$(i.data("template")),l=$(r[0].outerHTML),a="".concat(r.attr("id"),"-").concat(t),c="#".concat(a);l.attr("id",a),i.attr("data-template",c).data("template",c),r.after(l),l.html((function(n,o){return $(o).template(e,t)[0].outerHTML}))})),$(this).replaceAttribute("id",e,t),$(this).replaceAttribute("name",e,t),$(this).replaceAttribute("data-tabs-content",e,t),$(this).replaceAttribute("for",e,t),$(this).replaceAttribute("tabs_id",e,t),$(this).replaceAttribute("href",e,t),$(this).replaceAttribute("value",e,t),this}}},{key:"_bindEvents",value:function(){var e=this;$(this.wrapperSelector).on("click",this.addFieldButtonSelector,(function(t){return e._bindSafeEvent(t,(function(){return e._addField(e.fieldTemplateSelector)}))})),this.addSeparatorButtonSelector&&$(this.wrapperSelector).on("click",this.addSeparatorButtonSelector,(function(t){return e._bindSafeEvent(t,(function(){return e._addField(e.separatorTemplateSelector)}))})),this.addTitleAndDescriptionButtonSelector&&$(this.wrapperSelector).on("click",this.addTitleAndDescriptionButtonSelector,(function(t){return e._bindSafeEvent(t,(function(){return e._addField(e.TitleAndDescriptionTemplateSelector)}))})),$(this.wrapperSelector).on("click",this.removeFieldButtonSelector,(function(t){return e._bindSafeEvent(t,(function(t){return e._removeField(t)}))})),this.moveUpFieldButtonSelector&&$(this.wrapperSelector).on("click",this.moveUpFieldButtonSelector,(function(t){return e._bindSafeEvent(t,(function(t){return e._moveUpField(t)}))})),this.moveDownFieldButtonSelector&&$(this.wrapperSelector).on("click",this.moveDownFieldButtonSelector,(function(t){return e._bindSafeEvent(t,(function(t){return e._moveDownField(t)}))}))}},{key:"_bindSafeEvent",value:function(e,t){e.preventDefault(),e.stopPropagation();try{return t(e.target)}catch(n){return console.error(n),n}}},{key:"_addField",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".decidim-template",t=$(this.wrapperSelector),n=t.find(this.containerSelector),o=t.data("template"),i=null;o&&(i=$(o)),(null===i||i.length<1)&&(i=t.children("template, ".concat(e)));var r=$(i.html()).template(this.placeholderId,this._getUID());r.find("ul.tabs").attr("data-tabs",!0);var l=n.find(this.fieldSelector).last();l.length>0?l.after(r):r.appendTo(n),r.foundation(),this.onAddField&&this.onAddField(r)}},{key:"_removeField",value:function(e){var t=$(e).parents(this.fieldSelector);if(t.find("input").filter((function(e,t){return t.name.match(/id/)})).length>0){var n=t.find("input").filter((function(e,t){return t.name.match(/delete/)}));n.length>0&&$(n[0]).val(!0),t.addClass("hidden"),t.hide()}else t.remove();this.onRemoveField&&this.onRemoveField(t)}},{key:"_moveUpField",value:function(e){var t=$(e).parents(this.fieldSelector);t.prev().before(t),this.onMoveUpField&&this.onMoveUpField(t)}},{key:"_moveDownField",value:function(e){var t=$(e).parents(this.fieldSelector);t.next().after(t),this.onMoveDownField&&this.onMoveDownField(t)}},{key:"_activateFields",value:function(){var e=this,t=$(this.wrapperSelector).find(this.containerSelector);t.append(t.find("script")),$(this.fieldSelector).each((function(t,n){$(n).template(e.placeholderId,e._getUID()),$(n).find("ul.tabs").attr("data-tabs",!0)}))}},{key:"_getUID",value:function(){return this.elementCounter+=1,(new Date).getTime()+this.elementCounter}}],n&&P(t.prototype,n),o&&P(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return new k(e)}function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function x(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(i=o.key,r=void 0,r=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==E(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===E(r)?r:String(r)),o)}var i,r}var C=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.controllerField=t.controllerField,this.wrapperSelector=t.wrapperSelector,this.dependentFieldsSelector=t.dependentFieldsSelector,this.dependentInputSelector=t.dependentInputSelector,this.enablingCondition=t.enablingCondition,this._bindEvent(),this._run()}var t,n,o;return t=e,(n=[{key:"_run",value:function(){var e=this.controllerField,t=e.parents(this.wrapperSelector).find(this.dependentFieldsSelector),n=t.find(this.dependentInputSelector);this.enablingCondition(e)?(n.prop("disabled",!1),t.show()):(n.prop("disabled",!0),t.hide())}},{key:"_bindEvent",value:function(){var e=this;this.controllerField.on("change",(function(){e._run()}))}}])&&x(t.prototype,n),o&&x(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e){return new C(e)}var I=n(95801);window.Decidim.createEditableForm=function(){var e=".questionnaire-question",t=".questionnaire-question-answer-option",n=".questionnaire-question-answer-options",o=".remove-answer-option",i=".questionnaire-question-matrix-row",l=".questionnaire-question-matrix-rows",a=".remove-matrix-row",u=".questionnaire-question-max-choices",d=".questionnaire-question-display-condition",f=".questionnaire-question-display-conditions",p=".remove-display-condition",h="select[name$=\\[decidim_condition_question_id\\]]",m="select[name$=\\[condition_type\\]]",b="input[name$=\\[deleted\\]]",y=new S({listSelector:".questionnaire-question:not(.hidden)",hideOnFirstSelector:".move-up-question",hideOnLastSelector:".move-down-question"}),g=new w({listSelector:".questionnaire-question:not(.hidden)",labelSelector:".card-title span:first",onPositionComputed:function(t,n){$(t).find("input[name$=\\[position\\]]:not([name*=\\[matrix_rows\\]])").val(n),y.run(),$(e).each((function(e,t){var n=$(t);e?(n.find(f).find(b).val("false"),n.find(f).show()):(n.find(f).find(b).val("true"),n.find(f).hide())}))}}),F=["single_option","multiple_option","sorting","matrix_single","matrix_multiple"],q=["matrix_single","matrix_multiple"],_=function(){new T(".questionnaire-questions-list:not(.published)",{handle:".question-divider",placeholder:'<div style="border-style: dashed; border-color: #000"></div>',forcePlaceholderSize:!0,onSortUpdate:function(){g.run(),y.run()}})},O=function(e){var t,n="#".concat(e," .question-title-statement"),o=$(n).data("locale"),i=$(n).data("max-length"),r=$(n).data("omission"),l=$(n).data("placeholder");return t={inputSelector:"#".concat(e," input[name$=\\[body_").concat(o,"\\]]"),targetSelector:n,maxLength:i,omission:r,placeholder:l},new v(t)},P=function(i){var l=function(t){return new r({wrapperSelector:e,listSelector:"#".concat(t," ").concat(n," .questionnaire-question-answer-option:not(.hidden)"),minItems:2,hideOnMinItemsOrLessSelector:o})}(i),a=function(t){return new c({wrapperSelector:e,selectSelector:"".concat(u," select"),listSelector:"#".concat(t," ").concat(n," .questionnaire-question-answer-option:not(.hidden)")})}(i);return j({placeholderId:"questionnaire-question-answer-option-id",wrapperSelector:"#".concat(i," ").concat(n),containerSelector:".questionnaire-question-answer-options-list",fieldSelector:t,addFieldButtonSelector:".add-answer-option",fieldTemplateSelector:".decidim-answer-option-template",removeFieldButtonSelector:o,onAddField:function(){l.run(),a.run()},onRemoveField:function(){l.run(),a.run()}})},k={},E={},x=function(e){return F.indexOf(e)>=0},C=function(e){return q.indexOf(e)>=0},D=function(e){var t=e.options[e.selectedIndex];return $(t).data("type")},A=function(e){var t=e.find(h),n=D(t[0]),o=x(n),i=["answered","not_answered"];o&&(i.push("equal"),i.push("not_equal")),i.push("match");var r=e.find(m);r.find("option").each((function(e,t){var n=$(t),o=n.val();o&&(n.show(),i.indexOf(o)<0&&n.hide())})),i.indexOf(r.val())<0&&r.val(i[0]),r.trigger("change")},L=function(e){var t=e.find(m).val(),n=e.find(".questionnaire-question-display-condition-value"),o=e.find(".questionnaire-question-display-condition-answer-option"),i=e.find(h),r=D(i[0]),l=x(r);"match"===t?n.show():n.hide(),!l||"not_equal"!==t&&"equal"!==t?o.hide():o.show()},M=function(e){var t=function(e){return new s({source:e.find(h),select:e.find("select[name$=\\[decidim_answer_option_id\\]]"),sourceToParams:function(e){return{id:e.val()}}})}(e);t.run(),e.find(h).on("change",(function(){A(e)})),e.find(m).on("change",(function(){L(e)})),L(e),A(e)},U={},N=function(o){var r=o.attr("id"),c=o.find("select[name$=\\[question_type\\]]");!function(e){var t=e.find(".collapsible");if(t.length>0){var n=t.attr("id").replace("-question-card",""),o="".concat(n,"-question-card button--collapse-question-").concat(n," button--expand-question-").concat(n);e.find(".question--collapse").data("toggle",o)}}(o),O(r),B({controllerField:c,wrapperSelector:e,dependentFieldsSelector:n,dependentInputSelector:"".concat(t," input"),enablingCondition:function(e){return x(e.val())}}),B({controllerField:c,wrapperSelector:e,dependentFieldsSelector:u,dependentInputSelector:"select",enablingCondition:function(e){return"multiple_option"===e.val()||"matrix_multiple"===e.val()}}),B({controllerField:c,wrapperSelector:e,dependentFieldsSelector:l,dependentInputSelector:"".concat(i," input"),enablingCondition:function(e){return C(e.val())}}),k[r]=P(r),E[r]=function(e){return j({placeholderId:"questionnaire-question-matrix-row-id",wrapperSelector:"#".concat(e," ").concat(l),containerSelector:".questionnaire-question-matrix-rows-list",fieldSelector:i,addFieldButtonSelector:".add-matrix-row",fieldTemplateSelector:".decidim-matrix-row-template",removeFieldButtonSelector:a,onAddField:function(){},onRemoveField:function(){}})}(r),U[r]=function(e){return j({placeholderId:"questionnaire-question-display-condition-id",wrapperSelector:"#".concat(e," ").concat(f),containerSelector:".questionnaire-question-display-conditions-list",fieldSelector:d,addFieldButtonSelector:".add-display-condition",removeFieldButtonSelector:p,onAddField:function(e){M(e)},onRemoveField:function(){}})}(r);var s=k[r],v=E[r],h=function(){x(c.val())&&(0===c.parents(e).find(t).length&&(s._addField(),s._addField()));C(c.val())&&(0===c.parents(e).find(i).length&&(v._addField(),v._addField()))};c.on("change",h),h()};j({placeholderId:"questionnaire-question-id",wrapperSelector:".questionnaire-questions",containerSelector:".questionnaire-questions-list",fieldSelector:e,addFieldButtonSelector:".add-question",addSeparatorButtonSelector:".add-separator",addTitleAndDescriptionButtonSelector:".add-title-and-description",fieldTemplateSelector:".decidim-question-template",separatorTemplateSelector:".decidim-separator-template",TitleAndDescriptionTemplateSelector:".decidim-title-and-description-template",removeFieldButtonSelector:".remove-question",moveUpFieldButtonSelector:".move-up-question",moveDownFieldButtonSelector:".move-down-question",onAddField:function(e){N(e),_(),e.find(".editor-container").each((function(e,t){(0,I.Z)(t)})),g.run(),y.run(),e.find("select.language-change").toArray().forEach((function(e){e.addEventListener("change",(function(){var t=e.value,n=e.parentElement.parentElement.nextElementSibling;n.querySelector(".is-active").classList.remove("is-active"),n.querySelector(t).classList.add("is-active")}))}))},onRemoveField:function(e){g.run(),y.run(),e.find(o).each((function(t,n){k[e.attr("id")]._removeField(n)})),e.find(a).each((function(t,n){E[e.attr("id")]._removeField(n)})),e.find(p).each((function(t,n){U[e.attr("id")]._removeField(n)}))},onMoveUpField:function(){g.run(),y.run()},onMoveDownField:function(){g.run(),y.run()}}),_(),$(e).each((function(e,t){var n=$(t);!function(e){"true"===e.find("input[name$=\\[deleted\\]]").val()&&(e.addClass("hidden"),e.hide())}(n),N(n)})),$(d).each((function(e,t){var n=$(t);M(n)})),g.run(),y.run()}},2261:function(){window,$("button.collapse-all").on("click",(function(){$(".collapsible").addClass("hide"),$(".question--collapse .icon-expand").removeClass("hide"),$(".question--collapse .icon-collapse").addClass("hide")})),$("button.expand-all").on("click",(function(){$(".collapsible").removeClass("hide"),$(".question--collapse .icon-expand").addClass("hide"),$(".question--collapse .icon-collapse").removeClass("hide")}))}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}o.m=t,e=[],o.O=function(t,n,i,r){if(!n){var l=1/0;for(d=0;d<e.length;d++){n=e[d][0],i=e[d][1],r=e[d][2];for(var a=!0,c=0;c<n.length;c++)(!1&r||l>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(a=!1,r<l&&(l=r));if(a){e.splice(d--,1);var u=i();void 0!==u&&(t=u)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,i,r]},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e={9985:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,r,l=n[0],a=n[1],c=n[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(c)var d=c(o)}for(t&&t(n);u<l.length;u++)r=l[u],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(d)},n=self.webpackChunkdecidim_sb_app=self.webpackChunkdecidim_sb_app||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var i=o.O(void 0,[2415,4112,5801],(function(){return o(53320)}));i=o.O(i)}();
//# sourceMappingURL=decidim_forms_admin-b2942a406eb8aa69479c.js.map