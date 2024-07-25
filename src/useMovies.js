import { useState, useEffect } from "react";

const KEY = "a7f8ca7c";
export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      //   callback?.();
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok) throw new Error("something went wrong ");

          const data = await res.json();

          if (data.Response === "False") throw new Error("movie not found");

          setMovies(data.Search);
        } catch (err) {
          console.log(err.message);
          if (err.name !== "AbortError") setError(err.message);
          setError("");
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 1) {
        setMovies([]);
        setError("");
        return;
      }
      //   handleCloseMovie(); //ye ager tab ki search kiye ho and usko display kiye and turant dusra search toh jo khula h vo band hojaye
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
}
