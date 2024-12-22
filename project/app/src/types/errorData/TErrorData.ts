type ErrorData = { // TODO revisar esto
    error: "ValidationError" | "NotFoundError" | "DuplicityError" | "CredentialsError" | "SystemError" | "OwnershipError" | "AuthorizationError"
    message: string
}

export default ErrorData