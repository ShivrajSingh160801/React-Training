class Validator {
  
  public validateString(input: string): boolean {
    const stringRegex = /^.+/;
    return stringRegex.test(input);
  }
   
}

export default new Validator();
