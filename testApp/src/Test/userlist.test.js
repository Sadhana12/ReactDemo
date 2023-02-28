// Note that we are importing the component and not the container
import UserList from '../pages/userlist';
import { render, screen, fireEvent } from '@testing-library/react';
import {Provider} from 'react-redux';
import {combineReducers, legacy_createStore as createStore, applyMiddleware} from 'redux';
import myReducer from '../reducer';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({myReducer});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

it('container should have a button', async() => {
  const {container} = render(
    <Provider store={store}>
      <UserList /></Provider>);
  var boxes = container.getElementsByTagName('button');
  console.log(boxes.length); // 👉️ 1
  expect(boxes.length).toBe(1);
})


it('container should have a div with class name maindiv ', async() => {
  const {container} = render(
    <Provider store={store}>
      <UserList /></Provider>);
var divs = container.getElementsByClassName('maindiv');
  console.log(divs.length); // 👉️ 1
  expect(divs.length).toBe(1); 
})

it('container button click event brings list', async() => {
    const {container} = render(
      <Provider store={store}>
        <UserList /></Provider>);
  
    const button = screen.getByRole('button')
    
    fireEvent.click(button)
    var divs = container.getElementsByClassName('maindiv_ul');
    console.log(divs.length); // 👉️ 1
    expect(divs.length).toBe(1); 
    
})

it('Container button is enabled and clickable', async() => {
  const {container} = render(
    <Provider store={store}>
      <UserList /></Provider>);

const button = screen.getByRole('button')
  //screen.getByTestId('button')).not.toBeDisabled()
  expect(button.disabled).toBeFalsy();
  //expect(getByText(/Get str_list List/i).closest('button')).not.toBeDisabled();
  //expect(screen.getByRole('button').not.toBeEnabled());
 })