export class Uuid {
  static MakeNew() {
    return 'xxxxxxxx-xxxx-xxxx-yyyy-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r: number = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
