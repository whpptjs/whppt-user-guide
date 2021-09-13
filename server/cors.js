exports.corsOptions = () => {
  return {
    origin: [/\.whppt\.org$/],
    optionsSuccessStatus: 200,
  };
};
