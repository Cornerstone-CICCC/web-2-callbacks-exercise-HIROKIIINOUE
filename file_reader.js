const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  const firstname = data1;
  fs.readFile("./lastname.txt", "utf-8", (err, data2) => {
    const lastname = data2;
    fs.readFile("./age.txt", "utf-8", (err, data3) => {
      const age = data3;
      fs.readFile("./hobbies.txt", "utf-8", (err, data4) => {
        const hobbies = JSON.parse(data4);

        console.log(data4);
        console.log(
          `${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`
        );
      });
    });
  });
});
