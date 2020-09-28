import React from 'react';
import { Result, Button } from 'antd';
import { ContactsDetailCard } from '../../components/contacts/ContactsDetailCard'
import { redirect } from 'utils';

const View = ({ location, ...props }) => {
	const { state } = location

	const clickHandler = (e) => {
		e.preventDefault()
		redirect('/contacts')
	}

	return state
				? <ContactsDetailCard uid={props.match.params.id} userData={state.userData} />
				: <Result
						status="404"
						title="404"
						subTitle="Sorry, something went wrong."
						extra={<Button onClick={clickHandler} type="primary">Back to contacts</Button>}
					/>
};

export { View };
