import jwt from "jsonwebtoken"; // Importing JWT for token generation and verification
import { config_value } from "../config/config_value"; // Configuration values, including JWT secret
import bcrypt from "bcrypt"; // Importing bcrypt for password hashing and comparison
import { randomInt } from "crypto"; // Importing randomInt from crypto

class CommonServices {
  /**
   * Generates a JSON Web Token (JWT).
   * @param jwt_data - The data to be encoded in the token.
   * @param expires_in - The expiration time for the token (e.g., '1h', '2d').
   * @returns The generated JWT as a string.
   */
  async generateJwtToken(jwt_data, expires_in) {
    return jwt.sign(jwt_data, config_value.jwt_secret, {
      expiresIn: expires_in,
    });
  }

  /**
   * Verifies a given JWT token.
   * @param token - The JWT token to be verified.
   * @returns The decoded token data if the token is valid.
   * @throws Will throw an error if the token is invalid or expired.
   */
  async jwtVerify(token) {
    return jwt.verify(token, config_value.jwt_secret);
  }

  /**
   * Hashes a plain text password using bcrypt.
   * @param password - The plain text password to hash.
   * @returns The hashed password as a string.
   */
  generateHashPassword(password) {
    return bcrypt.hashSync(password, 10);
  }

  /**
   * Compares a plain text password with a hashed password.
   * @param password - The plain text password to compare.
   * @param hash - The hashed password to compare against.
   * @returns True if the passwords match; otherwise, false.
   */
  comparePassword(password, hash) {
    return bcrypt.compareSync(password, hash);
  }

  // Generate 6 digit OTP
  generateOtp() {
    return randomInt(100000, 1000000);
  }
}

export default new CommonServices();
