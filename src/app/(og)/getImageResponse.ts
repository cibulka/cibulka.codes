import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

const inter = fetch(
  'https://github.com/rsms/inter/raw/master/docs/font-files/Inter-Regular.woff',
).then((res) => res.arrayBuffer());
const interBold = fetch(
  'https://github.com/rsms/inter/raw/master/docs/font-files/Inter-Bold.woff',
).then((res) => res.arrayBuffer());

export async function getImageResponse(view: JSX.Element) {
  const interData = await inter;
  const interDataBold = await interBold;
  return new ImageResponse(view, {
    fonts: [
      {
        name: 'Inter',
        data: interData,
        weight: 300,
      },
      {
        name: 'Inter',
        data: interDataBold,
        weight: 700,
      },
    ],
    width: 1200,
    height: 630,
  });
}
