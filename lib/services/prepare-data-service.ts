import { IOSPrepareData, AndroidPrepareData } from "../data/prepare-data";
import { injector } from "../common/yok";
import { IOptions } from "../declarations";

export class PrepareDataService implements IPrepareDataService {
	constructor(private $mobileHelper: Mobile.IMobileHelper) {}

	public getPrepareData(projectDir: string, platform: string, data: IOptions) {
		const platformLowerCase = platform.toLowerCase();

		if (this.$mobileHelper.isApplePlatform(platform)) {
			return new IOSPrepareData(projectDir, platformLowerCase, data);
		} else if (this.$mobileHelper.isAndroidPlatform(platform)) {
			return new AndroidPrepareData(projectDir, platformLowerCase, data);
		}
	}
}
injector.register("prepareDataService", PrepareDataService);
