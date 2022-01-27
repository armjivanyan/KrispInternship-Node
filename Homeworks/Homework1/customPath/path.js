class path {
  static join(...values) {
    return values.reduce((acc, cur) => {
      let slash = "";
      if (acc[acc.length - 1] !== "/" && cur[0] !== "/") {
        slash = "/";
      } else if (acc[acc.length - 1] === "/" && cur[0] === "/") {
        cur = cur.substring(1);
      }
      acc += `${slash}${cur}`;
      return acc;
    }, "");
  }

  static extname(path) {
    const lastSlashIndex = path.lastIndexOf("/");

    if (
      path[lastSlashIndex + 1] === "." ||
      path.indexOf(".", lastSlashIndex + 1) === -1
    ) {
      return "";
    }
    return path.substring(path.indexOf(".", lastSlashIndex));
  }

  static basename(path) {
    const lastSlashIndex = path.lastIndexOf("/");
    return path.substring(lastSlashIndex + 1);
  }

  static name(basename) {
    const dotIndex = basename.indexOf(".");
    return basename.substring(0, dotIndex);
  }

  static dirname(path) {
    const lastSlashIndex = path.lastIndexOf("/");
    return path.substring(0, lastSlashIndex);
  }

  static parse(path) {
    const res = {};
    const firstSlashIndex = path.indexOf("/");
    res.root = firstSlashIndex ? path.substring(0, firstSlashIndex) : "/";
    res.dir = this.dirname(path);
    res.base = this.basename(path);
    res.ext = this.extname(path);
    res.name = res.ext ? this.name(res.base) : res.base;
    return res;
  }

  static relative(from, to) {
    const fromArr = from.split("/");
    const toArr = to.split("/");
    let res = "";
    for (let i = fromArr.length - 1; i >= 0; i--) {
      if (toArr.indexOf(fromArr[i]) === -1) {
        res += "../";
      } else {
        res += toArr.slice(toArr.indexOf(fromArr[i]) + 1).join("/");
        return res;
      }
    }
    return "not enough information";
  }
}

module.exports = path;
