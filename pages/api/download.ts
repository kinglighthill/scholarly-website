import { NextApiRequest, NextApiResponse } from 'next';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import app from '../../config/conn';

async function getDownloadUrl(fileName: string) {
    const storage = getStorage(app)
    const fileRef = ref(storage, `apps/${fileName}`)
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

    console.log("Filename: ", fileName)
    console.log("Platform: ", platform)

    try {
        const absoluteFileName = getAbsoluteFileName(fileName, platform)
        console.log("Absolute Filename: ", absoluteFileName)
        const downloadUrl = await getDownloadUrl(absoluteFileName)
        console.log("Download Url: ", downloadUrl)
        res.redirect(downloadUrl);
    } catch (error) {
        console.error('Error fetching download URL:', error)
        res.redirect('/404')
    }
}