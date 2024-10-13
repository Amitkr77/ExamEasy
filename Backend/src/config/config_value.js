// Import environment variables from a .env file into process.env using ES6 module syntax
import dotenv from "dotenv";
dotenv.config();

// Export configuration values as a constant for easy access throughout the application
export const config_value = {
  // Specify the port on which the server will listen
  port: process.env.LOCAL_PORT || 8080, // Uses the PORT from environment variables, defaults to 8080 if not set

  // Define the secret key used for JWT authentication
  jwt_secret: process.env.JWT_SECRET, // Retrieves the JWT secret from environment variables

  // MongoDB configuration settings
  mongo_db: {
    // MongoDB credentials fetched from environment variables
    host: process.env.MONGO_HOST, // MongoDB host
    username: process.env.MONGO_USERNAME, // MongoDB username
    password: process.env.MONGO_PASSWORD, // MongoDB password
    db_name: process.env.MONGO_DB_NAME, // MongoDB database name
  },

  transporter: {
    host: process.env.MAILTRAP_HOST,
    port: process.env.MAILTRAP_PORT,
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },

  // Token expiry settings for different types of user actions
  admin_user_login_token_expiry_days: "30d", // Expiry duration for admin login tokens
  resume_end_user_login_token_expiry_days: "30d", // Expiry duration for resume end-user tokens
  reset_password_token_expiry_minutes: "5min", // Expiry duration for reset password tokens

  // Types of tokens used in the application
  token_type: {
    reset_password: "reset_password", // Type for reset password tokens
    new_password: "new_password", // Type for new password tokens
  },

  // Validation settings for user names
  first_name: {
    min: 3, // Minimum length for first names
    max: 30, // Maximum length for first names
  },
  last_name: {
    min: 3, // Minimum length for last names
    max: 30, // Maximum length for last names
  },
};
