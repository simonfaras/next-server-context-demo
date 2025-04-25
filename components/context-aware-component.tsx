import { getRequestContext } from "./server-context";

export const ContextAwareComponent = () => {
  const context = getRequestContext();

  if (context == null) {
    // This is where we end up
    return <p>No context found</p>;
  }

  return (
    <pre>
      <code>{JSON.stringify(context, null, 2)}</code>
    </pre>
  );
};
