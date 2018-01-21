// Pseudocode-aggregation of all the data we'll need to collect and store

const user = {
  username,
  email,
  encryptedPassword,
  passwordSalt,
  securityQuestions: {    // periodic question review
    cannedQuestions,      // minimal length for answers is 12 chars
    userCreatedQuestion,  // encrypt the answers
  }
  recoveryEmails,
  multiFactorAuthEnabled,
}

// for each user:

const passwordResetRequest = { // lockout after 5x in an hour
  user,
  salt,
  encryptedToken,         // a OTP
  sideChannel,            // ex: recovery email
  timestamps,
  expiredOn,
}

const multiFactorAuth = {
  totpChannel, // time-based one-time password
}

const application = {
  secret,
}

const userRecovery = {
  encryptedResetPasswordToken,
  resetPasswordTokenSalt,
  resetPasswordTokenSentAt
}

const session = {
  userId,
  userAgent,
  signInCount,
  currentSignInAt,
  lastSignInAt,
  currentSignInIp,
  lastSignInIp
}

const userConfirmation = {
  encryptedConfimationToken,
  confirmationTokenSalt,
  confirmedAt,
  confirmationSentAt,
}

const userLocking = {
  failedLoginAttempts,
  failedResetAttempts,
  encryptedUnlockToken,
  unlockTokenSalt,
  lockedAt,
}

const rememberUser = { // store on user table. we'll have one per all devices
  rememberMe,
}
