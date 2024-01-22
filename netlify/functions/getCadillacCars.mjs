import connection from '@netlify/planetscale';

export const handler = async () => {
    const data  = await connection.execute(`SELECT * FROM resultsCadillac`);
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}