//1 исправть ошибку :
  // Описати у чому помилка і виправити код. помилка у тому що коли функція, передана до setTimeout, викликається, змінна i має останнє значення, що дорівнює 10, тому всі виведені значення будуть 10.
  // for (var i = 0; i < 10; i++) {
  //     setTimeout(function() {
  //         console.log(i);
  //     }, 0);
  // }
  // Треба вивести від 1 до 10.
  // зараз змінна буде мати правильне значення для кожної ітерації циклу, оскільки використовуємо замикання для передачі значення в момент створення кожного setTimeout. 
  
  for (var i = 1; i <= 10; i++) {
    (function (i) {
      setTimeout(function () {
        console.log(i);
      }, 0);
    })(i);
  }

  //2
  function createAdder2(baseNum) {
    return function (num) {
      return baseNum + num;
    }
  }
  
  let addTwo = createAdder2(2);
  console.log(addTwo(5));
  
  // 3
  
  function sum(x) {
    return function (y) {
      return x + y;
    };
  }
  
  const sum1 = sum(1);
  console.log(sum1(2));
  console.log(sum(1)(2));


  //4 самовызывающаяся и замыкание! установить и поменять число число:
  
    const myNumber = (function () {
        let x = 10;
      
        function getX() {
          return x;
        }
      
        function setX(newX) {
          x = newX;
          return x;
        }
      
        return {
          getX, setX
        }
      })();
      
      console.log(myNumber.getX());
      myNumber.setX(20);
      console.log(myNumber.getX());