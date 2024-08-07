import { BehaviorSubject, Observable } from "rxjs";

export type User = {
    name: string;
    email: string;
    password: string;
};
export class NetworkError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NetworkError";
    }
}
export class UserNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "UserNotFoundError";
    }
}

class AuthService {
    private currentUserSubject = new BehaviorSubject<User | null>(null);

    public currentUser$: Observable<User | null> =
        this.currentUserSubject.asObservable();

    async login(name: string, password: string): Promise<void> {
        try {
            const response = await fetch("/server/db.json");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data: User[] = await response.json();
            const user = data.find(
                (user: User) => user.name === name && user.password === password
            );

            if (!user) {
                throw new Error("User not found");
            }

            this.currentUserSubject.next(user);
        } catch (error: unknown) {
            throw new Error(`Login failed: ${(error as Error).message}`);
        }
    }

    logout(): void {
        this.currentUserSubject.next(null);
    }
}

export const authService = new AuthService();
