export function CalculateLateFee(daysLate : number) : number{
    return daysLate * 0.25;
}

export function MaxBooksAllowed(age : number) : number{
    if (age < 12) {
        return 3;
    }
    else{
        return 10;
    }
}

export function Purge<T>(items : Array<T>) : Array<T>{
    return items.splice(2, items.length);
}