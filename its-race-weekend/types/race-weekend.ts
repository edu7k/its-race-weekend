import type {Session} from "./session"

export type RaceWeekendStatus = | "upcoming" | "in progress" | "finished";


export type RaceWeekend = {
    name: string;
    country: string;
    circuit: string;
    round: number;
    startDate: string | null;
    endDate: string | null;
    status: RaceWeekendStatus;
    sessions: Session[];
}; 
