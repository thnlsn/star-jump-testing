export default function(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}