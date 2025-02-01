import { Flower } from "../../domain/entities/Flower";
import { IFlowerRepository } from "../../domain/repositories/IFlowerRepository";

export class DulcesPetalosApiClient implements IFlowerRepository {
    private apiUrl = process.env.REACT_APP_API_URL;

    async getAllFlowers(): Promise<Flower[]> {
        const response = await this.getOrThrow(this.apiUrl + "Product");
        const data: Flower[] = await response.json();//Make DTO and mapper if necessary
        return data;
    }

    async getFlowerById(id: string): Promise<Flower> {
        const response = await this.getOrThrow(this.apiUrl + `Product/${id}`);
        const data: Flower = await response.json();//Make DTO and mapper if necessary
        return data;
    }

    private async getOrThrow(url: string) {
        const response = await fetch(url);
        if (!response.ok) {
            console.log(JSON.stringify(response));
            throw new Error('dulces-petalos api not working');
        }
        return response;
    }
}