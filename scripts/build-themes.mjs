import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

import tng from "../palettes/tng.mjs";
import ds9 from "../palettes/ds9.mjs";
import udc from "../palettes/udc.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const themesDir = join(__dirname, "..", "themes");

const variants = [
  { id: "tng", name: "LCARS (TNG)", palette: tng },
  { id: "ds9", name: "LCARS (DS9)", palette: ds9 },
  { id: "udc", name: "LCARS (UDC)", palette: udc },
];

function alpha(hex, a) {
  return hex + a;
}

function buildColors(p) {
  return {
    focusBorder: p.cursor,
    foreground: p.fg,
    "widget.shadow": alpha(p.black, "aa"),
    "selection.background": alpha(p.overlay, "80"),
    descriptionForeground: p.fg_subtle,
    errorForeground: p.error,

    "textLink.foreground": p.func,
    "textLink.activeForeground": p.br_blue,
    "textPreformat.foreground": p.string,
    "textBlockQuote.background": p.bg_subtle,
    "textBlockQuote.border": p.border,
    "textCodeBlock.background": p.bg_subtle,
    "textSeparator.foreground": p.border,

    // Editor
    "editor.background": p.bg,
    "editor.foreground": p.fg,
    "editorLineNumber.foreground": p.fg_ghost,
    "editorLineNumber.activeForeground": p.fg_subtle,
    "editorCursor.foreground": p.cursor,
    "editor.lineHighlightBackground": p.bg_dim,
    "editor.selectionBackground": alpha(p.overlay, "66"),
    "editor.selectionHighlightBackground": alpha(p.surface, "55"),
    "editor.inactiveSelectionBackground": alpha(p.overlay, "40"),
    "editor.wordHighlightBackground": alpha(p.surface, "55"),
    "editor.wordHighlightStrongBackground": alpha(p.surface, "77"),
    "editor.findMatchBackground": alpha(p.cursor, "55"),
    "editor.findMatchHighlightBackground": alpha(p.cursor, "33"),
    "editor.findMatchBorder": p.cursor,
    "editor.hoverHighlightBackground": alpha(p.surface, "40"),
    "editor.rangeHighlightBackground": alpha(p.bg_dim, "aa"),
    "editorLink.activeForeground": p.func,
    "editor.foldBackground": alpha(p.bg_dim, "aa"),
    "editorBracketMatch.background": alpha(p.surface, "66"),
    "editorBracketMatch.border": p.overlay,
    "editorCodeLens.foreground": p.fg_faint,
    "editorLightBulb.foreground": p.warning,
    "editorLightBulbAutoFix.foreground": p.info,

    "editorIndentGuide.background1": p.border,
    "editorIndentGuide.activeBackground1": p.keyword,
    "editorRuler.foreground": p.border,
    "editorWhitespace.foreground": p.surface,
    "editorGutter.background": p.bg,
    "editorGutter.modifiedBackground": p.git_change,
    "editorGutter.addedBackground": p.git_add,
    "editorGutter.deletedBackground": p.git_delete,
    "editorOverviewRuler.border": p.border,
    "editorOverviewRuler.findMatchForeground": alpha(p.cursor, "aa"),
    "editorOverviewRuler.modifiedForeground": p.git_change,
    "editorOverviewRuler.addedForeground": p.git_add,
    "editorOverviewRuler.deletedForeground": p.git_delete,
    "editorOverviewRuler.errorForeground": p.error,
    "editorOverviewRuler.warningForeground": p.warning,
    "editorOverviewRuler.infoForeground": p.info,

    "editorError.foreground": p.error,
    "editorWarning.foreground": p.warning,
    "editorInfo.foreground": p.info,
    "editorHint.foreground": p.hint,
    "editorUnnecessaryCode.opacity": alpha("#000000", "80"),

    "editorGhostText.foreground": p.fg_faint,
    "editorMarkerNavigation.background": p.bg_subtle,

    // Minimap
    "minimap.background": p.bg_subtle,
    "minimap.selectionHighlight": p.overlay,
    "minimap.findMatchHighlight": p.cursor,
    "minimap.errorHighlight": p.error,
    "minimap.warningHighlight": p.warning,
    "minimapGutter.addedBackground": p.git_add,
    "minimapGutter.modifiedBackground": p.git_change,
    "minimapGutter.deletedBackground": p.git_delete,

    // Diff editor
    "diffEditor.insertedTextBackground": alpha(p.git_add, "22"),
    "diffEditor.removedTextBackground": alpha(p.git_delete, "22"),
    "diffEditor.insertedLineBackground": alpha(p.git_add, "14"),
    "diffEditor.removedLineBackground": alpha(p.git_delete, "14"),
    "diffEditor.diagonalFill": p.border,

    // App chrome
    "titleBar.activeBackground": p.bg_subtle,
    "titleBar.activeForeground": p.fg_muted,
    "titleBar.inactiveBackground": p.bg_subtle,
    "titleBar.inactiveForeground": p.fg_faint,
    "titleBar.border": p.border,

    "activityBar.background": p.bg_subtle,
    "activityBar.foreground": p.fg_muted,
    "activityBar.inactiveForeground": p.fg_ghost,
    "activityBar.border": p.border,
    "activityBarBadge.background": p.keyword,
    "activityBarBadge.foreground": p.bg,
    "activityBar.activeBorder": p.cursor,
    "activityBar.activeBackground": alpha(p.overlay, "22"),

    "sideBar.background": p.bg_subtle,
    "sideBar.foreground": p.fg_muted,
    "sideBar.border": p.border,
    "sideBarTitle.foreground": p.fg_muted,
    "sideBarSectionHeader.background": p.bg_muted,
    "sideBarSectionHeader.foreground": p.fg_muted,
    "sideBarSectionHeader.border": p.border,

    "list.activeSelectionBackground": p.bg_muted,
    "list.activeSelectionForeground": p.fg,
    "list.inactiveSelectionBackground": p.bg_dim,
    "list.inactiveSelectionForeground": p.fg_muted,
    "list.hoverBackground": p.bg_dim,
    "list.focusBackground": p.bg_muted,
    "list.focusForeground": p.fg,
    "list.highlightForeground": p.keyword,
    "list.dropBackground": p.overlay,
    "list.errorForeground": p.error,
    "list.warningForeground": p.warning,
    "tree.indentGuidesStroke": p.border,

    "statusBar.background": p.bg_subtle,
    "statusBar.foreground": p.fg_faint,
    "statusBar.border": p.border,
    "statusBar.noFolderBackground": p.bg_subtle,
    "statusBar.debuggingBackground": p.error,
    "statusBar.debuggingForeground": p.bg,
    "statusBarItem.hoverBackground": p.bg_muted,
    "statusBarItem.activeBackground": p.overlay,
    "statusBarItem.prominentBackground": p.bg_dim,
    "statusBarItem.remoteBackground": p.surface,
    "statusBarItem.remoteForeground": p.fg,

    "tab.activeBackground": p.bg,
    "tab.activeForeground": p.fg,
    "tab.inactiveBackground": p.bg_subtle,
    "tab.inactiveForeground": p.fg_faint,
    "tab.border": p.border,
    "tab.activeBorderTop": p.cursor,
    "tab.unfocusedActiveBorderTop": p.border,
    "editorGroupHeader.tabsBackground": p.bg_subtle,
    "editorGroupHeader.border": p.border,
    "editorGroup.border": p.border,

    "panel.background": p.bg_subtle,
    "panel.border": p.border,
    "panelTitle.activeForeground": p.fg,
    "panelTitle.activeBorder": p.cursor,
    "panelTitle.inactiveForeground": p.fg_faint,
    "panelInput.border": p.border,

    "breadcrumb.foreground": p.fg_faint,
    "breadcrumb.focusForeground": p.fg,
    "breadcrumb.activeSelectionForeground": p.fg,
    "breadcrumbPicker.background": p.bg_subtle,

    "input.background": p.bg_muted,
    "input.foreground": p.fg,
    "input.border": p.border,
    "input.placeholderForeground": p.fg_ghost,
    "inputOption.activeBorder": p.cursor,
    "inputOption.activeBackground": alpha(p.overlay, "55"),
    "inputValidation.errorBackground": p.bg_muted,
    "inputValidation.errorBorder": p.error,
    "inputValidation.warningBackground": p.bg_muted,
    "inputValidation.warningBorder": p.warning,
    "inputValidation.infoBackground": p.bg_muted,
    "inputValidation.infoBorder": p.info,

    "dropdown.background": p.bg_muted,
    "dropdown.foreground": p.fg,
    "dropdown.border": p.border,
    "dropdown.listBackground": p.bg_muted,

    "button.background": p.keyword,
    "button.foreground": p.bg,
    "button.hoverBackground": p.br_yellow,
    "button.secondaryBackground": p.surface,
    "button.secondaryForeground": p.fg,
    "button.secondaryHoverBackground": p.overlay,

    "badge.background": p.keyword,
    "badge.foreground": p.bg,

    "scrollbar.shadow": alpha(p.black, "aa"),
    "scrollbarSlider.background": alpha(p.overlay, "55"),
    "scrollbarSlider.hoverBackground": alpha(p.overlay, "88"),
    "scrollbarSlider.activeBackground": alpha(p.overlay, "aa"),

    "progressBar.background": p.keyword,

    "notifications.background": p.bg_soft,
    "notifications.foreground": p.fg,
    "notifications.border": p.border,
    "notificationCenterHeader.background": p.bg_muted,
    "notificationsErrorIcon.foreground": p.error,
    "notificationsWarningIcon.foreground": p.warning,
    "notificationsInfoIcon.foreground": p.info,

    "quickInput.background": p.bg_soft,
    "quickInput.foreground": p.fg,
    "quickInputList.focusBackground": p.bg_muted,
    "pickerGroup.foreground": p.keyword,
    "pickerGroup.border": p.border,

    "editorWidget.background": p.bg_soft,
    "editorWidget.foreground": p.fg,
    "editorWidget.border": p.border,
    "editorSuggestWidget.background": p.bg_soft,
    "editorSuggestWidget.foreground": p.fg,
    "editorSuggestWidget.border": p.border,
    "editorSuggestWidget.highlightForeground": p.keyword,
    "editorSuggestWidget.selectedBackground": p.bg_muted,
    "editorHoverWidget.background": p.bg_soft,
    "editorHoverWidget.foreground": p.fg,
    "editorHoverWidget.border": p.border,

    "peekView.border": p.cursor,
    "peekViewEditor.background": p.bg_subtle,
    "peekViewEditorGutter.background": p.bg_subtle,
    "peekViewResult.background": p.bg_soft,
    "peekViewResult.selectionBackground": p.bg_muted,
    "peekViewTitle.background": p.bg_muted,
    "peekViewTitleLabel.foreground": p.fg,
    "peekViewTitleDescription.foreground": p.fg_faint,

    "menu.background": p.bg_soft,
    "menu.foreground": p.fg,
    "menu.selectionBackground": p.bg_muted,
    "menu.separatorBackground": p.border,
    "menubar.selectionBackground": p.bg_muted,

    "extensionButton.prominentBackground": p.keyword,
    "extensionButton.prominentForeground": p.bg,
    "extensionButton.prominentHoverBackground": p.br_yellow,

    "gitDecoration.addedResourceForeground": p.git_add,
    "gitDecoration.modifiedResourceForeground": p.git_change,
    "gitDecoration.deletedResourceForeground": p.git_delete,
    "gitDecoration.untrackedResourceForeground": p.git_untracked,
    "gitDecoration.ignoredResourceForeground": p.fg_ghost,
    "gitDecoration.conflictingResourceForeground": p.error,

    "terminal.background": p.bg,
    "terminal.foreground": p.fg,
    "terminalCursor.background": p.bg,
    "terminalCursor.foreground": p.cursor,
    "terminal.ansiBlack": p.black,
    "terminal.ansiRed": p.red,
    "terminal.ansiGreen": p.green,
    "terminal.ansiYellow": p.yellow,
    "terminal.ansiBlue": p.blue,
    "terminal.ansiMagenta": p.magenta,
    "terminal.ansiCyan": p.cyan,
    "terminal.ansiWhite": p.white,
    "terminal.ansiBrightBlack": p.br_black,
    "terminal.ansiBrightRed": p.br_red,
    "terminal.ansiBrightGreen": p.br_green,
    "terminal.ansiBrightYellow": p.br_yellow,
    "terminal.ansiBrightBlue": p.br_blue,
    "terminal.ansiBrightMagenta": p.br_magenta,
    "terminal.ansiBrightCyan": p.br_cyan,
    "terminal.ansiBrightWhite": p.br_white,

    "debugToolBar.background": p.bg_soft,
    "debugIcon.breakpointForeground": p.error,
    "debugIcon.startForeground": p.git_add,

    "welcomePage.background": p.bg,
    "welcomePage.tileBackground": p.bg_subtle,
    "walkThrough.embeddedEditorBackground": p.bg_subtle,
  };
}

