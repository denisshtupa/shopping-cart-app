import { AbstractControl } from "@angular/forms";

interface ValidationResult {
    [key: string]: boolean;
}

export class GlobalValidator {

    static phoneNumberFormat(control: AbstractControl): ValidationResult {
        if (control.value) {
            const NUMBER_REGEX = /^(\(?\+?[0-9]*\)?)?[0-9 \(\)]*$/;
            if (control.value !== "" && (control.value.toString().length <= 6 || !NUMBER_REGEX.test(control.value))) {
                return { "phoneNumberFormat": true }
            }
            return null;
        }
        else
            return null;
    }

    static onlyLetters(control: AbstractControl): ValidationResult {
        if (control.value) {
            const NUMBER_REGEX = /^[a-zA-Z]*$/;
            if (control.value !== "" && !NUMBER_REGEX.test(control.value)) {
                return { "onlyLetters": true }
            }
          return null;
        }
        else
            return null;
    }
}
