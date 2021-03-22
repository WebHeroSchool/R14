import React from 'react';
//import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const App = () => {
  const items = [
    {
      value: 'Написать новое приложение.'
    },
    {
      value: 'Talk to my friend.'
    },
    {
      value: 'Make one more step closer to my goal.'
    }
  ];

return (
  <div>
    <h1>Important cases: </h1>
    {/*<InputItem />*/} 
    <ItemList items = {items}/>
    <Footer count = {3} />
  </div>);
}
export default App;
