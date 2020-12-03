function getTotal(values:number[]):number{
    return values.reduce((accumulator, currentValue) => 
        accumulator + currentValue)
}