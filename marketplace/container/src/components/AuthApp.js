import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'auth/mount';

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPath }) => {
        const { pathname } = history.location;

        if (pathname !== nextPath) {
          history.push(nextPath);
        }
      },
      onSignIn: (data, props) => onSignIn(data, props, () => history.push('/')),
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
