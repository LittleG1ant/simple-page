import { defineStackbitConfig } from "@stackbit/types";

export default defineStackbitConfig({
    stackbitVersion: "~0.6.0",
    ssgName: "vite",
    nodeVersion: "18",
    contentSources: [
        {
            type: "file",
            name: "GitContent",
            path: "./src/content"
        }
    ]
});