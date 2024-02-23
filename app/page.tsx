import Chat from './components/chat';

export default function Home() {
  const user = {
    id: 1,
    name: 'Matheus Mendes',
    image: 'https://xsgames.co/randomusers/avatar.php?g=male',
  };

  

  return (
    <Chat user={user} />
  );
}
