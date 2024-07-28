export function TrackLine(props: { className: string; scale?: number }) {
  return (
    <div
      className={['absolute top-1/2 left-0 h-1 w-full', 'origin-top-left', props.className]
        .filter(Boolean)
        .join(' ')}
      style={{
        transform: ['translateY(-50%)', typeof props.scale === 'number' && `scaleX(${props.scale})`]
          .filter(Boolean)
          .join(' '),
      }}
    />
  );
}
