import React, { useRef, useEffect } from 'react';
import { mount } from 'productManagement/mount';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return (
    <div ref={ref}>
      <app-root></app-root>
    </div>
  );
};
