# Starter React App

This is a starter React application built with TypeScript. It implements user authentication using Firebase Authentication.

## Getting Started

First, clone the repository to your local machine:

```
git clone https://github.com/yourusername/your-repo-name.git
```

Then, navigate into the directory:

```
cd your-repo-name
```

Install the dependencies:

```
npm install
```

Start the development server:

```
npm start
```

The app should now be running on [http://localhost:3000](http://localhost:3000).

## Project Structure

The project structure is as follows:

```
src/
  index.tsx
  App.tsx
  components/
    Login.tsx
    SignUp.tsx
    Logout.tsx
    PrivateRoute.tsx
    Home.tsx
  services/
    auth.ts
  types/
    user.ts
  styles/
    global.css
    login.css
    signup.css
    home.css
    logout.css
    privateRoute.css
public/
  index.html
  favicon.ico
  manifest.json
package.json
tsconfig.json
README.md
```

## Components

- `Login.tsx`: This component handles user login.
- `SignUp.tsx`: This component handles user registration.
- `Logout.tsx`: This component handles user logout.
- `PrivateRoute.tsx`: This component protects routes that require authentication.
- `Home.tsx`: This is the home component.

## Services

- `auth.ts`: This service handles user authentication using Firebase.

## Types

- `user.ts`: This file defines the User type.

## Styles

- `global.css`: This file contains global styles.
- `login.css`: This file contains styles for the Login component.
- `signup.css`: This file contains styles for the SignUp component.
- `home.css`: This file contains styles for the Home component.
- `logout.css`: This file contains styles for the Logout component.
- `privateRoute.css`: This file contains styles for the PrivateRoute component.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)