import { ApiService } from "./apiService";
import packageJson from "../../package.json";

export class VersionService {
  frontendVersion(): Promise<string> {
    return Promise.resolve(packageJson.version);
  }
  backendVersion(): Promise<string> {
    return new ApiService()
      .get("/api/v1/version")
      .then(res => res.data);
  }
}