function buildTokenColors(p) {
  return [
    {
      name: "Comment",
      scope: ["comment", "punctuation.definition.comment"],
      settings: { fontStyle: "italic", foreground: p.comment },
    },
    {
      name: "String",
      scope: ["string", "string.quoted", "punctuation.definition.string"],
      settings: { foreground: p.string },
    },
    {
      name: "String escape / regex",
      scope: ["constant.character.escape", "string.regexp"],
      settings: { foreground: p.decorator },
    },
    {
      name: "Number",
      scope: ["constant.numeric"],
      settings: { foreground: p.number },
    },
    {
      name: "Constant / boolean / language",
      scope: [
        "constant.language",
        "constant.other",
        "variable.language",
        "support.constant",
      ],
      settings: { foreground: p.constant },
    },
    {
      name: "Keyword",
      scope: [
        "keyword",
        "storage.type",
        "storage.modifier",
        "keyword.control",
        "keyword.other",
      ],
      settings: { foreground: p.keyword },
    },
    {
      name: "Operator",
      scope: ["keyword.operator", "punctuation.separator", "punctuation.terminator"],
      settings: { foreground: p.operator },
    },
    {
      name: "Punctuation",
      scope: ["punctuation.definition.tag", "punctuation.section", "meta.brace"],
      settings: { foreground: p.operator },
    },
    {
      name: "Variable",
      scope: ["variable", "variable.other.readwrite", "variable.parameter"],
      settings: { foreground: p.variable },
    },
    {
      name: "Property",
      scope: [
        "variable.other.property",
        "variable.other.object.property",
        "meta.object-literal.key",
        "support.type.property-name",
      ],
      settings: { foreground: p.property },
    },
    {
      name: "Function",
      scope: [
        "entity.name.function",
        "support.function",
        "meta.function-call",
        "variable.function",
      ],
      settings: { foreground: p.func },
    },
    {
      name: "Type / class / interface",
      scope: [
        "entity.name.type",
        "entity.name.class",
        "entity.other.inherited-class",
        "support.type",
        "support.class",
        "storage.type.class",
      ],
      settings: { foreground: p.type },
    },
    {
      name: "Decorator / attribute / macro",
      scope: [
        "meta.decorator",
        "entity.name.function.decorator",
        "entity.other.attribute-name",
        "punctuation.decorator",
        "entity.name.tag.yaml",
      ],
      settings: { foreground: p.decorator },
    },
    {
      name: "Namespace / module",
      scope: ["entity.name.namespace", "entity.name.module", "support.module"],
      settings: { foreground: p.namespace },
    },
    {
      name: "Tag",
      scope: ["entity.name.tag", "meta.tag"],
      settings: { foreground: p.tag },
    },
    {
      name: "Tag attribute",
      scope: ["entity.other.attribute-name.html", "entity.other.attribute-name.jsx"],
      settings: { foreground: p.func },
    },
    {
      name: "Invalid / error",
      scope: ["invalid", "invalid.illegal"],
      settings: { foreground: p.error },
    },
    {
      name: "Markup heading",
      scope: ["markup.heading", "entity.name.section"],
      settings: { fontStyle: "bold", foreground: p.keyword },
    },
    {
      name: "Markup bold / strong",
      scope: ["markup.bold"],
      settings: { fontStyle: "bold", foreground: p.br_white },
    },
    {
      name: "Markup italic / emphasis",
      scope: ["markup.italic"],
      settings: { fontStyle: "italic", foreground: p.fg },
    },
    {
      name: "Markup link",
      scope: ["markup.underline.link", "string.other.link"],
      settings: { foreground: p.func },
    },
    {
      name: "Markup quote",
      scope: ["markup.quote"],
      settings: { fontStyle: "italic", foreground: p.fg_subtle },
    },
    {
      name: "Markup raw / code",
      scope: ["markup.raw", "markup.inline.raw"],
      settings: { foreground: p.string },
    },
    {
      name: "Markup inserted / deleted",
      scope: ["markup.inserted"],
      settings: { foreground: p.git_add },
    },
    {
      scope: ["markup.deleted"],
      settings: { foreground: p.git_delete },
    },
    {
      name: "Diff",
      scope: ["meta.diff.header", "meta.diff.range"],
      settings: { foreground: p.fg_faint },
    },
  ];
}

