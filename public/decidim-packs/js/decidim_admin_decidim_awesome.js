/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/entrypoints/decidim_admin_decidim_awesome.js":
/*!*******************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/entrypoints/decidim_admin_decidim_awesome.js ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_decidim_awesome_awesome_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/decidim_awesome/awesome_admin */ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/awesome_admin.js");
/* harmony import */ var jquery_ui_ui_widgets_sortable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-ui/ui/widgets/sortable */ "./node_modules/jquery-ui/ui/widgets/sortable.js");
/* harmony import */ var jquery_ui_ui_widgets_sortable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_sortable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var entrypoints_decidim_admin_decidim_awesome_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! entrypoints/decidim_admin_decidim_awesome.scss */ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/entrypoints/decidim_admin_decidim_awesome.scss");

// This is needed by custom fields builder but if loader there duplicates the jQuery inclusion


// CSS


/***/ }),

/***/ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/admin/auto_edit.js":
/*!*********************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/admin/auto_edit.js ***!
  \*********************************************************************************************************************************/
/***/ (function() {

$(function () {
  var CustomFieldsBuilders = window.CustomFieldsBuilders || [];
  $("body").on("click", "a.awesome-auto-edit", function (ev) {
    ev.preventDefault();
    var $link = $(ev.currentTarget);
    var scope = $link.data("scope");
    var $target = $("span.awesome-auto-edit[data-scope=\"".concat(scope, "\"]"));
    var $constraints = $(".constraints-editor[data-key=\"".concat(scope, "\"]"));
    if ($target.length === 0) {
      return;
    }
    var key = $target.data("key");
    var attribute = $target.data("var");
    var $hidden = $("[name=\"config[".concat(attribute, "][").concat(key, "]\"]"));
    var $multiple = $("[name=\"config[".concat(attribute, "][").concat(key, "][]\"]"));
    var $container = $(".".concat(attribute, "_container[data-key=\"").concat(key, "\"]"));
    var $delete = $(".delete-box", $container);
    var rebuildLabel = function rebuildLabel(text, withScope) {
      $target.text(text);
      $target.attr("data-key", text);
      $target.data("key", text);
      if (withScope) {
        $target.attr("data-scope", withScope);
        $target.data("scope", withScope);
        $link.attr("data-scope", withScope);
        $link.data("scope", withScope);
      }
      $link.show();
    };
    var rebuildHmtl = function rebuildHmtl(result) {
      rebuildLabel(result.key, result.scope);
      $constraints.replaceWith(result.html);
      // update hidden input if exists
      $hidden.attr("name", "config[".concat(attribute, "][").concat(result.key, "]"));
      $multiple.attr("name", "config[".concat(attribute, "][").concat(result.key, "][]"));
      $container.data("key", result.key);
      $container.attr("data-key", result.key);
      $delete.attr("href", $delete.attr("href").replace("key=".concat(key), "key=".concat(result.key)));
      CustomFieldsBuilders.forEach(function (builder) {
        if (builder.key === key) {
          builder.key = result.key;
        }
      });
    };
    $target.html("<input class=\"awesome-auto-edit\" data-scope=\"".concat(scope, "\" type=\"text\" value=\"").concat(key, "\">"));
    var $input = $("input.awesome-auto-edit[data-scope=\"".concat(scope, "\"]"));
    $link.hide();
    $input.select();
    $input.on("keypress", function (evt) {
      if (evt.code === "Enter" || evt.code === "13" || evt.code === "10") {
        evt.preventDefault();
        $.ajax({
          type: "POST",
          url: window.DecidimAwesome.rename_scope_label_path,
          dataType: "json",
          headers: {
            "X-CSRF-Token": $("meta[name=csrf-token]").attr("content")
          },
          data: {
            key: key,
            scope: scope,
            attribute: attribute,
            text: $input.val()
          }
        }).done(function (result) {
          return rebuildHmtl(result);
        }).fail(function (err) {
          console.error("Error saving key", key, "ERR:", err);
          rebuildLabel(key);
        });
      }
    });
    $input.on("blur", function () {
      rebuildLabel(key);
    });
  });
});

/***/ }),

/***/ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/admin/check_redirections.js":
/*!******************************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/admin/check_redirections.js ***!
  \******************************************************************************************************************************************/
