import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'marketing/mount';

export default ({ isSignedIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      isSignedIn,
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPath }) => {
        const { pathname } = history.location;

        if (pathname !== nextPath) {
          history.push(nextPath);
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
