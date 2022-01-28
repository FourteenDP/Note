"use strict";

var obsidian = require("obsidian");

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function (d, b) {
  extendStatics =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (d, b) {
        d.__proto__ = b;
      }) ||
    function (d, b) {
      for (var p in b)
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype =
    b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P
      ? value
      : new P(function (resolve) {
          resolve(value);
        });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done
        ? resolve(result.value)
        : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: [],
    },
    f,
    y,
    t,
    g;
  return (
    (g = { next: verb(0), throw: verb(1), return: verb(2) }),
    typeof Symbol === "function" &&
      (g[Symbol.iterator] = function () {
        return this;
      }),
    g
  );
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (
          ((f = 1),
          y &&
            (t =
              op[0] & 2
                ? y["return"]
                : op[0]
                ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                : y.next) &&
            !(t = t.call(y, op[1])).done)
        )
          return t;
        if (((y = 0), t)) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (
              !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
              (op[0] === 6 || op[0] === 2)
            ) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var FootlinksSettingTab = /** @class */ (function (_super) {
  __extends(FootlinksSettingTab, _super);
  function FootlinksSettingTab(app, plugin) {
    var _this = _super.call(this, app, plugin) || this;
    _this.plugin = plugin;
    return _this;
  }
  FootlinksSettingTab.prototype.display = function () {
    var _this = this;
    var containerEl = this.containerEl;
    containerEl.empty();
    new obsidian.Setting(containerEl)
      .setName("Footlinks seperator")
      .setDesc("Seperates the footlinks area from main body")
      .addText(function (text) {
        return text
          .setPlaceholder("None")
          .setValue(_this.plugin.setting.footSeperator)
          .onChange(function (value) {
            _this.plugin.setting.footSeperator = value;
            _this.plugin.saveData(_this.plugin.setting);
            text.setValue(value);
          });
      });
    new obsidian.Setting(containerEl)
      .setName("Show icon in left side menu")
      .addToggle(function (toggle) {
        toggle
          .setValue(_this.plugin.setting.showIcon)
          .onChange(function (value) {
            _this.plugin.setting.showIcon = value;
            _this.plugin.saveData(_this.plugin.setting);
            new obsidian.Notice(
              "Reload the app to see icon " +
                (value ? "added" : "removed") +
                "."
            );
          });
      });
    // new Setting(containerEl)
    // 	.setName("Choose a footlinks style")
    // 	.addDropdown((dropdown) => {
    // 		dropdown.addOption("Single brackets", "test display");
    // 	});
  };
  return FootlinksSettingTab;
})(obsidian.PluginSettingTab);

var FootLinksSetting = /** @class */ (function () {
  function FootLinksSetting() {
    this.footSeperator = "";
    this.showIcon = true;
    this.needGlobalRefactor = false;
    this.refactorInterval = null;
  }
  return FootLinksSetting;
})();

