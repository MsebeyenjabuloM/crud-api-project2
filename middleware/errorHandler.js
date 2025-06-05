<<<<<<< HEAD
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
    },
  });
};

module.exports = errorHandler;
=======
module.exports = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).json({
      message: err.message || 'Internal Server Error',
    });
  };
  
>>>>>>> 994774dfbb472b3610ddfca40126f90fbbc02c11
