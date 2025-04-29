import { QueryInterface } from "sequelize";
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
import { getDirname, getBasename } from "../global/path.global.js";
import config from "../config/app.js";

const __dirname = getDirname(import.meta.url);
const basename = getBasename(import.meta.url);

const loadSeeders = async (pathName: string): Promise<{ file: string[]; seeder: any }[]> => {
    if (!fs.existsSync(pathName)) {
        return [];
    }
    const files = fs.readdirSync(pathName).filter((file) => {
        return !file.startsWith(".") && file !== basename && file.endsWith(".js") && file.indexOf(".test.js") === -1;
    });
    const seederImports = files.map((file) => import(pathToFileURL(path.join(pathName, file)).href));
    const seeders = await Promise.all(seederImports);
    return seeders.map((m, index) => {
        return { file: [files[index]], seeder: m.default };
    });
};

const collectSeeders = async () => {
    let seeders = await Promise.all([...(await loadSeeders(__dirname + config.paths.seeders.root))]);
    let appSeeders = await Promise.all(
        config.paths.seeders.apps.map((appPath: string) => loadSeeders(path.join(__dirname, appPath)))
    );
    appSeeders.forEach((appSeeder) => {
        seeders = seeders.concat(appSeeder);
    });
    seeders.sort((a, b) => {
        const aName = a.file[0];
        const bName = b.file[0];
        return aName.localeCompare(bName);
    });
    return seeders;
};

export default {
    up: async (queryInterface: QueryInterface) => {
        try {
            for (const collectSeeder of await collectSeeders()) {
                await collectSeeder.seeder.up(queryInterface);
            }
        } catch (error) {
            console.error(error);
        }
    },
    down: async (queryInterface: QueryInterface) => {
        try {
            for (const collectSeeder of await collectSeeders()) {
                await collectSeeder.seeder.down(queryInterface);
            }
        } catch (error) {
            console.error(error);
        }
    },
};
