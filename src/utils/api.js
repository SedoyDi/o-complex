import axios from 'axios';

export const getProducts = async (page, pageSize) => {
    try {
        const response = await axios.get(
            `http://o-complex.com:1337/products?page=${page}&page_size=${pageSize}`
        );
        return response.data.products;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getReviews = async () => {
    try {
        const response = await axios.get(
            'http://o-complex.com:1337/reviews'
        );
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const createOrder = async (reviewData) => {
    try {
        const response = await axios.post(
            'http://o-complex.com:1337/order',
            reviewData
        );
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};