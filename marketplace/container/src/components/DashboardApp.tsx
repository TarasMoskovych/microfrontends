import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'dashboard/mount';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    mount(ref.current, {
      onProductEdit: () => history.push('/product-management'),
    });
  }, []);

  return <div style={{ marginTop: 72 }} ref={ref} />;
};
