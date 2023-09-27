import { PropsWithChildren } from 'react';

export default function LocaleLayout(props: PropsWithChildren & { modal: JSX.Element }) {
  return (
    <>
      {props.children}
      {props.modal}
    </>
  );
}
