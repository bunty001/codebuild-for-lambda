exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!...This is NodeJS Lambda File Updated by CodePipeline'),
    };
    return response;
};
