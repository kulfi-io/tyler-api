export enum ENV {
    DEV = "development",
    PROD = "production"
}

export enum CONN {
    FAILURE = "Connection failure",
    CONNECTED = "Connected to db",
    ERROR = "Connection error",
    DISCONNECTED = "Connection disconnected",
    RECONNECTED = "Connection reconnected",
    CLOSED = "Connection closed",
}

export enum USER {
    PASSWORD_MISMATCH = "Password does not match criteria",
    TOKEN_GENERATION_ERROR = "Unable to generate validation token",
    INVALID_TYPE = "Invalid user type",
    INVALID_IDENTIFIER = "Invalid user identifier",
    MISSING_UPDATABLE_ITEMS = "Missing updatable items",
    MISSING_REQUIRED_ITEMS = "Missing required items",
    DEACTIVATED = "User deactivated",
    DELETED = "User deleted",
    INVALID_SEARCH_CRITERIA = "Invalid search criteria",
    NAME_PASSWORD_MISMATCH = "Either username or password is incorrect",
    TOKEN_VALIDATION_NEEDED = "Please validate your registration",
    NAME_PASSWORD_TOKEN_MISMATCH = "Either username password or token is incorrect",
    VALIDATED_TOKEN = "Thank you for validating the token",
    INVALID_USER = "Invalid user",
    INVALID_USER_OR_EMAIL_OR_TOKEN = "Invalid username or email or token",
    USER_UPDATE_FAILURE = "Unable to update user information",
    USER_UPDATED = "User information updated",
    INVALID_USER_OR_TOKEN = "Invalid user or token",
}

export enum USERTYPE {
    INVALID_IDENTIFIER = "Invalid user type identifier",
    MISSING_UPDATABLE_ITEMS = "Missing updatable items",
    MISSING_REQUIRED_ITEMS = "Missing required items",
    DEACTIVATED = "User type deactivated",
    DELETED = "User type deleted",
    DESCRIPTION_IS_MISSING_OR_NULL = "Description is missing or null",
}

export enum EVENT {
    INVALID_IDENTIFIER = "Invalid event identifier",
    MISSING_REQUIRED_ITEMS = "Missing required items",
    DELETED = "Event deleted",
}

export enum VALIDCLIENT {
    INVALID_IDENTIFIER = "Invalid client identifier",
    MISSING_UPDATABLE_ITEMS = "Missing updatable items",
    MISSING_REQUIRED_ITEMS = "Missing required items",
    DEACTIVATED = "Client deactivated",
    DELETED = "Client deleted",
}

export enum MEETINGNOTE {
    INVALID_IDENTIFIER = "Invalid client identifier",
    MISSING_UPDATABLE_ITEMS = "Missing updatable items",
    MISSING_REQUIRED_ITEMS = "Missing required items",
    TITLE_IS_MISSING_OR_NULL = "Title is missing or null",
    NOTE_IS_MISSING_OR_NULL = "Note is missing or null",
    CREATED = "Meeting note created",
}


