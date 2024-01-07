import StatusLabel, { Status } from './components/active-label';

export default function Home() {
  return (
    <main>
      <StatusLabel status={Status.Action}>Action</StatusLabel>
      <StatusLabel status={Status.NotAction}>Not Action</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    </main>
  );
}