obsidian.addIcon(
  "footlinks-icon",
  '<path d="M22.3680891,66 C24.5772281,66 26.3680891,67.790861 26.3680891,70 L26.3680891,80 C26.3680891,82.209139 24.5772281,84 22.3680891,84 L13,84 C10.790861,84 9,82.209139 9,80 L9,70 C9,67.790861 10.790861,66 13,66 L22.3680891,66 Z M32.2112675,76.6666667 C33.4325168,76.6666667 34.422535,77.6501662 34.422535,78.8633744 C34.422535,80.0765826 33.4325168,81.0600821 32.2112675,81.0600821 C30.9900182,81.0600821 30,80.0765826 30,78.8633744 C30,77.6501662 30.9900182,76.6666667 32.2112675,76.6666667 Z M89,71 C89.5522847,71 90,71.4477153 90,72 L90,77 C90,77.5522847 89.5522847,78 89,78 L41,78 C40.4477153,78 40,77.5522847 40,77 L40,72 C40,71.4477153 40.4477153,71 41,71 L89,71 Z M32.2112675,68 C33.4325168,68 34.422535,68.9834995 34.422535,70.1967077 C34.422535,71.4099159 33.4325168,72.3934154 32.2112675,72.3934154 C30.9900182,72.3934154 30,71.4099159 30,70.1967077 C30,68.9834995 30.9900182,68 32.2112675,68 Z M22.3680891,41 C24.5772281,41 26.3680891,42.790861 26.3680891,45 L26.3680891,55 C26.3680891,57.209139 24.5772281,59 22.3680891,59 L13,59 C10.790861,59 9,57.209139 9,55 L9,45 C9,42.790861 10.790861,41 13,41 L22.3680891,41 Z M32.2112675,51.6666667 C33.4325168,51.6666667 34.422535,52.6501662 34.422535,53.8633744 C34.422535,55.0765826 33.4325168,56.0600821 32.2112675,56.0600821 C30.9900182,56.0600821 30,55.0765826 30,53.8633744 C30,52.6501662 30.9900182,51.6666667 32.2112675,51.6666667 Z M89,46 C89.5522847,46 90,46.4477153 90,47 L90,52 C90,52.5522847 89.5522847,53 89,53 L41,53 C40.4477153,53 40,52.5522847 40,52 L40,47 C40,46.4477153 40.4477153,46 41,46 L89,46 Z M32.2112675,43 C33.4325168,43 34.422535,43.9834995 34.422535,45.1967077 C34.422535,46.4099159 33.4325168,47.3934154 32.2112675,47.3934154 C30.9900182,47.3934154 30,46.4099159 30,45.1967077 C30,43.9834995 30.9900182,43 32.2112675,43 Z M22.3680891,16 C24.5772281,16 26.3680891,17.790861 26.3680891,20 L26.3680891,30 C26.3680891,32.209139 24.5772281,34 22.3680891,34 L13,34 C10.790861,34 9,32.209139 9,30 L9,20 C9,17.790861 10.790861,16 13,16 L22.3680891,16 Z M32.2112675,26.6666667 C33.4325168,26.6666667 34.422535,27.6501662 34.422535,28.8633744 C34.422535,30.0765826 33.4325168,31.0600821 32.2112675,31.0600821 C30.9900182,31.0600821 30,30.0765826 30,28.8633744 C30,27.6501662 30.9900182,26.6666667 32.2112675,26.6666667 Z M89,21 C89.5522847,21 90,21.4477153 90,22 L90,27 C90,27.5522847 89.5522847,28 89,28 L41,28 C40.4477153,28 40,27.5522847 40,27 L40,22 C40,21.4477153 40.4477153,21 41,21 L89,21 Z M32.2112675,18 C33.4325168,18 34.422535,18.9834995 34.422535,20.1967077 C34.422535,21.4099159 33.4325168,22.3934154 32.2112675,22.3934154 C30.9900182,22.3934154 30,21.4099159 30,20.1967077 C30,18.9834995 30.9900182,18 32.2112675,18 Z" fill="currentColor"></path>'
);
var FootlinksPlugin = /** @class */ (function (_super) {
  __extends(FootlinksPlugin, _super);
  function FootlinksPlugin() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.extractedLinks = [];
    return _this;
  }
  FootlinksPlugin.prototype.onload = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            this.setting = new FootLinksSetting();
            return [4 /*yield*/, this.loadSetting()];
          case 1:
            _a.sent();
            if (this.setting.showIcon) {
              this.addRibbonIcon("footlinks-icon", "Footlinks", function () {
                _this.generateFootlinks();
              });
            }
            this.addCommand({
              id: "footlinks-current-shortcut",
              name: "Refactor current page",
              callback: function () {
                return _this.generateFootlinks();
              },
            });
            // this.addCommand({
            // 	id: "footlinks-global-shortcut",
            // 	name: "Refactor all pages",
            // 	callback: () => this.generateFootlinks(),
            // });
            this.addSettingTab(new FootlinksSettingTab(this.app, this));
            return [2 /*return*/];
        }
      });
    });
  };
  FootlinksPlugin.prototype.loadSetting = function () {
    return __awaiter(this, void 0, void 0, function () {
      var loadedSetting;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, this.loadData()];
          case 1:
            loadedSetting = _a.sent();
            if (loadedSetting) {
              this.setting.footSeperator = loadedSetting.footSeperator;
              this.setting.needGlobalRefactor =
                loadedSetting.needGlobalRefactor;
              this.setting.refactorInterval = loadedSetting.refactorInterval;
              this.setting.showIcon = loadedSetting.showIcon;
            } else {
              this.saveData(this.setting);
            }
            return [2 /*return*/];
        }
      });
    });
  };
  FootlinksPlugin.prototype.generateFootlinks = function () {
    var _a, _b;
    this.re =
      /\[([^\[\]]+?)\]\((https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%\._\+~#=]{1,256}\.[a-zA-Z0-9\(\)]{1,6}?(?:\/(.*?(\(.*?\))*.*?)*?(\.\w{1,6})?)*?)\)/gi;
    var activeLeaf =
      (_a = this.app.workspace.activeLeaf) !== null && _a !== void 0
        ? _a
        : null;
    var source = activeLeaf.view.currentMode;
    var sourceContent = source.get();
    this.seperator = this.makeSeperator(sourceContent);
    var extractedLinks =
      (_b = this.extractLinks(sourceContent)) !== null && _b !== void 0
        ? _b
        : null;
    if (extractedLinks) {
      var newContent = this.refactorContent(sourceContent, extractedLinks);
      source.set(newContent, false);
    }
  };
  FootlinksPlugin.prototype.extractLinks = function (text) {
    var extractedLinks = [];
    if (text) {
      var match = this.re.exec(text);
      if (!match) {
        new obsidian.Notice("No legal links found on this page.");
        return;
      }
      do {
        extractedLinks.push({ text: match[1], url: match[2] });
      } while ((match = this.re.exec(text)) !== null);
      return extractedLinks;
    } else {
      new obsidian.Notice("This page is still empty.");
    }
  };
  FootlinksPlugin.prototype.refactorContent = function (content, links) {
    var footlinks = this.formatLinks(links);
    var newContent = content
      .replace(this.re, "[$1]") // Remove urls in main text
      .trimEnd()
      .replace(/\] ?\[/g, "]  ["); // Obsidian parses [x][y] as a footnote, so we add two spaces in between to fix in the case of adjacent link texts.
    newContent += footlinks;
    return newContent;
  };
  FootlinksPlugin.prototype.formatLinks = function (links) {
    var footlinks = "";
    var linkTexts = links.map(function (link) {
      return "[" + link.text + "]: " + link.url + "\n";
    });
    linkTexts = linkTexts.filter(function (text, pos) {
      return linkTexts.indexOf(text) == pos;
    });
    footlinks = linkTexts.reduce(function (prev, current) {
      return prev + current;
    }, this.seperator);
    return footlinks;
  };
  FootlinksPlugin.prototype.makeSeperator = function (content) {
    var footlinkRegx = /\[.*?\]: /g;
    return !!content.match(footlinkRegx)
      ? "\n"
      : "\n\n" + this.setting.footSeperator + "\n\n";
  };
  return FootlinksPlugin;
})(obsidian.Plugin);

