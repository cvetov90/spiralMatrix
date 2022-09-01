document.addEventListener("DOMContentLoaded", function () {
  // Задача со спиральной матрицей
  //
  // Размерность матрицы
  // n = 5
  //
  // Результат, который должен получиться
  //
  //  1   2   3   4   5
  //  16  17  18  19  6
  //  15  24  25  20  7
  //  14  23  22  21  8
  //  13  12  11  10  9
  //

  var n = 5;
  var spiral = [];
  var value = 1;
  var start_i = 0;
  var start_j = 0;
  var end_start = n - 1;
  // var end = n - 2;

  // function insert_value() {
  //   spiral[i][j] = value;
  //   if (value == n ** 2) break;
  // }

  // Инициализация матрицы
  for (i = 0; i < n; i++) {
    spiral[i] = [];
    // document.write(typeof spiral + "<br>");
  }

  // Заполнение матрицы
  while (value) {
    for (j = start_j; j <= end_start - 1; j++, value++) {
      spiral[start_i][j] = value;
      if (value == n ** 2) break;
    }

    // start_j = end_start;

    for (i = start_i; i <= end_start - 1; i++, value++) {
      spiral[i][end_start] = value;
      if (value == n ** 2) break;
    }

    // start_i = end_start;

    for (j = end_start; j > start_j; j--, value++) {
      spiral[end_start][j] = value;
      if (value == n ** 2) break;
    }

    for (i = end_start; i > start_i; i--, value++) {
      spiral[i][start_j] = value;
      if (value == n ** 2) break;
    }
    start_i++;
    start_j++;
    end_start--;
    if (value == n ** 2) {
      if (n % 2 == 1) spiral[start_i][start_j] = value;
      break;
    }
    // alert("start_i start_j end_start " + start_i + " " + start_j + " "+ end_start)
  }
  // Вывод результата
  // alert("j = " + j + " value = " + value)
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      document.write(spiral[i][j] + "\t__");
    }
    document.write("<br>");
  }
  // Конец скрипта
});
