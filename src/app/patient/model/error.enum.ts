export enum ErrorMessage {
  REQUIRED = 'This field cannot be empty',

  // Registration form errors
  TITLE_REQUIRED = 'Kindly select the title.',
  FIRSTNAME_REQUIRED = 'First name cannot be empty.',
  LASTNAME_REQUIRED = 'Last name cannot be empty.',
  ABBREVIATION_NOT_REQUIRED = 'Please don’t use abbreviations.',
  EMAIL_REQUIRED = 'Please enter your email address e.g. exampleusername@xyzdomain.com',
  GENDER_REQUIRED='Gender is a required field.',
  VALID_DATE_REQUITED = 'Please enter a valid date.',
  VALID_BIRTH_DATE_REQUIRED = 'Please enter a valid date of birth.',
  RACE_REQUIRED='Race field cannot be empty.',
  ETHNICITY_REQUIRED='Ethnicity field cannot be empty.',
  LANGUAGE_REQUIRED='Languages Known cannot be empty.',
  ADDRESS_REQUIRED='Please provide the postal address.',
  COUNTRY_CODE_REQUIRED='Please provide the Country/Area code.',
  TELEPHONE_NUMBER_REQIRED='Please provide the telephone number.',
  TELEPHONE_NUMBER_NOT_LESS_THAN_7='Please validate the phone number. Telephone number has XX number of digits',
  ONE_OR_MORE_MISSING_VALUES='The form contains one or more missing values',
  

}
