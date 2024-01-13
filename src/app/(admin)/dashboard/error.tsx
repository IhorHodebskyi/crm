'use client';

import Button from '@/app/components/button';

interface ErrorComponentProps {
  error: Error;
  reset: () => void;
}

export default function ErrorComponent({ reset, error }: ErrorComponentProps) {
  return (
    <div>
      <p>{`Something went wrong. ${error.message}`}</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
