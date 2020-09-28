import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from './view';

const mapStateToProps = (state) => {
	return {
        contactsData: state.app.person,
        loading: state.app.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

const ContactsList = compose(
	connect(mapStateToProps, mapDispatchToProps),
)(View);

export { ContactsList };