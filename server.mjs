import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PORT = 8000;
const rootDir = fileURLToPath(new URL(".", import.meta.url));

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

function sendText(response, statusCode, message) {
  response.writeHead(statusCode, {
    "content-type": "text/plain; charset=utf-8",
    "cache-control": "no-store"
  });
  response.end(message);
}

function resolveRequestPath(requestUrl) {
  const parsedUrl = new URL(requestUrl, "http://localhost");
  const decodedPath = decodeURIComponent(parsedUrl.pathname);
  const normalizedPath = decodedPath === "/" ? "/index.html" : decodedPath;
  const filePath = path.normalize(path.join(rootDir, normalizedPath));

  if (!filePath.startsWith(rootDir)) {
    return null;
  }

  return filePath;
}

const server = http.createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    sendText(response, 405, "Method not allowed");
    return;
  }

  const resolvedPath = resolveRequestPath(request.url || "/");
  if (!resolvedPath) {
    sendText(response, 403, "Forbidden");
    return;
  }

  try {
    let filePath = resolvedPath;
    const fileStat = await stat(filePath);

    if (fileStat.isDirectory()) {
      filePath = path.join(filePath, "index.html");
    }

    const body = await readFile(filePath);
    const contentType = mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream";

    response.writeHead(200, {
      "content-type": contentType,
      "content-length": body.byteLength,
      "cache-control": "no-store"
    });

    if (request.method === "HEAD") {
      response.end();
      return;
    }

    response.end(body);
  } catch (error) {
    if (error && error.code === "ENOENT") {
      sendText(response, 404, "Not found");
      return;
    }

    sendText(response, 500, "Internal server error");
  }
});

server.listen(PORT, () => {
  console.log(`Last Day Events preview running at http://localhost:${PORT}/`);
});
