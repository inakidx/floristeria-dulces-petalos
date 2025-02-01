import { Flower } from "../entities/Flower";

export interface IFlowerRepository {
    getAllFlowers(): Promise<Flower[]>;
    getFlowerById(id: string): Promise<Flower>;
}