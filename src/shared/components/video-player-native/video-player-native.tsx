export function VideoPlayer(props: { poster?: string; src: string }) {
  return (
    <div className="aspect-video relative">
      <video
        className="absolute top-0 left-0 w-full h-full"
        poster={props.poster}
        src={props.src}
        controls
      />
    </div>
  );
}
