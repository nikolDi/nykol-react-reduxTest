import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from './view';

const mapStateToProps = () => {
	return {};
};

const mapDispatchToProps = () => {
    return {}
};

const ContactsDetailCard = compose(
	connect(mapStateToProps, mapDispatchToProps),
)(View);

export { ContactsDetailCard };