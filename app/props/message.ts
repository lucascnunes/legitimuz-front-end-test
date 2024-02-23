import { UserProps } from './user';

export type MessageProps = {
  message: {
    text: string;
    user: UserProps;
  };
};

export type MessagesProps = {
  messages: MessageProps[];
};
