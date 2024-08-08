import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  console.log('Server Base URL:', import.meta.env.VITE_SERVER_BASE_URL);
  console.log('Hello:', import.meta.env.VITE_HELLO);
  console.log('New Variable:', import.meta.env.VITE_NEW_VARIABLE);
  //

  return (
    <div className='p-2'>
      <h3>Welcome Home!</h3>
    </div>
  );
}
