import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the turtlegraphics extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'turtlegraphics',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension turtlegraphics is activated!');
  }
};

export default extension;
