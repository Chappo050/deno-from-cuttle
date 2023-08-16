// controllers/userController.ts

export const healthCheck = async ({ request, response }: { request: any, response: any }) => {
    try {
        const body = await request.body();
        const data = body.value;

        // Log the incoming request data
        console.log("Received webhook data: ", data);

        // Send a response back to the caller
        response.status = 200;
        response.body = {
            success: true,
            data: "Webhook received successfully"
        };

    } catch (error) {
        // Log and handle the error
        console.error("Error handling webhook: ", error);
        
        response.status = 500;
        response.body = {
            success: false,
            message: "Internal Server Error"
        };
    }
};