module.exports = FootlinksPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uL3NyYy9Gb290bGlua3NTZXR0aW5nVGFiLnRzIiwiLi4vc3JjL0Zvb3RsaW5rc1NldHRpbmcudHMiLCIuLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBBcHAsIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcsIE5vdGljZSB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IEZvb3RsaW5rc1BsdWdpbiBmcm9tIFwiLi9tYWluXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RsaW5rc1NldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcblx0cHJpdmF0ZSByZWFkb25seSBwbHVnaW46IEZvb3RsaW5rc1BsdWdpbjtcblx0cHVibGljIHNlcGVyYXRvclNldHRpbmc6IFNldHRpbmc7XG5cdHB1YmxpYyBpY29uU2V0dGluZzogU2V0dGluZztcblx0cHVibGljIHJlZmFjdG9yU2V0dGluZzogU2V0dGluZztcblx0cHVibGljIHJlZmFjdG9ySW50ZXJ2YWxTZXR0aW5nOiBTZXR0aW5nO1xuXG5cdGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IEZvb3RsaW5rc1BsdWdpbikge1xuXHRcdHN1cGVyKGFwcCwgcGx1Z2luKTtcblx0XHR0aGlzLnBsdWdpbiA9IHBsdWdpbjtcblx0fVxuXG5cdGRpc3BsYXkoKTogdm9pZCB7XG5cdFx0bGV0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XG5cdFx0Y29udGFpbmVyRWwuZW1wdHkoKTtcblxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuXHRcdFx0LnNldE5hbWUoXCJGb290bGlua3Mgc2VwZXJhdG9yXCIpXG5cdFx0XHQuc2V0RGVzYyhcIlNlcGVyYXRlcyB0aGUgZm9vdGxpbmtzIGFyZWEgZnJvbSBtYWluIGJvZHlcIilcblx0XHRcdC5hZGRUZXh0KCh0ZXh0KSA9PlxuXHRcdFx0XHR0ZXh0XG5cdFx0XHRcdFx0LnNldFBsYWNlaG9sZGVyKFwiTm9uZVwiKVxuXHRcdFx0XHRcdC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5nLmZvb3RTZXBlcmF0b3IpXG5cdFx0XHRcdFx0Lm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZy5mb290U2VwZXJhdG9yID0gdmFsdWU7XG5cdFx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5nKTtcblx0XHRcdFx0XHRcdHRleHQuc2V0VmFsdWUodmFsdWUpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHQpO1xuXG5cdFx0bmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG5cdFx0XHQuc2V0TmFtZShcIlNob3cgaWNvbiBpbiBsZWZ0IHNpZGUgbWVudVwiKVxuXHRcdFx0LmFkZFRvZ2dsZSgodG9nZ2xlKSA9PiB7XG5cdFx0XHRcdHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5nLnNob3dJY29uKS5vbkNoYW5nZSgodmFsdWUpID0+IHtcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5nLnNob3dJY29uID0gdmFsdWU7XG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZyk7XG5cdFx0XHRcdFx0bmV3IE5vdGljZShcblx0XHRcdFx0XHRcdGBSZWxvYWQgdGhlIGFwcCB0byBzZWUgaWNvbiAke3ZhbHVlID8gXCJhZGRlZFwiIDogXCJyZW1vdmVkXCJ9LmBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0Ly8gbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG5cdFx0Ly8gXHQuc2V0TmFtZShcIkNob29zZSBhIGZvb3RsaW5rcyBzdHlsZVwiKVxuXHRcdC8vIFx0LmFkZERyb3Bkb3duKChkcm9wZG93bikgPT4ge1xuXHRcdC8vIFx0XHRkcm9wZG93bi5hZGRPcHRpb24oXCJTaW5nbGUgYnJhY2tldHNcIiwgXCJ0ZXN0IGRpc3BsYXlcIik7XG5cdFx0Ly8gXHR9KTtcblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdExpbmtzU2V0dGluZyB7XG5cdHB1YmxpYyBmb290U2VwZXJhdG9yOiBzdHJpbmc7XG5cdHB1YmxpYyBzaG93SWNvbjogYm9vbGVhbjtcblx0cHVibGljIG5lZWRHbG9iYWxSZWZhY3RvcjogYm9vbGVhbjtcblx0cHVibGljIHJlZmFjdG9ySW50ZXJ2YWw6IG51bWJlciB8IG51bGw7IC8vIGluIG1pbnV0ZXNcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmZvb3RTZXBlcmF0b3IgPSBcIlwiO1xuXHRcdHRoaXMuc2hvd0ljb24gPSB0cnVlO1xuXHRcdHRoaXMubmVlZEdsb2JhbFJlZmFjdG9yID0gZmFsc2U7XG5cdFx0dGhpcy5yZWZhY3RvckludGVydmFsID0gbnVsbDtcblx0fVxufVxuIiwiaW1wb3J0IEZvb3RsaW5rc1NldHRpbmdUYWIgZnJvbSBcIi4vRm9vdGxpbmtzU2V0dGluZ1RhYlwiO1xuaW1wb3J0IEZvb3RsaW5rc1NldHRpbmcgZnJvbSBcIi4vRm9vdGxpbmtzU2V0dGluZ1wiO1xuaW1wb3J0IHsgUGx1Z2luLCBOb3RpY2UsIGFkZEljb24gfSBmcm9tIFwib2JzaWRpYW5cIjtcblxuaW50ZXJmYWNlIE1hcmtkb3duTGluayB7XG5cdHRleHQ6IHN0cmluZztcblx0dXJsOiBzdHJpbmc7XG59XG5cbmFkZEljb24oXG5cdFwiZm9vdGxpbmtzLWljb25cIixcblx0JzxwYXRoIGQ9XCJNMjIuMzY4MDg5MSw2NiBDMjQuNTc3MjI4MSw2NiAyNi4zNjgwODkxLDY3Ljc5MDg2MSAyNi4zNjgwODkxLDcwIEwyNi4zNjgwODkxLDgwIEMyNi4zNjgwODkxLDgyLjIwOTEzOSAyNC41NzcyMjgxLDg0IDIyLjM2ODA4OTEsODQgTDEzLDg0IEMxMC43OTA4NjEsODQgOSw4Mi4yMDkxMzkgOSw4MCBMOSw3MCBDOSw2Ny43OTA4NjEgMTAuNzkwODYxLDY2IDEzLDY2IEwyMi4zNjgwODkxLDY2IFogTTMyLjIxMTI2NzUsNzYuNjY2NjY2NyBDMzMuNDMyNTE2OCw3Ni42NjY2NjY3IDM0LjQyMjUzNSw3Ny42NTAxNjYyIDM0LjQyMjUzNSw3OC44NjMzNzQ0IEMzNC40MjI1MzUsODAuMDc2NTgyNiAzMy40MzI1MTY4LDgxLjA2MDA4MjEgMzIuMjExMjY3NSw4MS4wNjAwODIxIEMzMC45OTAwMTgyLDgxLjA2MDA4MjEgMzAsODAuMDc2NTgyNiAzMCw3OC44NjMzNzQ0IEMzMCw3Ny42NTAxNjYyIDMwLjk5MDAxODIsNzYuNjY2NjY2NyAzMi4yMTEyNjc1LDc2LjY2NjY2NjcgWiBNODksNzEgQzg5LjU1MjI4NDcsNzEgOTAsNzEuNDQ3NzE1MyA5MCw3MiBMOTAsNzcgQzkwLDc3LjU1MjI4NDcgODkuNTUyMjg0Nyw3OCA4OSw3OCBMNDEsNzggQzQwLjQ0NzcxNTMsNzggNDAsNzcuNTUyMjg0NyA0MCw3NyBMNDAsNzIgQzQwLDcxLjQ0NzcxNTMgNDAuNDQ3NzE1Myw3MSA0MSw3MSBMODksNzEgWiBNMzIuMjExMjY3NSw2OCBDMzMuNDMyNTE2OCw2OCAzNC40MjI1MzUsNjguOTgzNDk5NSAzNC40MjI1MzUsNzAuMTk2NzA3NyBDMzQuNDIyNTM1LDcxLjQwOTkxNTkgMzMuNDMyNTE2OCw3Mi4zOTM0MTU0IDMyLjIxMTI2NzUsNzIuMzkzNDE1NCBDMzAuOTkwMDE4Miw3Mi4zOTM0MTU0IDMwLDcxLjQwOTkxNTkgMzAsNzAuMTk2NzA3NyBDMzAsNjguOTgzNDk5NSAzMC45OTAwMTgyLDY4IDMyLjIxMTI2NzUsNjggWiBNMjIuMzY4MDg5MSw0MSBDMjQuNTc3MjI4MSw0MSAyNi4zNjgwODkxLDQyLjc5MDg2MSAyNi4zNjgwODkxLDQ1IEwyNi4zNjgwODkxLDU1IEMyNi4zNjgwODkxLDU3LjIwOTEzOSAyNC41NzcyMjgxLDU5IDIyLjM2ODA4OTEsNTkgTDEzLDU5IEMxMC43OTA4NjEsNTkgOSw1Ny4yMDkxMzkgOSw1NSBMOSw0NSBDOSw0Mi43OTA4NjEgMTAuNzkwODYxLDQxIDEzLDQxIEwyMi4zNjgwODkxLDQxIFogTTMyLjIxMTI2NzUsNTEuNjY2NjY2NyBDMzMuNDMyNTE2OCw1MS42NjY2NjY3IDM0LjQyMjUzNSw1Mi42NTAxNjYyIDM0LjQyMjUzNSw1My44NjMzNzQ0IEMzNC40MjI1MzUsNTUuMDc2NTgyNiAzMy40MzI1MTY4LDU2LjA2MDA4MjEgMzIuMjExMjY3NSw1Ni4wNjAwODIxIEMzMC45OTAwMTgyLDU2LjA2MDA4MjEgMzAsNTUuMDc2NTgyNiAzMCw1My44NjMzNzQ0IEMzMCw1Mi42NTAxNjYyIDMwLjk5MDAxODIsNTEuNjY2NjY2NyAzMi4yMTEyNjc1LDUxLjY2NjY2NjcgWiBNODksNDYgQzg5LjU1MjI4NDcsNDYgOTAsNDYuNDQ3NzE1MyA5MCw0NyBMOTAsNTIgQzkwLDUyLjU1MjI4NDcgODkuNTUyMjg0Nyw1MyA4OSw1MyBMNDEsNTMgQzQwLjQ0NzcxNTMsNTMgNDAsNTIuNTUyMjg0NyA0MCw1MiBMNDAsNDcgQzQwLDQ2LjQ0NzcxNTMgNDAuNDQ3NzE1Myw0NiA0MSw0NiBMODksNDYgWiBNMzIuMjExMjY3NSw0MyBDMzMuNDMyNTE2OCw0MyAzNC40MjI1MzUsNDMuOTgzNDk5NSAzNC40MjI1MzUsNDUuMTk2NzA3NyBDMzQuNDIyNTM1LDQ2LjQwOTkxNTkgMzMuNDMyNTE2OCw0Ny4zOTM0MTU0IDMyLjIxMTI2NzUsNDcuMzkzNDE1NCBDMzAuOTkwMDE4Miw0Ny4zOTM0MTU0IDMwLDQ2LjQwOTkxNTkgMzAsNDUuMTk2NzA3NyBDMzAsNDMuOTgzNDk5NSAzMC45OTAwMTgyLDQzIDMyLjIxMTI2NzUsNDMgWiBNMjIuMzY4MDg5MSwxNiBDMjQuNTc3MjI4MSwxNiAyNi4zNjgwODkxLDE3Ljc5MDg2MSAyNi4zNjgwODkxLDIwIEwyNi4zNjgwODkxLDMwIEMyNi4zNjgwODkxLDMyLjIwOTEzOSAyNC41NzcyMjgxLDM0IDIyLjM2ODA4OTEsMzQgTDEzLDM0IEMxMC43OTA4NjEsMzQgOSwzMi4yMDkxMzkgOSwzMCBMOSwyMCBDOSwxNy43OTA4NjEgMTAuNzkwODYxLDE2IDEzLDE2IEwyMi4zNjgwODkxLDE2IFogTTMyLjIxMTI2NzUsMjYuNjY2NjY2NyBDMzMuNDMyNTE2OCwyNi42NjY2NjY3IDM0LjQyMjUzNSwyNy42NTAxNjYyIDM0LjQyMjUzNSwyOC44NjMzNzQ0IEMzNC40MjI1MzUsMzAuMDc2NTgyNiAzMy40MzI1MTY4LDMxLjA2MDA4MjEgMzIuMjExMjY3NSwzMS4wNjAwODIxIEMzMC45OTAwMTgyLDMxLjA2MDA4MjEgMzAsMzAuMDc2NTgyNiAzMCwyOC44NjMzNzQ0IEMzMCwyNy42NTAxNjYyIDMwLjk5MDAxODIsMjYuNjY2NjY2NyAzMi4yMTEyNjc1LDI2LjY2NjY2NjcgWiBNODksMjEgQzg5LjU1MjI4NDcsMjEgOTAsMjEuNDQ3NzE1MyA5MCwyMiBMOTAsMjcgQzkwLDI3LjU1MjI4NDcgODkuNTUyMjg0NywyOCA4OSwyOCBMNDEsMjggQzQwLjQ0NzcxNTMsMjggNDAsMjcuNTUyMjg0NyA0MCwyNyBMNDAsMjIgQzQwLDIxLjQ0NzcxNTMgNDAuNDQ3NzE1MywyMSA0MSwyMSBMODksMjEgWiBNMzIuMjExMjY3NSwxOCBDMzMuNDMyNTE2OCwxOCAzNC40MjI1MzUsMTguOTgzNDk5NSAzNC40MjI1MzUsMjAuMTk2NzA3NyBDMzQuNDIyNTM1LDIxLjQwOTkxNTkgMzMuNDMyNTE2OCwyMi4zOTM0MTU0IDMyLjIxMTI2NzUsMjIuMzkzNDE1NCBDMzAuOTkwMDE4MiwyMi4zOTM0MTU0IDMwLDIxLjQwOTkxNTkgMzAsMjAuMTk2NzA3NyBDMzAsMTguOTgzNDk5NSAzMC45OTAwMTgyLDE4IDMyLjIxMTI2NzUsMTggWlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj48L3BhdGg+J1xuKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGxpbmtzUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcblx0cHVibGljIHNldHRpbmc6IEZvb3RsaW5rc1NldHRpbmc7XG5cdHB1YmxpYyBleHRyYWN0ZWRMaW5rczogQXJyYXk8TWFya2Rvd25MaW5rPiA9IFtdO1xuXHRwdWJsaWMgcmU6IFJlZ0V4cDtcblx0cHVibGljIHNlcGVyYXRvcjogc3RyaW5nO1xuXG5cdGFzeW5jIG9ubG9hZCgpIHtcblx0XHR0aGlzLnNldHRpbmcgPSBuZXcgRm9vdGxpbmtzU2V0dGluZygpO1xuXHRcdGF3YWl0IHRoaXMubG9hZFNldHRpbmcoKTtcblx0XHRpZiAodGhpcy5zZXR0aW5nLnNob3dJY29uKSB7XG5cdFx0XHR0aGlzLmFkZFJpYmJvbkljb24oXCJmb290bGlua3MtaWNvblwiLCBcIkZvb3RsaW5rc1wiLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuZ2VuZXJhdGVGb290bGlua3MoKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XG5cdFx0XHRpZDogXCJmb290bGlua3MtY3VycmVudC1zaG9ydGN1dFwiLFxuXHRcdFx0bmFtZTogXCJSZWZhY3RvciBjdXJyZW50IHBhZ2VcIixcblx0XHRcdGNhbGxiYWNrOiAoKSA9PiB0aGlzLmdlbmVyYXRlRm9vdGxpbmtzKCksXG5cdFx0fSk7XG5cblx0XHQvLyB0aGlzLmFkZENvbW1hbmQoe1xuXHRcdC8vIFx0aWQ6IFwiZm9vdGxpbmtzLWdsb2JhbC1zaG9ydGN1dFwiLFxuXHRcdC8vIFx0bmFtZTogXCJSZWZhY3RvciBhbGwgcGFnZXNcIixcblx0XHQvLyBcdGNhbGxiYWNrOiAoKSA9PiB0aGlzLmdlbmVyYXRlRm9vdGxpbmtzKCksXG5cdFx0Ly8gfSk7XG5cblx0XHR0aGlzLmFkZFNldHRpbmdUYWIobmV3IEZvb3RsaW5rc1NldHRpbmdUYWIodGhpcy5hcHAsIHRoaXMpKTtcblx0fVxuXG5cdGFzeW5jIGxvYWRTZXR0aW5nKCkge1xuXHRcdGNvbnN0IGxvYWRlZFNldHRpbmcgPSBhd2FpdCB0aGlzLmxvYWREYXRhKCk7XG5cdFx0aWYgKGxvYWRlZFNldHRpbmcpIHtcblx0XHRcdHRoaXMuc2V0dGluZy5mb290U2VwZXJhdG9yID0gbG9hZGVkU2V0dGluZy5mb290U2VwZXJhdG9yO1xuXHRcdFx0dGhpcy5zZXR0aW5nLm5lZWRHbG9iYWxSZWZhY3RvciA9IGxvYWRlZFNldHRpbmcubmVlZEdsb2JhbFJlZmFjdG9yO1xuXHRcdFx0dGhpcy5zZXR0aW5nLnJlZmFjdG9ySW50ZXJ2YWwgPSBsb2FkZWRTZXR0aW5nLnJlZmFjdG9ySW50ZXJ2YWw7XG5cdFx0XHR0aGlzLnNldHRpbmcuc2hvd0ljb24gPSBsb2FkZWRTZXR0aW5nLnNob3dJY29uO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZyk7XG5cdFx0fVxuXHR9XG5cblx0Z2VuZXJhdGVGb290bGlua3MoKSB7XG5cdFx0dGhpcy5yZSA9IC9cXFsoW15cXFtcXF1dKz8pXFxdXFwoKGh0dHBzPzpcXC9cXC8oPzp3d3dcXC4pP1stYS16QS1aMC05QDolXFwuX1xcK34jPV17MSwyNTZ9XFwuW2EtekEtWjAtOVxcKFxcKV17MSw2fT8oPzpcXC8oLio/KFxcKC4qP1xcKSkqLio/KSo/KFxcLlxcd3sxLDZ9KT8pKj8pXFwpL2dpO1xuXHRcdGNvbnN0IGFjdGl2ZUxlYWYgPSB0aGlzLmFwcC53b3Jrc3BhY2UuYWN0aXZlTGVhZiA/PyBudWxsO1xuXHRcdGNvbnN0IHNvdXJjZSA9IGFjdGl2ZUxlYWYudmlldy5zb3VyY2VNb2RlO1xuXHRcdGNvbnN0IHNvdXJjZUNvbnRlbnQgPSBzb3VyY2UuZ2V0KCk7XG5cdFx0dGhpcy5zZXBlcmF0b3IgPSB0aGlzLm1ha2VTZXBlcmF0b3Ioc291cmNlQ29udGVudCk7XG5cdFx0Y29uc3QgZXh0cmFjdGVkTGlua3MgPSB0aGlzLmV4dHJhY3RMaW5rcyhzb3VyY2VDb250ZW50KSA/PyBudWxsO1xuXHRcdGlmIChleHRyYWN0ZWRMaW5rcykge1xuXHRcdFx0Y29uc3QgbmV3Q29udGVudCA9IHRoaXMucmVmYWN0b3JDb250ZW50KHNvdXJjZUNvbnRlbnQsIGV4dHJhY3RlZExpbmtzKTtcblx0XHRcdHNvdXJjZS5zZXQobmV3Q29udGVudCwgZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cdGV4dHJhY3RMaW5rcyh0ZXh0OiBzdHJpbmcpOiBBcnJheTxNYXJrZG93bkxpbms+IHwgdm9pZCB7XG5cdFx0bGV0IGV4dHJhY3RlZExpbmtzOiBBcnJheTxNYXJrZG93bkxpbms+ID0gW107XG5cblx0XHRpZiAodGV4dCkge1xuXHRcdFx0bGV0IG1hdGNoID0gdGhpcy5yZS5leGVjKHRleHQpO1xuXG5cdFx0XHRpZiAoIW1hdGNoKSB7XG5cdFx0XHRcdG5ldyBOb3RpY2UoXCJObyBsZWdhbCBsaW5rcyBmb3VuZCBvbiB0aGlzIHBhZ2UuXCIpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGRvIHtcblx0XHRcdFx0ZXh0cmFjdGVkTGlua3MucHVzaCh7IHRleHQ6IG1hdGNoWzFdLCB1cmw6IG1hdGNoWzJdIH0pO1xuXHRcdFx0fSB3aGlsZSAoKG1hdGNoID0gdGhpcy5yZS5leGVjKHRleHQpKSAhPT0gbnVsbCk7XG5cblx0XHRcdHJldHVybiBleHRyYWN0ZWRMaW5rcztcblx0XHR9IGVsc2Uge1xuXHRcdFx0bmV3IE5vdGljZShcIlRoaXMgcGFnZSBpcyBzdGlsbCBlbXB0eS5cIik7XG5cdFx0fVxuXHR9XG5cblx0cmVmYWN0b3JDb250ZW50KGNvbnRlbnQ6IHN0cmluZywgbGlua3M6IEFycmF5PE1hcmtkb3duTGluaz4pOiBzdHJpbmcge1xuXHRcdGNvbnN0IGZvb3RsaW5rcyA9IHRoaXMuZm9ybWF0TGlua3MobGlua3MpO1xuXHRcdGxldCBuZXdDb250ZW50ID0gY29udGVudFxuXHRcdFx0LnJlcGxhY2UodGhpcy5yZSwgXCJbJDFdXCIpIC8vIFJlbW92ZSB1cmxzIGluIG1haW4gdGV4dFxuXHRcdFx0LnRyaW1FbmQoKVxuXHRcdFx0LnJlcGxhY2UoL1xcXSA/XFxbL2csIFwiXSAgW1wiKTsgLy8gT2JzaWRpYW4gcGFyc2VzIFt4XVt5XSBhcyBhIGZvb3Rub3RlLCBzbyB3ZSBhZGQgdHdvIHNwYWNlcyBpbiBiZXR3ZWVuIHRvIGZpeCBpbiB0aGUgY2FzZSBvZiBhZGphY2VudCBsaW5rIHRleHRzLlxuXHRcdG5ld0NvbnRlbnQgKz0gZm9vdGxpbmtzO1xuXHRcdHJldHVybiBuZXdDb250ZW50O1xuXHR9XG5cblx0Zm9ybWF0TGlua3MobGlua3M6IEFycmF5PE1hcmtkb3duTGluaz4pOiBzdHJpbmcge1xuXHRcdGxldCBmb290bGlua3MgPSBcIlwiO1xuXHRcdGxldCBsaW5rVGV4dHMgPSBsaW5rcy5tYXAoKGxpbmspID0+IGBbJHtsaW5rLnRleHR9XTogJHtsaW5rLnVybH1cXG5gKTtcblx0XHRsaW5rVGV4dHMgPSBsaW5rVGV4dHMuZmlsdGVyKCh0ZXh0LCBwb3MpID0+IHtcblx0XHRcdHJldHVybiBsaW5rVGV4dHMuaW5kZXhPZih0ZXh0KSA9PSBwb3M7XG5cdFx0fSk7XG5cblx0XHRmb290bGlua3MgPSBsaW5rVGV4dHMucmVkdWNlKFxuXHRcdFx0KHByZXYsIGN1cnJlbnQpID0+IHByZXYgKyBjdXJyZW50LFxuXHRcdFx0dGhpcy5zZXBlcmF0b3Jcblx0XHQpO1xuXHRcdHJldHVybiBmb290bGlua3M7XG5cdH1cblxuXHRtYWtlU2VwZXJhdG9yKGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0Y29uc3QgZm9vdGxpbmtSZWd4OiBSZWdFeHAgPSAvXFxbLio/XFxdOiAvZztcblx0XHRyZXR1cm4gISFjb250ZW50Lm1hdGNoKGZvb3RsaW5rUmVneClcblx0XHRcdD8gXCJcXG5cIlxuXHRcdFx0OiBgXFxuXFxuJHt0aGlzLnNldHRpbmcuZm9vdFNlcGVyYXRvcn1cXG5cXG5gO1xuXHR9XG59XG4iXSwibmFtZXMiOlsiU2V0dGluZyIsIk5vdGljZSIsIlBsdWdpblNldHRpbmdUYWIiLCJhZGRJY29uIiwiRm9vdGxpbmtzU2V0dGluZyIsIlBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRixRQUFRLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMxRyxJQUFJLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFDRjtBQUNPLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLElBQUksU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQzNDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBdUNEO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNPLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDM0MsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxRQUFRLE9BQU8sQ0FBQyxFQUFFLElBQUk7QUFDdEIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6SyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekIsZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU07QUFDOUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUN4RSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0I7QUFDaEIsb0JBQW9CLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUU7QUFDaEksb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7QUFDMUcsb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUN6RixvQkFBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQ3ZGLG9CQUFvQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUztBQUMzQyxhQUFhO0FBQ2IsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ2xFLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUN6RixLQUFLO0FBQ0w7O0FDcEdBO0lBQWlELHVDQUFnQjtJQU9oRSw2QkFBWSxHQUFRLEVBQUUsTUFBdUI7UUFBN0MsWUFDQyxrQkFBTSxHQUFHLEVBQUUsTUFBTSxDQUFDLFNBRWxCO1FBREEsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O0tBQ3JCO0lBRUQscUNBQU8sR0FBUDtRQUFBLGlCQW1DQztRQWxDTSxJQUFBLFdBQVcsR0FBSyxJQUFJLFlBQVQsQ0FBVTtRQUMzQixXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFcEIsSUFBSUEsZ0JBQU8sQ0FBQyxXQUFXLENBQUM7YUFDdEIsT0FBTyxDQUFDLHFCQUFxQixDQUFDO2FBQzlCLE9BQU8sQ0FBQyw2Q0FBNkMsQ0FBQzthQUN0RCxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ2IsT0FBQSxJQUFJO2lCQUNGLGNBQWMsQ0FBQyxNQUFNLENBQUM7aUJBQ3RCLFFBQVEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7aUJBQzNDLFFBQVEsQ0FBQyxVQUFDLEtBQUs7Z0JBQ2YsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztnQkFDMUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQixDQUFDO1NBQUEsQ0FDSCxDQUFDO1FBRUgsSUFBSUEsZ0JBQU8sQ0FBQyxXQUFXLENBQUM7YUFDdEIsT0FBTyxDQUFDLDZCQUE2QixDQUFDO2FBQ3RDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDakIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBQyxLQUFLO2dCQUM1RCxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUNyQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMxQyxJQUFJQyxlQUFNLENBQ1QsaUNBQThCLEtBQUssR0FBRyxPQUFPLEdBQUcsU0FBUyxPQUFHLENBQzVELENBQUM7YUFDRixDQUFDLENBQUM7U0FDSCxDQUFDLENBQUM7Ozs7OztLQU9KO0lBQ0YsMEJBQUM7QUFBRCxDQWhEQSxDQUFpREMseUJBQWdCOztBQ0hqRTtJQU1DO1FBQ0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0tBQzdCO0lBQ0YsdUJBQUM7QUFBRCxDQUFDOztBQ0hEQyxnQkFBTyxDQUNOLGdCQUFnQixFQUNoQixtckZBQW1yRixDQUNuckYsQ0FBQzs7SUFFMkMsbUNBQU07SUFBbkQ7UUFBQSxxRUEwR0M7UUF4R08sb0JBQWMsR0FBd0IsRUFBRSxDQUFDOztLQXdHaEQ7SUFwR00sZ0NBQU0sR0FBWjs7Ozs7O3dCQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSUMsZ0JBQWdCLEVBQUUsQ0FBQzt3QkFDdEMscUJBQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFBOzt3QkFBeEIsU0FBd0IsQ0FBQzt3QkFDekIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTs0QkFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLEVBQUU7Z0NBQ2pELEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDOzZCQUN6QixDQUFDLENBQUM7eUJBQ0g7d0JBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQzs0QkFDZixFQUFFLEVBQUUsNEJBQTRCOzRCQUNoQyxJQUFJLEVBQUUsdUJBQXVCOzRCQUM3QixRQUFRLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFBO3lCQUN4QyxDQUFDLENBQUM7Ozs7Ozt3QkFRSCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7OztLQUM1RDtJQUVLLHFDQUFXLEdBQWpCOzs7Ozs0QkFDdUIscUJBQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFBOzt3QkFBckMsYUFBYSxHQUFHLFNBQXFCO3dCQUMzQyxJQUFJLGFBQWEsRUFBRTs0QkFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQzs0QkFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsR0FBRyxhQUFhLENBQUMsa0JBQWtCLENBQUM7NEJBQ25FLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDOzRCQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDO3lCQUMvQzs2QkFBTTs0QkFDTixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt5QkFDNUI7Ozs7O0tBQ0Q7SUFFRCwyQ0FBaUIsR0FBakI7O1FBQ0MsSUFBSSxDQUFDLEVBQUUsR0FBRywySUFBMkksQ0FBQztRQUN0SixJQUFNLFVBQVUsU0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFVLG1DQUFJLElBQUksQ0FBQztRQUN6RCxJQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMxQyxJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25ELElBQU0sY0FBYyxTQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLG1DQUFJLElBQUksQ0FBQztRQUNoRSxJQUFJLGNBQWMsRUFBRTtZQUNuQixJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUN2RSxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM5QjtLQUNEO0lBRUQsc0NBQVksR0FBWixVQUFhLElBQVk7UUFDeEIsSUFBSSxjQUFjLEdBQXdCLEVBQUUsQ0FBQztRQUU3QyxJQUFJLElBQUksRUFBRTtZQUNULElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRS9CLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsSUFBSUgsZUFBTSxDQUFDLG9DQUFvQyxDQUFDLENBQUM7Z0JBQ2pELE9BQU87YUFDUDtZQUVELEdBQUc7Z0JBQ0YsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDdkQsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUU7WUFFaEQsT0FBTyxjQUFjLENBQUM7U0FDdEI7YUFBTTtZQUNOLElBQUlBLGVBQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1NBQ3hDO0tBQ0Q7SUFFRCx5Q0FBZSxHQUFmLFVBQWdCLE9BQWUsRUFBRSxLQUEwQjtRQUMxRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLElBQUksVUFBVSxHQUFHLE9BQU87YUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDO2FBQ3hCLE9BQU8sRUFBRTthQUNULE9BQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0IsVUFBVSxJQUFJLFNBQVMsQ0FBQztRQUN4QixPQUFPLFVBQVUsQ0FBQztLQUNsQjtJQUVELHFDQUFXLEdBQVgsVUFBWSxLQUEwQjtRQUNyQyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLE1BQUksSUFBSSxDQUFDLElBQUksV0FBTSxJQUFJLENBQUMsR0FBRyxPQUFJLEdBQUEsQ0FBQyxDQUFDO1FBQ3JFLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFFLEdBQUc7WUFDdEMsT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztTQUN0QyxDQUFDLENBQUM7UUFFSCxTQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FDM0IsVUFBQyxJQUFJLEVBQUUsT0FBTyxJQUFLLE9BQUEsSUFBSSxHQUFHLE9BQU8sR0FBQSxFQUNqQyxJQUFJLENBQUMsU0FBUyxDQUNkLENBQUM7UUFDRixPQUFPLFNBQVMsQ0FBQztLQUNqQjtJQUVELHVDQUFhLEdBQWIsVUFBYyxPQUFlO1FBQzVCLElBQU0sWUFBWSxHQUFXLFlBQVksQ0FBQztRQUMxQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztjQUNqQyxJQUFJO2NBQ0osU0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsU0FBTSxDQUFDO0tBQzNDO0lBQ0Ysc0JBQUM7QUFBRCxDQTFHQSxDQUE2Q0ksZUFBTTs7OzsifQ==
