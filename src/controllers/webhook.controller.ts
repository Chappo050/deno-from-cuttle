export const healthCheck = async (ctx: any) => {
    try {
        const body = await ctx.request.body();
        const data = body.value;

        // Log the incoming request data
        console.log("Received webhook data: ", data);

        // Send a response back to the caller
        ctx.response.status = 200;
        ctx.response.body = {
            success: true,
            data: "Webhook received successfully"
        };

    } catch (error) {
        // Log and handle the error
        console.error("Error handling webhook: ", error);
        
        ctx.response.status = 500;
        ctx.response.body = {
            success: false,
            message: "Internal Server Error"
        };
    }
};
