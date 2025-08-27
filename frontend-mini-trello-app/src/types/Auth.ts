export interface AuthRequest {
    email : string | number
    verificationCode: string
}

export interface AuthCheckEmailRequest {
    email : string | number
}

export interface AuthCheckEmailResponse {
    exist : boolean
}

export interface AuthResponse {
    id : string
    email: string
}

export interface AuthLoginResponse {
    accessToken: string
}

export interface AuthSendEmail {
    email: string
}