var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

// масив для перевірених email
var trustedEmails = [];

var emailRegex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

// перебираємо кожен об'єкт в масиві
for (var i = 0; i < arr.length; i++) {
    var email = arr[i].email;

    // перевіряємо, чи email має домен gmail.com або yahoo.com
    if (email.includes("@gmail.com") || email.includes("@yahoo.com")) {
        // додаємо email до масиву, якщо він підходить
        trustedEmails.push(email);
    }
}

// виводимо масив масив з адресами, гідними довіри
console.log(trustedEmails);
