import { FlowerDTO } from "../../domain/dtos/FlowerDTO";
import { Flower } from "../../domain/entities/Flower";
import { IFlowerRepository } from "../../domain/repositories/IFlowerRepository";

export class DulcesPetalosApiClient implements IFlowerRepository {
    private apiUrl = process.env.REACT_APP_API_URL;

    async getAllFlowers(): Promise<Flower[]> {
        const response = await this.getOrThrow(this.apiUrl + "Product");
        const data: FlowerDTO[] = await response.json();
        return data.map(flower => this.FlowerDTO_to_Flower(flower));
    }

    private FlowerDTO_to_Flower(floweDTO: FlowerDTO): Flower {
        return new Flower(floweDTO.id, floweDTO.name, floweDTO.price, floweDTO.image_url,
            floweDTO.week_waterings, floweDTO.height_cm, floweDTO.binomial_name, floweDTO.fertilizer_type,
            floweDTO.status
        );
    }

    async getFlowerById(id: string): Promise<Flower> {
        const response = await this.getOrThrow(this.apiUrl + `Product/${id}`);
        const data: FlowerDTO = await response.json();
        return this.FlowerDTO_to_Flower(data);
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