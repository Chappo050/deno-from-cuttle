export const healthCheck = async (ctx: any) => {
    try {
        const body = await ctx.request.body();
        const data = await body.value;

        console.log(body, data);

        // Set the response status to 200 OK
        ctx.response.status = 200;
  const vercelDeployHookUrl = 'https://api.vercel.com/v1/integrations/deploy/prj_g1abhlgclHtqsdDfHpK6Ak8creLj/1tVGkCJYIh';
        const response = await fetch(vercelDeployHookUrl, {
            method: 'POST',
        });

        if (response.ok) {
            console.log('Successfully triggered build on Vercel');
        } else {
            console.log('Failed to trigger build on Vercel', response.statusText);
        }

        // Send a response body as JSON
        ctx.response.body = {
            success: true,
            message: 'Webhook received successfully',
            data: data, // this will send the received data back as part of the response
        };
        
    } catch (error) {
        // Log and handle the error
        console.error("Error handling webhook: ", error);
        
        // Set the response status to 500 Internal Server Error
        ctx.response.status = 500;
        
        // Send a response body as JSON with an error message
        ctx.response.body = {
            success: false,
            message: 'Internal Server Error'
        };
    }
};
