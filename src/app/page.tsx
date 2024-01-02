import { ACTION } from 'next/dist/client/components/app-router-headers';
import StatusLabel, { Status } from './components/active-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <StatusLabel status={Status.Action}>Action</StatusLabel>
      <StatusLabel status={Status.NotAction}>Not Action</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    </main>
  );
}
