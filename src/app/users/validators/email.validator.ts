import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { UserService } from '../services/user.service';

/**
 * Email Validator to validate Email already exist in Database
 *
 * @param userService
 * @returns
 */
export function emailValidator(userService: UserService): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    userService.getUserByEmail(control.value).subscribe((loginData) => {
      if (loginData) {
        return control.setErrors({
          emailInvalid: 'Email Id is already present',
        });
      }
    });

    return null;
  };
}