/***/ (function() {

$(function () {
  $(".check-custom-redirections").on("click", function (evt) {
    evt.preventDefault();
    if ($(evt.target).hasClass("disabled")) {
      return;
    }
    $(evt.target).addClass("disabled");
    var getReport = function getReport(tr, response) {
      var item = $(tr).data("item");
      var $td = $(tr).find(".redirect-status");
      var type = response.type;
      var status = response.status;
      if (response.type === "opaqueredirect") {
        type = "redirect";
        status = "302";
      }
      if (item.active) {
        if (type === "redirect") {
          $td.addClass("success");
        } else {
          $td.addClass("alert");
        }
      } else {
        $td.addClass("muted");
      }
      return "".concat(type, " (").concat(status, ")");
    };
    $("tr.custom-redirection").each(function (index, tr) {
      var $td = $(tr).find(".redirect-status");
      $td.html('<span class="loading-spinner" />');
      fetch($(tr).data("origin"), {
        method: "HEAD",
        redirect: "manual"
      }).then(function (response) {
        $td.html(getReport(tr, response));
      })["catch"](function (error) {
        console.error("ERROR", error);
        $td.removeClass("loading");
      });
    });
  });
});

/***/ }),

/***/ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/admin/codemirror.js":
/*!**********************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/admin/codemirror.js ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! codemirror */ "./node_modules/codemirror/lib/codemirror.js");
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(codemirror__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var codemirror_mode_css_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! codemirror/mode/css/css */ "./node_modules/codemirror/mode/css/css.js");
/* harmony import */ var codemirror_mode_css_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_css_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var codemirror_keymap_sublime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! codemirror/keymap/sublime */ "./node_modules/codemirror/keymap/sublime.js");
/* harmony import */ var codemirror_keymap_sublime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(codemirror_keymap_sublime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stylesheets_decidim_decidim_awesome_admin_codemirror_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stylesheets/decidim/decidim_awesome/admin/codemirror.scss */ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/stylesheets/decidim/decidim_awesome/admin/codemirror.scss");




$(function () {
  $(".awesome-edit-config .scoped_styles_container textarea").each(function (_idx, el) {
    codemirror__WEBPACK_IMPORTED_MODULE_0___default().fromTextArea(el, {
      lineNumbers: true,
      mode: "css",
      keymap: "sublime"
    });
  });
});

/***/ }),

/***/ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/admin/constraints.js":
/*!***********************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/admin/constraints.js ***!
  \***********************************************************************************************************************************/
/***/ (function() {

$(function () {
  var $modal = $("#constraintsModal");
  if (!$modal.length) {
    return;
  }
  $(".decidim_awesome-form").on("click", ".constraints-editor .add-condition,.constraints-editor .edit-condition", function (evt) {
    evt.preventDefault();
    var $this = $(evt.target);
    var url = $this.attr("href");
    var $callout = $this.closest(".constraints-editor").find(".callout");
    $callout.hide();
    $callout.removeClass("alert success");
    $modal.find(".modal-content").html("");
    $modal.addClass("loading");
    $modal.data("url", url);
    $modal.foundation("open");
    $modal.find(".modal-content").load(url, function () {
      $modal.removeClass("loading");
    });
  });

  // Custom event listener to reload the modal if needed
  document.body.addEventListener("constraint:change", function (evt) {
    var vars = evt.detail.map(function (setting) {
      return "".concat(setting.key, "=").concat(setting.value);
    });
    var url = "".concat($modal.data("url"), "&").concat(vars.join("&"));
    // console.log("constraint:change vars:", vars, "url:", url)
    $modal.addClass("loading");
    $modal.find(".modal-content").load(url, function () {
      $modal.removeClass("loading");
    });
  });

  // Rails AJAX events
  document.body.addEventListener("ajax:error", function (responseText) {
    // console.log("ajax:error", responseText)
    var $container = $(".constraints-editor[data-key=\"".concat(responseText.detail[0].key, "\"]"));
    var $callout = $container.find(".callout");
    $callout.show();
    $callout.contents("p").html("".concat(responseText.detail[0].message, ": <strong>").concat(responseText.detail[0].error, "</strong>"));
    $callout.addClass("alert");
  });
  document.body.addEventListener("ajax:success", function (responseText) {
    // console.log("ajax:success", responseText)
    var $container = $(".constraints-editor[data-key=\"".concat(responseText.detail[0].key, "\"]"));
    var $callout = $container.find(".callout");
    $modal.foundation("close");
    $callout.show();
    $callout.contents("p").html(responseText.detail[0].message);
    $callout.addClass("success");
    // reconstruct list
    $container.replaceWith(responseText.detail[0].html);
  });
});

/***/ }),

