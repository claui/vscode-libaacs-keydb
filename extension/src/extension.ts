import {
  commands,
  DocumentSelector,
  ExtensionContext,
  languages,
  LanguageStatusItem,
} from "vscode";

import log from "./log";
const languageSelector: DocumentSelector = { language: "keydb-cfg" };

const statusItem: LanguageStatusItem = languages.createLanguageStatusItem(
  "keydb-cfg.status.item",
  languageSelector,
);

export function activate(context: ExtensionContext) {
  commands.registerCommand("libaacs-keydb.action.showLog", log.show, log);
  statusItem.command = {
    command: "libaacs-keydb.action.showLog",
    title: "Show extension log",
  };

  const version = context.extension.packageJSON.version as string;
  log.info(`Extension v${version} startup successful`);
  return {};
}

export function deactivate() {
  return;
}
