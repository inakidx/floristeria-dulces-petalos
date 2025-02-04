import { IFlowerRepository } from "../domain/repositories/IFlowerRepository";
import { DulcesPetalosApiClient } from "../infrastructure/api/DulcesPetalosApiClient";
import { FlowerServices } from "../services/FlowerServices";

const flowerRepository: IFlowerRepository = new DulcesPetalosApiClient();
export const flowerService: FlowerServices = new FlowerServices(flowerRepository);