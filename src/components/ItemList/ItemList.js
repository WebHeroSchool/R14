import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItem }) => (<ul>
    <li><Item todoItem = { todoItem } /></li>
    <li><Item todoItem = { 'Talk to friend.' } /></li>
    <li><Item todoItem = { 'Make one more step closer to my goal.' } /></li>
</ul>);

export default ItemList;