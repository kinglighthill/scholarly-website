import { NextApiRequest, NextApiResponse } from 'next';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import app from '../../config/conn';

async function getDownloadUrl(fileName: string) {
    const storage = getStorage(app)
    const fileRef = ref(storage, `apps/${fileName}`)
    const downloadURL = await getDownloadURL(fileRef)
    return downloadURL
}

function getAbsoluteFileName(fileName: string, platform: string): string {
    switch (platform) {
        case "ios":
            return `${fileName}.ipa`
        case "windows":
            return `${fileName}.msi`
        default:
            return `${fileName}.apk`
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const fileName = req.query.fileName as string
    const platform = req.query.platform as string || "android"

    try {
        const absoluteFileName = getAbsoluteFileName(fileName, platform)
        const downloadUrl = await getDownloadUrl(absoluteFileName);
        res.redirect(downloadUrl);
    } catch (error) {
        console.error('Error fetching download URL:', error);
        res.redirect('/404')
    }
}