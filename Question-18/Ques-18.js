function fiboSeries(num) {
  let a = 0;
  let b = 1;

  for (let i = 1; i <= num; i++) {
    console.log(a);
    const next = a + b;
    a = b;
    b = next;
  }
}

fiboSeries(10);
