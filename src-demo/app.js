import ready from 'document-ready-promise';
import React from 'react';
import ReactDOM from 'react-dom';

import MainView from './views/MainView';

ready()
	.then( () => {
		console.log('App!!!');

		ReactDOM.render(
			<MainView/>,
			document.getElementById('app')
		);

	})
	.catch(e => {
		console.log('Readycatch!');
	})
;
