export default function IdGenerator() {
    return Math.random().toString(32).slice(2);
}