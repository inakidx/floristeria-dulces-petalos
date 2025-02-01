export class Flower {
    public fertilizerType: FertilizerType;
    constructor(public id: string,
        public name: string,
        public price: number,
        public imgUrl: string,
        public wateringsPerWeek: number,
        public heightInCm: number,
        public binomialName: string,
        fertilizerType: string) {
        this.fertilizerType = fertilizerType as FertilizerType;
    }

}
export enum FertilizerType { nitrogenado = "nitrogen", fosforado = "phosphorus" }
