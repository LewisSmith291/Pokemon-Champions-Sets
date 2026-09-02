import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PokemonSetDisplay from "../molecules/PokemonSetDisplay";
import NotFound from "@/components/not-found/NotFound";
import Loading from "@/components/shared/Loading";
import { useSession } from "@/services/authClient";
import { getSet, SetNotFound, type SetDetail } from "@/services/sets";

export default function SetPage() {
  const { id } = useParams<{ id: string }>();
  const { data: session } = useSession();

  const [set, setSet] = useState<SetDetail | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // Separated from a generic error: the API answers 404 both for a set that
  // doesn't exist and for a private one the viewer can't see, so this is the
  // normal outcome of following an old link rather than a fault.
  const [isMissing, setIsMissing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id === undefined) return;
    const controller = new AbortController();

    setIsLoading(true);
    setIsMissing(false);
    setError(null);

    getSet(id, controller.signal)
      .then((row) => {
        setSet(row);
        setIsLoading(false);
      })
      .catch((problem) => {
        if (controller.signal.aborted) return;
        if (problem instanceof SetNotFound) setIsMissing(true);
        else setError(problem instanceof Error ? problem.message : "Could not load set");
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [id]);

  if (isLoading) return <Loading />;
  if (isMissing) return <NotFound />;
  if (error !== null || set === null) {
    return <p className="p-8">{error ?? "Could not load set"}</p>;
  }

  return (
    <div className="flex flex-1 justify-center p-2 sm:p-4 w-full">
      <PokemonSetDisplay set={set} viewerId={session?.user.id} />
    </div>
  );
}
