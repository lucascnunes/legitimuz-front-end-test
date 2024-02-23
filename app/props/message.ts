import { UserProps } from './user';

export type MessageProps = {
    id: number,
    text: string,
    user: UserProps,
    sender: boolean, // if true = client sended
};
