import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';


// Create Axios instance with base URL
const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000', // Replace with your base URL
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();


    useEffect(() => {
        // Add authorization header to each request
        axiosSecure.interceptors.request.use((config) => {
            const accessToken = localStorage.getItem('access-token');
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            return config;
        });

        // Handle response errors
        axiosSecure.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response) {
                    const { status } = error.response;
                    if (status === 401 || status === 403) {
                        // Log out user and navigate to login page
                        logOut()
                            .then(() => {
                                navigate('/login');
                            })
                            .catch(() => {
                                // Handle logout error if needed
                            });
                    }
                }
                return Promise.reject(error);
            }
        );

        return axiosSecure;
    }, [logOut, navigate]);

    return [axiosSecure];
};

export default useAxiosSecure;