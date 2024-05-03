import Clientside from "./ClientSide";
import { trpc } from "./trpc";

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: `Tom` });
  return (
    <div>
      <p>Server side - {greeting}</p>
      <Clientside />
    </div>
  );
}
