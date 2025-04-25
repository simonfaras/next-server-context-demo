type RequestContext = {
  language: string;
};

const storage = new AsyncLocalStorage<RequestContext>();

export const renderWithRequestContext = (
  render: () => React.ReactNode,
  context: RequestContext
) => {
  return storage.run(context, render);
};

export const getRequestContext = () => {
  const context = storage.getStore();

  return context;
};
