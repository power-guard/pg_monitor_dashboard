import * as React from 'react';

export const Sample = (props: { onClick: () => void; btnText: string }) => {
  return (
    <button type="button" onClick={props.onClick}>
      {props.btnText}
    </button>
  );
};
