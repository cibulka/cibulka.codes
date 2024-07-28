import styles from './spinner.module.css';

export function Spinner(props: { className?: string; classNameSize?: string }) {
  return (
    <span
      className={[
        props.className,
        props.classNameSize || 'w-20 h-20 border-8',
        'block rounded-full',
        styles.spinner,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-busy
      role="alert"
    />
  );
}
