(self["webpackChunkdecidim_sb_app"] = self["webpackChunkdecidim_sb_app"] || []).push([["_rvm_gems_ruby-3_0_2_gems_decidim-decidim_awesome-0_9_3_app_packs_src_decidim_decidim_awesome-009a63"],{

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

/***/ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/forms/custom_fields_renderer.js":
/*!**********************************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/forms/custom_fields_renderer.js ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CustomFieldsRenderer; }
/* harmony export */ });
/* harmony import */ var src_decidim_decidim_awesome_forms_rich_text_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/decidim_awesome/forms/rich_text_plugin */ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/forms/rich_text_plugin.js");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
__webpack_require__(/*! formBuilder/dist/form-render.min.js */ "./node_modules/formBuilder/dist/form-render.min.js");

var CustomFieldsRenderer = /*#__PURE__*/function () {
  // eslint-disable-line no-unused-vars
  function CustomFieldsRenderer(containerSelector) {
    _classCallCheck(this, CustomFieldsRenderer);
    this.containerSelector = containerSelector || ".proposal_custom_field:last";
    this.lang = this.getLang($("html").attr("lang"));
  }
  _createClass(CustomFieldsRenderer, [{
    key: "getLang",
    value: function getLang(lang) {
      var langs = {
        // ar: 'ar-SA', // Not in decidim yet
        "ar": "ar-TN",
        "ca": "ca-ES",
        "cs": "cs-CZ",
        "da": "da-DK",
        "de": "de-DE",
        "el": "el-GR",
        "en": "en-US",
        "es": "es-ES",
        "fa": "fa-IR",
        "fi": "fi-FI",
        "fr": "fr-FR",
        "he": "he-IL",
        "hu": "hu-HU",
        "it": "it-IT",
        "ja": "ja-JP",
        "my": "my-MM",
        "nb": "nb-NO",
        "nl": "nl-NL",
        "pl": "pl-PL",
        "pt": "pt-BR",
        "qz": "qz-MM",
        "ro": "ro-RO",
        "ru": "ru-RU",
        "sl": "sl-SI",
        "th": "th-TH",
        "tr": "tr-TR",
        "uk": "uk-UA",
        "vi": "vi-VN",
        "zh-TW": "zh-TW",
        "zh": "zh-CN"
      };
      if (langs[lang]) {
        return langs[lang];
      }
      if (langs[lang.substr(0, 2)]) {
        return langs[lang.substr(0, 2)];
      }
      return "en-US";
    }

    /*
    * Creates an XML document with a subset of html-compatible dl/dd/dt elements
    * to store the custom fields answers
    */
  }, {
    key: "dataToXML",
    value: function dataToXML(data) {
      var $dl = $("<dl/>");
      var $dd = null,
        $div = null,
        $dt = null,
        datum = null,
        key = null,
        label = null,
        text = null,
        val = null;
      $dl.attr("class", "decidim_awesome-custom_fields");
      $dl.attr("data-generator", "decidim_awesome");
      $dl.attr("data-version", window.DecidimAwesome.version);
      for (key in data) {
        // eslint-disable-line guard-for-in
        // console.log("get the data!", key, data[key]);
        // Richtext plugin does not saves userdata, so we get it from the hidden input
        if (data[key].type === "textarea" && data[key].subtype === "richtext") {
          data[key].userData = [$("#".concat(data[key].name, "-input")).val()];
        }
        if (data[key].userData && data[key].userData.length) {
          $dt = $("<dt/>");
          $dt.text(data[key].label);
          $dt.attr("name", data[key].name);
          $dd = $("<dd/>");
          // console.log("data for", key, data[key].name, data[key])
          for (val in data[key].userData) {
            // eslint-disable-line guard-for-in
            $div = $("<div/>");
            label = data[key].userData[val];
            text = null;
            if (data[key].values) {
              datum = data[key].values.find(function (obj) {
                return obj.value === label;
              }); // eslint-disable-line no-loop-func
              if (datum) {
                // eslint-disable-line max-depth
                text = label;
                label = datum.label;
              }
            } else if (data[key].type === "date" && label) {
              datum = new Date(label).toLocaleDateString();
              if (datum) {
                // eslint-disable-line max-depth
                text = label;
                label = datum;
              }
            }
            // console.log("userData", text, "label", label, 'key', key, 'data', data)
            if (data[key].type === "textarea" && data[key].subtype === "richtext") {
              $div.html(label);
            } else {
              $div.text(label);
            }
            if (text) {
              $div.attr("alt", text);
            }
            $dd.append($div);
          }
          $dd.attr("id", data[key].name);
          $dd.attr("name", data[key].type);
          $dl.append($dt);
          $dl.append($dd);
        }
      }
      return "<xml>".concat($dl[0].outerHTML, "</xml>");
    }
  }, {
    key: "fixBuggyFields",
    value: function fixBuggyFields() {
      var _this = this;
      if (!this.$container) {
        return false;
      }

      /**
      * Hack to fix required checkboxes being reset
      * Issue: https://github.com/Platoniq/decidim-module-decidim_awesome/issues/82
      */
      this.$container.find(".formbuilder-checkbox-group").each(function (_key, group) {
        var inputs = $(".formbuilder-checkbox input", group);
        var data = _this.spec.find(function (obj) {
          return obj.type === "checkbox-group";
        });
        var values = data.userData;
        if (!inputs.length || !data || !values) {
          return;
        }
        inputs.each(function (_idx, input) {
          var index = values.indexOf(input.value);
          if (index >= 0) {
            values.splice(index, 1);
            // setting checked=true do not makes the browser aware that the form is valid if the field is required
            if (!input.checked) {
              $(input).click();
            }
          } else if (input.checked) {
            $(input).click();
          }
        });

        // Fill "other" option
        var otherOption = $(".other-option", inputs.parent())[0];
        var otherVal = $(".other-val", inputs.parent())[0];
        var otherText = values.join(" ");
        if (otherOption) {
          if (otherText) {
            otherOption.checked = true;
            otherOption.value = otherText;
            otherVal.value = otherText;
          } else {
            otherOption.checked = false;
            otherOption.value = "";
            otherVal.value = "";
          }
        }
      });

      /**
      * Hack to fix required radio buttons "other" value
      * Issue: https://github.com/Platoniq/decidim-module-decidim_awesome/issues/133
      */
      this.$container.find(".formbuilder-radio input.other-val").on("input", function (input) {
        var $input = $(input.currentTarget);
        var $group = $input.closest(".formbuilder-radio-group");
        $group.find("input").each(function (_key, radio) {
          var name = $(radio).attr("name");
          if (name && name.endsWith("[]")) {
            $(radio).attr("name", name.slice(0, -2));
          }
        });
      });
      return this;
    }

    // Saves xml to the hidden input
  }, {
    key: "storeData",
    value: function storeData() {
      if (!this.$container) {
        return false;
      }
      var $form = this.$container.closest("form");
      var $body = $form.find("input[name=\"".concat(this.$element.data("name"), "\"]"));
      if ($body.length && this.instance) {
        this.spec = this.instance.userData;
        $body.val(this.dataToXML(this.spec));
        this.$element.data("spec", this.spec);
      }
      // console.log("storeData spec", this.spec, "$body", $body,"$form",$form,"this",this);
      return this;
    }
  }, {
    key: "init",
    value: function init($element) {
      this.$element = $element;
      this.spec = $element.data("spec");
      if (!this.$container) {
        this.$container = $(this.containerSelector);
      }
      // console.log("init", $element, "this", this)
      // always use the last field (in case of multilang tabs we only render one form due a limitation of the library to handle several instances)
      this.instance = this.$container.formRender({
        i18n: {
          locale: this.lang,
          location: "https://cdn.jsdelivr.net/npm/formbuilder-languages@1.1.0/"
        },
        formData: this.spec,
        render: true
      });
      this.fixBuggyFields();
    }
  }]);
  return CustomFieldsRenderer;
}();


/***/ }),

