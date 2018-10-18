'use strict';
import exec from './exec';
import changeDirectory from './changeDirectory';
import * as vscode from 'vscode';

export default async function(filesRelativePaths: string[]): Promise<any> {
  const workspaceRootAbsolutePath = vscode.workspace.workspaceFolders[0].uri.fsPath;

  try {
    await changeDirectory(workspaceRootAbsolutePath);
  }
  catch (err) {
    vscode.window.showErrorMessage(err)
    console.error(err)

    return;
  }
  const command = 'git';
  const args = ['add'].concat(filesRelativePaths);

  return await exec(command, args);
}
