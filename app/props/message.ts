import { UserProps } from './user';

export type MessageProps = {
    text: string,
    user: UserProps,
    sender: boolean, // if true = client sended
};
