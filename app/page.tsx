import Chat from './components/chat';

export default function Home() {
  const users = [
    {
      id: 1,
      name: 'Lucas Parreira Nunes',
      image: 'https://xsgames.co/randomusers/avatar.php?g=male',
    },
    {
      id: 2,
      name: 'Kayky Janiszewski',
      image: 'https://xsgames.co/randomusers/avatar.php?g=male',
    },
    {
      id: 3,
      name: 'Matheus Mendes',
      image: 'https://xsgames.co/randomusers/avatar.php?g=male',
    }
  ];

  const user = users[Math.floor(Math.random() * 3)]

  const welcome = `Olá ${user.name}, como podemos lhe ajudar?`;

  return (
    <Chat user={user} welcomeMessage={welcome} />
  );
}
