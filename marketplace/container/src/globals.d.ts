import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'app-root': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
