import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from './view';

const mapStateToProps = (state) => {
	return {
        contactsData: state.app.person
    };
};

const mapDispatchToProps = () => {
    return {}
};

const ContactsStatistic = compose(
	connect(mapStateToProps, mapDispatchToProps),
)(View);

export { ContactsStatistic };