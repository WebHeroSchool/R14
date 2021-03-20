import React from 'react';

const ItemList = ({ todoItem }) => (<ul>
    <li>{ todoItem } </li>
    <li>{ 'Talk to friend.' }</li>
    <li>{ 'Make one more step closer to my goal.' }</li>
</ul>);

export default ItemList;