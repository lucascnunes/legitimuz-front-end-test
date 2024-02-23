import type { MessageProps } from '../props/message';

export default function Message({ id, text, user, sender }: MessageProps) {
  return !sender ? (
    <div id={`message_${id}`} className="flex items-center gap-4 my-4">
      <div className="rounded-lg bg-gray-100 p-4 text-sm max-w-[85%] self-start">
        {text}
      </div>
    </div>
  ) : (
    <div id={`message_${id}`} className="flex items-center gap-4 my-4">
      <img
        alt="User avatar"
        className="rounded-full"
        height="30"
        src={user ? user.image : '/logo.png'}
        style={{ aspectRatio: '40/40', objectFit: 'cover' }}
        width="30"
      />
      <div className="flex-1">
        <div className="rounded-lg border p-4 text-sm">{text}</div>
      </div>
    </div>
  );
}
