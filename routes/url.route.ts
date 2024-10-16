import { Router } from "express";
import { redirectToUrl } from "../controllers/url.controller";

const router = Router();

router.get("/:url", redirectToUrl);

export default router;
