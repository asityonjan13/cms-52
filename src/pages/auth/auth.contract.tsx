import * as z from "zod"

export const loginDTO = z.object({
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    password: z.string().min(8, "Password must be at least 8 characters")
              .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain uppercase, lowercase, and number"),
})

export const RegisterDTO = z.object({
    fname: z.string().trim().min(1, "Full name is required").max(50, "Name must be less than 50 characters")
         .regex(/^[a-zA-Z'-]+\s+[a-zA-Z\s'-]+$/, "Please enter your full name (first and last name)"),
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    bday: z.string().min(1, "Birth date is required"),
    password: z.string().min(8, "Password must be at least 8 characters")
              .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain uppercase, lowercase, and number"),
    confirmpassword: z.string().min(1, "Please confirm your password"),
    ourterms: z.boolean().refine((val) => val === true, {message: "You must agree to the Terms and Conditions"})
}).refine((data) => data.password === data.confirmpassword, {
    message: "Passwords don't match",
    path: ["confirmpassword"]
})

export interface Icredentials {
    email: string
    password: string
}

export interface IRegisterUserData{
    fname: string,
    email: string,
    password: string,
    confirmpassword:string,
    phone: string,
    bday: string,
    ourterms: boolean
}