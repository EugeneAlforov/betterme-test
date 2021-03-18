import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { testAction } from '../redux/test/test.actions';

const Test = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(testAction());
  }, []);

  return (
    <div>
      Test
    </div>
  )
}

export default Test;