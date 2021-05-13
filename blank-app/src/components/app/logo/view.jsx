import './style.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';

const View = React.memo(() => {
	return (
		<NavLink to={routes['home'].link()} className={'logo'} activeClassName={'is-active'} exact={true}>
			Nikoldi
		</NavLink>
	);
});

export { View };
