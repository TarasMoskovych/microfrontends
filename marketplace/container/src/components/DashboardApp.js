import React, { useRef, useEffect } from 'react';
import { mount } from 'dashboard/mount';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div style={{ marginTop: 72 }} ref={ref} />;
};
