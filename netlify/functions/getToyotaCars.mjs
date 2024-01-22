import connection from '@netlify/planetscale';

export const handler = async () => {
    const data  = await connection.execute(`SELECT * FROM resultsToyota`);
    return {
        body: JSON.stringify(data),
        statusCode: 200,
    }
}