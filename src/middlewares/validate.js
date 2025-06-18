module.exports = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const details = error.details.map((err) => ({
        message: err.message,
        path: err.path,
      }));

      return res.status(422).json({
        message: 'Validation failed',
        errors: details,
      });
    }

    next();
  };
};
