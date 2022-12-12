import { Buffer } from 'buffer';

export const toBase64 = (data: string): string => {
  const base64ImageString = Buffer.from(data, 'binary').toString('base64');

  return `data:image/png;base64,${base64ImageString}`;
};