/***/ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/forms/rich_text_plugin.js":
/*!****************************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/forms/rich_text_plugin.js ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_decidim_awesome_editors_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/decidim_awesome/editors/editor */ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/editors/editor.js");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var _excluded = ["value", "userData"];
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/**
 * Decidim rich text editor control plugin
 * Renders standard Decidim WYSIWYG editor
 *
 * Registers Decidim Richtext as a subtype for the textarea control
 */


// configure the class for runtime loading
if (!window.fbControls) {
  window.fbControls = [];
}
window.fbControls.push(function (controlClass, allControlClasses) {
  var controlTextarea = allControlClasses.textarea;

  /**
   * DecidimRichtext control class
   *
   * NOTE: I haven't found a way to set the userData value using this plugin
   *       For this reason the value of the field must be collected manually
   *       from the hidden input name same as the field with the suffix '-input'
   */
  var controlRichtext = /*#__PURE__*/function (_controlTextarea) {
    _inherits(controlRichtext, _controlTextarea);
    var _super = _createSuper(controlRichtext);
    function controlRichtext() {
      _classCallCheck(this, controlRichtext);
      return _super.apply(this, arguments);
    }
    _createClass(controlRichtext, [{
      key: "configure",
      value:
      /**
       * configure the richtext editor requirements
       * @return {void}
       */
      function configure() {
        window.fbEditors.richtext = {};
      }

      /**
       * build a div DOM element & convert to a richtext editor
       * @return {DOMElement} DOM Element to be injected into the form.
       */
    }, {
      key: "build",
      value: function build() {
        var _this$config = this.config,
          value = _this$config.value,
          userData = _this$config.userData,
          attrs = _objectWithoutProperties(_this$config, _excluded);

        // hidden input for storing the current HTML value of the div
        this.inputId = "".concat(this.id, "-input");
        // console.log("build plugin: this",this)
        this.input = this.markup("input", null, {
          name: name,
          id: this.inputId,
          type: "hidden",
          value: userData && userData[0] || value || ""
        });
        var css = this.markup("style", "\n        #".concat(attrs.id, " { height: auto; min-height: 6rem; padding-left: 0; padding-right: 0; }\n        #").concat(attrs.id, " div.ql-container { height: ").concat(attrs.rows || 1, "rem; }\n        #").concat(attrs.id, " p.help-text { margin-top: .5rem; }\n        "), {
          type: "text/css"
        });
        var wrapperAttrs = _objectSpread(_objectSpread({}, attrs), {}, {
          "data-toolbar": "full"
        });
        // console.log("build value", value, "userData", userData, "attrs", attrs, attrs.id, "wrapperAttrs", wrapperAttrs);
        this.wrapper = this.markup("div", null, wrapperAttrs);
        return this.markup("div", [css, this.input, this.wrapper], attrs);
      }

      /**
       * When the element is rendered into the DOM, execute the following code to initialise it
       * @param {Object} evt - event
       * @return {Object} evt - event
       */
    }, {
      key: "onRender",
      value: function onRender(evt) {
        // const value = this.config.value || '';
        if (window.fbEditors.richtext[this.id]) {
          // console.log("todo destroy", window.fbEditors.richtext[this.id]);
          // window.fbEditors.richtext[this.id].richtext('destroy')
        }
        window.fbEditors.quill[this.id] = {};
        var editor = window.fbEditors.quill[this.id];
        // createQuillEditor does all the job to update the hidden input wrapper
        editor.instance = (0,src_decidim_decidim_awesome_editors_editor__WEBPACK_IMPORTED_MODULE_0__.createQuillEditor)(this.wrapper);
        // editor.data = new Delta();
        // if (value) {
        //   editor.instance.setContents(window.JSON.parse(this.parsedHtml(value)));
        // }
        // editor.instance.on('text-change', function(delta) {
        //   console.log("text-change", "delta", delta, "editor", editor);
        // //   // editor.data = editor.data.compose(delta);
        // });

        // console.log("render! editor", editor, "this", this, "value", value);
        return evt;
      }
    }], [{
      key: "definition",
      get:
      /**
       * Class configuration - return the icons & label related to this control
       * @return {JSON} definition object
       */
      function get() {
        return {
          icon: "📝",
          i18n: {
            "default": "Rich Text Editor"
          }
        };
      }
    }]);
    return controlRichtext;
  }(controlTextarea); // register Decidim richtext as a richtext control
  controlTextarea.register("richtext", controlRichtext, "textarea");
});

