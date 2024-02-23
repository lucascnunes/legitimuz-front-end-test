import { UserProps } from './user';

export type MessageProps = {
    id: string,
    text: string,
    user?: UserProps,
    sender: boolean, // if true = client sended
};
