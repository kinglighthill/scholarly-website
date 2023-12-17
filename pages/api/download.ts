import { NextApiRequest, NextApiResponse } from 'next';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import app from '../../config/conn';

async function getDownloadUrl(fileName: string, isPartnersApp: boolean) {
    const storage = getStorage(app)
    const url = isPartnersApp ? fileName : `apps/${fileName}`
    const fileRef = ref(storage, url)
    const downloadURL = await getDownloadURL(fileRef)
    return downloadURL
}

const windowsFileName = (fileName: string): string => {
    switch (fileName) {
        case "jamb-utme":
            return "Scholarly Jamb CBT"
        default:
            return fileName
    }
}

function getAbsoluteFileName(fileName: string, platform: string): string {
    switch (platform) {
        case "ios":
            return `${fileName}.ipa`
        case "windows":
            return `windows/${windowsFileName(fileName)}.msi`
        default:
            return `${fileName}.apk`
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const fileName = req.query.fileName as string
    const platform = req.query.platform as string || "android"
    const isPartnersApp = (req.query.is_partners_app as string || 'false') === 'true'

    try {
        const absoluteFileName = getAbsoluteFileName(fileName, platform)
        const downloadUrl = await getDownloadUrl(absoluteFileName, isPartnersApp)
        res.redirect(downloadUrl);
    } catch (error) {
        console.error('Error fetching download URL:', error)
        res.redirect('/404')
    }
}