/***/ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/admin/user_picker.js":
/*!***********************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/admin/user_picker.js ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! select2 */ "./node_modules/select2/dist/js/select2.js");
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(select2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stylesheets_decidim_decidim_awesome_admin_user_picker_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylesheets/decidim/decidim_awesome/admin/user_picker.scss */ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/stylesheets/decidim/decidim_awesome/admin/user_picker.scss");
/* eslint-disable no-invalid-this */


$(function () {
  $("select.multiusers-select").each(function () {
    var url = $(this).attr("data-url");
    $(this).select2({
      ajax: {
        url: url,
        delay: 100,
        dataType: "json",
        processResults: function processResults(data) {
          return {
            results: data
          };
        }
      },
      escapeMarkup: function escapeMarkup(markup) {
        return markup;
      },
      templateSelection: function templateSelection(item) {
        return "".concat(item.text);
      },
      minimumInputLength: 1,
      theme: "foundation"
    });
  });
});

/***/ }),

/***/ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/awesome_admin.js":
/*!*******************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/awesome_admin.js ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var entrypoints_decidim_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entrypoints/decidim_admin */ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-admin-0.27.3/app/packs/entrypoints/decidim_admin.js");
/* harmony import */ var src_decidim_decidim_awesome_admin_constraints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/decidim_awesome/admin/constraints */ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/admin/constraints.js");
/* harmony import */ var src_decidim_decidim_awesome_admin_constraints__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src_decidim_decidim_awesome_admin_constraints__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_decidim_decidim_awesome_admin_auto_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/decidim/decidim_awesome/admin/auto_edit */ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/admin/auto_edit.js");
/* harmony import */ var src_decidim_decidim_awesome_admin_auto_edit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(src_decidim_decidim_awesome_admin_auto_edit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_decidim_decidim_awesome_admin_user_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/decidim/decidim_awesome/admin/user_picker */ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/admin/user_picker.js");
/* harmony import */ var src_decidim_decidim_awesome_editors_tabs_focus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/decidim/decidim_awesome/editors/tabs_focus */ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/editors/tabs_focus.js");
/* harmony import */ var src_decidim_decidim_awesome_editors_tabs_focus__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(src_decidim_decidim_awesome_editors_tabs_focus__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_decidim_decidim_awesome_admin_codemirror__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/decidim/decidim_awesome/admin/codemirror */ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/admin/codemirror.js");
/* harmony import */ var src_decidim_decidim_awesome_admin_check_redirections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/decidim/decidim_awesome/admin/check_redirections */ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/admin/check_redirections.js");
/* harmony import */ var src_decidim_decidim_awesome_admin_check_redirections__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(src_decidim_decidim_awesome_admin_check_redirections__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_decidim_decidim_awesome_editors_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/decidim/decidim_awesome/editors/editor */ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/editors/editor.js");
// Webpack seems to "forgget" about certain libraries already being loaded 
// if javascript_pack_tag is called two times, let's include the whole Decidim admin here instead

// Custom scripts for awesome







$(function () {
  $(".editor-container").each(function (_idx, container) {
    (0,src_decidim_decidim_awesome_editors_editor__WEBPACK_IMPORTED_MODULE_7__.destroyQuillEditor)(container);
    if (window.DecidimAwesome.use_markdown_editor) {
      (0,src_decidim_decidim_awesome_editors_editor__WEBPACK_IMPORTED_MODULE_7__.createMarkdownEditor)(container);
    } else {
      (0,src_decidim_decidim_awesome_editors_editor__WEBPACK_IMPORTED_MODULE_7__.createQuillEditor)(container);
    }
  });
});

/***/ }),

/***/ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/editors/editor.js":
/*!********************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/editors/editor.js ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMarkdownEditor: function() { return /* binding */ createMarkdownEditor; },
/* harmony export */   createQuillEditor: function() { return /* binding */ createQuillEditor; },
/* harmony export */   destroyQuillEditor: function() { return /* binding */ destroyQuillEditor; }
/* harmony export */ });
/* harmony import */ var src_decidim_editor_linebreak_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/editor/linebreak_module */ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-core-0.27.3/app/packs/src/decidim/editor/linebreak_module.js");
/* harmony import */ var inscrybmde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inscrybmde */ "./node_modules/inscrybmde/src/js/inscrybmde.js");
/* harmony import */ var inscrybmde__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inscrybmde__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var europa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! europa */ "./node_modules/europa/dist/europa.js");
/* harmony import */ var europa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(europa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var inline_attachment_src_inline_attachment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inline-attachment/src/inline-attachment */ "./node_modules/inline-attachment/src/inline-attachment.js");
/* harmony import */ var inline_attachment_src_inline_attachment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(inline_attachment_src_inline_attachment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var inline_attachment_src_codemirror_4_inline_attachment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! inline-attachment/src/codemirror-4.inline-attachment */ "./node_modules/inline-attachment/src/codemirror-4.inline-attachment.js");
/* harmony import */ var inline_attachment_src_codemirror_4_inline_attachment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(inline_attachment_src_codemirror_4_inline_attachment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var inline_attachment_src_jquery_inline_attachment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! inline-attachment/src/jquery.inline-attachment */ "./node_modules/inline-attachment/src/jquery.inline-attachment.js");
/* harmony import */ var inline_attachment_src_jquery_inline_attachment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(inline_attachment_src_jquery_inline_attachment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/es/index.js");
/* harmony import */ var highlight_js_styles_github_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highlight.js/styles/github.css */ "./node_modules/highlight.js/styles/github.css");
/* harmony import */ var src_decidim_editor_clipboard_override__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/decidim/editor/clipboard_override */ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-core-0.27.3/app/packs/src/decidim/editor/clipboard_override.js");
/* harmony import */ var src_decidim_vendor_image_resize_min__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/decidim/vendor/image-resize.min */ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-core-0.27.3/app/packs/src/decidim/vendor/image-resize.min.js");
/* harmony import */ var src_decidim_vendor_image_resize_min__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(src_decidim_vendor_image_resize_min__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_decidim_vendor_image_upload_min__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/decidim/vendor/image-upload.min */ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-core-0.27.3/app/packs/src/decidim/vendor/image-upload.min.js");
/* harmony import */ var src_decidim_vendor_image_upload_min__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(src_decidim_vendor_image_upload_min__WEBPACK_IMPORTED_MODULE_10__);
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
/* eslint-disable require-jsdoc, func-style */

/*
* Since version 0.25 we follow a different strategy and opt to destroy and override completely the original editor
* That's because editors are instantiated directly instead of creating a global function to instantiate them
*/












var DecidimAwesome = window.DecidimAwesome || {};
var quillFormats = ["bold", "italic", "link", "underline", "header", "list", "video", "image", "alt", "break", "width", "style", "code", "blockquote", "indent"];

// A tricky way to destroy the quill editor
function destroyQuillEditor(container) {
  if (container) {
    var content = $(container).find(".ql-editor").html();
    $(container).html(content);
    $(container).siblings(".ql-toolbar").remove();
    $(container).find("*[class*='ql-']").removeClass(function (index, className) {
      return (className.match(/(^|\s)ql-\S+/g) || []).join(" ");
    });
    $(container).removeClass(function (index, className) {
      return (className.match(/(^|\s)ql-\S+/g) || []).join(" ");
    });
    if ($(container).next().is("p.help-text")) {
      $(container).next().remove();
    }
  } else {
    console.error("editor [".concat(container, "] not exists"));
  }
}
function createQuillEditor(container) {
  var toolbar = $(container).data("toolbar");
  var disabled = $(container).data("disabled");
  var allowedEmptyContentSelector = "iframe";
  var quillToolbar = [["bold", "italic", "underline", "linebreak"], [{
    list: "ordered"
  }, {
    list: "bullet"
  }], ["link", "clean"], ["code", "blockquote"], [{
    "indent": "-1"
  }, {
    "indent": "+1"
  }]];
  var addImage = false;
  if (toolbar === "full") {
    quillToolbar = [[{
      header: [2, 3, 4, 5, 6, false]
    }]].concat(_toConsumableArray(quillToolbar));
    if (DecidimAwesome.allow_images_in_full_editor) {
      quillToolbar.push(["video", "image"]);
      addImage = true;
    } else {
      quillToolbar.push(["video"]);
    }
  } else if (toolbar === "basic") {
    if (DecidimAwesome.allow_images_in_small_editor) {
      quillToolbar.push(["video", "image"]);
      addImage = true;
    } else {
      quillToolbar.push(["video"]);
    }
  } else if (DecidimAwesome.allow_images_in_small_editor) {
    quillToolbar.push(["image"]);
    addImage = true;
  }
  var modules = {
    linebreak: {},
    toolbar: {
      container: quillToolbar,
      handlers: {
        "linebreak": src_decidim_editor_linebreak_module__WEBPACK_IMPORTED_MODULE_0__["default"]
      }
    }
  };
  var $input = $(container).siblings('input[type="hidden"]');
  container.innerHTML = $input.val() || "";
  var token = $('meta[name="csrf-token"]').attr("content");
  if (addImage) {
    modules.imageResize = {
      modules: ["Resize", "DisplaySize"]
    };
    modules.imageUpload = {
      url: DecidimAwesome.editor_uploader_path,
      method: "POST",
      name: "image",
      withCredentials: false,
      headers: {
        "X-CSRF-Token": token
      },
      callbackOK: function callbackOK(serverResponse, next) {
        $("div.ql-toolbar").last().removeClass("editor-loading");
        next(serverResponse.url);
      },
      callbackKO: function callbackKO(serverError) {
        $("div.ql-toolbar").last().removeClass("editor-loading");
        var msg = serverError && serverError.body;
        try {
          msg = JSON.parse(msg).message;
        } catch (evt) {
          console.error("Parsing error", evt);
        }
        console.error("Image upload error: ".concat(msg));
        var $p = $("<p class=\"text-alert help-text\">".concat(msg, "</p>"));
        $(container).after($p);
        setTimeout(function () {
          $p.fadeOut(1000, function () {
            $p.destroy();
          });
        }, 3000);
      },
      checkBeforeSend: function checkBeforeSend(file, next) {
        $("div.ql-toolbar").last().addClass("editor-loading");
        next(file);
      }
    };
  }
  var quill = new Quill(container, {
    modules: modules,
    formats: quillFormats,
    theme: "snow"
  });
  if (disabled) {
    quill.disable();
  }
  quill.on("text-change", function () {
    var text = quill.getText();

    // Triggers CustomEvent with the cursor position
    // It is required in input_mentions.js
    var event = new CustomEvent("quill-position", {
      detail: quill.getSelection()
    });
    container.dispatchEvent(event);
    if (text === "\n" || text === "\n\n") {
      $input.val("");
    } else {
      $input.val(quill.root.innerHTML);
    }
    if ((text === "\n" || text === "\n\n") && quill.root.querySelectorAll(allowedEmptyContentSelector).length === 0) {
      $input.val("");
    } else {
      var emptyParagraph = "<p><br></p>";
      var cleanHTML = quill.root.innerHTML.replace(new RegExp("^".concat(emptyParagraph, "|").concat(emptyParagraph, "$"), "g"), "");
      $input.val(cleanHTML);
    }
  });
  // After editor is ready, linebreak_module deletes two extraneous new lines
  quill.emitter.emit("editor-ready");
  if (addImage) {
    var text = $(container).data("dragAndDropHelpText") || DecidimAwesome.texts.drag_and_drop_image;
    $(container).after("<p class=\"help-text\" style=\"margin-top:-1.5rem;\">".concat(text, "</p>"));
  }

  // After editor is ready, linebreak_module deletes two extraneous new lines
  quill.emitter.emit("editor-ready");
  return quill;
}
function createMarkdownEditor(container) {
  var text = DecidimAwesome.texts.drag_and_drop_image;
  var token = $('meta[name="csrf-token"]').attr("content");
  var $input = $(container).siblings('input[type="hidden"]');
  var $faker = $('<textarea name="faker-inscrybmde"/>');
  var $form = $(container).closest("form");
  var europa = new (europa__WEBPACK_IMPORTED_MODULE_2___default())();
  $faker.val(europa.convert($input.val()));
  $faker.insertBefore($(container));
  $(container).hide();
  var inscrybmde = new (inscrybmde__WEBPACK_IMPORTED_MODULE_1___default())({
    element: $faker[0],
    spellChecker: false,
    renderingConfig: {
      codeSyntaxHighlighting: true,
      hljs: highlight_js__WEBPACK_IMPORTED_MODULE_6__["default"]
    }
  });
  $faker[0].InscrybMDE = inscrybmde;

  // Allow image upload
  if (DecidimAwesome.allow_images_in_markdown_editor) {
    $(inscrybmde.gui.statusbar).prepend("<span class=\"help-text\" style=\"float:left;margin:0;text-align:left;\">".concat(text, "</span>"));
    window.inlineAttachment.editors.codemirror4.attach(inscrybmde.codemirror, {
      uploadUrl: DecidimAwesome.editor_uploader_path,
      uploadFieldName: "image",
      jsonFieldName: "url",
      extraHeaders: {
        "X-CSRF-Token": token
      }
    });
  }

  // convert to html on submit
  $form.on("submit", function () {
    // e.preventDefault();
    $input.val(inscrybmde.markdown(inscrybmde.value()));
  });
}

/***/ }),

