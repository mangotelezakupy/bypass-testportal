declare const mango: undefined;

export default class Bypass {
  constructor() {
    try {
      this.getFunctions();
    } catch (err) {
      console.error(err);
      return;
    }
  }

  public getFunctions(): string {
    const antiBlur = this.antiBlur.toString();

    return antiBlur.slice(antiBlur.indexOf('{') + 1, antiBlur.lastIndexOf('}'));
  }

  private antiBlur(): void {
    // Remove ability to read focus value.
    Object.defineProperty(document, 'hasFocus', {
      get: (): ReferenceError => mango
    });

    // mango is not defined, ignore all errors.
    window.onerror = (): boolean => true;
  }
}
