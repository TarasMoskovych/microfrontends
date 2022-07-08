import React, { useRef, useEffect } from 'react';
import { mount } from 'productManagement/mount';
import { useTitle } from '../hooks/title.hook';

export default () => {
  const ref = useRef(null);

  useTitle('Product Management');
  useEffect(() => {
    mount(ref.current);
  }, []);

  return (
    <div ref={ref}>
      <app-root></app-root>
    </div>
  );
};
