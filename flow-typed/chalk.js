declare module 'chalk' {
  declare export default {
    gray(msg: string): string,
    bgRed: {
      white(msg: string): string,
    },
  };
}
