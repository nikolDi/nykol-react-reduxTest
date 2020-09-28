import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from './view';
import * as actions from '../../../store/app/actions'

const mapStateToProps = (state) => {
	return {
        contactsData: state.app.person,
        loading: state.app.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getContacts: () => dispatch(actions.getAllContacts())
    }
};

const ContactsTable = compose(
	connect(mapStateToProps, mapDispatchToProps),
)(View);

export { ContactsTable };