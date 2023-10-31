import { NextApiRequest, NextApiResponse } from 'next';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import app from '../../config/conn';

async function getDownloadUrl(fileName: string) {
    const storage = getStorage(app)
    const fileRef = ref(storage, `apps/${fileName}`)
    const downloadURL = await getDownloadURL(fileRef)
    return downloadURL
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const fileName = req.query.fileName as string

    try {
        const downloadUrl = await getDownloadUrl(`${fileName}.apk`);
        res.redirect(downloadUrl);
    } catch (error) {
        console.error('Error fetching download URL:', error);
        res.redirect('/404')
    }
}