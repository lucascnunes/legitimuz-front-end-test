import type { MessageProps } from '../props/message';

export default function Message(message: MessageProps) {
  return (
    <div className="flex items-center gap-4 my-4">
      <img
        alt="User avatar"
        className="rounded-full"
        height="30"
        src={message.user ? message.user.image : '/logo.png'}
        style={{ aspectRatio: '40/40', objectFit: 'cover' }}
        width="30"
      />
      <div className="flex-1">
        <div className="rounded-lg border p-4 text-sm">{message.text}</div>
      </div>
    </div>
  );
}
