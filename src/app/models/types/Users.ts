//supposedly the json server will handle ids if you don't send them,
//but this is means having 2 types? 
export type User = {
    id: string; //seems to need to be strings to get by id
    name: string;
    email: string;
    points: number;
    totalUnitsRecycled: number;
}

export type NewUser = {
    name: string;
    email: string;
    points: number;
    totalUnitsRecycled: number;
}