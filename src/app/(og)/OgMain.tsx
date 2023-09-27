import { THEME_LIGHT } from '@/constants/colors';

/* eslint-disable @next/next/no-img-element */
export default function OgMain(props: { title: string; description: string }) {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: THEME_LIGHT.text,
        color: THEME_LIGHT.background,
        fontFamily: '"Inter"',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '10em',
          height: '10em',
          borderRadius: '1em',
          marginBottom: '1em',
          overflow: 'hidden',
        }}
      >
        <img
          src="http://localhost:3000/petr-small.jpg"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <div style={{ fontSize: '3rem' }}>{props.title}</div>
      <div>{props.description}</div>
    </div>
  );
}
