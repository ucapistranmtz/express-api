export const validationMiddleware = (req, res, next) => {
  // validation logic here
  console.log('Validation middleware executed');
  next();
};
