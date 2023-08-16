// controllers/userController.ts

export const healthCheck = ({ response }: { response: any }) => {
    response.body = {
        success: true,
        data: [
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Doe' },
        ],
    };
};