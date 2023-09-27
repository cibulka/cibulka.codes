import { THEME_DARK } from '@/constants/colors';
import { IconOnionAlt } from '@/icons/IconOnionAlt';
import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '100%',
          color: THEME_DARK.action,
        }}
      >
        <IconOnionAlt fillPath={THEME_DARK.action} style={{ width: '100%', height: '100%' }} />
      </div>
    ),
    {
      ...size,
    },
  );
}
