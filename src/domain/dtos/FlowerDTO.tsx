export class FlowerDTO {
    constructor(public id: string,
        public name: string,
        public price: number,
        public image_url: string,
        public week_waterings: number,
        public height_cm: number,
        public binomial_name: string,
        public fertilizer_type: string,
        public status: string) {
    }
}