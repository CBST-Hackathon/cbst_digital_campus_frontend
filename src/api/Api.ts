import Axios, { AxiosInstance, AxiosResponse, AxiosProgressEvent } from "axios";
import config from '../constants/config';
import LocalStorage from "@/utils/LocalStorage";

const apiUrl = config.environment === 'production' ? config.production.api_url : config.development.api_url;

const instance: AxiosInstance = Axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

const token = LocalStorage.getAccessToken();
instance.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';

instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            LocalStorage.logout();
        }
        return Promise.reject(error);
    }
);

const createFormData = (body: Record<string, unknown>): FormData => {
    const data = new FormData();
    Object.keys(body).forEach((key) => {
        const value = body[key];
        if (value instanceof File) {
            data.append(key, value, value.name);
        } else {
            data.append(key, String(value));
        }
    });
    return data;
};

const doAPI = {
    getData: (URL: string, parameters: Record<string, unknown> = {}): Promise<AxiosResponse> =>
        instance({
            method: 'GET',
            url: URL,
            params: parameters,
        }),

    postData: (URL: string, parameters: Record<string, unknown> = {}): Promise<AxiosResponse> =>
        instance({
            method: 'POST',
            url: URL,
            data: parameters,
        }),

    postWithImage: async (
        url: string,
        body: Record<string, unknown>,
        callback?: (progressEvent: AxiosProgressEvent) => void
    ): Promise<AxiosResponse> => {
        const token = LocalStorage.getAccessToken();
        const formData = createFormData(body);

        return Axios.post(apiUrl + url, formData, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                Authorization: token ? `Bearer ${token}` : '',
            },
            onUploadProgress: callback,
        });
    },

    postWithImageWithForm: async (
        url: string,
        formData: FormData,
        callback?: (progressEvent: AxiosProgressEvent) => void
    ): Promise<AxiosResponse> => {
        const token = LocalStorage.getAccessToken();

        return Axios.post(apiUrl + url, formData, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                Authorization: token ? `Bearer ${token}` : '',
            },
            onUploadProgress: callback,
        });
    },

    putData: (URL: string, parameters: Record<string, unknown> = {}): Promise<AxiosResponse> =>
        instance({
            method: 'PUT',
            url: URL,
            data: parameters,
        }),

    patchData: (URL: string, parameters: Record<string, unknown> = {}): Promise<AxiosResponse> =>
        instance({
            method: 'PATCH',
            url: URL,
            data: parameters,
        }),

    deleteData: (URL: string, parameters: Record<string, unknown> = {}): Promise<AxiosResponse> =>
        instance({
            method: 'DELETE',
            url: URL,
            data: parameters,
        }),
};

export default doAPI;
