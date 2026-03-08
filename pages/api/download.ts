import { NextApiRequest, NextApiResponse } from "next";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import app from "../../config/conn";

import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3, S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.SPACES_ACCESS_KEY,
  secretAccessKey: process.env.SPACES_SECRET_KEY,
  region: "us-east-1",
});

const s3 = new AWS.S3({
  endpoint: "https://scholarly-website-assets.fra1.cdn.digitaloceanspaces.com",
});

async function getDownloadUrl(fileName: string, isPartnersApp: boolean) {
  const url = isPartnersApp ? fileName : `apps/${fileName}`;

  const params = {
    Bucket: "scholarly-website-assets",
    Key: url,
    Expires: 3600,
  };

  const signedUrl = s3.getSignedUrl("getObject", params);
  return signedUrl.replace(
    "scholarly-website-assets.scholarly-website-assets.fra1.cdn.digitaloceanspaces.com",
    "scholarly-website-assets.fra1.cdn.digitaloceanspaces.com",
  );
}

// async function getDownloadUrl(fileName: string, isPartnersApp: boolean) {
//     const storage = getStorage(app)
//     const url = isPartnersApp ? fileName : `apps/${fileName}`
//     const fileRef = ref(storage, url)
//     const downloadURL = await getDownloadURL(fileRef)
//     return downloadURL
// }

function transformPutmeName(fileName: string): string {
  const parts = fileName.split("-");

  if (parts[0] !== "putme" || parts.length < 2) {
    throw new Error(`Invalid fileName format: ${fileName}`);
  }

  const uni = parts[1].toUpperCase();

  return `Scholarly ${uni} Post Jamb CBT`;
}

const windowsFileName = (fileName: string): string => {
  switch (fileName) {
    case "jamb-utme":
      return "Scholarly JAMB CBT";
    case "waec-ssce":
      return "Scholarly WAEC CBT";
    default:
      return transformPutmeName(fileName);
  }
};

function getAbsoluteFileName(fileName: string, platform: string): string {
  switch (platform) {
    case "ios":
      return `${fileName}.ipa`;
    case "windows":
      return `windows/${windowsFileName(fileName)}.msi`;
    default:
      return `android/${fileName}.apk`;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const fileName = req.query.fileName as string;
  const platform = (req.query.platform as string) || "android";
  const isPartnersApp =
    ((req.query.is_partners_app as string) || "false") === "true";

  try {
    const absoluteFileName = getAbsoluteFileName(fileName, platform);
    const downloadUrl = await getDownloadUrl(absoluteFileName, isPartnersApp);
    res.redirect(downloadUrl);
  } catch (error) {
    console.error("Error fetching download URL:", error);
    res.redirect("/404");
  }
}
