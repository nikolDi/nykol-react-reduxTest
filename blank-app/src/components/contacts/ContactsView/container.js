import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from './view';

const mapStateToProps = () => {
	return {};
};

const mapDispatchToProps = () => {
	return {}
};

const ContactsView = compose(
	connect(mapStateToProps, mapDispatchToProps),
)(View);

export { ContactsView };