import { Application, Button, VLayout, HLayout, Label, Menu, MenuItem, EvClick, MenuSeparator } from "./x4mod"


// fake project data 

let project = {
	create_overrides: true,
}


/**
 * Simple application header
 * [settings][title] 
 * the associated class is x-header
 */

class Header extends HLayout {

	constructor( props ) {
		super( props );

		this.setContent( [
			new Button( { icon: 'cls(far fa-bars)', click: ev => this._showMenu(ev) } ),
			new Label( { id: 'title', text: "Demo", flex: 1 } ),
			new Button( { icon: 'cls(far fa-circle-user)' } ),
		]);
	}

	/**
	 * display menu under the button
	 */

	_showMenu( ev: EvClick ) {
		const menu = new Menu( {
			items: [
				new MenuItem( { text: 'Dashboard'} ),
				new MenuSeparator( ),
				new MenuItem( { text: 'Project settings', icon: 'cls(far fa-gear)'} ),
				new MenuSeparator( ),
				new MenuItem( { text: 'Edit', items: [
					new MenuItem( { text: 'Automatically create content overrides', checked: project.create_overrides, click: () => this._toggleOverride( ) } )
				]}),
				new MenuItem( { text: 'View', items: [

				]}),
				new MenuSeparator( ),
				new MenuItem( { text: 'Help', items: [

				]}),
				new MenuItem( { text: 'Account', items: [

				]}),
			]
		})

		const rc = (ev.source as Button).getBoundingRect( );
		menu.displayAt( rc.left, rc.bottom, 'tr' );
	}

	/**
	 * just to play
	 */

	_toggleOverride( ) {
		project.create_overrides = !project.create_overrides;
	}
}


/**
 * Main application frame
 *  
 * the associated classname is x-main-frame
 */

class MainFrame extends VLayout {

	private m_header: Header;

	constructor( props ) {
		super( props );

		this.m_header = new Header( {} );
		this.setContent( this.m_header );
	}
}


/**
 * 
 */

class DemoApp extends Application {
	constructor( ) {
		super( {
			app_name: "Demo",
			app_version: "1.0.0",
			app_uid: "com.x4.demo",
			locale: "fr-fr"
		} );

		this.mainView = new MainFrame( {
			cls: '@fit'
		});
	}
}

const app = new DemoApp( );

