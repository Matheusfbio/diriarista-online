import axios from 'axios'
import type { DiaristData } from './fetchDiarist'

export default async function postDiarist(
  diaristData: { [key: string]: unknown },
  file: File,
): Promise<DiaristData> {
  const BASE_URL = import.meta.env.VITE_STRAPI_BASE_URL

  try {
    const uploadData = new FormData()
    uploadData.append('files', file)

    const uploadResponse = await axios.post(
      `${BASE_URL}/api/upload/`,
      uploadData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )

    if (!uploadResponse.data || !uploadResponse.data[0]?.id) {
      throw new Error('Erro ao fazer upload da imagem.')
    }

    const uploadedFileId = uploadResponse.data[0].id

    diaristData.perfil = [uploadedFileId]

    console.log('DiaristData antes do envio:', diaristData)

    const response = await axios.post(
      `${BASE_URL}/api/diaristas?populate=perfil`,
      { data: diaristData },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    if (!response.data || !response.data.data) {
      throw new Error('Resposta inesperada do servidor.')
    }

    return response.data.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro detalhado:', error.response?.data)
      throw new Error(
        error.response?.data?.error || 'Erro ao cadastrar o diarista',
      )
    }
    console.error('Erro ao cadastrar:', error)
    throw new Error('Erro ao cadastrar o diarista')
  }
}
