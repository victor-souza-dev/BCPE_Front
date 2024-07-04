interface INotFound {
  isIsp?: boolean;
}

export const NotFound = ({ isIsp = false }: INotFound) => {
  if (isIsp) {
    return (
      <div>
        <h1>ISP Not Found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Not Found</h1>
    </div>
  );
};
