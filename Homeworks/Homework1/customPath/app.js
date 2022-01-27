const path = require("./path");

console.log(path.join("data", "test.txt")); // 'data/test.txt'
console.log(path.join("data", "/test.txt")); // 'data/test.txt'
console.log(path.join("data/", "test.txt")); // 'data/test.txt'
console.log(path.join("data/", "/test.txt")); // 'data/test.txt'

console.log(path.extname("/path/to/test.txt")); // '.txt'
console.log(path.extname("/path/to/github.com/README")); // ""
console.log(path.extname("/path/to/.gitignore")); // ""

console.log(path.basename("/path/to/test.txt")); // 'test.txt'

console.log(path.dirname("/path/to/test.txt")); // '/path/to'

console.log(path.parse("/path/to/test.txt"));
console.log(path.parse("/path/to/.gitignore"));

console.log(path.relative("/app/views/home.html", "/app/layout/index.html")); // '../../layout/index.html'
