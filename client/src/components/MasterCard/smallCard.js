import React from  'react';
import { Link } from 'react-router-dom';

// functional component that display one card item
export  const SmallCard  = (props)=>{
  const {_id ,title, date } = props.cards;
  // console.log(title,date);
  // console.log(props);

  return (
    <li className="list__items">
      <Link  to={`/smallcards/${_id}`} className="list__links">
        <span className="list__title">{title}</span>
        <span className="list__date">{date}</span>
      </Link>
    </li>
  );
};
