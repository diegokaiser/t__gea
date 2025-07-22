import { useQuery } from "@tanstack/react-query"
import { format  }from "date-fns"
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

export const usePUL = () => {
  return useQuery({
    queryKey: ["pul"],
    queryFn: async () => {
      const puls = await apis.bp.GetBPs()
      return puls.map((pul) => pul.pul)
    },
    staleTime: 1000 * 60 * 5
  })
}

export const useBps = () => {
  return useQuery({
    queryKey: ["bp"],
    queryFn: async () => {
      const bps = await apis.bp.GetBPs();

      return bps.map((bp) => {
        const fecha = format(
          new Date(bp.createdAt.seconds * 1000),
          "dd/MM/yy"
        )

        const pamValue = Number(bp.pam)
        let pam: string;

        if (pamValue < 70) pam = "bajo";
        else if (pamValue > 100) pam = "alto";
        else pam = "medio"

        return {
          dia: bp.dia,
          sis: bp.sis,
          pul: bp.pul,
          fecha,
          pam
        }
      })
    },
    staleTime: 1000 * 60 * 5
  })
}
