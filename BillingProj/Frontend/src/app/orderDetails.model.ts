export class orderDetails {
    constructor(
        public apiUrl: string,
        public consumerUrl: string,
        public dbExpUrl: string,
        public variableUrl: string,
        public bootstrapServers: string,
        public schemaRegistry: string,
        public deltaLakeUrl: string,
        public statsUrl: string,
        public clusterUrl: string,
    ) { }
}