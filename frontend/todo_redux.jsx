import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { allTodos } from './reducers/selectors';
import { receiveTodo, receiveTodos, removeTodo } from './actions/todo_actions';
import { receiveSteps, receiveStep, removeStep  } from './actions/step_actions';


// TODO just for testing!
const store = configureStore;
window.store = store;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.removeTodo = removeTodo;
window.receiveSteps = receiveSteps;
window.receiveStep = receiveStep;
window.removeStep = removeStep;
window.allTodos = allTodos;

// window.addOrange = addOrange;
// window.addApple = addApple;
// window.clearFruit = clearFruit;



document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <Root store={configureStore}/>,
        document.getElementById('content')
    );
});