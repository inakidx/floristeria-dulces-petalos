import { IFlowerRepository } from "../../domain/repositories/IFlowerRepository";
import { DulcesPetalosApiClient } from "../../infrastructure/api/DulcesPetalosApiClient";

export const flowerRepository: IFlowerRepository = new DulcesPetalosApiClient();