function checkProbabilityTheory(count) {
    let evenCount = 0; // лічильник парних чисел
    let oddCount = 0;  // лічильник непарних чисел

    for (let i = 0; i < count; i++) {
        // генерація випадкового числа від 100 до 1000 бібліотекою Math
        const rndNum = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

        // перевіряємо число на парність
        if (rndNum % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    // обчислюємо відсоток парних і непарних чисел
    const evenPercentage = ((evenCount / count) * 100).toFixed(2);
    const oddPercentage = ((oddCount / count) * 100).toFixed(2);

    // результати
    console.log("Кількість згенерованих чисел:", count);
    console.log("Парних чисел:", evenCount);
    console.log("Непарних чисел:", oddCount);
    console.log(`Відсоток парних до непарних: ${evenPercentage}% до ${oddPercentage}%`);
}

// приклад виклику функції, коли count=102
checkProbabilityTheory(102);
