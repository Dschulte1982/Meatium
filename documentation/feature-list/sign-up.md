## General Details

The first interaction a user will have with this product is interacting with the sign-in screen. If an account exists, they can enter their credentials to be re-directed to their personal feed. If they have no created an account, they will have the option to do so. This feature will also include a 'demo user' option to bypass account creation and permit access without entering personal information, strictly for the purpose of exploring this product.

## Models


## Endpoints

* /signin  -- Populates the form for login credentials to be entered, with options to sign-in as demo or create new account.
* /signup  -- Populates the form to enter new user credentials for account creation.
* /demo    -- If the demo user is clicked, bypasses authentication and logs directly into the project with a pre-made account.

## Templates

  * signup-form.pug

## Wireframes/Sketches

![Sign-In Menu](/images/sign-in.png)

![Sign-Up Menu](/image/sign-up.png)
