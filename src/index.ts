import {
  Widget
} from '@phosphor/widgets';

import {
  ICommandPalette
} from '@jupyterlab/apputils';

import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';

/**
 * Initialization data for the jupyterlab_xkcd extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab_turtlegraphics',
  autoStart: true,
  requires: [ICommandPalette],
    activate: (app: JupyterLab, palette: ICommandPalette) => {
  	console.log('JupyterLab extension jupyterlab_turtlegraphics is activated!');
	
	// Create a single widget
	let widget: Widget = new Widget();
	widget.id = 'turtlegraphics-jupyterlab';
	widget.title.label = 'turtlegraphics.com';
	widget.title.closable = true;

	// Add an application command
	const command: string = 'turtlegraphics:open';
	app.commands.addCommand(command, {
	    label: 'Random turtlegraphics comic',
	    execute: () => {
		if (!widget.isAttached) {
		    // Attach the widget to the main work area if it's not there
		    app.shell.addToMainArea(widget);
		}
		// Activate the widget
		app.shell.activateById(widget.id);
	    }
	});

	// Add the command to the palette.
	palette.addItem({command, category: 'Tutorial'});
    }

};


export default extension;
