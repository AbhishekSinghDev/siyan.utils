import { Request, Response } from "express";
import db from "../prisma/db";
import { generateUniqueCode } from "../helpers/url.helper";

const shortUrl = async ({ url }: { url: string }) => {
  const regex = /^(http:\/\/|https:\/\/)/;

  let formatedUrl: string = url;
  if (!regex.test(url)) {
    formatedUrl = `http://${url}`;
  }

  const newUrl = await db.baseUrl.create({
    data: {
      url: formatedUrl,
    },
  });

  const id = generateUniqueCode();
  const newShortUrl = await db.shortUrl.create({
    data: {
      url: id,
      baseUrlId: newUrl.id,
    },
  });

  return newShortUrl.url;
};

const redirectToUrl = async (req: Request, res: Response) => {
  const url = req.params.url;

  const record = await db.shortUrl.findUnique({
    where: {
      url: url,
    },
    include: {
      baseUrl: true,
    },
  });

  if (!record) return;

  const shortUrl = record.baseUrl.url;

  res.redirect(shortUrl);
};

export { shortUrl, redirectToUrl };
