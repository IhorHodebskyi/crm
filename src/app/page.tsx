import StatusLabel, { Status } from './components/active-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page{new Date().toTimeString()}</h1>
      <StatusLabel status={Status.Action}>Action</StatusLabel>
      <StatusLabel status={Status.NotAction}>Not Action</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    </main>
  );
}
