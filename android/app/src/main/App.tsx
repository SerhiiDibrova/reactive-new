package main

import React, { useEffect, useState } from 'react';
import { getTrendSearchs } from './ts/services/gifService';

const App = () => {
    const [trendingSearches, setTrendingSearches] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTrendingSearches = async () => {
            try {
                const searches = await getTrendSearchs();
                setTrendingSearches(searches);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchTrendingSearches();
    }, []);

    return (
        <div>
            {error ? <p>{error}</p> : <ul>{trendingSearches.map(search => <li key={search}>{search}</li>)}</ul>}
        </div>
    );
};

export default App;