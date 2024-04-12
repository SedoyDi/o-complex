import axios from 'axios';

export const getProducts = async (page, pageSize) => {
    const response = await axios.get(
        `http://o-complex.com:1337/products?page=${page}&page_size=${pageSize}`
    );
    return response.data.products;
};

export const getReviews = async () => {
    const response = await axios.get(
        `http://o-complex.com:1337/reviews`
    );
    return response.data;
};