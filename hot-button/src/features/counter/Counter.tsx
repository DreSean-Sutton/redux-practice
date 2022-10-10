import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { currentCount, incrementOnClick } from './counterSlice';
import './Counter.css';

export function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(currentCount);

  const handleTheHotness = () => {
    if(count <= 4) return 'freezing';
    if(count <= 9) return 'cold';
    if(count <= 14) return 'warm';
    if(count <= 19) return 'hot';
    if(count <= 24) return 'ohno';
    if(count > 24) return 'nuclear';
  }
  return (
    <div onClick={() => dispatch(incrementOnClick())} className={`column ${handleTheHotness()}`}>
      <span className='hotbutton'>{count}</span>
    </div>
  );
}