/***/ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/editors/tabs_focus.js":
/*!************************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/editors/tabs_focus.js ***!
  \************************************************************************************************************************************/
/***/ (function() {

/**
 * When switching tabs in i18n fields, autofocus on the markdown if exists
 */
$(function () {
  // Event launched by foundation
  $("[data-tabs]").on("change.zf.tabs", function (event) {
    var $container = $(event.target).closest(".label--tabs").next(".tabs-content").find(".tabs-panel.is-active");
    // fix inscrybmde if present
    var $input = $container.find('[name="faker-inscrybmde"]');
    if ($input.length > 0) {
      $input[0].InscrybMDE.codemirror.refresh();
    }
    // fix custom fields if present
    $input = $container.find(".proposal_custom_field:first");
    if ($input.length > 0) {
      // saves current data to the hidden field for the lang
      window.DecidimAwesome.CustomFieldsRenderer.storeData();
      // init the current language
      window.DecidimAwesome.CustomFieldsRenderer.init($input);
    }
  });
});

/***/ }),

/***/ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/entrypoints/decidim_admin_decidim_awesome.scss":
/*!*********************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/entrypoints/decidim_admin_decidim_awesome.scss ***!
  \*********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/stylesheets/decidim/decidim_awesome/admin/codemirror.scss":
/*!********************************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/stylesheets/decidim/decidim_awesome/admin/codemirror.scss ***!
  \********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/stylesheets/decidim/decidim_awesome/admin/user_picker.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/stylesheets/decidim/decidim_awesome/admin/user_picker.scss ***!
  \*********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "?b2fd":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (function() {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"decidim_admin_decidim_awesome": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdecidim_sb_app"] = self["webpackChunkdecidim_sb_app"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_quill_formats_code_js","vendors-node_modules_europa_dist_europa_js-node_modules_inline-attachment_src_codemirror-4_in-db2b88","vendors-node_modules_rails_activestorage_app_assets_javascripts_activestorage_js-node_modules-03f302","vendors-node_modules_html5sortable_dist_html5sortable_es_js","vendors-node_modules_d3-array_src_index_js-node_modules_d3-collection_src_index_js-node_modul-f618e0","vendors-node_modules_tarekraafat_autocomplete_js_dist_autoComplete_min_js-node_modules_d3-axi-b5cfa0","vendors-node_modules_jquery-serializejson_jquery_serializejson_js","vendors-node_modules_codemirror_keymap_sublime_js-node_modules_codemirror_mode_css_css_js-nod-5bf376","_rvm_gems_ruby-3_0_2_gems_decidim-core-0_27_3_app_packs_src_decidim_editor_clipboard_override-b8e545","_rvm_gems_ruby-3_0_2_gems_decidim-core-0_27_3_app_packs_src_decidim_autocomplete_js","_rvm_gems_ruby-3_0_2_gems_decidim-core-0_27_3_app_packs_src_decidim_configuration_js-_rvm_gem-fb07b9","_rvm_gems_ruby-3_0_2_gems_decidim-admin-0_27_3_app_packs_src_decidim_admin_auto_buttons_by_po-56398c","_rvm_gems_ruby-3_0_2_gems_decidim-core-0_27_3_app_packs_src_decidim_ajax_modals_js-_rvm_gems_-99a93d","_rvm_gems_ruby-3_0_2_gems_decidim-admin-0_27_3_app_packs_entrypoints_decidim_admin_js"], function() { return __webpack_require__("../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/entrypoints/decidim_admin_decidim_awesome.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=decidim_admin_decidim_awesome.js.map