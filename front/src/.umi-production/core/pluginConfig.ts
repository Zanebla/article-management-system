// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import { zod as z } from "C:/Users/zz153/Desktop/FilmArticleManage/front/node_modules/@umijs/utils";
import { IConfigFromPluginsJoi } from "./pluginConfigJoi.d";

const IConfig = z.object({});

type IConfigTypes = z.infer<typeof IConfig>;

export type IConfigFromPlugins = IConfigFromPluginsJoi & Partial<IConfigTypes>;