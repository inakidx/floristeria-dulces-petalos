export class Flower {
    public fertilizerType: FertilizerType;
    public status: StatusType;
    constructor(public id: string,
        public name: string,
        public price: number,
        public imgUrl: string,
        public wateringsPerWeek: number,
        public heightInCm: number,
        public binomialName: string,
        fertilizerType: string,
        status: string) {
        this.fertilizerType = fertilizerType as FertilizerType;
        this.status = status as StatusType;
    }
}
export enum FertilizerType { nitrogenado = "nitrogen", fosforado = "phosphorus" }
export enum StatusType { default = "default", commingSoon = "comming_soon", outOfStock = "out_of_stock", new = "new" }
