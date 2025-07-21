import { useQuery } from "@tanstack/react-query"
import apis from "@/apis"

export const useBP = () => {
  return useQuery({
    queryKey: ["bp"],
    queryFn: async () => {
      const bps = await apis.bp.GetBPs()

      const sis = bps.map((bp) => Number(bp.sis))
      const dia = bps.map((bp) => Number(bp.dia))

      return { sis, dia }
    },
    staleTime: 1000 * 60 * 5
  })
}

export const usePAM = () => {
  return useQuery({
    queryKey: ["pam"],
    queryFn: async () => {
      const pams = await apis.bp.GetBPs()
      return pams.map((pam) => pam.pam)
    },
    staleTime: 1000 * 60 * 5
  })
}
