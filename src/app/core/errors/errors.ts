export class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NotFoundError';
  }
}

export function isNotFoundError(error: Error): error is NotFoundError {
  return error.name === NotFoundError.name;
}