function buildSemanticTokenColors(p) {
  return {
    namespace: { foreground: p.namespace },
    class: { foreground: p.type },
    enum: { foreground: p.type },
    enumMember: { foreground: p.constant },
    interface: { foreground: p.type },
    struct: { foreground: p.type },
    typeParameter: { foreground: p.type },
    type: { foreground: p.type },
    parameter: { foreground: p.variable },
    variable: { foreground: p.variable },
    property: { foreground: p.property },
    function: { foreground: p.func },
    method: { foreground: p.func },
    macro: { foreground: p.decorator },
    decorator: { foreground: p.decorator },
    "variable.readonly": { foreground: p.constant },
    "variable.defaultLibrary": { foreground: p.keyword },
    "property.readonly": { foreground: p.constant },
    deprecated: { strikethrough: true },
  };
}

for (const { id, name, palette } of variants) {
  const theme = {
    name,
    type: "dark",
    colors: buildColors(palette),
    tokenColors: buildTokenColors(palette),
    semanticHighlighting: true,
    semanticTokenColors: buildSemanticTokenColors(palette),
  };

  const out = JSON.stringify(theme, null, 2) + "\n";
  writeFileSync(join(themesDir, `lcars-${id}-color-theme.json`), out);
  console.log(`wrote themes/lcars-${id}-color-theme.json`);
}
