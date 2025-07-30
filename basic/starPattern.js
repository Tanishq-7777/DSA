for (let i = 0; i < 5; i++) {
  let star = "";
  for (let j = 0; j < 5; j++) {
    star += "* ";
  }
  console.log(star);
}

for (let i = 0; i < 5; i++) {
  let star = "";
  for (let j = 0; j < i + 1; j++) {
    star += "* ";
  }
  console.log(star);
}
for (let i = 0; i < 5; i++) {
  let star = "";
  for (let j = 0; j < 5 - (i + 1); j++) {
    star += "  ";
  }
  for (let k = 0; k < i + 1; k++) {
    star += "* ";
  }

  console.log(star);
}

for (let i = 0; i < 5; i++) {
  let switches = 1;
  let star = "";

  for (let j = 0; j < i + 1; j++) {
    star += ` ${switches}`;
    if (switches == 1) {
      switches = 0;
    } else {
      switches = 1;
    }
  }
  console.log(star);
}
