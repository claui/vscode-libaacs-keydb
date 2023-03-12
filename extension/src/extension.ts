import {
  commands,
  DocumentSelector,
  languages,
  LanguageStatusItem,
} from "vscode";

import log from "./log";
const languageSelector: DocumentSelector = { language: "keydb-cfg" };

const statusItem: LanguageStatusItem = languages.createLanguageStatusItem(
  "keydb-cfg.status.item",
  languageSelector,
);

export function activate() {
  commands.registerCommand("libaacs-keydb.action.showLog", log.show, log);
  statusItem.command = {
    command: "libaacs-keydb.action.showLog",
    title: "Show extension log",
  };

  log.info("Extension startup successful");
  return {};
}

export function deactivate() {
  return;
}
