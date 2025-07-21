import z from 'zod'

export const bpSchema = z.object({
  sis: z.number().positive('Este valor debe ser positivo'),
  dia: z.number().positive('Este valor debe ser positivo'),
  pul: z.number().positive('Este valor debe ser positivo'),
  pam: z.number().positive('Este valor debe ser positivo'),
})

export type BPFormSchema = z.infer<typeof bpSchema>
