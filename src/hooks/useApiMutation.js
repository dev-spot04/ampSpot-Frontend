import { useMutation } from 'react-query';

const useApiMutation = (apiFunction) => {
    const mutation = useMutation(async ({ values, query = '' }) => {
        const response = await apiFunction(values, query);
        return response.data;
    });

    return {
        mutate: (values, query = '') => mutation.mutate({ values, query }),
        isLoading: mutation.isLoading,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        error: mutation.error,
        data: mutation.data,
    };
};

export default useApiMutation;
