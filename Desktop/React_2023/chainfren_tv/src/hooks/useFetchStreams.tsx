import { useEffect, useState } from "react";
export interface Stream {
  id: string;
  name: string;
  playbackId: string;
  streamKey: string;
}
export const useFetchStreams = (fetchFunction: () => Promise<any>) => {
  const [streams, setStreams] = useState<Stream[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStreams = async () => {
      setLoading(true);
      try {
        const result = await fetchFunction();
        if (result.success) {
          setStreams(result.data);
        } else {
          throw new Error(result.error);
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchStreams();
  }, [fetchFunction]);

  return { streams, loading, error };
};
