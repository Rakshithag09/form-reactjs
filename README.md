# Bugs in Form Implementation

## 1. All Fields Should be Required

### Description:
The form does not enforce the required attribute for all fields, allowing users to submit the form without filling in all required fields.

### Expected Behavior:
All form fields should be marked as required, ensuring that users cannot submit the form without providing information for each field.

### Actual Behavior:
Users can submit the form without filling in all required fields.

## 2. Email Should Contain Email Format

### Description:
The email field in the form does not validate the input to ensure it matches the email format.

### Expected Behavior:
The email field should validate user input to ensure it matches the standard email format (e.g., "example@example.com").

### Actual Behavior:
Users can input any text into the email field, even if it does not resemble a valid email address.

## 3. Phone Number Should Only Take Number as Input

### Description:
The phone number field in the form does not restrict input to numeric characters only.

### Expected Behavior:
The phone number field should accept only numeric characters, ensuring that users cannot input non-numeric characters such as letters or symbols.

### Actual Behavior:
Users can input non-numeric characters into the phone number field.

## 4. Data Should be Stored in Local Storage After Clicking Submit

### Description:
The form does not save the submitted data to local storage.

### Expected Behavior:
Upon submitting the form, the entered data should be saved to local storage, allowing it to persist even if the page is refreshed or closed.

### Actual Behavior:
The submitted data is not saved to local storage.

## 5. Toast Should Appear When Submit Button Clicked

### Description:
Clicking the submit button does not trigger the Toast.

### Expected Behavior:
Clicking the submit button should initiate Toast.

### Actual Behavior:
The submit button does not trigger Toast.
