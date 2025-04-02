class CustomError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode; // HTTP status code, defaults to 500
  }
}

module.exports = CustomError;
