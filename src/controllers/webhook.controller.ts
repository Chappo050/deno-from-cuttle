export const healthCheck = async (ctx: any) => {
const body = await ctx.request.body();
const data = body.value;
    console.log(body,data)
};
