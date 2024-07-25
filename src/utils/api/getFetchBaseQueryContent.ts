export default (baseUrl: string) => {
    return {
        baseUrl,
        // paramsSerializer: ParamsSerializer,
        prepareHeaders: (headers: any) => {
            headers.set("Content-type", "application/json");
            // headers.set("authorizationtoken", process.env.AUTHORIZATION_TOKEN);

            return headers
        }
    }
}