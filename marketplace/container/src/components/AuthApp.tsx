import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'auth/mount';
import { AuthPayload } from '../services/auth.service';
import { useTitle } from '../hooks/title.hook';

interface IProps {
  onSignIn: (data: AuthPayload, onDone: () => void, cb: () => void) => void;
}

export default ({ onSignIn }: IProps) => {
  const ref = useRef(null);
  const history = useHistory();

  useTitle('Authentication');
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPath }: { pathname: string }) => {
        const { pathname } = history.location;

        if (pathname !== nextPath) {
          history.push(nextPath);
        }
      },
      onSignIn: (data: AuthPayload, { onDone }: { onDone: () => void }) => onSignIn(data, onDone, () => history.push('/')),
    });

    history.listen(onParentNavigate);
  }, []);

  return <div style={{ display: 'flex', justifyContent: 'center' }} ref={ref} />;
};
