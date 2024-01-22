import connection from '@netlify/planetscale';

export const handler = async () => {
    const data  = await connection.execute(`SELECT * FROM resultsToyota`);
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}