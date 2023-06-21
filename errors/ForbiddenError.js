class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    console.log(message);
    this.statusCode = 403;
  }
}

module.exports = ForbiddenError;
