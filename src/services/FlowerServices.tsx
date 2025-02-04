import { Flower } from "../domain/entities/Flower";
import { IFlowerRepository } from "../domain/repositories/IFlowerRepository";

export class FlowerServices {
    constructor(private flowerRepository: IFlowerRepository) { }

    async getAllFlowers(): Promise<Flower[]> {
        return this.flowerRepository.getAllFlowers();
    }

    async getFlowerById(id: string): Promise<Flower> {
        return this.flowerRepository.getFlowerById(id);
    }
}