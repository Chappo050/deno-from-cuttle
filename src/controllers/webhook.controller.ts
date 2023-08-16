export const healthCheck = async (ctx: any) => {
const body = await request.body();
const data = body.value;
    console.log(body,data)
};
