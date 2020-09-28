import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from './view';
import * as actions from '../../../store/app/actions'

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        getContacts: () => dispatch(actions.getAllContacts())
    }
};

const Contacts = compose(
	connect(mapStateToProps, mapDispatchToProps),
)(View);

export { Contacts };