export enum ErrorMessage {
  REQUIRED = 'This field cannot be empty',

  // Registration form errors
  TITLE_REQUIRED = 'Kindly select the title.',
  FIRSTNAME_REQUIRED = 'First name cannot be empty.',
  LASTNAME_REQUIRED = 'Last name cannot be empty.',
  ABBREVIATION_NOT_REQUIRED = 'Please don’t use abbreviations',
  EMAIL_REQUIRED = 'Please enter your email address e.g. exampleusername@xyzdomain.com',
  EMAIL_INVALID = 'Email Id is already present',
  VALID_DATE_REQUITED = 'Please enter a valid date',
  VALID_BIRTH_DATE_REQUIRED = 'Please enter a valid date of birth',
  ROLE_REQUIRED = 'Please select a valid role.',
  FORM_PASSWORD_CRITERIA = `Password is weak. Please re-enter the password with a minimum of one
  Uppercase letter, one lowercase letter, one number and minimum length of
  8 characters`,
  FORM_PASSWORD_NOT_MATCH = `Passwords do not match. Please re-enter the password`,

  CONFIRM_PASSWORD_NOT_MATCH = 'Password entries don’t match',
  PASSWORD_PATTERN_NOT_MATCH = 'Password entry does not meet criteria',
  OLD_PASSWORD_REQUIRED = 'Kindly provide correct old password',

  ACCOUNT_LOCKED = `Your account has been locked for next 24 hours for security purpose.
  Please contact the hospital administrator or call helpdesk on 123456 for
  more information.`,
}