/***/ }),

/***/ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/proposals/custom_fields.js":
/*!*****************************************************************************************************************************************!*\
  !*** ../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/proposals/custom_fields.js ***!
  \*****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_decidim_awesome_forms_custom_fields_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/decidim_awesome/forms/custom_fields_renderer */ "../../../.rvm/gems/ruby-3.0.2/gems/decidim-decidim_awesome-0.9.3/app/packs/src/decidim/decidim_awesome/forms/custom_fields_renderer.js");

window.DecidimAwesome.CustomFieldsRenderer = window.DecidimAwesome.CustomFieldsRenderer || new src_decidim_decidim_awesome_forms_custom_fields_renderer__WEBPACK_IMPORTED_MODULE_0__["default"]();
$(function () {
  // use admin multilang specs if exists
  var $el = $("proposal_custom_field:first", ".tabs-title.is-active");
  if (!$el.length) {
    $el = $(".proposal_custom_field:first");
  }
  window.DecidimAwesome.CustomFieldsRenderer.init($el);
  window.DecidimAwesome.CustomFieldsRenderer.$container.closest("form").on("submit", function (evt) {
    if (evt.target.checkValidity()) {
      // save current editor
      window.DecidimAwesome.CustomFieldsRenderer.storeData();
    } else {
      evt.preventDefault();
      evt.target.reportValidity();
    }
  });
});

/***/ }),

/***/ "?b2fd":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (function() {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=_rvm_gems_ruby-3_0_2_gems_decidim-decidim_awesome-0_9_3_app_packs_src_decidim_decidim_awesome-009a63.js.map