import { connect } from 'react-redux';
import { removeTodo } from '../../actions/todo_actions';
import TodoDetailView from './todo_detail_view';


const mapDispatchToProps = (dispatch, { todo }) => ({
    removeTodo: () => dispatch(removeTodo(todo))
});

export default connect(
    null, // todo props is already passed in
    mapDispatchToProps
)(TodoDetailView);