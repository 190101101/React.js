import React, { useState } from "react";

const useHttp = (requestOptions, manageData) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendHttoRequest = async () => {
        setIsLoading(true);
        setError(null);
        try {
        const response = await fetch(
            requestOptions.endpoint, {
                method: requestOptions.method,
                headers: requestOptions.headers,
                body: JSON.stringify(requestOptions.body),
            }
        );

        if (!response.ok) {
            throw new Error("Ошибка запроса.");
        }

        manageData(data);

        } catch (err) {
        setError(err.message || "Что-то пошло не так...");
        }
        setIsLoading(false);
    };

    return {
        isLoading,
        error,
        sendHttoRequest
    }
};

export default useHttp;