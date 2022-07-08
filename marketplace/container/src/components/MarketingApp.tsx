import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'marketing/mount';
import { useTitle } from '../hooks/title.hook';

interface IProps {
  isSignedIn: boolean;
}

export default ({ isSignedIn }: IProps) => {
  const ref = useRef(null);
  const history = useHistory();

  useTitle('Marketing');
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      isSignedIn,
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPath }: { pathname: string }) => {
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
