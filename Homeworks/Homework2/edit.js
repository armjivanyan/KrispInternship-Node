const fs = require("fs");
class Edit {
  constructor(path) {
    this.path = path;
    let data = fs.readFileSync(this.path, (err) => {
      if (err) console.log(err);
    });
    this.data = JSON.parse(data);
  }

  format(str) {
    let strArr = str.split("");
    for (let i in strArr) {
      if (strArr[i] === "{") {
        strArr[i] = "\n\t" + strArr[i];
      }
      if (strArr[i] === "]") {
        strArr[i] = "\n" + strArr[i];
      }
    }
    return strArr.join("");
  }

  update() {
    let newData = JSON.stringify(this.data);
    newData = this.format(newData);
    fs.writeFileSync(this.path, newData);
  }

  add(title, status) {
    let id = this.data[this.data.length - 1].id + 1;
    this.data.push({
      id,
      title,
      status,
    });
    this.update();
    return `task with title ${title} was added successfully`;
  }

  get(id) {
    if (!id) {
      return this.data;
    }
    for (let element of this.data) {
      console.log(element.id);
      if (element.id == id) {
        return element;
      }
    }
    return "not found";
  }

  remove(id) {
    for (let i in this.data) {
      if (this.data[i].id == id) {
        this.data.splice(i, 1);
        this.update();
        return `task with id ${id} was removed successfully`;
      }
    }
    return "not found";
  }

  change(id, title, status) {
    for (let i in this.data) {
      if (this.data[i].id == id) {
        if (title) {
          this.data[i].title = title;
        }
        if (status) {
          this.data[i].status = status;
        }
        this.update();
        return `task with id ${id} was updated successfully`;
      }
    }
    return "not found";
  }
}

module.exports = Edit;
