import { FormControl } from '@angular/forms';

/**
 * When Future date is selected then valid flag will set false, otherwise null is return so that date is valid
 *
 * @param c Input FormControl Element on which this validation to perform
 * @returns
 */
export function birthDateValidator(c: FormControl) {
  return c.value === null || new Date().getTime() > new Date(c.value).getTime()
    ? null
    : {
        futureDate: {
          valid: false,
        },
      };
}
