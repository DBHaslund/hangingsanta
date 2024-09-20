export default function Sampler(array: string[]) {
  return array[Math.floor(Math.random() * array.length)];
}
