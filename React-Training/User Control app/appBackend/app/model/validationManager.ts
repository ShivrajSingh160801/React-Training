class Validator {
  public validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  public validatePassword(password: string): boolean {
    const passwordRegex: RegExp =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return passwordRegex.test(password);
  }

  public validateName(name: string): boolean {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
  }

  public validatePhone(phone: string): boolean {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  }
}

export default new Validator();
