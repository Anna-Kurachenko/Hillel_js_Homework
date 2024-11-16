const obj = {
    name: "Alice",         
    age: 20,                
    gender: "female",
    //об'єкт із властивостями
  };
  
  //метод getInfo - виведення всіх властивостей об'єкта
  obj.getInfo = function() {
    //перебір всіх властивостей об'єкта
    for (let key in this) {
      //перевірка, чи ключ не є функцією)
      if (typeof this[key] !== "function") {
      //вивід всіх властивостей об'єкта у форматі "ключ: значення"
      console.log(key + ": " + this[key]);
    }
  };
}
  
  obj.getInfo(); //Правильна інформація про об'єкт
  
  obj.country = "Ukraine";  //Додали нову властивість до об'єкта
  
  obj.getInfo(); //Виводить всі властивості, включаючи щойно додану.
  