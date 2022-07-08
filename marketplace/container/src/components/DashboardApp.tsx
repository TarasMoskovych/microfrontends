import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'dashboard/mount';
import { useTitle } from '../hooks/title.hook';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useTitle('Dashboard');
  useEffect(() => {
    mount(ref.current, {
      onProductEdit: () => history.push('/product-management'),
    });
  }, []);

  return <div ref={ref} />;
};
