export class ErrorFormatter extends Error {
  constructor(message: string, public statusCode: number) {
    super(message);
  }
}
