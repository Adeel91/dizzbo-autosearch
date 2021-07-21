export const getRandomArrayNumber = () => {
    const numbers = [1000, 2000, 3000, 4000];
    const randomIndex = Math.floor(Math.random() * (3 + 1));

    return numbers[randomIndex];
};
